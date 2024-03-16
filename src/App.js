import logo from "./logo.svg";
import "./App.css";
import Doctor from "./pages/doctor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
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
          {/* <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<AdminHome/>}></Route>
          <Route path='/patient/booking' element={<Booking/>}></Route>
          <Route path='/patient/search' element={<SearchingDoctor/>}></Route>
          <Route path='/patient/doctor-profile' element={<DoctorProfile/>}></Route>
          <Route path='/patient/profile' element={<PatientProfile/>}></Route>
          <Route path='/patient/settings' element={<PatientSettings/>}></Route> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
