import { useEffect, useState } from "react";
import Department from "./department";

export default function Departments({ selectedWidget, setSelectedWidget }) {
  const [departments, setDepartments] = useState();

  useEffect(() => {
    const url = "http://localhost:8080/departments/allDepartments";
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          Header: "GET",
        });
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-auto">
              <h3 className="page-title">Departments</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Departments</li>
              </ul>
            </div>
            <div className="col-sm-5 col">
              <a
                href="#add_department"
                data-toggle="modal"
                className={
                  "btn btn-primary float-right mt-2" +
                  (selectedWidget === "addDepartments" && "active")
                }
                onClick={() => setSelectedWidget("addDepartments")}
              >
                Add
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {departments ? (
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Departments</th>
                          <th>Location</th>
                          <th>Open Hour</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {departments.map((department, i) => (
                          <Department
                            index={i}
                            department={department}
                            selectedWidget={selectedWidget}
                            setSelectedWidget={setSelectedWidget}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
