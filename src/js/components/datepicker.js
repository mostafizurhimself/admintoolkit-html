import flatpickr from "flatpickr";

const datepicker = {
  init() {    
    const flatpickrDateInputs           = document.querySelectorAll('.flatpickr-input-date');
    const flatpickrDatetimeInputs       = document.querySelectorAll('.flatpickr-input-datetime');
    const flatpickrRangeInputs          = document.querySelectorAll('.flatpickr-input-range');
    const flatpickrDisabledRangeInputs  = document.querySelectorAll('.flatpickr-input-disabled-range');
    const flatpickrTimeInputs           = document.querySelectorAll('.flatpickr-input-time');
    const flatpickrMultipleInputs       = document.querySelectorAll('.flatpickr-input-multiple');
    const flatpickrHumanFriendlyInputs  = document.querySelectorAll('.flatpickr-input-human-friendly');
    const flatpickrInlineInputs         = document.querySelectorAll('.flatpickr-input-inline');

    if(flatpickrDateInputs.length) {
      [...flatpickrDateInputs].forEach(input => {
        flatpickr(input)
      });
    }
    
    if(flatpickrDatetimeInputs.length) {
      [...flatpickrDatetimeInputs].forEach(input => {
        flatpickr(input, {
          enableTime: true,
        })
      });
    }

    if(flatpickrRangeInputs.length) {
      [...flatpickrRangeInputs].forEach(input => {
        flatpickr(input, {
          mode: 'range'
        })
      });
    }

    if(flatpickrDisabledRangeInputs.length) {
      [...flatpickrDisabledRangeInputs].forEach(input => {
        flatpickr(input, {
          disable: [
            {
              from: '2023-02-10',
              to: '2023-02-17'
            }
          ]
        })
      });
    }

    if(flatpickrTimeInputs.length) {
      [...flatpickrTimeInputs].forEach(input => {
        flatpickr(input, {
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
        })
      });
    }

    if(flatpickrMultipleInputs.length) {
      [...flatpickrMultipleInputs].forEach(input => {
        flatpickr(input, {
          mode: 'multiple',
        })
      });
    }

    if(flatpickrHumanFriendlyInputs.length) {
      [...flatpickrHumanFriendlyInputs].forEach(input => {
        flatpickr(input, {
          altInput: true,
          altFormat: "F j, Y",
          dateFormat: "Y-m-d",
        })
      });
    }

    if(flatpickrInlineInputs.length) {
      [...flatpickrInlineInputs].forEach(input => {
        flatpickr(input, {
          inline: true
        })
      });
    }
  }
}

export default datepicker;