import React from 'react';

const ScheduleManager = props => {
  return (
    <div id="schedule-manager">
      {props.schedules.map((schedule, index) => <button onClick={() => { props.selectSchedule(index); }} key={index} className="schedule-button">Schedule #{schedule.id}</button>)}
    </div>
  );
};

export default ScheduleManager;