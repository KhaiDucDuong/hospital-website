import TimeSlot from "./timeSlot";

export default function ScheduleSlot({ day, schedule }) {
  return (
    <div className="doc-times">
      {schedule.map((schedule) => (
        <TimeSlot startTime={schedule.startTime} endTime={schedule.endTime} />
      ))}
    </div>
  );
}
