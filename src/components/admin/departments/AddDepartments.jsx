import { useState } from "react";

const AddDepartments = () => {
  const [departmentName, setDepartmentName] = useState("")
  const [departmentLocation, setDepartmentLocation] = useState("")
  const [departmentOpenHour, setDepartmentOpenHour] = useState("7 giờ")
  const [departmentCloseHour, setDepartmentCloseHour] = useState("17 giờ")

  const url = "http://localhost:8080/departments/createDepartment";

  const submitOnClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departmentName: departmentName,
        location: departmentLocation,
        openTime: departmentOpenHour,
        closeTime: departmentCloseHour
      }),
    };
    try {
      let response = await fetch(url, requestOptions);
      let data = await response.json();
      if (response.status === 201) {
        console.log("add department successfully!")
      } else {
        console.log("Failed to add department!");
      }
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  };


  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Add Department</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a>Departments</a>
                </li>
                <li className="breadcrumb-item active">Add Department</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="departmentName">Department Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="departmentName"
                    placeholder="Enter department name"
                    style={{ marginBottom: 15 }}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  <label htmlFor="departmentLocation">
                    Department Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="departmentLocation"
                    placeholder="Enter department location"
                    style={{ marginBottom: 15 }}
                    onChange={(e) => setDepartmentLocation(e.target.value)}
                  />
                  <label htmlFor="departmentOpenTime">
                    Department Open Hour
                  </label>
                  <select
                    className="form-control"
                    id="departmentOpenTime"
                    style={{ marginBottom: 15 }}
                    onChange={(e) => setDepartmentOpenHour(e.target.value)}
                  >
                    <option>7 giờ</option>
                    <option>8 giờ</option>
                    <option>9 giờ</option>
                    <option>0 giờ</option>
                  </select>
                  <label htmlFor="departmentCloseTime">
                    Department Close Hour
                  </label>
                  <select
                    className="form-control"
                    id="departmentCloseTime"
                    style={{ marginBottom: 15 }}
                    onChange={(e) => setDepartmentCloseHour(e.target.value)}
                  >
                    <option>17 giờ</option>
                    <option>20 giờ</option>
                    <option>24 giờ</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => submitOnClick()}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartments;
