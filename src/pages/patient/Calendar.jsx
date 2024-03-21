import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Modal from "react-bootstrap/Modal";

const MyCalendar = ({ schedulesData }) => {
  const [showForm, setShowForm] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [symptomDescription, setSymtomDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [scheduleId, setId] = useState("");

  const schedules = schedulesData;

  const handleClose = () => setShowForm(false);
  function handleShow(dateClickInfo) {
    console.log("Date:" + dateClickInfo.date);
    console.log("Date Str:" + dateClickInfo.dateStr);
    setStartTime(dateClickInfo.date.getHours() + ":00");
    setEndTime(dateClickInfo.date.getHours() + 1 + ":00");
    console.log(startTime);

    setSelectedDate(
      String(
        dateClickInfo.date.getYear() -
          100 +
          2000 +
          "-" +
          (dateClickInfo.date.getMonth() + 1) +
          "-" +
          dateClickInfo.date.getDate()
      )
    );
    setShowForm(true);
  }

  const submitObClick = async () => {
    const url = "http://localhost:8080/appointment/booking/" + scheduleId;
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appointmentDate: new Date(selectedDate),
        symptomDescription: symptomDescription,
      }),
    };
    try {
      let response = await fetch(url, requestOptions);
      let data = await response.json();
      if (response.status === 201) {
        console.log("Create appointment successfully!");
      } else {
        console.log("Failed to create appointment!");
      }
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toISOString(); // Convert date to ISO string format
  };

  const handleEventClick = (info) => {
    setId(info.event._def.publicId);
    // console.log(info.event)
    console.log(scheduleId);
    setStartTime(info.event.start.getHours() + ":00");
    setEndTime(info.event.start.getHours() + 1 + ":00");
    setSelectedDate(
      String(
        info.event.start.getYear() -
          100 +
          2000 +
          "-" +
          (info.event.start.getMonth() + 1) +
          "-" +
          info.event.start.getDate()
      )
    );
    setShowForm(true);
  };
  const generateScheduleList = (schedules) => {
    console.log(schedules)
    let currentDay = new Date(); // Get current day
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day =
      currentDay.getFullYear() +
      "-" +
      (currentDay.getMonth() + 1) +
      "-" +
      (currentDay.getDate() + 3);
    // Initialize the list

    const scheduleList = [];
    // Loop through each schedule
    schedules?.forEach((schedule) => {
      //Find the index of the provided dayOfWeek
      const index = daysOfWeek.indexOf(schedule.dateOfweek);

      // Calculate date for each day in the week based on the provided dayOfWeek
      const date = new Date(day); // Create a new date object
      const title = schedule.appointmentFlag ? "Booked" : "Available";
      const color = title === "Available" ? "green" : "red";
      const id = schedule._id;
      date.setDate(currentDay.getDate() + index); // Set the date based on the current day and the offset
      let time = schedule.time.slice(0, 5);
      if (time[4] === " ") {
        time = time.slice(0, 4);
        time = "0" + time;
      }
      let fomat = formatDate(date).slice(0, 11) + time + ":00";
      scheduleList.push({ title, date: fomat, id: id, color: color }); // Push schedule with title and formatted date to the list
    });
    return scheduleList;
  };

  const result = generateScheduleList(schedules);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        slotDuration="01:00"
        slotMinTime="8:00"
        slotMaxTime="20:00"
        weekends={true}
        events={result}
        eventBackgroundColor="red"
        headerToolbar={{
          start: "timeGridWeek,timeGridDay",
          center: "title",
          end: "today prev,next",
        }}
        allDaySlot={false}
        height={"auto"}
        eventClick={(info) => handleEventClick(info)}
        dateClick={(dateClickInfo) => handleShow(dateClickInfo)} // Directly pass the function with date argument
      />
      {showForm && (
        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Make an appointment</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <form> */}
            <div className="form-group row">
              <label className="col-lg-3 col-form-label">Date</label>
              <div className="col-lg-9">
                <input
                  type="text"
                  className="form-control"
                  value={selectedDate}
                  disabled
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label">Start Time</label>
              <div className="col-lg-9">
                <input
                  type="text"
                  className="form-control"
                  value={startTime + " - " + endTime}
                  disabled
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label">
                Symtom Description
              </label>
              <div className="col-lg-9">
                <input
                  type="textarea"
                  onChange={(e) => setSymtomDescription(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => submitObClick()}
              >
                Submit
              </button>
            </div>
            {/* </form> */}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default MyCalendar;
