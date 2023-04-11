import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const date       = new Date();
const nextDay    = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const nextMonth  = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const calendarEl = document.querySelector('#calendar');
const events     = [
  {
    id: 1,
    url: '',
    title: 'Breakfast',
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 7, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0),
    allDay: false,
  },
  {
    id: 2,
    url: '',
    title: 'Lunch',
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 30),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 30),
    allDay: false,
  },
  {
    id: 3,
    url: '',
    title: 'Dinner',
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 21, 0),
    allDay: false,
  },
  {
    id: 4,
    url: '',
    title: 'Family Trip',
    start: new Date(date.getFullYear(), date.getMonth(), 21),
    end: new Date(date.getFullYear(), date.getMonth(), 23),
    allDay: true,
  },
  {
    id: 5,
    url: '',
    title: 'Monthly Meeting',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
  },
  {
    id: 6,
    url: '',
    title: 'Doctor\'s Appointment',
    start: new Date(date.getFullYear(), date.getMonth(), 25),
    end: new Date(date.getFullYear(), date.getMonth(),25),
    allDay: true,
  },
  {
    id: 7,
    url: '',
    title: 'Meeting with clients',
    start: new Date(date.getFullYear(), date.getMonth(), 27),
    end: new Date(date.getFullYear(), date.getMonth(),27),
    allDay: true,
  },
  {
    id: 8,
    url: '',
    title: 'Dart Game',
    start: new Date(date.getFullYear(), date.getMonth(), 13),
    end: new Date(date.getFullYear(), date.getMonth(),13),
    allDay: true,
  },
  {
    id: 9,
    url: '',
    title: 'Cricket',
    start: new Date(date.getFullYear(), date.getMonth(), 13, 10),
    end: new Date(date.getFullYear(), date.getMonth(),13, 12),
    allDay: false,
  },
  {
    id: 10,
    url: '',
    title: 'Football',
    start: new Date(date.getFullYear(), date.getMonth(), 13, 15),
    end: new Date(date.getFullYear(), date.getMonth(),13, 20),
    allDay: false,
  },
] 

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

  dateClick: (info) => console.log('dateClick', info),
  eventClick: (info) => console.log('eventClick', info),
});

calendar.render();