import logo from "./logo.svg";
import "./App.css";
import Doctor from "./pages/doctor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<Doctor />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
