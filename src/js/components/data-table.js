import { DataTable as SimpleDataTable } from 'simple-datatables';

class DataTable {
  constructor(target, options) {
    this.options = {
      labels: {
        perPage: '',
      },
      prevText: 'Previous',
      nextText: 'Next',
      template: (options, dom) => {
        return `
          <div class='${options.classes.top}'>
            ${
              !options.searchable
                ? ''
                : `<div class='${options.classes.search}'>
                  <label class="text-sm font-medium text-slate-500 dark:text-slate-400" for="">Search:</label>
                  <input class='${options.classes.input} input bg-white dark:bg-slate-800' placeholder='${
                    options.labels.placeholder
                  }' type='search' title='${options.labels.searchTitle}'${dom.id ? ` aria-controls="${dom.id}"` : ''}>
              </div>`
            }

            ${
              !(options.paging && options.perPageSelect)
                ? ''
                : `<div class='${options.classes.dropdown}'>
                <label class="text-sm font-medium text-slate-500 dark:text-slate-400" for="">Entries:</label>
                <select class='${options.classes.selector} select bg-white dark:bg-slate-800'></select>
            </div>`
            }
          </div>

          <div class='${options.classes.container}'${
          options.scrollY.length ? `style='height: ${options.scrollY}; overflow-Y: auto;'` : ''
        }></div>

          <div class='${options.classes.bottom}'>
            ${!options.paging ? '' : `<div class='${options.classes.info}'></div>`}
            <nav class='${options.classes.pagination}'></nav>
          </div>
        `;
      },
      ...options,
    };

    this.target = null;

    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    }

    if (target instanceof HTMLElement) {
      this.target = target;
    }

    if (!this.target) {
      throw new Error('No target element found');
    }

    return this.render();
  }

  render() {
    return new SimpleDataTable(this.target, this.options);
  }
}

export default DataTable;
