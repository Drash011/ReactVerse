const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹4,999",
    image: "./src/images/room-1.png",
  },
  {
    id: 2,
    name: "Executive Suite",
    price: "₹6,999",
    image: "./src/images/room-2.png",
  },
  {
    id: 3,
    name: "Family Room",
    price: "₹7,999",
    image: "./src/images/room-3.png",
  },
  {
    id: 4,
    name: "Presidential Suite",
    price: "₹12,999",
    image: "./src/images/room-4.png",
  },
];

export default function Rooms() {
  return (
    <section className="container-fluid bg-light py-4">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-warning fw-bold small">OUR ROOMS</span>

          <h2 className="fw-bold mb-2">Find Your Perfect Stay</h2>

          <p className="text-secondary mb-0">
            Discover our range of beautifully designed rooms, crafted for your
            comfort and relaxation.
          </p>
        </div>

        <div className="row g-3">
          {rooms.map((room) => (
            <div className="col-12 col-sm-6 col-lg-3" key={room.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={room.image}
                  className="card-img-top"
                  alt={room.name}
                  style={{
                    height: "150px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-3">
                  <h6 className="fw-bold mb-1">{room.name}</h6>

                  <p className="fw-bold mb-2">
                    {room.price}
                    <span className="text-secondary fw-normal small">
                      {" "}
                      / night
                    </span>
                  </p>

                  <div className="d-flex flex-wrap gap-2 text-secondary small mb-3">
                    <span>
                      <i className="bi bi-people me-1"></i>2 Guests
                    </span>

                    <span>
                      <i className="bi bi-moon me-1"></i>1 Bed
                    </span>

                    <span>
                      <i className="bi bi-wifi me-1"></i>
                      Free WiFi
                    </span>
                  </div>

                  <button className="btn btn-warning btn-sm w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
