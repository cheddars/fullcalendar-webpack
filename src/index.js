import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  const events = [{
    title: '테스트',
    date: new Date(2020, 3, 23),
    color: 'blue'
  },
  {
    title: '테스트2',
    date: new Date(2020, 3, 24),
    color: 'green'
  },
  {
    title: '테스트3',
    date: new Date(2020, 3, 25),
    color: 'red'
  }];

  const resources = [
    {
      title: '테스트',
      date: new Date(2020, 3, 23),
    },
    {
      title: '테스트2',
      date: new Date(2020, 3, 24),
      color: 'green'
    },
    {
      title: '테스트3',
      date: new Date(2020, 3, 25),
      color: 'red'
    }
  ];

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, resourceTimeGridPlugin],
    defaultView: 'resourceTimeGridDay',
    resources: resources
  });

  calendar.render();
});

const changeBackground = () => {
  console.log("change");
}