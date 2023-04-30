import SimpleBar from 'simplebar';
import searchData from '@/json/search-data.json';
import recentSearchData from '@/json/recent-search-data.json';

export class SearchModal {
  constructor(trigger, target) {
    this.setTrigger(trigger);
    this.setTarget(target);
    this.setModal();
    this.setSearchInput();

    this.registerEvents();
    this.renderSearchContent(recentSearchData);
  }

  // Set the trigger element
  setTrigger(trigger) {
    if (typeof trigger === 'string') {
      this.trigger = document.querySelector(trigger);
    }

    if (trigger instanceof HTMLElement) {
      this.trigger = trigger;
    }

    if (!this.trigger) {
      throw new Error('No trigger element found');
    }
  }

  // Set the target element
  setTarget(target) {
    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    }

    if (target instanceof HTMLElement) {
      this.target = target;
    }

    if (!this.target) {
      throw new Error('No target element found');
    }
  }

  // Set the modal
  setModal() {
    this.modal = createModal(this.target);
  }

  // Set the search input
  setSearchInput() {
    const searchInput = this.target.querySelector('input[type="text"]');
    if (!searchInput) {
      throw new Error('No search input found');
    }
    this.searchInput = searchInput;
  }

  // Show the modal
  show() {
    this.modal.show();
  }

  // Hide the modal
  hide() {
    this.modal.hide();
  }

  // Register events
  registerEvents() {
    // Handle trigger click
    this.trigger.addEventListener('click', () => {
      this.searchInput.value = '';
      this.show();
      this.renderSearchContent(recentSearchData);
    });

    // Handle input change
    this.searchInput.addEventListener('input', (e) => this.handleInput(e.target.value));
  }

  // Handle input change
  handleInput(search) {
    if (search.length === 0) {
      this.renderSearchContent(recentSearchData);
      return;
    }

    const data = searchData
      .map((item) => {
        return {
          ...item,
          // Search the pages array for pages that start with the search string
          pages: item.pages.filter((page) => page.name.toLowerCase().startsWith(search.toLowerCase())),
        };
      })
      // Filter out items that have no pages
      .filter((item) => item.pages.length > 0);

    if (data.length === 0) {
      this.renderEmptyContent(search);
      return;
    }

    // Render search content
    this.renderSearchContent(data);
  }

  // Render the modal content
  renderSearchContent(data) {
    const modalBody = this.target.querySelector('.modal-body');
    const html = data.map((item) => this.renderSection(item)).join('');

    // Set the innerHTML of the modal body to the html
    modalBody.innerHTML = `
      <div class="space-y-4 -mt-[12px]">
        ${html}
      </div>
    `;

    new SimpleBar(modalBody);
  }

  // Render a single item
  renderSection(item) {
    return `
      <div class="">
        <h6>${item.title}</h6>
        <ul class="space-y-2 mt-2">
          ${item.pages.map((page) => this.renderItem(page)).join('')}
        </ul>
      </div>
    `;
  }

  // Render a single item
  renderItem(page) {
    return `
      <li class="">
        <a href="${page.url}" class="flex rounded-primary px-4 py-2 text-sm items-center gap-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 shadow-sm">
          <i class="${page.icon} text-slate-500 dark:text-slate-400 text-lg"></i>
          <span >${page.name}</span>
          <i class="ti ti-chevron-right text-slate-500 ml-auto"></i>
        </a>
      </li>
    `;
  }

  // Render empty state
  renderEmptyContent(search = '') {
    const modalBody = this.target.querySelector('.modal-body');
    modalBody.innerHTML = `
    <div class="h-20 flex items-center justify-center">
      <p class="text-slate-400">
        No results for <span class="text-slate-600 dark:text-slate-300">'${search}'</span>
      </p>
    </div>
    `;
  }
}

const searchModal = {
  init() {
    const triggers = document.querySelectorAll('[data-trigger="search-modal"]');
    const target = document.getElementById('search-modal');

    triggers.forEach((trigger) => {
      new SearchModal(trigger, target);
    });
  },
};

export default searchModal;
