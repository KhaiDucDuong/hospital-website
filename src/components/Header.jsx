import React from "react";

function Header({ isLoggedIn }) {
  console.log(isLoggedIn);
  function logOut() {
    window.localStorage.removeItem("isLoggedIn")
    window.location.reload();
  }

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="#">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <a href="/" className="navbar-brand logo">
              <img src="../../img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="/" className="menu-logo">
                <img
                  src="../../img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a id="menu_close" className="menu-close" href="#;">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className="active">
                <a href="/">Home</a>
              </li>
              {isLoggedIn && (
                <>
                  <li className="has-submenu">
                    <a href="/doctor">Doctors</a>
                  </li>
                  <li className="has-submenu">
                    <a href="/patient/search">
                      Patients <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="/doctor/search?doctor=all">Search Doctor</a>
                      </li>
                      <li>
                        <a href="/patient/doctor-profile">Doctor Profile</a>
                      </li>
                      <li>
                        <a href="booking-success.html">My booking</a>
                      </li>
                      <li>
                        <a href="/patient/profile">My profile</a>
                      </li>
                      <li>
                        <a href="/patient/settings">Profile Settings</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="admin/" target="_blank">
                      Admin
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="far fa-hospital" />
              </div>
            </li>
            {!isLoggedIn ? <li className="nav-item">
              <a className="nav-link header-login" href="/login">
                login / Signup{" "}
              </a>
            </li> : <li className="nav-item">
              <a className="nav-link header-login" onClick={() => logOut()}>
                Logout{" "}
              </a>
            </li>}
            
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
