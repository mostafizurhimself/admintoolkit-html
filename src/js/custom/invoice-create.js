const addTableRowBtn = document.querySelector('#invoice-add-table-row');
const removeTableRowBtns = document.querySelectorAll('.invoice-remove-table-row');
const tableBody = document.querySelector('#invoice-table-body');




const getAddTableRow = () => {
    const tableData = `
    <td>
    <select class="select" autocomplete="off">
        <option value="">Search Product</option>
        <option value="1">Antiuqe Camera</option>
        <option value="2">Stylish Sunglass</option>
        <option value="3">Apple Watch 2023</option>
    </select>
    </td>
    <td>
    <input type="text" placeholder="0.00" class="input w-20">
    <td>
    <input type="text" placeholder="1" class="input w-20">
    </td>
    <td>
    <div class="flex justify-end gap-1 items-center">
        <p class="text-right text-xs font-semibold text-slate-700 dark:text-slate-200 p-0 m-0">$24.00</p>
        <button class="invoice-remove-table-row cursor-pointer text-2xl px-2 rounded-full focus:bg-slate-400 focus:bg-opacity-50">×</button>
    </div>
    </td>`
    let tableRow = document.createElement('tr')
    tableRow.innerHTML = tableData;
    tableBody.appendChild(tableRow);
}

const getRemoveTableRow = (event) => {
    console.log(event);
}

addTableRowBtn.addEventListener('click', getAddTableRow)
removeTableRowBtns.forEach(removeBtn=>{
    removeBtn.addEventListener('click', (e)=> getRemoveTableRow(e))
})