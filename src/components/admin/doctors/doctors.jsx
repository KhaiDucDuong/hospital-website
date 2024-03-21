import { useState, useEffect } from "react";
import { Modal, Card } from "react-bootstrap";
import { createDoctor, deleteDoctor } from "../../../services/DoctorService";

export default function Doctors(props) {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    setDoctorList(props.doctors);
  }, []);


  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalView, setOpenModalView] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [openModalAdd, setOpenModalAdd] = useState(false);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModalView(true);
  }

  const openEditModal = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModalEdit(true);
  }

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try{
      //console.log(e.target.fullName.value);
      const newDoctor = {
        "deparmentId": null,
        "fullname": e.target.fullName.value,
        "gender": e.target.gender.checked,
        "dateOfbirth": "2003-05-15T00:00:00.000+00:00",
        "phoneNumber": e.target.phone.value,
        "specialize": e.target.specialize.value,
        "description": e.target.description.value,
        "availableFlag": true,
        "isDeleted": false
      };

      //console.log(newDoctor);
      await createDoctor(newDoctor);
      
      const newDoctorList = [...doctorList, newDoctor];
      setDoctorList(newDoctorList);

      setOpenModalAdd(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (doctor) => {

    try{
      //console.log(e.target.fullName.value);
      const deletedDoctor = {
        "_id": doctor._id,
        "deparmentId": null,
        "fullname": doctor.fullname,
        "gender": doctor.gender,
        "dateOfbirth": doctor.dateOfbirth,
        "phoneNumber": doctor.phoneNumber,
        "specialize": doctor.specialize,
        "description": doctor.description,
        "availableFlag": true,
        "isDeleted": false
      };

      //console.log(deletedDoctor);
      await deleteDoctor(deletedDoctor);
      
      const newDoctorList = doctorList.filter((doctor) => doctor._id != deletedDoctor._id);
      setDoctorList(newDoctorList);

      // setOpenModalAdd(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-auto">
              <h3 className="page-title">List of Doctors</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Doctor</li>
              </ul>
            </div>
            <div className="col-sm-5 col">
              {/* Di chuyển nút Add vào đây */}
              <a
                className="btn btn-primary btn-md float-right mt-2"
                data-toggle="modal"
                onClick={() => setOpenModalAdd(true)}
                >
                  Add new
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Earned</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doctorList?.map((doctor) => doctor.isDeleted ? null : (
                        <tr>
                        <td>1</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="../img/doctors/doctor-thumb-01.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">{doctor.fullname}</a>
                          </h2>
                        </td>
                        <td>{doctor.specialize}</td>
                        <td>$3100.00</td>
                        <td className="text-right">
                          {/* Nút edit */}
                          <a
                              className="btn btn-sm bg-success-light mx-2"
                              data-toggle="modal"
                              onClick={() => openModal(doctor)}
                            >
                              <i className="fe fe-pencil" /> View
                            </a>
                            <a
                              data-toggle="modal"
                              className="btn btn-sm bg-primary-light mx-2"
                              onClick={() => openEditModal(doctor)}
                            >
                              <i className="fe fe-edit" /> Edit
                            </a>
                            <a
                              data-toggle="modal"
                              className="btn btn-sm bg-danger-light"
                              onClick={() => handleDelete(doctor)}
                            >
                              <i className="fe fe-trash" /> Delete
                            </a>
                        </td>
                      </tr>
                        
                      ))}
                      
                      {openModalEdit && 
                        <Modal
                        show={openModalEdit}
                        onHide={() => setOpenModalEdit(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Edit doctor profile
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Card>
                            <Card.Body>
                              <form action="#">
                                <div className="form-group">
                                  <label>Fullname</label>
                                  <input type="text" className="form-control fulName" value={selectedDoctor.fullname}/>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    checked={selectedDoctor.gender ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Female
                                  </label>
                                </div>
                                <div className="form-check form-check-inline mb-3">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault gender"
                                    id="flexRadioDefault2"
                                    
                                    checked={selectedDoctor.gender ? false : true}
                                  />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Male
                                  </label>
                                </div>
                                <div className="form-group">
                                  <label>Phone</label>
                                  <input type="text" className="form-control phone" value={selectedDoctor.phoneNumber}/>
                                </div>
                                <div className="form-group">
                                  <label>Specialize</label>
                                  <input type="text" className="form-control specialize" value={selectedDoctor.specialize}/>
                                </div>
                                <div className="form-group">
                                  <label>Description</label>
                                  <textarea className="form-control description" id="" rows="3" value={selectedDoctor.description}></textarea>
                                </div>
                                <div className="text-right">
                                  <button type="submit" className="btn btn-primary">
                                    Change
                                  </button>
                                </div>
                              </form>
                            </Card.Body>
                          </Card>
                        </Modal.Body>
                      </Modal>}

                      {openModalView &&
                        <Modal
                        show={openModalView}
                        onHide={() => setOpenModalView(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Doctor profile
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Card>
                            <Card.Body>
                              <Card.Title>{selectedDoctor.fullname}</Card.Title>
                                <Card.Text>
                                  {selectedDoctor.specialize}
                                </Card.Text>
                                <Card.Text>
                                  {selectedDoctor.phoneNumber}
                                </Card.Text>
                                <Card.Text>
                                  {selectedDoctor.description}
                                </Card.Text>
                              </Card.Body>
                          </Card>
                        </Modal.Body>
                      </Modal>}
                      
                      {openModalAdd &&
                        <Modal
                        show={openModalAdd}
                        onHide={() => setOpenModalAdd(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Add new doctor
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Card>
                            <Card.Body>
                              <form onSubmit={handleAddSubmit}>
                                <div className="form-group">
                                  <label>Full Name</label>
                                  <input type="text" className="form-control" name="fullName"/>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input flexRadioDefault"
                                    type="radio"
                                    id="flexRadioDefault1"
                                    value="Male"
                                    name="gender"
                                  />
                                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline mb-3 gender">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    value="Female"
                                    defaultChecked=""
                                  />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                  </label>
                                </div>
                                <div className="form-group">
                                  <label>Phone</label>
                                  <input type="text" className="form-control" name="phone"/>
                                </div>
                                <div className="form-group">
                                  <label>Specialize</label>
                                  <input type="text" className="form-control" name="specialize"/>
                                </div>
                                <div className="form-group">
                                  <label>Description</label>
                                  <textarea className="form-control description" name="description" id="" rows="3"></textarea>
                                </div>
                                <div className="text-right">
                                  <button type="submit" className="btn btn-primary">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </Card.Body>
                          </Card>
                        </Modal.Body>
                      </Modal>}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
