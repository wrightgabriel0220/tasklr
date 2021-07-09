import React from 'react';

const ScheduleManager = props => {
  return (
    <div id="schedule-manager">
      {props.schedules.map((schedule, index) => <button key={index} className="schedule-button">Schedule #{schedule.id}</button>)}
    </div>
  );
};

export default ScheduleManager;