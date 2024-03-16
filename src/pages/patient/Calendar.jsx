import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Modal from 'react-bootstrap/Modal';

const MyCalendar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'Event 1', date: '2024-03-14' },
          { title: 'Event 2', date: '2024-03-15' }
        ]}
        headerToolbar={{
          start: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          end: 'today prev,next'
        }}
        height={'90vh'}
        selectable
        select={handleShow} // Directly pass the function with date argument
      />

      {showForm && (
        <>
        
          <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Make an appointment</Modal.Title>
            </Modal.Header>


            <Modal.Body>
            <form action="#">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">First Name</label>
                <div className="col-lg-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">Last Name</label>
                <div className="col-lg-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">Email Address</label>
                <div className="col-lg-9">
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">Username</label>
                <div className="col-lg-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">Password</label>
                <div className="col-lg-9">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">Repeat Password</label>
                <div className="col-lg-9">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
            
            </Modal.Body>

            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Make an appointment
              </Button>
            </Modal.Footer> */}
          </Modal>
          
        </>
      )}

    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      </>
  );
};

export default MyCalendar;