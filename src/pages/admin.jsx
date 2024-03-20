import "../assets/admin/assets/css/bootstrap.min.css";
import "../assets/admin/assets/css/font-awesome.min.css";
import "../assets/admin/assets/css/feathericon.min.css";
import "../assets/admin/assets/css/style.css";
import "../assets/admin/assets/plugins/morris/morris.css";
import "../assets/admin/assets/plugins/datatables/datatables.min.css";
import Header from "../components/admin/header";
import SlideBar from "../components/admin/slideBar";
import Dashboard from "../components/admin/dashboard/dashboard";
import { lazy, useState, useEffect } from "react";
import { Suspense } from "react";

const Appointments = lazy(() =>
  import("../components/admin/appointments/appointments")
);
const Departments = lazy(() =>
  import("../components/admin/departments/departments")
);
const Doctors = lazy(() => import("../components/admin/doctors/doctors"));
const Patients = lazy(() => import("../components/admin/patients/patients"));
const AddDoctors = lazy(() =>
  import("../components/admin/doctors/AddDoctors.jsx")
);
const EditDoctors = lazy(() =>
  import("../components/admin/doctors/EditDoctors")
);
const AddDepartments = lazy(() =>
  import("../components/admin/departments/AddDepartments")
);
const EditDepartments = lazy(() =>
  import("../components/admin/departments/EditDepartments")
);
export default function Admin({ isLoggedIn, setLoggedIn }) {
  const [selectedWidget, setSelectedWidget] = useState("dashboard");
  return (
    <div className="main-wrapper">
      <Header isLoggedIn={isLoggedIn}  />
      <SlideBar
        selectedWidget={selectedWidget}
        setSelectedWidget={setSelectedWidget}
      />
      <Suspense>
        {selectedWidget === "dashboard" && <Dashboard />}
        {selectedWidget === "appointments" && <Appointments />}
        {selectedWidget === "departments" && (
          <Departments
            selectedWidget={selectedWidget}
            setSelectedWidget={setSelectedWidget}
          />
        )}
        {selectedWidget === "doctors" && (
          <Doctors
            selectedWidget={selectedWidget}
            setSelectedWidget={setSelectedWidget}
          />
        )}
        {selectedWidget === "patients" && <Patients />}
        {selectedWidget === "addDoctors" && <AddDoctors />}
        {selectedWidget === "editDoctors" && <EditDoctors />}
        {selectedWidget === "addDepartments" && <AddDepartments />}
        {selectedWidget === "editDepartments" && <EditDepartments />}
      </Suspense>
    </div>
  );
}
