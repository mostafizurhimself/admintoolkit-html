import TomSelect from 'tom-select'

const select = {
  init() {
    document.querySelectorAll('.select').forEach(el => {
      new TomSelect(el, {})
    })
  }
}

export default select;