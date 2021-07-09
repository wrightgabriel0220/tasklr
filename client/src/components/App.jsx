import React, { useState, useEffect } from 'react';
import Calendar from './Calendar.jsx';
import ScheduleManager from './ScheduleManager.jsx';
import axios from 'axios';

const App = props => {
  const [ isLoading, setLoading ] = useState(true);
  const [ schedules, setSchedules ] = useState([]);
  const [ activeSchedule, setActiveSchedule ] = useState({});

  const selectSchedule = index => {
    setActiveSchedule(schedules[index]);
  };

  useEffect(() => {
    if (isLoading) {
      axios.get('/schedules/list')
        .then(results => {
          setSchedules(results.data);
          setActiveSchedule(results.data[0]);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, []);

  useEffect(() => {
    console.log(activeSchedule);
  }, [activeSchedule]);

  if (isLoading) {
    return (
      <div id="app-body">Loading...</div>
    )
  }

  return (
    <div id="app-body">
      <ScheduleManager selectSchedule={selectSchedule} schedules={schedules}/>
      <Calendar schedule={activeSchedule}/>
    </div>
  );
};

export default App;