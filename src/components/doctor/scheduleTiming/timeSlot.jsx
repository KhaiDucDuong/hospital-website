export default function TimeSlot({startTime, endTime}) {
  return (
    <div className="doc-slot-list">
      {startTime} - {endTime}
      <a className="delete_schedule">
        <i className="fa fa-times" />
      </a>
    </div>
  );
}
