import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyCalendar from "./Calendar";
import DoctorProfile from "../../components/doctor/doctorProfile";
import { useLocation } from "react-router-dom";

function Booking({ isLoggedIn }) {
  const locationData = useLocation();
  let doctor = locationData.state.doctor;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <div className="content" style={{ padding: "100px 0" }}>
        <div className="container-fluid">
          <div className="row">
            {/* Calendar Events */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Doctor</h4>
                </div>
                <div className="card-body">
                  <DoctorProfile doctor={doctor} />
                </div>
              </div>
            </div>
            {/* /Calendar Events */}

            {/* Calendar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <MyCalendar />
                </div>
              </div>
              {/* /Calendar */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>

      <Footer />
    </>
  );
}

export default Booking;
