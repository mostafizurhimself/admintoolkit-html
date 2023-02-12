import TomSelect from 'tom-select'

const select = {
  init() {
    document.querySelectorAll('.select:not(.searchable)').forEach(el => {
      new TomSelect(el, {})
    })
    document.querySelectorAll('.select.searchable').forEach(el => {
      new TomSelect(el, { searchField: false })
    })
  }
}

export default select;