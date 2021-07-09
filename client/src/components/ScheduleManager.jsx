import React from 'react';

const ScheduleManager = props => {
  const addSchedule = () => {
    props.handleModal(false, 'CreateSchedule');
  };

  return (
    <div id="schedule-manager">
      {props.schedules.map((schedule, index) => <button onClick={() => { props.selectSchedule(index); }} key={index} className="schedule-button">Schedule #{schedule.id}</button>)}
      <button id="add-schedule" onClick={addSchedule}>Add Schedule</button>
    </div>
  );
};

export default ScheduleManager;