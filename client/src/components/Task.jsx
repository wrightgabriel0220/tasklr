import React from 'react';

const Task = props => {
  return (
    <div className="task">
      {props.task}
    </div>
  );
};

export default Task;