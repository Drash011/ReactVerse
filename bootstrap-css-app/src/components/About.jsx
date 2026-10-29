
export default function About() {
  return (
    <section className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-6">
            <img
              src="./src/images/about.png"
              alt="Luxury hotel bedroom"
              className="img-fluid w-100"
              style={{ height: "330px", objectFit: "cover" }}
            />
          </div>

          <div className="col-12 col-lg-4">
            <span className="text-warning fw-bold small">
              ABOUT US
            </span>

            <h2 className="fw-bold mt-1" style={{fontFamily:"serif"}}>
              A Perfect Blend of Comfort and Elegance
            </h2>

            <p className="text-secondary">
              At Royal Stay, we believe every journey should feel
              extraordinary. Our hotel offers modern amenities,
              luxurious rooms, and personalized service to make
              your stay memorable.
            </p>

            <button className="btn btn-warning px-4">
              Learn More <span className="ms-2">→</span>
            </button>
          </div>

          <div className="col-12 col-lg-2 border-start">
            <div className="ps-lg-4">
              <div className="border-bottom pb-2 mb-2">
                <h2 className="fw-bold mb-0">10+</h2>
                <p className="text-secondary small mb-0">
                  Years of Hospitality
                </p>
              </div>

              <div className="border-bottom pb-2 mb-2">
                <h2 className="fw-bold mb-0">5K+</h2>
                <p className="text-secondary small mb-0">
                  Happy Guests
                </p>
              </div>

              <div>
                <h2 className="fw-bold mb-0">50+</h2>
                <p className="text-secondary small mb-0">
                  Luxury Rooms
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
