import React from 'react'

import Appointment from "./appoinment";

export default function Appointments({appointments}) {
  return (
    <div className="appointments">
      {appointments.map((appointment) => (<Appointment appointment={appointment}/>))}
    </div>
  );
}
