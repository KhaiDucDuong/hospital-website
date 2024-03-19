export default function DashboardAppointment({ appointment, disableBtn }) {
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a href="patient-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src="../../img/patients/patient.jpg"
              alt="User Image"
            />
          </a>
          <a>
            {appointment.patient_name} <span>#PT0016</span>
          </a>
        </h2>
      </td>
      <td>
        {appointment.date}
        <span className="d-block text-info">
          {appointment.startTime}-{appointment.endTime}
        </span>
      </td>
      <td>General</td>
      <td>New Patient</td>
      <td className="text-center">$150</td>
      {disableBtn || (
        <td className="text-right">
          <div className="table-action">
            <a
              href="javascript:void(0);"
              className="btn btn-sm bg-info-light m-1"
            >
              <i className="far fa-eye" /> View
            </a>
            <a
              href="javascript:void(0);"
              className="btn btn-sm bg-success-light m-1"
            >
              <i className="fas fa-check" /> Accept
            </a>
            <a
              href="javascript:void(0);"
              className="btn btn-sm bg-danger-light m-1"
            >
              <i className="fas fa-times" /> Cancel
            </a>
          </div>
        </td>
      )}
    </tr>
  );
}
