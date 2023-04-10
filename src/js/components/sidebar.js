import SimpleBar from 'simplebar';

const sidebar = {
  wrapper: document.querySelector('.wrapper'),
  sidebar: document.querySelector('.sidebar'),
  sidebarToggle: document.querySelector('.sidebar-toggle'),
  content: document.querySelector('.sidebar-content'),
  menuItems: document.querySelectorAll('.sidebar-menu'),

  init() {
    this.initMenuItems();
    this.initSidebarToggle();
    this.initWrapper();
    this.initOverlay();
    this.handleWindowResize();
    this.initSidebarHover();
    this.initScrollBar();
  },

  initMenuItems() {
    if (this.menuItems.length) {
      this.menuItems.forEach((menuItem) => {
        const parent = menuItem.parentElement;
        const submenu = parent.querySelector('.sidebar-submenu');
        const arrow = menuItem.querySelector('.sidebar-menu-arrow');

        if (submenu) {
          menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleHeight(submenu, submenu.scrollHeight);
            arrow.classList.toggle('rotate');
          });
        }

        if (submenu && menuItem.classList.contains('active')) {
          this.toggleHeight(submenu, submenu.scrollHeight);
          arrow.classList.toggle('rotate');
        }
      });
    }
  },

  toggleHeight(element, height) {
    if (element.style.height === '0px' || element.style.height === '') {
      element.style.height = `${height}px`;
    } else {
      element.style.height = '0px';
    }
  },

  initSidebarToggle() {
    if (this.sidebarToggle) {
      this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
    }
  },

  toggleSidebar() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      this.sidebar.classList.toggle('expanded');
      document.querySelector('.sidebar-overlay').classList.toggle('active');
    } else {
      this.sidebar.classList.toggle('collapsed');
      this.wrapper.classList.toggle('expanded');
    }
  },

  initWrapper() {
    if (this.sidebar) {
      if (this.sidebar.classList.contains('collapsed')) {
        this.wrapper.classList.add('expanded');
      } else {
        this.wrapper.classList.remove('expanded');
      }
    }
  },

  initOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      this.sidebar.classList.remove('expanded');
      overlay.classList.remove('active');
    });
  },

  handleWindowResize() {
    if (this.sidebar) {
      window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
          this.sidebar.classList.remove('collapsed');
          this.wrapper.classList.remove('expanded');
        } else {
          this.sidebar.classList.remove('expanded');
        }
      });
    }
  },

  initSidebarHover() {
    if (this.sidebar) {
      this.sidebar.addEventListener('mouseenter', () => {
        if (window.innerWidth > 1024) {
          this.sidebar.classList.add('hovered');
        }
      });

      this.sidebar.addEventListener('mouseleave', () => {
        if (window.innerWidth > 1024) {
          this.sidebar.classList.remove('hovered');
        }
      });
    }
  },

  initScrollBar() {
    if (this.sidebar) {
      new SimpleBar(this.content);
      const activeMenu = this.content.querySelector('.sidebar-menu.active');
      const activeSubmenu = this.content.querySelector('.sidebar-submenu-item.active');
      window.addEventListener('load', () => {
        if (activeSubmenu) {
          activeSubmenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } else {
          activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      });
    }
  },
};

export default sidebar;
