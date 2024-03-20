import React from "react";
import Breadcrumb from "../Breadcum";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import DoctorCard from "./doctorCard";

function SearchingDoctor({ isLoggedIn, setLoggedIn }) {
  let [doctor, setDoctor] = useState("");
  let [doctorresult, setDoctorresult] = useState([]);
  let queryParameters = new URLSearchParams(window.location.search)
    useEffect(() => {
      doctor = queryParameters.get("doctor")
      let url = `http://localhost:8080/doctors/search/${doctor}`;
      if (doctor == null || doctor == "")
       {
          doctor = queryParameters.get("department")
          url = `http://localhost:8080/doctors/department/${doctor}`;
       }
        let fetchData = async () => {
            try {
                let response = await fetch(url, {method: 'GET' });
                let data = await response.json();
                setDoctorresult(data);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Breadcrumb data={doctor} />

      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <div className="card search-filter">
                <div className="card-header">
                  <h4 className="card-title mb-0">Search Filter</h4>
                </div>
                <div className="card-body">
                  <div className="filter-widget">
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Gender</h4>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="gender_type"
                          defaultChecked=""
                        />
                        <span className="checkmark" /> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span className="checkmark" /> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Select Specialist</h4>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked=""
                        />
                        <span className="checkmark" /> Urology
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked=""
                        />
                        <span className="checkmark" /> Neurology
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Dentist
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Orthopedic
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Cardiologist
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Cardiologist
                      </label>
                    </div>
                  </div>
                  <div className="btn-search">
                    <button type="button" className="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {/* /Search Filter */}
            </div>

            <div className="col-md-12 col-lg-8 col-xl-9">
              {doctorresult.map((doctor, index) => (
                <DoctorCard doctor={doctor} index={index} />
              ))}
              <div className="load-more text-center">
                <a
                  className="btn btn-primary btn-sm"
                  href="javascript:void(0);"
                >
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer />
    </>
  );
}

export default SearchingDoctor;
