export default function TimeSlot({time}) {
  return (
    <div className="doc-slot-list">
      {time}
      <a className="delete_schedule">
        <i className="fa fa-times" />
      </a>
    </div>
  );
}
