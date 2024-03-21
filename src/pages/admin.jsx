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
import { getAllDepartments } from "../services/DepartmentService";
import { getAllDoctors } from "../services/DoctorService";
import { getAllPatients } from "../services/PatientService";
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

  const [departmentList, setDepartmentList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const responseDoctor = await getAllDoctors();
          setDoctorList(responseDoctor.data);

          const responsePatient = await getAllPatients();
          setPatientList(responsePatient.data);

          const responseDepartment = await getAllDepartments();
          setDepartmentList(responseDepartment.data);

        } catch (error) {
          console.log(error);
        }
    };

    fetchData();
  }, []);
  return (
    <div className="main-wrapper">
      <Header isLoggedIn={isLoggedIn}  />
      <SlideBar
        selectedWidget={selectedWidget}
        setSelectedWidget={setSelectedWidget}
      />
      <Suspense>
        {selectedWidget === "dashboard" && <Dashboard doctors = {doctorList} patients = {patientList}/>}
        {selectedWidget === "appointments" && <Appointments departments = {departmentList}/>}
        {selectedWidget === "departments" && <Departments departments = {departmentList}/>}
        {selectedWidget === "doctors" && <Doctors doctors = {doctorList}/>}
        {selectedWidget === "patients" && <Patients patients = {patientList}/>}
      </Suspense>
    </div>
  );
}
