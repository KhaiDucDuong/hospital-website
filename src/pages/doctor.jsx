import Header from "../components/Header";
import Breadcrumb from "../components/doctor/breadcrumb";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/doctor/profileSidebar";
import DashCard from "../components/doctor/Dashboard/dashcard";
import AppointmentTab from "../components/doctor/Dashboard/appointmentTab";
import { Suspense, lazy, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/plugins/fontawesome/css/fontawesome.min.css";
import "../assets/plugins/fontawesome/css/all.min.css";
import "../assets/css/style.css";
import "../components/doctor/app.css";
import { DOCTOR } from "./doctorData";

const Appointments = lazy(() =>
  import("../components/doctor/Appointments/appointments")
);

const ScheduleTiming = lazy(() =>
  import("../components/doctor/scheduleTiming/scheduleTIming")
);

export default function Doctor() {
  const doctor = DOCTOR;
  const [selectedWidget, setSelectedWidget] = useState("dashboard");
  let today_date = new Date().toDateString();
  today_date = new Date(today_date)

  const today_appointments = DOCTOR.appointments.filter(
    (appointment) => new Date(appointment.date).getTime() == today_date.getTime()
  );
  const upcoming_appointments = DOCTOR.appointments.filter(
    (appointment) => new Date(appointment.date).getTime() > today_date.getTime()
  );
  const previous_appointments = DOCTOR.appointments.filter(
    (appointment) => new Date(appointment.date).getTime() < today_date.getTime()
  );
  return (
    <>
      {/* Main Wrapper */}
      <Header />
      <div className="main-wrapper">
        <Breadcrumb />

        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <ProfileSidebar
                  selectedWidget={selectedWidget}
                  setSelectedWidget={setSelectedWidget}
                  doctor={doctor}
                />
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                {selectedWidget == "dashboard" && (
                  <div className="row">
                    <div className="col-md-12">
                      <DashCard />
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col-md-12">
                    <Suspense>
                      {selectedWidget == "dashboard" && (
                        <>
                          <h4 className="mb-4">Patient Appoinment</h4>{" "}
                          <AppointmentTab
                            upcoming_appointments={upcoming_appointments}
                            today_appointments={today_appointments}
                            previous_appointments={previous_appointments}
                          />
                        </>
                      )}
                      {selectedWidget == "appointments" && (
                        <Appointments appointments={doctor.appointments} />
                      )}
                      {selectedWidget == "scheduleTiming" && <ScheduleTiming />}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        <Footer />
      </div>
    </>
  );
}
