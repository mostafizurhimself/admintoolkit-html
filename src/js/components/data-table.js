import { DataTable, convertJSON } from "simple-datatables";

const dataTable = {
  init() {
    const tables = document.querySelectorAll('.table-datatable');
    const defaultOptions = {
      classes: {
        wrapper: 'datatable'
      },
      labels: {
        perPage: ''
      },
      columns: [
        {
          select: 0,
          sortable: false
        },

        {
          select: 6,
          sortable: false
        }
      ]
    }

    if(tables.length) {
      [...tables].forEach(table => {
        const basicDatatable = new DataTable(table, defaultOptions);
      });
    }
  },
}

export default dataTable;