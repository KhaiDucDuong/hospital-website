import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctor from "./pages/doctor";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/patient/Booking";
import SearchingDoctor from "./pages/patient/SearchingDoctor";
import DoctorProfile from "./pages/patient/DoctorProfile";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientSettings from "./pages/patient/PatientSettings";
import Admin from "./pages/admin";

function App() {
  const doctorData = {  
    Doctorprofile: 
   {
    doctor_id : 123,
    Gender : 1,
    Name : 'Tiến gié',
    DOB : '1989-12-12',
        phone_number : 84848484,
        Department : 'Bệnh viện dã chiến Bình Dương',
        Description : 'Tôi là bác sĩ chuyên trị bệnh xạo lồn với 25 năm kinh nghiệm',
        Specialize : 'Dentist',
       }
    }
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/doctor' element={<Doctor />}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/patient/booking' element={<Booking/>}></Route>
          <Route path='/patient/search' element={<SearchingDoctor/> }></Route>
          <Route path='/patient/doctor-profile/:id' element={<DoctorProfile doctor={doctorData}/>}></Route>
          <Route path='/patient/profile' element={<PatientProfile/>}></Route>
          <Route path='/patient/settings' element={<PatientSettings/>}></Route> 
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
