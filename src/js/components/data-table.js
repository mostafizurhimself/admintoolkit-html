import { DataTable } from "simple-datatables";

const dataTable = {
  init() {
    const datatableBasic        = document.querySelectorAll('.datatable-basic');
    const datatableColumnFilter = document.querySelectorAll('.datatable-column-filter');
    const defaultOptions = {
      classes: {
        wrapper: 'datatable'
      },
      labels: {
        perPage: ''
      },
      prevText: 'Previous',
      nextText: 'Next',
      template: (options, dom) => {
        return  `
          <div class='${options.classes.top}'>
            ${!options.searchable ? "" :
              `<div class='${options.classes.search}'>
                  <label class="text-sm font-medium text-slate-500 dark:text-slate-400" for="">Search:</label>
                  <input class='${options.classes.input} input bg-white dark:bg-slate-800' placeholder='${options.labels.placeholder}' type='search' title='${options.labels.searchTitle}'${dom.id ? ` aria-controls="${dom.id}"` : ""}>
              </div>`
            }

            ${!(options.paging && options.perPageSelect) ? "" :
            `<div class='${options.classes.dropdown}'>
                <label class="text-sm font-medium text-slate-500 dark:text-slate-400" for="">Entries:</label>
                <select class='${options.classes.selector} select bg-white dark:bg-slate-800'></select>
            </div>`
            }
          </div>

          <div class='${options.classes.container}'${options.scrollY.length ? `style='height: ${options.scrollY}; overflow-Y: auto;'` : ""}></div>

          <div class='${options.classes.bottom}'>
            ${!options.paging ? "" : `<div class='${options.classes.info}'></div>`}
            <nav class='${options.classes.pagination}'></nav>
          </div>
        `
      }
    }

    if(datatableBasic.length) {
      [...datatableBasic].forEach(table => {
        this.getData().then(({ data }) => new DataTable(table, {
          ...defaultOptions,
          data: {
            data: data.map(item => {
              const name         = this.renderNameColumn(item);
              const email        = item.email;
              const phone        = item.phone;
              const startingDate = this.renderStartingDateColumn(item);
              const status       = this.renderStatusColumn(item) ;
              
              return [name, email, phone, startingDate, status];
            })
          }
        }))
      });
    }

    if(datatableColumnFilter.length) {
      [...datatableColumnFilter].forEach(table => {
        this.getData().then(({ data }) => new DataTable(table, {
          ...defaultOptions,
          tableRender: (_data, table, type) => {
            if (type === "print") {
              return table
            }
            const tHead = table.childNodes[0]
            const filterHeaders = {
              nodeName: "TR",
              childNodes: tHead.childNodes[0].childNodes.map(
                (_th, index) => ({
                  nodeName: "TD",
                  childNodes: [
                    {
                      nodeName: "INPUT",
                      attributes: {
                        class: "datatable-input input",
                        type: "search",
                        "data-columns": `[${index}]`
                      }
                    }
                  ]
                })
              )
            }
            tHead.childNodes.push(filterHeaders)
            return table
          },
          data: {
            data: data.map(item => {
              const name         = this.renderNameColumn(item);
              const email        = item.email;
              const phone        = item.phone;
              const startingDate = this.renderStartingDateColumn(item);
              const status       = this.renderStatusColumn(item) ;
              
              return [name, email, phone, startingDate, status];
            })
          }
        }))
      });
    }
  },

  renderNameColumn(item) {
    return `
      <div class="flex items-center gap-4">
        <div class="avatar avatar-circle">
          <img class="avatar-img" src="${item.avatar}" alt="Avatar 3">
        </div>

        <div>
          <p class="text-sm font-medium">${item.name}</p>
          <span class="text-xs text-slate-400">${item.post}</span>
        </div>
      </div>
    `;
  },

  renderStatusColumn(item) {
    if(item.status === 'active') {
      return `
        <div class="badge badge-soft-success capitalize">
          ${item.status}
        </div>
      `;
    }

    if(item.status === 'inactive') {
      return `
        <div class="badge badge-soft-danger capitalize">
          ${item.status}
        </div>
      `;
    }

    if(item.status === 'reassigned') {
      return `
        <div class="badge badge-soft-warning capitalize">
          ${item.status}
        </div>
      `;
    }
  },
  
  renderStartingDateColumn(item) {
    return new Date(item.start_date).toISOString().split('T')[0];
  },

  async getData() {
    return (await fetch('/json/table-datatable.json')).json();
  }
}

export default dataTable;