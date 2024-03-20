export default function DoctorProfile({ doctor }) {
  return (
    <div className="widget-profile pro-widget-content">
      <div className="profile-info-widget">
        <a className="booking-doc-img">
          <img src="../../img/doctors/doctor-thumb-02.jpg" alt="User Image" />
        </a>
        <div className="profile-det-info">
          <h3>{doctor.fullname}</h3>
          <div className="patient-details">
            <h5 className="mb-0">Specialty: {doctor.specialize}</h5>
            <h5 className="mb-0">In {doctor.department_name ?  doctor.department_name : "..."} Department</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
