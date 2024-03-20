import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyCalendar from "./Calendar";

function Booking({ isLoggedIn, setLoggedIn }) {
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
                  <h4 className="card-title mb-0">Drag &amp; Drop Event</h4>
                </div>
                <div className="card-body">
                  <div id="calendar-events" className="mb-3">
                    <div className="calendar-events" data-class="bg-info">
                      <i className="fas fa-circle text-info" /> My Event One
                    </div>
                    <div className="calendar-events" data-class="bg-success">
                      <i className="fas fa-circle text-success" /> My Event Two
                    </div>
                    <div className="calendar-events" data-class="bg-danger">
                      <i className="fas fa-circle text-danger" /> My Event Three
                    </div>
                    <div className="calendar-events" data-class="bg-warning">
                      <i className="fas fa-circle text-warning" /> My Event Four
                    </div>
                  </div>
                  <div className="checkbox mb-3">
                    <input id="drop-remove" type="checkbox" />
                    <label htmlFor="drop-remove">Remove after drop</label>
                  </div>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#add_new_event"
                    className="btn btn-primary btn-block"
                  >
                    <i className="fas fa-plus" /> Add Category
                  </a>
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
