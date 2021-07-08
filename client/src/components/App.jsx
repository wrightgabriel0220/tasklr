import React, { useState, useEffect } from 'react';
import Calendar from './Calendar.jsx';
import ScheduleManager from './ScheduleManager.jsx';
import axios from 'axios';

const App = props => {
  const [ isLoading, setLoading ] = useState(true);
  const [ schedules, setSchedules ] = useState([]);

  useEffect(() => {
    if (isLoading) {
      axios.get('/schedules/list')
        .then(results => {
          setSchedules(results.data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, []);

  useEffect(() => {
    console.log(schedules);
  }, [schedules])

  if (isLoading) {
    return (
      <div id="app-body">Loading...</div>
    )
  }

  return (
    <div id="app-body">
      <ScheduleManager schedules={schedules}/>
      <Calendar schedules={schedules}/>
    </div>
  );
};

export default App;