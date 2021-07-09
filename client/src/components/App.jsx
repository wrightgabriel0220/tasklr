import React, { useState, useEffect } from 'react';
import ScheduleManager from './ScheduleManager.jsx';
import Calendar from './Calendar.jsx';
import Modal from './Modal.jsx';
import axios from 'axios';

const App = props => {
  const [ isLoading, setLoading ] = useState(true);
  const [ needsUpdate, setNeedsUpdate ] = useState(false);
  const [ schedules, setSchedules ] = useState([]);
  const [ activeSchedule, setActiveSchedule ] = useState({});
  const [ showModal, setShowModal ] = useState(false);
  const [ modalContent, setModalContent ] = useState('');

  const selectSchedule = index => {
    setActiveSchedule(schedules[index]);
  };

  const handleModal = (isShowing, body) => {
    if (isShowing === false) {
      setShowModal(true);
      setModalContent(body);
    } else {
      setNeedsUpdate(true);
      setShowModal(false);
      setModalContent('');
    }
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
    if (needsUpdate) {
      axios.get('/schedules/list')
        .then(results => {
          setSchedules(results.data);
          setNeedsUpdate(false);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, [needsUpdate])

  if (isLoading) {
    return (
      <div id="app-body">Loading...</div>
    )
  }

  return (
    <div id="app-body">
      <Modal handleModal={handleModal} show={showModal} content={modalContent}/>
      <ScheduleManager handleModal={handleModal} selectSchedule={selectSchedule} schedules={schedules}/>
      <Calendar schedule={activeSchedule}/>
    </div>
  );
};

export default App;