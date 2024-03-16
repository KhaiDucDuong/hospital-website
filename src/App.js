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


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/doctor' element={<Doctor />}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/patient/booking' element={<Booking/>}></Route>
          <Route path='/patient/search' element={<SearchingDoctor/>}></Route>
          <Route path='/patient/doctor-profile' element={<DoctorProfile/>}></Route>
          <Route path='/patient/profile' element={<PatientProfile/>}></Route>
          <Route path='/patient/settings' element={<PatientSettings/>}></Route> 
          {/* <Route path='/admin' element={<AdminHome/>}></Route>*/}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
