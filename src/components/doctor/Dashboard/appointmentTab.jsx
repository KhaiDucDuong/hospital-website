import PreviousTab from "./previousTab";
import TodayTab from "./todayTab";
import UpcomingTab from "./upcomingTab";
import { useState } from "react";

export default function AppointmentTab({upcoming_appointments, today_appointments, previous_appointments}) {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  
  function changeTabButtonOnClick(newSelectedTab) {
    setSelectedTab(newSelectedTab);
  }

  console.log(today_appointments)
  console.log(upcoming_appointments)
  console.log(previous_appointments)
  return (
    <div className="appointment-tab">
      {/* Appointment Tab */}
      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
        <li className="nav-item appoint-tab">
          {selectedTab == "upcoming" ? (
            <a
              className="nav-link active"
              data-toggle="tab"
              onClick={() => changeTabButtonOnClick("upcoming")}
            >
              Upcoming
            </a>
          ) : (
            <a
              className="nav-link"
              data-toggle="tab"
              onClick={() => changeTabButtonOnClick("upcoming")}
            >
              Upcoming
            </a>
          )}
        </li>
        <li className="nav-item appoint-tab">
          {selectedTab == "today" ? (
            <a
              className="nav-link active"
              data-toggle="tab"
              onClick={() => changeTabButtonOnClick("today")}
            >
              Today
            </a>
          ) : (
            <a
              className="nav-link"
              data-toggle="tab"
              onClick={() => changeTabButtonOnClick("today")}
            >
              Today
            </a>
          )}
        </li>
        <li className="nav-item appoint-tab">
          {selectedTab == "previous" ? (
            <a
              className="nav-link active"
              data-toggle="tab"
              onClick={() => changeTabButtonOnClick("previous")}
            >
              Previous
            </a>
          ) : (
            <a
              className="nav-link"
              data-toggle="tab"
              onClick={() => changeTabButtonOnClick("previous")}
            >
              Previous
            </a>
          )}
        </li>
      </ul>
      <div className="tab-content">
        {selectedTab == "upcoming" && <UpcomingTab upcoming_appointments={upcoming_appointments}/>}
        {selectedTab == "today" && <TodayTab today_appointments={today_appointments}/>}
        {selectedTab == "previous" && <PreviousTab previous_appointments={previous_appointments}/>}
      </div>
    </div>
  );
}
