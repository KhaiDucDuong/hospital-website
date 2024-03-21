import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useEffect, useState } from "react";
import moment from 'moment';

const PatientProfile = ({ isLoggedIn, setLoggedIn }) => {
    const [patient, setPatient] = useState("");
    const [apppatient, setAppPatient] = useState([]);
    useEffect(() => {
        const url = "http://localhost:8080/patients/info";
        const appurl = "http://localhost:8080/appointment/appointmentOrdered"
        const fetchData = async () => {
            try {
                const response = await fetch(url, {Header: "GET", credentials: "include"});
                const data = await response.json();
                const appresponse = await fetch(appurl, {Header: "GET", credentials: "include"});
                const appdata = await appresponse.json();
                setPatient(data)
                setAppPatient(appdata)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    function Checkstatus(integer){
        if (integer == 1){
        return "Book"}
        if (integer == 0)
        {return "Canceled"}
        else {return "Closed"}

    }

    const genderString = patient.gender ? 'Male' : 'Female';
  return (
    <>
        <Header isLoggedIn={isLoggedIn} />
        <>
            <div className="content" style={{padding: '100px 0'}}>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                    {/* Profile Widget */}
                    <div className="card widget-profile pat-widget-profile">
                        <div className="card-body">
                        <div className="pro-widget-content">
                            <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                                <img
                                src="../..//img/patients/patient.jpg"
                                alt="User Image"
                                />
                            </a>
                            <div className="profile-det-info">
                                <h3>{patient.fullname}</h3>
                                <div className="patient-details">
                                <h5>
                                    <b>Date of birth : {moment(patient.dateOfBirth).format("DD-MM-YYYY")}</b>
                                </h5>
                                <h5 className="mb-0">
                                    <i/>Gender : {genderString}
                                </h5>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="patient-info">
                            <ul>
                            <li>
                                Phone <span>{patient.phoneNumber}</span>
                            </li>
                            <li>
                                Date of Birth <span>{new Date(patient.dateOfbirth).toDateString()}</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* /Profile Widget */}
                    {/* Last Booking */}
                    <div className="card">
                        <div className="card-header">
                        <h4 className="card-title">Last Booking</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="media align-items-center">
                            <div className="mr-3">
                                <img
                                alt="Image placeholder"
                                src="../..//img/doctors/doctor-thumb-02.jpg"
                                className="avatar  rounded-circle"
                                />
                            </div>
                            <div className="media-body">
                                <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                                <span className="d-block text-sm text-muted">Dentist</span>
                                <span className="d-block text-sm text-muted">
                                14 Nov 2019 5.00 PM
                                </span>
                            </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media align-items-center">
                            <div className="mr-3">
                                <img
                                alt="Image placeholder"
                                src="../..//img/doctors/doctor-thumb-02.jpg"
                                className="avatar  rounded-circle"
                                />
                            </div>
                            <div className="media-body">
                                <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                                <span className="d-block text-sm text-muted">Dentist</span>
                                <span className="d-block text-sm text-muted">
                                12 Nov 2019 11.00 AM
                                </span>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    {/* /Last Booking */}
                    </div>
                    <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                    <div className="card">
                        <div className="card-body pt-0">
                        <div className="user-tabs">
                            <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                            <li className="nav-item">
                                <a
                                className="nav-link active"
                                href="#pat_appointments"
                                data-toggle="tab"
                                >
                                Appointments
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pres" data-toggle="tab">
                                <span>Prescription</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#medical" data-toggle="tab">
                                <span className="med-records">Medical Records</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#billing" data-toggle="tab">
                                <span>Billing</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            {/* Appointment Tab */}
                            <div
                            id="pat_appointments"
                            className="tab-pane fade show active"
                            >
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                        <th>Doctor</th>
                                        <th>Created At</th>
                                        <th>Booking Date</th>
                                        <th>Status</th>
                                        <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {apppatient.map((app,index) => (
                                    <tr>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                            </a>
                                            </h2>
                                        </td>
                                        <td>
                                            {moment(app.date).format("DD-MM-YYYY")}
                                            <span className="d-block text-info">
                                            </span>
                                        </td>
                                        <td>12 Nov 2024</td>
                                        <td>
                                            <span className="badge badge-pill bg-success-light">
                                            {Checkstatus(app.status)}
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-success-light"
                                            >
                                                <i className="far fa-edit" /> Edit
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Appointment Tab */}
                            {/* Prescription Tab */}
                            <div className="tab-pane fade" id="pres">
                            <div className="text-right">
                                <a href="add-prescription.html" className="add-new-btn">
                                Add Prescription
                                </a>
                            </div>
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                        <th>Date </th>
                                        <th>Name</th>
                                        <th>Created by </th>
                                        <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>14 Nov 2019</td>
                                        <td>Prescription 1</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-01.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Ruby Perrin <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>13 Nov 2019</td>
                                        <td>Prescription 2</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-02.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Darren Elder <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a
                                                href="edit-prescription.html"
                                                className="btn btn-sm bg-success-light"
                                            >
                                                <i className="fas fa-edit" /> Edit
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-danger-light"
                                            >
                                                <i className="far fa-trash-alt" /> Delete
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>12 Nov 2019</td>
                                        <td>Prescription 3</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-03.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Deborah Angel <span>Cardiology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>11 Nov 2019</td>
                                        <td>Prescription 4</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-04.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Sofia Brient <span>Urology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>10 Nov 2019</td>
                                        <td>Prescription 5</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-05.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Marvin Campbell <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>9 Nov 2019</td>
                                        <td>Prescription 6</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-06.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Katharine Berthold{" "}
                                                <span>Orthopaedics</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>8 Nov 2019</td>
                                        <td>Prescription 7</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-07.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Linda Tobin <span>Neurology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>7 Nov 2019</td>
                                        <td>Prescription 8</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-08.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Paul Richard <span>Dermatology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>6 Nov 2019</td>
                                        <td>Prescription 9</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-09.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. John Gibbs <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>5 Nov 2019</td>
                                        <td>Prescription 10</td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-10.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Olga Barlow <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Prescription Tab */}
                            {/* Medical Records Tab */}
                            <div className="tab-pane fade" id="medical">
                            <div className="text-right">
                                <a
                                href="#"
                                className="add-new-btn"
                                data-toggle="modal"
                                data-target="#add_medical_records"
                                >
                                Add Medical Records
                                </a>
                            </div>
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                        <th>ID</th>
                                        <th>Date </th>
                                        <th>Description</th>
                                        <th>Attachment</th>
                                        <th>Created</th>
                                        <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>
                                            <a >#MR-0010</a>
                                        </td>
                                        <td>14 Nov 2019</td>
                                        <td>Dental Filling</td>
                                        <td>
                                            <a href="#">dental-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-01.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Ruby Perrin <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0009</a>
                                        </td>
                                        <td>13 Nov 2019</td>
                                        <td>Teeth Cleaning</td>
                                        <td>
                                            <a href="#">dental-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-02.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Darren Elder <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a
                                                href="edit-prescription.html"
                                                className="btn btn-sm bg-success-light"
                                                data-toggle="modal"
                                                data-target="#add_medical_records"
                                            >
                                                <i className="fas fa-edit" /> Edit
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-danger-light"
                                            >
                                                <i className="far fa-trash-alt" /> Delete
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0008</a>
                                        </td>
                                        <td>12 Nov 2019</td>
                                        <td>General Checkup</td>
                                        <td>
                                            <a href="#">cardio-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-03.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Deborah Angel <span>Cardiology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0007</a>
                                        </td>
                                        <td>11 Nov 2019</td>
                                        <td>General Test</td>
                                        <td>
                                            <a href="#">general-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-04.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Sofia Brient <span>Urology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0006</a>
                                        </td>
                                        <td>10 Nov 2019</td>
                                        <td>Eye Test</td>
                                        <td>
                                            <a href="#">eye-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-05.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Marvin Campbell{" "}
                                                <span>Ophthalmology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0005</a>
                                        </td>
                                        <td>9 Nov 2019</td>
                                        <td>Leg Pain</td>
                                        <td>
                                            <a href="#">ortho-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-06.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Katharine Berthold{" "}
                                                <span>Orthopaedics</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0004</a>
                                        </td>
                                        <td>8 Nov 2019</td>
                                        <td>Head pain</td>
                                        <td>
                                            <a href="#">neuro-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-07.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Linda Tobin <span>Neurology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0003</a>
                                        </td>
                                        <td>7 Nov 2019</td>
                                        <td>Skin Alergy</td>
                                        <td>
                                            <a href="#">alergy-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-08.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Paul Richard <span>Dermatology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0002</a>
                                        </td>
                                        <td>6 Nov 2019</td>
                                        <td>Dental Removing</td>
                                        <td>
                                            <a href="#">dental-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-09.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. John Gibbs <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a >#MR-0001</a>
                                        </td>
                                        <td>5 Nov 2019</td>
                                        <td>Dental Filling</td>
                                        <td>
                                            <a href="#">dental-test.pdf</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-10.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Olga Barlow <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Medical Records Tab */}
                            {/* Billing Tab */}
                            <div className="tab-pane" id="billing">
                            <div className="text-right">
                                <a className="add-new-btn" href="add-billing.html">
                                Add Billing
                                </a>
                            </div>
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                        <th>Invoice No</th>
                                        <th>Doctor</th>
                                        <th>Amount</th>
                                        <th>Paid On</th>
                                        <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0010</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-01.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Ruby Perrin <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$450</td>
                                        <td>14 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0009</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-02.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Darren Elder <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$300</td>
                                        <td>13 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a
                                                href="edit-billing.html"
                                                className="btn btn-sm bg-success-light"
                                            >
                                                <i className="fas fa-edit" /> Edit
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-danger-light"
                                            >
                                                <i className="far fa-trash-alt" /> Delete
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0008</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-03.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Deborah Angel <span>Cardiology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$150</td>
                                        <td>12 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0007</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-04.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Sofia Brient <span>Urology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$50</td>
                                        <td>11 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0006</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-05.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Marvin Campbell{" "}
                                                <span>Ophthalmology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$600</td>
                                        <td>10 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0005</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-06.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Katharine Berthold{" "}
                                                <span>Orthopaedics</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$200</td>
                                        <td>9 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0004</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-07.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Linda Tobin <span>Neurology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$100</td>
                                        <td>8 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0003</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-08.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Paul Richard <span>Dermatology</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$250</td>
                                        <td>7 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0002</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-09.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. John Gibbs <span>Dental</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$175</td>
                                        <td>6 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <a href="invoice-view.html">#INV-0001</a>
                                        </td>
                                        <td>
                                            <h2 className="table-avatar">
                                            <a
                                                href="doctor-profile.html"
                                                className="avatar avatar-sm mr-2"
                                            >
                                                <img
                                                className="avatar-img rounded-circle"
                                                src="../..//img/doctors/doctor-thumb-10.jpg"
                                                alt="User Image"
                                                />
                                            </a>
                                            <a href="doctor-profile.html">
                                                Dr. Olga Barlow <span>#0010</span>
                                            </a>
                                            </h2>
                                        </td>
                                        <td>$550</td>
                                        <td>5 Nov 2019</td>
                                        <td className="text-right">
                                            <div className="table-action">
                                            <a
                                                
                                                className="btn btn-sm bg-primary-light"
                                            >
                                                <i className="fas fa-print" /> Print
                                            </a>
                                            <a
                                                
                                                className="btn btn-sm bg-info-light"
                                            >
                                                <i className="far fa-eye" /> View
                                            </a>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Billing Tab */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /Page Content */}
            </>


        <Footer/>
    
    </>
  )
}

export default PatientProfile