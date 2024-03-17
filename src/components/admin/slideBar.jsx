export default function SlideBar({ selectedWidget, setSelectedWidget }) {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li
              className={selectedWidget == "dashboard" && "active"}
              onClick={() => setSelectedWidget("dashboard")}
            >
              <a>
                <i className="fe fe-home" /> <span>Dashboard</span>
              </a>
            </li>
            <li
              className={selectedWidget == "appointments" && "active"}
              onClick={() => setSelectedWidget("appointments")}
            >
              <a>
                <i className="fe fe-layout" /> <span>Appointments</span>
              </a>
            </li>
            <li
              className={selectedWidget == "departments" && "active"}
              onClick={() => setSelectedWidget("departments")}
            >
              <a>
                <i className="fe fe-users" /> <span>Departments</span>
              </a>
            </li>
            <li
             className={selectedWidget == "doctors" && "active"}
             onClick={() => setSelectedWidget("doctors")}
            >
              <a>
                <i className="fe fe-user-plus" /> <span>Doctors</span>
              </a>
            </li>
            <li
             className={selectedWidget == "patients" && "active"}
             onClick={() => setSelectedWidget("patients")}
            >
              <a>
                <i className="fe fe-user" /> <span>Patients</span>
              </a>
            </li>
            <li
             className={selectedWidget == "reviews" && "active"}
             onClick={() => setSelectedWidget("reviews")}
            >
              <a>
                <i className="fe fe-star-o" /> <span>Reviews</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
