import React, { useState, useEffect } from 'react';
import Task from './task.jsx';

const Day = props => {
  const [ isScheduled, setIsScheduled ] = useState(Boolean(props.schedules.length > 0));

  return (
    <div className="day" style={{ backgroundColor: isScheduled ? "green" : "white" }}>
      {props.date}
      <hr></hr>
      Tasks:
      {props.tasks.map((task, index) => <Task key={index} task={task}/>)}
      <hr></hr>
    </div>
  );
};

export default Day;