import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import colors from 'tailwindcss/colors';
import { themeColors } from '@tailwind.config';

const date = new Date();
const calendarEl = document.querySelector('#calendar');
const btnAddEvent = document.querySelector('#btn-add-event');
const modalAddEvent = document.querySelector('#modal-add-event');
const modalUpdateEvent = document.querySelector('#modal-update-event');
const formAddEvent = document.querySelector('#form-add-event');
const formUpdateEvent = document.querySelector('#form-update-event');
const nextMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() + 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const events = [
  {
    id: 1,
    url: '',
    title: 'Breakfast',
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 7, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0),
    allDay: false,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 2,
    url: '',
    title: 'Lunch',
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 30),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 30),
    allDay: false,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 3,
    url: '',
    title: 'Dinner',
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 21, 0),
    allDay: false,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 4,
    url: '',
    title: 'Family Trip',
    start: new Date(date.getFullYear(), date.getMonth(), 21),
    end: new Date(date.getFullYear(), date.getMonth(), 23),
    allDay: true,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 5,
    url: '',
    title: 'Monthly Meeting',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 6,
    url: '',
    title: "Doctor's Appointment",
    start: new Date(date.getFullYear(), date.getMonth(), 25),
    end: new Date(date.getFullYear(), date.getMonth(), 25),
    allDay: true,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 7,
    url: '',
    title: 'Meeting with clients',
    start: new Date(date.getFullYear(), date.getMonth(), 27),
    end: new Date(date.getFullYear(), date.getMonth(), 27),
    allDay: true,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 8,
    url: '',
    title: 'Dart Game',
    start: new Date(date.getFullYear(), date.getMonth(), 13),
    end: new Date(date.getFullYear(), date.getMonth(), 13),
    allDay: true,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 9,
    url: '',
    title: 'Cricket',
    start: new Date(date.getFullYear(), date.getMonth(), 13, 10),
    end: new Date(date.getFullYear(), date.getMonth(), 13, 12),
    allDay: false,
    extendedProps: {
      location: '',
      description: '',
    },
  },
  {
    id: 10,
    url: '',
    title: 'Football',
    start: new Date(date.getFullYear(), date.getMonth(), 13, 15),
    end: new Date(date.getFullYear(), date.getMonth(), 13, 20),
    allDay: false,
    extendedProps: {
      location: '',
      description: '',
    },
  },
];

const calendar = new Calendar(calendarEl, {
  events,
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  dayMaxEvents: 2,
  editable: true,
  navLinks: true,
  dragScroll: true,
  eventResizableFromStart: true,
  headerToolbar: {
    start: 'prev,next today',
    center: 'title',
    end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
  },
  eventBackgroundColor: themeColors.primary['500'],
  eventBorderColor: themeColors.primary['500'],
  eventTextColor: colors.slate['100'],
  dateClick: (info) => dateClick(info),
  eventClick: (info) => eventClick(info),
});

function dateClick(info) {
  const formInputStart = formAddEvent.querySelector('[name="start"]');
  const formInputEnd = formAddEvent.querySelector('[name="end"]');
  const modalInstance = createModal(modalAddEvent);

  if (formInputStart) {
    flatpickr(formInputStart, {
      defaultDate: info.date,
      enableTime: true,
    });
  }

  if (formInputEnd) {
    flatpickr(formInputEnd, {
      defaultDate: info.date,
      enableTime: true,
    });
  }

  formAddEvent.classList.remove('is-valid');
  modalInstance.show();

  formAddEvent.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.classList.contains('is-valid')) {
      const formData = validateForm(this);

      if (formData instanceof Object) {
        const { title, start, end, url, location, description, allDay } = formData;
        const eventData = {
          id: calendar.getEvents().length + 1,
          url,
          title,
          start,
          end,
          allDay,
          extendedProps: {
            location,
            description,
          },
        };

        calendar.addEvent(eventData);
        this.reset();
        this.classList.add('is-valid');
        modalInstance.hide();
        calendar.refetchEvents();
      }
    }
  });
}

