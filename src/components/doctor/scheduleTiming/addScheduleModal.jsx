import Modal from "react-bootstrap/Modal";

export default function AddScheduleModal({show, setShow, day}) {
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add a schedule</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form action="#">
          <div className="form-group row">
            <label className="col-lg-3 col-form-label">Day of Week</label>
            <div className="col-lg-9">
              <input
                type="text"
                className="form-control"
                value={day}
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label">Time</label>
            <div className="col-lg-9">
              <select type="email" className="form-control">
                <option>8:00 - 9:00</option>
                <option>9:00 - 10:00</option>
                <option>10:00 - 11:00</option>
                <option>14:00 - 15:00</option>
                <option>15:00 - 16:00</option>
                <option>16:00 - 17:00</option>
              </select>
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
