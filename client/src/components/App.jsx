import React, { useState, useEffect } from 'react';
import Calendar from './Calendar.jsx';
import axios from 'axios';

const App = props => {
  const [ isLoading, setLoading ] = useState(true);
  const [ schedules, setSchedules ] = useState([]);

  useEffect(() => {
    if (isLoading) {
      axios.get('/schedules/list')
        .then(results => {
          setSchedules(results);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, []);

  if (isLoading) {
    return (
      <div id="app-body">Loading...</div>
    )
  }

  return (
    <div id="app-body">
      <Calendar schedules={[{ span: '1 week', start: 'July 1, 2021', end: 'July 8, 2021'}]}/>
    </div>
  );
};

export default App;