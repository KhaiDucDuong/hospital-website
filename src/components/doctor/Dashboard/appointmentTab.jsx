import TodayTab from "./todayTab";
import UpcomingTab from "./upcomingTab";
import { useState } from "react";

export default function AppointmentTab() {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  function changeTabButtonOnClick(newSelectedTab) {
    setSelectedTab(newSelectedTab);
  }
  return (
    <div className="appointment-tab">
      {/* Appointment Tab */}
      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
        <li className="nav-item">
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
        <li className="nav-item">
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
      </ul>
      <div className="tab-content">
        {selectedTab == "upcoming" ? <UpcomingTab /> : <TodayTab />}
      </div>
    </div>
  );
}
