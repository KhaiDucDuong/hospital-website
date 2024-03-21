import TimeSlot from "./timeSlot";

export default function ScheduleSlot({ day, schedules }) {
  console.log("SHEDULE SLOT")
  console.log(schedules)
  return (
    <div className="doc-times">
      {schedules.map((schedule) => (
        <TimeSlot time={schedule.time} />
      ))}
    </div>
  );
}
