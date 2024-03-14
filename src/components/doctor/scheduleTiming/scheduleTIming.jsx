export default function ScheduleTiming() {
  return (
      <div className="row">
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
                        <option>-</option>
                        <option>15 mins</option>
                        <option selected="selected">30 mins</option>
                        <option>45 mins</option>
                        <option>1 Hour</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card schedule-widget mb-0">
                      {/* Schedule Header */}
                      <div className="schedule-header">
                        {/* Schedule Nav */}
                        <div className="schedule-nav">
                          <ul className="nav nav-tabs nav-justified">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#slot_sunday"
                              >
                                Sunday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#slot_monday"
                              >
                                Monday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#slot_tuesday"
                              >
                                Tuesday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#slot_wednesday"
                              >
                                Wednesday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#slot_thursday"
                              >
                                Thursday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#slot_friday"
                              >
                                Friday
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#slot_saturday"
                              >
                                Saturday
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /Schedule Nav */}
                      </div>
                      {/* /Schedule Header */}
                      {/* Schedule Content */}
                      <div className="tab-content schedule-cont">
                        {/* Sunday Slot */}
                        <div id="slot_sunday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#add_time_slot"
                            >
                              <i className="fa fa-plus-circle" /> Add Slot
                            </a>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Sunday Slot */}
                        {/* Monday Slot */}
                        <div
                          id="slot_monday"
                          className="tab-pane fade show active"
                        >
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#edit_time_slot"
                            >
                              <i className="fa fa-edit mr-1" />
                              Edit
                            </a>
                          </h4>
                          {/* Slot List */}
                          <div className="doc-times">
                            <div className="doc-slot-list">
                              8:00 pm - 11:30 pm
                              <a
                                href="javascript:void(0)"
                                className="delete_schedule"
                              >
                                <i className="fa fa-times" />
                              </a>
                            </div>
                            <div className="doc-slot-list">
                              11:30 pm - 1:30 pm
                              <a
                                href="javascript:void(0)"
                                className="delete_schedule"
                              >
                                <i className="fa fa-times" />
                              </a>
                            </div>
                            <div className="doc-slot-list">
                              3:00 pm - 5:00 pm
                              <a
                                href="javascript:void(0)"
                                className="delete_schedule"
                              >
                                <i className="fa fa-times" />
                              </a>
                            </div>
                            <div className="doc-slot-list">
                              6:00 pm - 11:00 pm
                              <a
                                href="javascript:void(0)"
                                className="delete_schedule"
                              >
                                <i className="fa fa-times" />
                              </a>
                            </div>
                          </div>
                          {/* /Slot List */}
                        </div>
                        {/* /Monday Slot */}
                        {/* Tuesday Slot */}
                        <div id="slot_tuesday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#add_time_slot"
                            >
                              <i className="fa fa-plus-circle" /> Add Slot
                            </a>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Tuesday Slot */}
                        {/* Wednesday Slot */}
                        <div id="slot_wednesday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#add_time_slot"
                            >
                              <i className="fa fa-plus-circle" /> Add Slot
                            </a>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Wednesday Slot */}
                        {/* Thursday Slot */}
                        <div id="slot_thursday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#add_time_slot"
                            >
                              <i className="fa fa-plus-circle" /> Add Slot
                            </a>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Thursday Slot */}
                        {/* Friday Slot */}
                        <div id="slot_friday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#add_time_slot"
                            >
                              <i className="fa fa-plus-circle" /> Add Slot
                            </a>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Friday Slot */}
                        {/* Saturday Slot */}
                        <div id="slot_saturday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#add_time_slot"
                            >
                              <i className="fa fa-plus-circle" /> Add Slot
                            </a>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Saturday Slot */}
                      </div>
                      {/* /Schedule Content */}
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
