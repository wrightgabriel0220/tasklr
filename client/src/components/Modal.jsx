import React from 'react';
import CreateSchedule from './CreateSchedule.jsx';

const Modal = props => {
  return (
    <div id="modal" style={props.show ? { display: null } : { display: 'none' }}>
      {props.content === 'CreateSchedule' ? <CreateSchedule handleModal={props.handleModal}/> : null}
    </div>
  );
};

export default Modal;