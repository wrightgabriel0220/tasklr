import React from 'react';

const Task = props => {
  return (
    <div className="task">
      {props.task.desc}
    </div>
  );
};

export default Task;