import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Doctor from "./pages/doctor";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/patient/Booking";
import SearchingDoctor from "./pages/patient/SearchingDoctor";
import SearchingDepartment from "./pages/patient/SearchingDepartment";
import DoctorProfile from "./pages/patient/DoctorProfile";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientSettings from "./pages/patient/PatientSettings";
import Admin from "./pages/admin";
import { useState } from "react";

function App() {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/doctor"
          element={<Doctor isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/register"
          element={<Register isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/login"
          element={<Login isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/patient/booking"
          element={<Booking isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/doctor/search"
          element={<SearchingDoctor isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/department/search"
          element={<SearchingDepartment isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/patient/doctor-profile"
          element={
            <DoctorProfile isLoggedIn={isLoggedIn} />
          }
        ></Route>
        <Route
          path="/patient/profile"
          element={<PatientProfile isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/patient/settings"
          element={<PatientSettings isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
