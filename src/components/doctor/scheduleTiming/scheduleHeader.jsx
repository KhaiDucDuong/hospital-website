export default function ScheduleHeader({selectedDayTab, setSelectedDayTab}) {
  return (
    <div className="schedule-header">
      <div className="schedule-nav">
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Sunday" && "active")
              }
              onClick={() => setSelectedDayTab("Sunday")}
              data-toggle="tab"
            >
              Sunday
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Monday" && "active")
              }
              onClick={() => setSelectedDayTab("Monday")}
              data-toggle="tab"
            >
              Monday
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Tuesday" && "active")
              }
              onClick={() => setSelectedDayTab("Tuesday")}
              data-toggle="tab"
            >
              Tuesday
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Wednesday" && "active")
              }
              onClick={() => setSelectedDayTab("Wednesday")}
              data-toggle="tab"
            >
              Wednesday
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Thursday" && "active")
              }
              onClick={() => setSelectedDayTab("Thursday")}
              data-toggle="tab"
            >
              Thursday
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Friday" && "active")
              }
              onClick={() => setSelectedDayTab("Friday")}
              data-toggle="tab"
            >
              Friday
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link schedule-tab-item " + (selectedDayTab === "Saturday" && "active")
              }
              onClick={() => setSelectedDayTab("Saturday")}
              data-toggle="tab"
            >
              Saturday
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
