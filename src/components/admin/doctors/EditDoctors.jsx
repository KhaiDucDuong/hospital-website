const EditDoctors = () => {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Edit Doctor</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:(0);">Doctors</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Doctor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="doctorName">Doctor Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="doctorName"
                        placeholder="Enter doctor name"
                      />
                    </div>
                    {/* Thêm label "Department Name" */}
                    <div className="form-group">
                      <label htmlFor="departmentName">Department Name</label>
                      {/* Thêm khung list box */}
                      <select className="form-control" id="departmentName">
                        {/* Option mẫu, bạn cần thay thế bằng dữ liệu thực tế */}
                        <option>Select department</option>
                        <option>Department 1</option>
                        <option>Department 2</option>
                        <option>Department 3</option>
                      </select>
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
      </div>
    );
  };
  
  export default EditDoctors;
  