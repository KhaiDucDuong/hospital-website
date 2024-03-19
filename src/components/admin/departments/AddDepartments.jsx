
const AddDepartments = () => {
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
                  <a href="javascript:(0);">Departments</a>
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
                  />
                </div>
                <button type="submit" className="btn btn-primary">
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
