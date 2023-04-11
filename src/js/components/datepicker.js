import flatpickr from 'flatpickr';

const datepicker = {
  init() {
    const inputDate = document.querySelectorAll('.input-date');
    const inputDatetime = document.querySelectorAll('.input-datetime');
    const inputDateRange = document.querySelectorAll('.input-date-range');
    const inputTime = document.querySelectorAll('.input-time');
    const inputDateMultiple = document.querySelectorAll('.input-date-multiple');
    const inputDateFormated = document.querySelectorAll('.input-date-formated');
    const inputDateInline = document.querySelectorAll('.input-date-inline');
    const inputDateRangeDisabled = document.querySelectorAll('.input-date-range-disabled');
    const inputDateCustom = document.querySelectorAll('.input-date-custom');

    if (inputDate.length) {
      [...inputDate].forEach((input) => flatpickr(input));
    }

    if (inputDatetime.length) {
      [...inputDatetime].forEach((input) =>
        flatpickr(input, {
          enableTime: true,
        })
      );
    }

    if (inputDateRange.length) {
      [...inputDateRange].forEach((input) =>
        flatpickr(input, {
          mode: 'range',
        })
      );
    }

    if (inputTime.length) {
      [...inputTime].forEach((input) =>
        flatpickr(input, {
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
        })
      );
    }

    if (inputDateMultiple.length) {
      [...inputDateMultiple].forEach((input) =>
        flatpickr(input, {
          mode: 'multiple',
        })
      );
    }

    if (inputDateFormated.length) {
      [...inputDateFormated].forEach((input) =>
        flatpickr(input, {
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d',
        })
      );
    }

    if (inputDateInline.length) {
      [...inputDateInline].forEach((input) =>
        flatpickr(input, {
          inline: true,
        })
      );
    }

    if (inputDateRangeDisabled.length) {
      const fromDate = new Date(Date.now() + 3600 * 1000 * 24);
      const toDate = new Date(Date.now() + 3600 * 1000 * 168);

      [...inputDateRangeDisabled].forEach((input) =>
        flatpickr(input, {
          dateFormat: 'Y-m-d',
          disable: [
            {
              // Disable from tomorrow to next 7 days
              from: fromDate.toISOString().split('T')[0],
              to: toDate.toISOString().split('T')[0],
            },
          ],
        })
      );
    }

    if (inputDateCustom.length) {
      [...inputDateCustom].forEach((input) => flatpickr(input));
    }
  },
};

export default datepicker;
