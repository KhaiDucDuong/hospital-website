import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctor from "./pages/doctor";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/patient/Booking";
// import * as jquery from "./assets/js/jquery.min.js";
// import * as popper from "./assets/js/popper.min.js";
// import * as bootstrap from"./assets/js/bootstrap.min.js";
// import * as resizeSensor from "./assets/plugins/theia-sticky-sidebar/ResizeSensor.js";
// import * as thesia_sticky_sidebar from "./assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js";
// import "./assets/js/script.js";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/doctor' element={<Doctor />}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/patient/booking' element={<Booking/>}></Route>
          {/*<Route path='/patient/search' element={<SearchingDoctor/>}></Route>
          <Route path='/patient/doctor-profile' element={<DoctorProfile/>}></Route>
          <Route path='/patient/profile' element={<PatientProfile/>}></Route>
          <Route path='/patient/settings' element={<PatientSettings/>}></Route> 
          <Route path='/admin' element={<AdminHome/>}></Route>*/}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
