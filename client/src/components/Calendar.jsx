import React, { useState, useEffect } from 'react';
import Day from './Day.jsx';

const Calendar = props => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ month, setMonth ] = useState({ name: currentDate.getMonth(), days: [] });

  useEffect(() => {
    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()).getDay();
    let daysInMonth = 32 - new Date(currentDate.getFullYear(), currentDate.getMonth(), 32).getDate();
    let dayList = [];

    for (let i = 0; i < daysInMonth; i++) {
      dayList.push({ date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString(), tasks: [], schedules: [] });
    }

    for (let schedule of props.schedules) {
      dayList.forEach(day => {
        if (new Date(day.date) >= new Date(schedule.start) && new Date(day.date) <= new Date(schedule.end)) {
          schedule.tasks.forEach((task, index) => {
            if (new Date(day.date).toDateString() === new Date(task.date).toDateString()) {
              day.tasks.push(task);
            }
          })
          day.schedules.push(schedule);
        }
      });
    }

    setMonth({ name: month.name, days: dayList })
  }, [])

  // Year has months
  // Month has weeks
  // Month has days
  // Days have tasks, events, and times


  return (
    <div id="calendar">
      {month.days.map((day, index) => <Day schedules={day.schedules} key={index} date={day.date} tasks={day.tasks} />)}
    </div>
  );
};

export default Calendar;