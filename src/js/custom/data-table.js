import DataTable from '../components/data-table';
import tableData from '@/json/datatable.json';

async function loadTable(table) {
  const tbody = table.querySelector('tbody');

  if (tbody) {
    if (tableData.length) {
      tableData.forEach((record) => {
        tbody.innerHTML += `
          <tr>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar avatar-circle">
                  <img class="avatar-img" src="${record.avatar}" alt="${record.name}">
                </div>
                <div>
                  <p class="text-sm font-medium">${record.name}</p>
                  <span class="text-xs text-slate-400">${record.post}</span>
                </div>
              </div>
            </td>
            <td>${record.email}</td>
            <td>${record.phone}</td>
            <td>${record.joining_date}</td>
            <td>
              <div class="badge badge-soft-${
                { active: 'success', inactive: 'danger', reassigned: 'warning' }[record.status]
              } capitalize">
                ${record.status}
              </div>
            </td>
          </tr>
        `;
      });
    }
  }

  return table;
}

//Datatable Simple
const dataTableSimpleSourceCode = `
  <table id="datatable-simple" class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Post</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Joining Date</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script>
    import DataTable  from '../components/data-table';

    const dataTableSimple = document.querySelector('#datatable-simple');

    if(dataTableSimple) {
      loadTable(dataTableSimple)
      .then(table => new DataTable(table))
      .catch(error => console.log(error));
    }

    async function loadTable(table) {
      const tbody = table.querySelector('tbody');
    
      if(tbody) {
        const response  = await fetch('/json/table-datatable.json');
        const results   = await response.json(); 
        const records   = results.data; 
        
        if(records.length) { 
          records.forEach(record => {
            tbody.innerHTML += \`
                  <tr>
                    <td>
                      <div class="flex items-center gap-4">
                        <div class="avatar avatar-circle">
                          <img class="avatar-img" src="\${record.avatar}" alt="\${record.name}">
                        </div>
                        <div>
                          <p class="text-sm font-medium">\${record.name}</p>
                          <span class="text-xs text-slate-400">\${record.post}</span>
                        </div>
                      </div>
                    </td>
                    <td>\${record.email}</td>
                    <td>\${record.phone}</td>
                    <td>\${record.joining_date}</td>
                    <td>
                      <div class="badge badge-soft-\${{active: 'success', inactive: 'danger', reassigned: 'warning'}[record.status]} capitalize">
                        \${record.status}
                      </div>
                    </td>
                  </tr>
              \`;
          });
        }
      }

      return table;
    }
  </script>
`;
const dataTableSimpleCodeViewer = createCodeViewer('#datatable-simple-code-viewer', dataTableSimpleSourceCode);
const dataTableSimple = document.querySelector('#datatable-simple');
dataTableSimpleCodeViewer.render();

if (dataTableSimple) {
  loadTable(dataTableSimple)
    .then((table) => new DataTable(table))
    .catch((error) => console.log(error));
}

//Datatable Filter
const dataTableFilterSourceCode = `
  <table id="datatable-filter" class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Post</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Joining Date</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script>
    import DataTable  from '../components/data-table';

    const dataTableFilter = document.querySelector('#datatable-filter');

    if(dataTableFilter) {
      loadTable(dataTableFilter)
      .then(table => new DataTable(table, {
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
                      "data-columns": \`[\${index}]\`
                    }
                  }
                ]
              })
            )
          }
          tHead.childNodes.push(filterHeaders)
          return table
        }
      }))
      .catch(error => console.log(error));
    }

    async function loadTable(table) {
      const tbody = table.querySelector('tbody');
    
      if(tbody) {
        const response  = await fetch('/json/table-datatable.json');
        const results   = await response.json(); 
        const records   = results.data; 
        
        if(records.length) { 
          records.forEach(record => {
            tbody.innerHTML += \`
              <tr>
                <td>
                  <div class="flex items-center gap-4">
                    <div class="avatar avatar-circle">
                      <img class="avatar-img" src="\${record.avatar}" alt="\${record.name}">
                    </div>
                    <div>
                      <p class="text-sm font-medium">\${record.name}</p>
                      <span class="text-xs text-slate-400">\${record.post}</span>
                    </div>
                  </div>
                </td>
                <td>\${record.email}</td>
                <td>\${record.phone}</td>
                <td>\${record.joining_date}</td>
                <td>
                  <div class="badge badge-soft-\${{active: 'success', inactive: 'danger', reassigned: 'warning'}[record.status]} capitalize">
                    \${record.status}
                  </div>
                </td>
              </tr>
            \`;
          });
        }
      }
    
      return table;
    }

    
  </script>
`;
const dataTableFilterCodeViewer = createCodeViewer('#datatable-filter-code-viewer', dataTableFilterSourceCode);
const dataTableFilter = document.querySelector('#datatable-filter');
dataTableFilterCodeViewer.render();

if (dataTableFilter) {
  loadTable(dataTableFilter)
    .then(
      (table) =>
        new DataTable(table, {
          tableRender: (_data, table, type) => {
            if (type === 'print') {
              return table;
            }
            const tHead = table.childNodes[0];
            const filterHeaders = {
              nodeName: 'TR',
              childNodes: tHead.childNodes[0].childNodes.map((_th, index) => ({
                nodeName: 'TD',
                childNodes: [
                  {
                    nodeName: 'INPUT',
                    attributes: {
                      class: 'datatable-input input',
                      type: 'search',
                      'data-columns': `[${index}]`,
                    },
                  },
                ],
              })),
            };
            tHead.childNodes.push(filterHeaders);
            return table;
          },
        })
    )
    .catch((error) => console.log(error));
}
