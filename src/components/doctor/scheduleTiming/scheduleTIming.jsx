import { useEffect, useState } from "react";
import ScheduleSlot from "./scheduleSlot";
import ScheduleHeader from "./scheduleHeader";
import AddScheduleModal from "./addScheduleModal";

export default function ScheduleTiming() {
  const [schedules, setSchedules] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedDayTab, setSelectedDayTab] = useState("Monday");
  const [mondaySchedule, setMondaySchedule] = useState(null);
  const [tuesdaySchedule, setTuesdaySchedule] = useState(null);
  const [wednesdaySchedule, setWednesdaySchedule] = useState(null);
  const [thursdaySchedule, setThursdaySchedule] = useState(null);
  const [fridaySchedule, setFridaySchedule] = useState(null);
  const [saturdaySchedule, setSaturdaySchedule] = useState(null);
  const [sundaySchedule, setSundaySchedule] = useState(null);

  useEffect(() => {
    const url = "http://localhost:8080/schedules/schedule";
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          Header: "GET",
          credentials: "include",
        });
        const data = await response.json();

        setSchedules(data);
        if(mondaySchedule == null){
          setMondaySchedule([])
          setTuesdaySchedule([])
          setWednesdaySchedule([])
          setThursdaySchedule([])
          setFridaySchedule([])
          setSaturdaySchedule([])
          setSundaySchedule([])

          data.forEach((schedule) => {
            switch (schedule.dateOfweek) {
              case "Monday":
                setMondaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              case "Tuesday":
                setTuesdaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              case "Wednesday":
                setWednesdaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              case "Thursday":
                setThursdaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              case "Friday":
                setFridaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              case "Saturday":
                setSaturdaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              case "Sunday":
                setSundaySchedule((oldArray) => [...oldArray, schedule]);
                break;
              default:
                break;
            }
          });
        }
        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

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
    setSelectedDayTab(todayDayOfWeek);
  }, []);

  return (
    <div className="row">
      {showModal && (
        <AddScheduleModal
          show={showModal}
          setShow={setShowModal}
          day={selectedDayTab}
        />
      )}

      {schedules ? (
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
                              schedules={mondaySchedule}
                            />
                          )}
                          {selectedDayTab === "Tuesday" && (
                            <ScheduleSlot
                              day={selectedDayTab}
                              schedules={tuesdaySchedule}
                            />
                          )}
                          {selectedDayTab === "Wednesday" && (
                            <ScheduleSlot
                              day={selectedDayTab}
                              schedules={wednesdaySchedule}
                            />
                          )}
                          {selectedDayTab === "Thursday" && (
                            <ScheduleSlot
                              day={selectedDayTab}
                              schedules={thursdaySchedule}
                            />
                          )}
                          {selectedDayTab === "Friday" && (
                            <ScheduleSlot
                              day={selectedDayTab}
                              schedules={fridaySchedule}
                            />
                          )}
                          {selectedDayTab === "Saturday" && (
                            <ScheduleSlot
                              day={selectedDayTab}
                              schedules={saturdaySchedule}
                            />
                          )}
                          {selectedDayTab === "Sunday" && (
                            <ScheduleSlot
                              day={selectedDayTab}
                              schedules={sundaySchedule}
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
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