function eventClick(info) {
  const formInputTitle = formUpdateEvent.querySelector('[name="title"]');
  const formInputStart = formUpdateEvent.querySelector('[name="start"]');
  const formInputEnd = formUpdateEvent.querySelector('[name="end"]');
  const formInputAllDay = formUpdateEvent.querySelector('[name="allDay"]');
  const formInputURL = formUpdateEvent.querySelector('[name="url"]');
  const formInputLocation = formUpdateEvent.querySelector('[name="location"]');
  const formInputDescription = formUpdateEvent.querySelector('[name="description"]');
  const btnDeleteEvent = formUpdateEvent.querySelector('#btn-delete-event');
  const event = info.event;
  const { id, title, start, end, url, allDay } = event;
  const { location, description } = event.extendedProps;

  if (url) {
    info.jsEvent.preventDefault();
    window.open(url, '_blank');
  }

  if (formInputTitle) {
    formInputTitle.value = title;
  }

  if (formInputStart) {
    flatpickr(formInputStart, {
      defaultDate: start,
      enableTime: true,
    });
  }

  if (formInputEnd) {
    flatpickr(formInputEnd, {
      defaultDate: end,
      enableTime: true,
    });
  }

  if (formInputAllDay) {
    formInputAllDay.checked = allDay;
  }

  if (formInputURL) {
    formInputURL.value = url;
  }

  if (formInputLocation) {
    formInputLocation.value = location;
  }

  if (formInputDescription) {
    formInputDescription.value = description;
  }

  const modalInstance = createModal(modalUpdateEvent);
  modalInstance.show();
  formUpdateEvent.classList.remove('is-invalid');

  formUpdateEvent.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.classList.contains('is-invalid')) {
      const formData = validateForm(this);

      if (formData instanceof Object) {
        const { title, start, end, url, location, description, allDay } = formData;
        const event = calendar.getEventById(id);
        event.setProp('title', title);
        event.setStart(start);
        event.setEnd(end);
        event.setAllDay(allDay);
        event.setProp('url', url);
        event.setExtendedProp('location', location);
        event.setExtendedProp('description', description);

        this.reset();
        this.classList.add('is-invalid');
        modalInstance.hide();
        calendar.refetchEvents();
      }
    }
  });

  btnDeleteEvent.addEventListener('click', function (e) {
    const event = calendar.getEventById(id);

    if (event) {
      event.remove();
      formUpdateEvent.reset();
      formUpdateEvent.classList.add('is-invalid');
      modalInstance.hide();
    }
  });
}

function validateForm(form) {
  const formInputTitle = form.querySelector('[name="title"]');
  const formInputStart = form.querySelector('[name="start"]');
  const formInputEnd = form.querySelector('[name="end"]');
  const formData = new FormData(form);
  const formDataObj = {};

  for (const entry of formData.entries()) {
    formDataObj[entry[0]] = entry[1];
  }

  const { title, start, end, url, location, description, allDay } = formDataObj;

  if (title === '') {
    formInputTitle.classList.add('is-invalid');
    const erroMessageEl = formInputTitle.nextElementSibling;

    erroMessageEl.classList.contains('error-message')
      ? (erroMessageEl.innerHTML = 'The event title is required.')
      : null;
  } else {
    formInputTitle.classList.remove('is-invalid');
  }

  if (start === '') {
    formInputStart.classList.add('is-invalid');
    const erroMessageEl = formInputStart.nextElementSibling;

    erroMessageEl.classList.contains('error-message')
      ? (erroMessageEl.innerHTML = 'The event start is required.')
      : null;
  } else {
    formInputStart.classList.remove('is-invalid');
  }

  if (end === '') {
    formInputEnd.classList.add('is-invalid');
    const erroMessageEl = formInputEnd.nextElementSibling;

    erroMessageEl.classList.contains('error-message') ? (erroMessageEl.innerHTML = 'The event end is required.') : null;
  } else {
    formInputEnd.classList.remove('is-invalid');
  }

  if (title !== '' && start !== '' && end !== '') {
    return {
      title,
      start,
      end,
      url,
      location,
      description,
      allDay: allDay ? true : false,
    };
  }

  return false;
}

if (btnAddEvent) {
  btnAddEvent.addEventListener('click', () => {
    dateClick({
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0),
    });
  });
}

calendar.render();
