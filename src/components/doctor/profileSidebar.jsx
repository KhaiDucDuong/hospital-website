export default function ProfileSidebar({selectedWidget, setSelectedWidget}) {
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <a href="#" className="booking-doc-img">
            <img src="../../img/doctors/doctor-thumb-02.jpg" alt="User Image" />
          </a>
          <div className="profile-det-info">
            <h3>Dr. Darren Elder</h3>
            <div className="patient-details">
              <h5 className="mb-0">
                BDS, MDS - Oral &amp; Maxillofacial Surgery
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className={selectedWidget == "dashboard" && "active"}>
              <a onClick={() => setSelectedWidget("dashboard")}>
                <i className="fas fa-columns" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className={selectedWidget == "appointments" && "active"} onClick={() => setSelectedWidget("appointments")}>
              <a >
                <i className="fas fa-calendar-check" />
                <span>Appointments</span>
              </a>
            </li>
            <li className={selectedWidget == "myPatients" && "active"} onClick={() => setSelectedWidget("myPatients")}>
              <a>
                <i className="fas fa-user-injured" />
                <span>My Patients</span>
              </a>
            </li>
            <li className={selectedWidget == "scheduleTiming" && "active"} onClick={() => setSelectedWidget("scheduleTiming")}>
              <a>
                <i className="fas fa-hourglass-start" />
                <span>Schedule Timings</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-file-invoice" />
                <span>Invoices</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-user-cog" />
                <span>Profile Settings</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-lock" />
                <span>Change Password</span>
              </a>
            </li>
            <li className={selectedWidget == "logout" && "active"} onClick={() => setSelectedWidget("logout")}>
              <a>
                <i className="fas fa-sign-out-alt" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
