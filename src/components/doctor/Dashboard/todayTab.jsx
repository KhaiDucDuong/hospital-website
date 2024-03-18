import DashboardAppointment from "./dashboardAppointment";

export default function TodayTab({today_appointments}) {
  return (
    <div className="tab-pane show active" id="today-appointments">
      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Appt Date</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th className="text-center">Paid Amount</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {today_appointments.map((appointment) => (<DashboardAppointment appointment={appointment}/>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
