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
import Reviews from "../components/admin/reviews/reviews";
import Departments from "../components/admin/departments/departments";
import Doctors from "../components/admin/doctors/doctors";
import Patients from "../components/admin/patients/patients";
import AddDepartmentsModal from "../components/admin/departments/AddDepartments";
import AddDoctors from "../components/admin/doctors/AddDoctors";
import EditDepartments from "../components/admin/departments/EditDepartments";
import EditDoctors from "../components/admin/doctors/EditDoctors";
import AddDepartments from "../components/admin/departments/AddDepartments";

const Appointments = lazy(() =>
  import("../components/admin/appointments/appointments")
);

export default function Admin() {
  const [selectedWidget, setSelectedWidget] = useState("dashboard");  
  return (
    <div className="main-wrapper">
      <Header />
      <SlideBar
        selectedWidget={selectedWidget}
        setSelectedWidget={setSelectedWidget}
      />
      <Suspense>
        {selectedWidget == "dashboard" && <Dashboard />}
        {selectedWidget == "appointments" && <Appointments />}
        {selectedWidget == "departments" && <Departments/>}
        {selectedWidget == "doctors" && <Doctors/>}
        {selectedWidget == "patients" && <Patients/> }
        {selectedWidget == "reviews" && <Reviews/>} 
      </Suspense>
      <AddDepartments setSelectedWidget={setSelectedWidget}/>
    </div>
  );
}
