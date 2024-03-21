import { useState } from "react";
import ScheduleSlot from "./scheduleSlot";
import ScheduleHeader from "./scheduleHeader";
import { DOCTOR_SCHEDULE_DATA } from "./doctorScheduleData";
import AddScheduleModal from "./addScheduleModal";

export default function ScheduleTiming() {
  const doctorData = DOCTOR_SCHEDULE_DATA;
  const [showModal, setShowModal] = useState(false)

  const mondaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Monday";
  });
  const tuesdaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Tuesday";
  });
  const wednesdaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Wednesday";
  });
  const thursdaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Thursday";
  });
  const fridaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Friday";
  });
  const saturdaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Saturday";
  });
  const sundaySchedule = doctorData.doctorSchedules.filter((schedule) => {
    return schedule.dayOfweek === "Sunday";
  });

  let todayDayOfWeek = new Date().getDay();
  switch (todayDayOfWeek) {
    case 1: {
      todayDayOfWeek = "Monday";
      break;
    }
    case 2: {
      todayDayOfWeek = "Tuesday";
      break;
    }
    case 3: {
      todayDayOfWeek = "Wednesday";
      break;
    }
    case 4: {
      todayDayOfWeek = "Thursday";
      break;
    }
    case 5: {
      todayDayOfWeek = "Friday";
      break;
    }
    case 6: {
      todayDayOfWeek = "Saturday";
      break;
    }
    case 7: {
      todayDayOfWeek = "Sunday";
      break;
    }
  }
  const [selectedDayTab, setSelectedDayTab] = useState(todayDayOfWeek);

  return (
    <div className="row">
    {showModal && (<AddScheduleModal show={showModal} setShow={setShowModal} day={selectedDayTab} />)}
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Schedule Timings</h4>
            <div className="profile-box">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Timing Slot Duration</label>
                    <select className="select form-control">
                      <option selected="selected">1 Hour</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card schedule-widget mb-0">
                    <ScheduleHeader
                      selectedDayTab={selectedDayTab}
                      setSelectedDayTab={setSelectedDayTab}
                    />
                    <div className="tab-content schedule-cont">
                      <div className="tab-pane fade show active">
                        <h4 className="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a
                            className="edit-link"
                            data-toggle="modal"
                            href="#edit_time_slot"
                            onClick={() => setShowModal(true)}
                          >
                            <i className="fa fa-edit mr-1" />
                            Add
                          </a>
                        </h4>
                        {/* Slot List */}
                        {selectedDayTab === "Monday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={mondaySchedule}
                          />
                        )}
                        {selectedDayTab === "Tuesday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={tuesdaySchedule}
                          />
                        )}
                        {selectedDayTab === "Wednesday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={wednesdaySchedule}
                          />
                        )}
                        {selectedDayTab === "Thursday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={thursdaySchedule}
                          />
                        )}
                        {selectedDayTab === "Friday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={fridaySchedule}
                          />
                        )}
                        {selectedDayTab === "Saturday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={saturdaySchedule}
                          />
                        )}
                        {selectedDayTab === "Sunday" && (
                          <ScheduleSlot
                            day={selectedDayTab}
                            schedule={sundaySchedule}
                          />
                        )}
                        {/* /Slot List */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
