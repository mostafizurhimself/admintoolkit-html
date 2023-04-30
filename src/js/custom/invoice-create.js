import feather from 'feather-icons';

const tableProducts = document.querySelector('#table-products');
const btnAddItem = document.querySelector('#btn-add-item');
const btnRemoveItem = document.querySelectorAll('.btn-remove-item');
const template = `
  <tr>
    <td>
      <select class="select" autocomplete="off">
        <option value="">Select Product</option>
        <option value="1">Antiuqe Camera</option>
        <option value="2">Stylish Sunglass</option>
        <option value="3">Apple Watch 2023</option>
      </select>
    </td>
    <td>
      <input type="text" placeholder="0.00" class="input">
    </td>
    <td>
      <input type="text" placeholder="1" class="input">
    </td>
    <td>
      <span class="w-full inline-block text-right font-semibold text-slate-700 dark:text-slate-200">
        $00.00
      </span>
    </td>
    <td class="!py-0 !px-0 !pr-2">
      <div class="flex items-center justify-center">  
        <button
          class="btn-remove-item cursor-pointer rounded-full p-1 font-medium focus:bg-slate-300 focus:bg-opacity-50 focus:text-slate-600"
        >
          ${feather.icons['x'].toSvg({
            class: 'h-4 w-4',
          })}
        </button>
      </div>
    </td>
  </tr>
`;

if (btnAddItem) {
  btnAddItem.addEventListener('click', function () {
    const tbody = tableProducts.querySelector('tbody');
    tbody.innerHTML += template;
    const btnRemoveItem = tbody.querySelectorAll('.btn-remove-item');

    if (btnRemoveItem.length) {
      [...btnRemoveItem].forEach((btn) => {
        btn.addEventListener('click', removeItem);
      });
    }
  });
}

if (btnRemoveItem.length) {
  [...btnRemoveItem].forEach((btn) => {
    btn.addEventListener('click', removeItem);
  });
}

function removeItem() {
  const rows = tableProducts.querySelectorAll('tbody > tr');

  if (rows.length > 1) {
    const tr = this.parentElement.parentElement.parentElement;
    tr.remove();
  }
}
