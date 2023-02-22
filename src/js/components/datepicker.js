import flatpickr from "flatpickr";
import feather from 'feather-icons';

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
    const flatpickrDefaultOptions       = {
      monthSelectorType: 'dropdown',
      nextArrow: feather.icons['arrow-right'].toSvg(),
      prevArrow: feather.icons['arrow-left'].toSvg()
    }

    if(flatpickrDateInputs.length) {

      [...flatpickrDateInputs].forEach(input => {
        flatpickr(input, flatpickrDefaultOptions)
      });

    }
    
    if(flatpickrDatetimeInputs.length) {

      [...flatpickrDatetimeInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          enableTime: true,
        })
      });

    }

    if(flatpickrRangeInputs.length) {

      [...flatpickrRangeInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          mode: 'range'
        })
      });

    }

    if(flatpickrDisabledRangeInputs.length) {

      [...flatpickrDisabledRangeInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          disable: [
            {
              from: '2023-02-10',
              to: '2023-02-17'
            },
          ]
        })
      });

    }

    if(flatpickrTimeInputs.length) {

      [...flatpickrTimeInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
        })
      });

    }

    if(flatpickrMultipleInputs.length) {

      [...flatpickrMultipleInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          mode: 'multiple',
        })
      });

    }

    if(flatpickrHumanFriendlyInputs.length) {

      [...flatpickrHumanFriendlyInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          altInput: true,
          altFormat: "F j, Y",
          dateFormat: "Y-m-d",
        })
      });

    }

    if(flatpickrInlineInputs.length) {

      [...flatpickrInlineInputs].forEach(input => {
        flatpickr(input, {
          ...flatpickrDefaultOptions,
          inline: true
        })
      });

    }
  }
}

export default datepicker;