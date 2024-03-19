export default function Departments({ selectedWidget, setSelectedWidget }) {
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
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#SP001</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img"
                                src="../img/specialities/specialities-01.png"
                                alt="Speciality"
                              />
                            </a>
                            <a>Urology</a>
                          </h2>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a
                              href="#edit"
                              className={
                                "btn btn-sm bg-success-light " +
                                (selectedWidget === "editDepartments"
                                  && "active"
                                )
                              }
                              onClick={() => {
                                setSelectedWidget("editDepartments");
                              }}
                              data-toggle="modal"
                            >
                              <i className="fe fe-pencil" /> Edit
                            </a>
                            <a
                              data-toggle="modal"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fe fe-trash" /> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP002</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img"
                                src="../img/specialities/specialities-02.png"
                                alt="Speciality"
                              />
                            </a>
                            <a>Neurology</a>
                          </h2>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a
                              className="btn btn-sm bg-success-light"
                              data-toggle="modal"
                            >
                              <i className="fe fe-pencil" /> Edit
                            </a>
                            <a
                              data-toggle="modal"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fe fe-trash" /> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP003</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img"
                                src="../img/specialities/specialities-03.png"
                                alt="Speciality"
                              />
                            </a>
                            <a>Orthopedic</a>
                          </h2>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a
                              className="btn btn-sm bg-success-light"
                              data-toggle="modal"
                            >
                              <i className="fe fe-pencil" /> Edit
                            </a>
                            <a
                              data-toggle="modal"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fe fe-trash" /> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP004</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img"
                                src="../img/specialities/specialities-04.png"
                                alt="Speciality"
                              />
                            </a>
                            <a>Cardiologist</a>
                          </h2>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a
                              className="btn btn-sm bg-success-light"
                              data-toggle="modal"
                            >
                              <i className="fe fe-pencil" /> Edit
                            </a>
                            <a
                              data-toggle="modal"
                              className="btn btn-sm bg-danger-light"
                            >
                              <i className="fe fe-trash" /> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP005</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img"
                                src="../img/specialities/specialities-05.png"
                                alt="Speciality"
                              />
                            </a>
                            <a>Dentist</a>
                          </h2>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a
                              className="btn btn-sm bg-success-light"
                              data-toggle="modal"
                            >
                              <i className="fe fe-pencil" /> Edit
                            </a>
                            <a
                              className="btn btn-sm bg-danger-light"
                              data-toggle="modal"
                            >
                              <i className="fe fe-trash" /> Delete
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
        </div>
      </div>
    </div>
  );
}
