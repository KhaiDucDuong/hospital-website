import React from 'react'
import Breadcrumb from './Breadcum'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect, useState } from "react";


function SearchingDepartment() {
  let [department, setApartment] = useState("");
  let [departmentresult, setApartmentresult] = useState([]);
  let queryParameters = new URLSearchParams(window.location.search)
  department = queryParameters.get("department")
    useEffect(() => {
        let url = `http://localhost:8080/departments/search/${department}`;
        let fetchData = async () => {
            try {
                let response = await fetch(url, {method: 'GET' });
                let data = await response.json();
                setApartmentresult(data);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
  return (
    <>
      <Header/>
      <Breadcrumb data={department}/>

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
                      <h4>Size</h4>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="gender_type"
                            defaultChecked=""
                          />
                          <span className="checkmark" /> Big Department
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Small Department
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
                {/* Doctor Widget */}
                {departmentresult.map((dere,index) => (
                <div className="card">
                  <div className="card-body">
                    <div className="doctor-widget">
                      <div className="doc-info-left">
                        <div className="doctor-img">
                          <a href="/patient/doctor-profile">
                            <img
                              src="../../img/doctors/doctor-thumb-01.jpg"
                              className="img-fluid"
                              alt="User Image"
                            />
                          </a>
                        </div>
                        <div className="doc-info-cont">
                          <h4 className="doc-name" >
                            <a href="/patient/doctor-profile">{dere.departmentName}</a>
                          </h4>
                          <p className="doc-speciality">
                            Hệ thống y tế toàn quốc.
                          </p>
                          <h5 className="doc-department">
                            <img
                              src="../../img/specialities/specialities-05.png"
                              className="img-fluid"
                              alt="Speciality" key={index}
                            />
                            Location: {dere.location}
                          </h5>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">
                              (17)
                            </span>
                          </div>
                          <div className="clinic-details">
                            <p className="doc-location">
                              <i className="fas fa-map-marker-alt" /> Sài Gòn, Việt Lam
                            </p>
                            <ul className="clinic-gallery">
                              <li>
                                <a
                                  href="../../img/features/feature-01.jpg"
                                  data-fancybox="gallery"
                                >
                                  <img
                                    src="../../img/features/feature-01.jpg"
                                    alt="Feature"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="../../img/features/feature-02.jpg"
                                  data-fancybox="gallery"
                                >
                                  <img
                                    src="../../img/features/feature-02.jpg"
                                    alt="Feature"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="../../img/features/feature-03.jpg"
                                  data-fancybox="gallery"
                                >
                                  <img
                                    src="../../img/features/feature-03.jpg"
                                    alt="Feature"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="../../img/features/feature-04.jpg"
                                  data-fancybox="gallery"
                                >
                                  <img
                                    src="../../img/features/feature-04.jpg"
                                    alt="Feature"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-services">
                            <span>Dental Fillings</span>
                            <span> Whitneing</span>
                          </div>
                        </div>
                      </div>
                      <div className="doc-info-right">
                        <div className="clini-infos">
                          <ul>
                            <li>
                              <i className="far fa-thumbs-up" /> 98%
                            </li>
                            <li>
                              <i className="far fa-comment" /> 17 Feedback
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" /> Florida, USA
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                              <i
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                title="Lorem Ipsum"
                              />{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-booking">
                          <a className="view-pro-btn" href="/patient/doctor-profile">
                            View Doctors
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>))}
                {/* /Doctor Widget */}
                {/* Doctor Widget */}

                {/* /Doctor Widget */}
                {/* Doctor Widget */}

                {/* /Doctor Widget */}
                {/* Doctor Widget */}

                {/* /Doctor Widget */}
                {/* Doctor Widget */}

                {/* /Doctor Widget */}
                <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="javascript:void(0);">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}


      <Footer/>
    </>
  )
}

export default SearchingDepartment