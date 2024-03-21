import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Modal from "react-bootstrap/Modal";

const MyCalendar = () => {
  const [showForm, setShowForm] = useState(false);
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [symtomDescription, setSymtomDescription] = useState("")


  const handleClose = () => setShowForm(false);
  function handleShow (dateClickInfo) {
    console.log("Date:" + dateClickInfo.date)
    console.log("Date Str:" +dateClickInfo.dateStr)
    setStartTime(dateClickInfo.date.getHours())
    setEndTime(dateClickInfo.date.getHours() + 1)
    console.log(startTime)
    setShowForm(true);
  };
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        slotDuration="01:00"
        slotMinTime="8:00"
        slotMaxTime="17:00"
        weekends={true}
        events={
          [
            // { title: 'Event 1', date: '2024-03-14' },
            // { title: 'Event 2', date: '2024-03-15' }
          ]
        }
        headerToolbar={{
          start: "timeGridWeek,timeGridDay",
          center: "title",
          end: "today prev,next",
        }}
        allDaySlot={false}
        height={"auto"}
        dateClick={( dateClickInfo ) => handleShow( dateClickInfo )} // Directly pass the function with date argument
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
                  <label className="col-lg-3 col-form-label">Start Time</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" value={startTime + " - " + endTime}  disabled/>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Email Address
                  </label>
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
                  <label className="col-lg-3 col-form-label">
                    Repeat Password
                  </label>
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
          </Modal>
        </>
      )}
    </>
  );
};

export default MyCalendar;
