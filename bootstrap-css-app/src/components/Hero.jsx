
export default function Hero() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/images/hero-1.png"
              className="d-block w-100"
              style={{ height: "600px", objectFit: "cover" }}
              alt="Hotel banner 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="./src/images/hero-2.png"
              className="d-block w-100"
              style={{ height: "600px", objectFit: "cover" }}
              alt="Hotel banner 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="./src/images/hero-3.png"
              className="d-block w-100"
              style={{ height: "600px", objectFit: "cover" }}
              alt="Hotel banner 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  );
}
