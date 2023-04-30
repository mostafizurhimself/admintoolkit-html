class Tabs {
  constructor(target) {
    //Store all .tab-btn elemens
    this.tabBtns = target.querySelectorAll('.tabs-btn:not(.disabled)');

    // Store .tab-content element
    this.tabContent = target.querySelector('.tabs-content');

    // Store all .tab-panels.
    this.tabPanels = target.querySelectorAll('.tabs-panel');

    // Store the .tab-panel depending on .tab-btn. Default is null.
    this.tabPanel = null;

    // Store the current tab button. Default is null.
    this.tabBtn = null;

    this.tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        // Set the current tab button
        this.tabBtn = tabBtn;

        // Set the current tab panel
        this.tabPanel = this.tabContent.querySelector(this.tabBtn.dataset.panelId);

        // Step - 1: Update active class of tab buttons
        this.updateActiveClass(this.tabBtn, this.tabBtns);

        // Step - 2: Update active class of tab panels
        this.updateActiveClass(this.tabPanel, this.tabPanels);
      });
    });
  }

  updateActiveClass(element, elements) {
    // check if the element contains active class
    if (!element.classList.contains('active')) {
      // Remove the active class from active element
      elements.forEach((ele) => {
        if (ele.classList.contains('active')) {
          ele.classList.remove('active');
        }
      });

      // Add active class in current element
      element.classList.add('active');
    }
  }
}

const tabs = {
  init() {
    //Store tabs element
    const elements = document.querySelectorAll('.tabs');

    // Check if the page contains any tab component
    if (elements.length) {
      // Create instance for each tab
      [...elements].forEach((element) => new Tabs(element));
    }
  },
};

export default tabs;
