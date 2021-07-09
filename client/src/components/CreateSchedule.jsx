import React from 'react';
import axios from 'axios';

const CreateSchedule = props => {
  const handleSubmit = event => {
    event.preventDefault();

    let spanInput = document.getElementById('schedule-span-input');
    let startInput = document.getElementById('schedule-start-input');
    let endInput = document.getElementById('schedule-end-input');

    let span, start, end;
    if (spanInput) {
      span = spanInput.value;
      console.log('span: ', span);
    }
    if (startInput) {
      start = startInput.value;
      console.log('start: ', start);
    }
    if (endInput) {
      end = endInput.value;
      console.log('end: ', end);
    }

    if (document.getElementById('schedule-form').checkValidity()) {
      axios.post('/schedules/add', {
        span: span,
        start: start,
        end: end
      })
      .then(results => {
        console.log(results);
        props.handleModal(true, '');
      })
      .catch(err => {
        console.error(err);
      })
    } else {
      document.getElementById('schedule-form').reportValidity();
    }
  }

  return (
    <form id="schedule-form">
      <label htmlFor="schedule-span-input">
        <select id="schedule-span-input" required>
          <option value="1 week">1 week</option>
          <option value="2 week">2 week</option>
          <option value="to end of month">to end of month</option>
        </select>
      </label>
      <label htmlFor="schedule-start-input">
        <input id="schedule-start-input" type="date" required></input>
      </label>
      <label htmlFor="schedule-end-input">
        <input id="schedule-end-input" type="date" required></input>
      </label>
      <button onClick={handleSubmit}>Create Schedule</button>
    </form>
  );
};

export default CreateSchedule;

