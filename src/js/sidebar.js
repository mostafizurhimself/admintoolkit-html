const sidebar = {
  sidebar: document.querySelector('.sidebar'),
  sidebarMenu: document.querySelector('.sidebar-menu'),

  init() {
    this.initMenuItems();
  },

  initMenuItems() {
    const menuItems = this.sidebarMenu.querySelectorAll('.sidebar-menu-item');

    menuItems.forEach((menuItem) => {
      const parent = menuItem.parentElement;
      const submenu = parent.querySelector('.sidebar-submenu');
      const arrow = menuItem.querySelector('.sidebar-menu-item--arrow');

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
  },

  toggleHeight(element, height) {
    if (element.style.height === '0px' || element.style.height === '') {
      element.style.height = `${height}px`;
    } else {
      element.style.height = '0px';
    }
  },
};

export default sidebar;
