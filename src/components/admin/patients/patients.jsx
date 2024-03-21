import { useState, useEffect } from "react";
import { getAllPatients } from "../../../services/PatientService";
import { Modal, Card } from "react-bootstrap";
export default function Patients(props) {
  const [patientList, setPatientList] = useState([]);
  const [openModalView, setOpenModalView] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState();

  useEffect(() => {
    setPatientList(props.patients);
  }, []);


  const openModal = (patient) => {
    setSelectedPatient(patient);
    setOpenModalView(true);
  }
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">List of Patient</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript:(0);">Users</a>
                </li>
                <li className="breadcrumb-item active">Patient</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Patient ID</th>
                          <th>Patient Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientList?.map((patient) => (
                          <tr>
                          <td>#PT001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="../img/patients/patient1.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="#">{patient.fullname}</a>
                            </h2>
                          </td>
                          <td>{patient.phoneNumber}</td>
                          <td>
                            {patient.email}
                          </td>
                          <td>
                            {/* Nút edit */}
                            <a
                              href="#"
                              className="btn btn-sm bg-success-light"
                              data-toggle="modal"
                              onClick={() => openModal(patient)}
                            >
                              <i className="fe fe-pencil" /> Details
                            </a>
                          </td>
                        </tr>
                        ))}

                        {openModalView && 
                          <Modal
                            show={openModalView}
                            onHide={() => setOpenModalView(false)}
                            dialogClassName="modal-100w"
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="example-custom-modal-styling-title">
                                Patient profile
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Card>
                                <Card.Body>
                                  <Card.Title>{selectedPatient.fullname}</Card.Title>
                                  <Card.Text>
                                    {selectedPatient.email}
                                  </Card.Text>
                                  <Card.Text>
                                    {selectedPatient.phoneNumber}
                                  </Card.Text>
                                </Card.Body>
                              </Card>

                            </Modal.Body>
                          </Modal>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
