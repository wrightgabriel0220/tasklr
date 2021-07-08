import React from 'react';
import Task from './task.jsx';

const Day = props => {
  return (
    <div className="day">
      {props.date}
      <hr></hr>
      Tasks:
      {props.tasks.map((task, index) => <Task key={index} task={task}/>)}
      <hr></hr>
    </div>
  );
};

export default Day;