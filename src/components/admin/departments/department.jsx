export default function Department({index, department, selectedWidget, setSelectedWidget}) {
    return (<tr>
        <td>{index + 1}</td>
        <td>
          <h2 className="table-avatar">
            <a>{department.departmentName}</a>
          </h2>
        </td>
        <td>
          <h2>
            <a>{department.location}</a>
          </h2>
        </td>
        <td>
          <h2>
            <a>{department.openTime} - {department.closeTime}</a>
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
      </tr>)
}