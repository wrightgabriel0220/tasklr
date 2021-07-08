import React, { useState, useEffect } from 'react';
import Day from './Day.jsx';

const Calendar = props => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ month, setMonth ] = useState({ name: currentDate.getMonth(), days: [] });
  const [ day, setDay ] = useState(currentDate.getDay());

  useEffect(() => {
    let firstDayOfMonth = new Date(currentDate.getYear(), currentDate.getMonth()).getDay();
    let daysInMonth = 32 - new Date(currentDate.getYear(), currentDate.getMonth(), 32).getDate();
    let dayList = [];

    for (let i = 0; i < daysInMonth; i++) {
      let dateForI = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      let dummyTasks = [];
      let numberOfDummyTasks = Math.random() * 5;

      for (let x = 0; x < numberOfDummyTasks; x++) {
        dummyTasks.push('fakeTask');
      }

      dayList.push({ date: dateForI.toDateString(), tasks: dummyTasks });
      console.log(dayList[i].date);
    }

    setMonth({ name: month.name, days: dayList })
  }, [])

  // Year has months
  // Month has weeks
  // Month has days
  // Days have tasks, events, and times


  return (
    <div id="calendar">
      {month.days.map((day, index) => <Day key={index} date={day.date} tasks={day.tasks} />)}
    </div>
  );
};

export default Calendar;