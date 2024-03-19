import TimeSlot from "./timeSlot";

export default function ScheduleSlot({day, schedule}) {
  return (
    <div className="tab-pane fade show active">
      <h4 className="card-title d-flex justify-content-between">
        <span>Time Slots</span>
        <a className="edit-link" data-toggle="modal" href="#edit_time_slot">
          <i className="fa fa-edit mr-1" />
          Edit
        </a>
      </h4>
      {/* Slot List */}
      <div className="doc-times">
        {schedule.map((schedule) => (<TimeSlot startTime={schedule.startTime} endTime={schedule.endTime}/>))}
      </div>
      {/* /Slot List */}
    </div>
  );
}
