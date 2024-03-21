export default function Appointment({ appointment }) {
  let today_date = new Date().toDateString();
  today_date = new Date(today_date);

  return (
    <div className="appointment-list">
      <div className="profile-info-widget">
        <a href="patient-profile.html" className="booking-doc-img">
          <img src="../../img/patients/patient.jpg" alt="User Image" />
        </a>
        <div className="profile-det-info">
          <h3>
            <a href="patient-profile.html">{appointment.patient_name}</a>
          </h3>
          <div className="patient-details">
            <h5>
              <i className="far fa-clock" /> {appointment.date},{" "}
              {appointment.startTime} - {appointment.endTime}
            </h5>
            <h5>
              <i className="fas fa-map-marker-alt" /> Newyork, United States
            </h5>
            <h5>
              <i className="fas fa-envelope" /> richard@example.com
            </h5>
            <h5 className="mb-0">
              <i className="fas fa-phone" /> +1 923 782 4575
            </h5>
          </div>
        </div>
      </div>
      {new Date(appointment.date).getTime() >= today_date.getTime() && (
        <div className="appointment-action">
          <a
            href="#"
            className="btn btn-sm bg-info-light"
            data-toggle="modal"
            data-target="#appt_details"
          >
            <i className="far fa-eye" /> View
          </a>
          <a  className="btn btn-sm bg-success-light">
            <i className="fas fa-check" /> Accept
          </a>
          <a  className="btn btn-sm bg-danger-light">
            <i className="fas fa-times" /> Cancel
          </a>
        </div>
      )}
    </div>
  );
}
