import DoctorProfile from "./doctorProfile";

export default function ProfileSidebar({selectedWidget, setSelectedWidget, doctor}) {
  return (
    <div className="profile-sidebar">
      <DoctorProfile doctor={doctor}/>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className={selectedWidget == "dashboard" && "active"} onClick={() => setSelectedWidget("dashboard")}>
              <a className="sidebar-items">
                <i className="fas fa-columns" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className={selectedWidget == "appointments" && "active"} onClick={() => setSelectedWidget("appointments")}>
              <a className="sidebar-items" >
                <i className="fas fa-calendar-check" />
                <span>Appointments</span>
              </a>
            </li>
            <li className={selectedWidget == "myPatients" && "active"} onClick={() => setSelectedWidget("myPatients")}>
              <a className="sidebar-items">
                <i className="fas fa-user-injured" />
                <span>My Patients</span>
              </a>
            </li>
            <li className={selectedWidget == "scheduleTiming" && "active"} onClick={() => setSelectedWidget("scheduleTiming")}>
              <a className="sidebar-items">
                <i className="fas fa-hourglass-start" />
                <span>Schedule Timings</span>
              </a>
            </li>
            <li>
              <a className="sidebar-items">
                <i className="fas fa-file-invoice" />
                <span>Invoices</span>
              </a>
            </li>
            <li>
              <a className="sidebar-items">
                <i className="fas fa-user-cog" />
                <span>Profile Settings</span>
              </a>
            </li>
            <li>
              <a className="sidebar-items">
                <i className="fas fa-lock" />
                <span>Change Password</span>
              </a>
            </li>
            <li className={selectedWidget == "logout" && "active"} onClick={() => setSelectedWidget("logout")}>
              <a className="sidebar-items">
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
