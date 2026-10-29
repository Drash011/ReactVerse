
export default function Booking() {
  return (
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div
            className="row g-0 align-items-center bg-white shadow rounded-2 p-2 position-relative"
            style={{ marginTop: "-35px", zIndex: 2 }}
          >
            <div className="col-6 col-md-2 border-end p-2">
              <label className="form-label fw-semibold mb-1">
                <i className="bi bi-calendar-event me-2"></i>
                Check In
              </label>
              <input
                type="date"
                className="form-control form-control-sm border-0"
              />
            </div>

            <div className="col-6 col-md-2 border-end p-2">
              <label className="form-label fw-semibold mb-1">
                <i className="bi bi-calendar-check me-2"></i>
                Check Out
              </label>
              <input
                type="date"
                className="form-control form-control-sm border-0"
              />
            </div>

            <div className="col-6 col-md-2 border-end p-2">
              <label className="form-label fw-semibold mb-1">
                <i className="bi bi-people me-2"></i>
                Guests
              </label>
              <select className="form-select form-select-sm border-0">
                <option>2 Adults</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>

            <div className="col-6 col-md-2 border-end p-2">
              <label className="form-label fw-semibold mb-1">
                <i className="bi bi-door-open me-2"></i>
                Rooms
              </label>
              <select className="form-select form-select-sm border-0">
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
            </div>

            <div className="col-12 col-md-4 p-2">
              <button className="btn btn-warning w-100">
                Search Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
