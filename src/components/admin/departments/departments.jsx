import { Link } from "react-router-dom";
import AddDepartments from "./AddDepartments";
import { useEffect, useState } from "react";
import { createDepartment, updateDepartment, deleteDepartment } from "../../../services/DepartmentService";
import { Modal, Card } from "react-bootstrap";
import { key, usb } from "fontawesome";
export default function Departments(props) {

  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    setDepartmentList(props.departments);
  }, []);

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalView, setOpenModalView] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState();

  const [departmentName, setDepartmentName] = useState("");
  const [localtion, setLocation] = useState("");

  const openEdit = (department) => {
    setSelectedDepartment(department);
    setOpenModalEdit(true);
  }

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try{
      const newDepartment = {
        "departmentName": e.target.departmentName.value,
        "location": e.target.location.value,
        "openTime": "7 giờ",
        "closeTime": "16 giờ",
        "availableFlag": true,
        "isDeleted": false
      };
      
      // console.log(e.target.departmentName.value);
      await createDepartment(newDepartment);
      
      const newDapartmentList = [...departmentList, newDepartment];
      setDepartmentList(newDapartmentList);

      setOpenModalAdd(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try{
      const edittedDepartment = {
        "_id": e.target._id.value,
        "departmentName": e.target.departmentName.value,
        "location": e.target.location.value,
        "openTime": "7 giờ",
        "closeTime": "16 giờ",
        "availableFlag": true,
        "isDeleted": false
      };
      
      await updateDepartment(edittedDepartment);
      
      const newDapartmentList = [...departmentList, updateDepartment];
      setDepartmentList(newDapartmentList);

      setOpenModalAdd(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (department) => {
    
    try{

      console.log(department);
      const deletedDepartment = {
        "_id": department._id,
        "departmentName": department.departmentName,
        "location": department.location,
        "openTime": "7 giờ",
        "closeTime": "16 giờ",
        "availableFlag": true,
        "isDeleted": false
      };
      
      await deleteDepartment(deletedDepartment);
      
      const newDapartmentList = departmentList.filter((department) => department._id !== deletedDepartment._id);
      setDepartmentList(newDapartmentList);

      setOpenModalAdd(false);
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
              <h3 className="page-title">List of Departments</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Departments</li>
              </ul>
            </div>
            <div className="col-sm-5 col">
              <Link
                className="btn btn-primary float-right mt-2"
                onClick={() => setOpenModalAdd(true)}
              >
                Add new
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive table-striped">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Visual</th>
                        <th>Departments</th>
                        <th>Location</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentList?.map((department) => department.isDeleted ? null : (
                            <tr>
                              <td key={department._id} name="_id">#1</td>
                              <td>
                                  <a className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img"
                                      src="../img/specialities/specialities-01.png"
                                      alt="Speciality"
                                    />
                                  </a>
                              </td>
                              <td>{department.departmentName}</td>
                              <td>{department.location}</td>
                              <td className="text-right">
                                <div className="actions">
                                  <a
                                    className="btn btn-sm bg-success-light mx-2"
                                    data-toggle="modal"
                                    onClick={() => openEdit(department)}
                                  >
                                    <i className="fe fe-pencil" /> Edit
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    className="btn btn-sm bg-danger-light"
                                    onClick={() => handleDelete(department)}
                                  >
                                    <i className="fe fe-trash" /> Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                          )
                      )}

                      {openModalEdit && 
                        <Modal
                        show={openModalEdit}
                        onHide={() => setOpenModalEdit(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Edit department
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Card>
                            <Card.Body>
                              <form onSubmit={handleEditSubmit}>
                                <input type="hidden" className="_id" value={selectedDepartment._id}/>

                                <div className="form-group">
                                  <label>Department name</label>
                                  <input type="text" className="form-control departmentName" 
                                  value={selectedDepartment.departmentName} 
                                  onChange={e => setDepartmentName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                  <label>Location</label>
                                  <input type="text" className="form-control location" 
                                  value={selectedDepartment.location} 
                                  onChange={e => setLocation(e.target.value)}/>
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
                      {openModalAdd &&
                        <Modal
                        show={openModalAdd}
                        onHide={() => setOpenModalAdd(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            Add new department
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Card>
                            <Card.Body>
                              <form onSubmit={handleAddSubmit}>
                                <div className="form-group">
                                  <label>Department name</label>
                                  <input type="text" className="form-control"
                                  name="departmentName"/>
                                </div>
                                <div className="form-group">
                                  <label>Location</label>
                                  <input type="text" className="form-control"
                                  name="location"/>
                                </div>
                                <div className="text-right">
                                  <button type="submit" className="btn btn-primary">
                                    Add new
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
