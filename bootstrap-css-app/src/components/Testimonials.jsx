const guests = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "./src/images/testimonial-1.jpg",
    review:
      "An absolutely wonderful stay! The room was elegant, the views were beautiful, and every member of the staff made us feel special.",
  },
  {
    name: "Rohan Mehta",
    location: "Ahmedabad, India",
    image: "./src/images/testimonial-2.jpg",
    review:
      "Exceptional hospitality, delicious breakfast and a peaceful atmosphere. Everything was perfectly arranged from check-in to checkout.",
  },
  {
    name: "Neha Patel",
    location: "Surat, India",
    image: "./src/images/testimonial-3.jpg",
    review:
      "The perfect family getaway! Beautiful interiors, spotless rooms and excellent service. We are already planning our next visit.",
  },
  {
    name: "Aarav Shah",
    location: "Vadodara, India",
    image: "./src/images/testimonial-4.jpg",
    review:
      "A fantastic luxury experience with attentive staff, comfortable beds and wonderful amenities. Highly recommended for couples.",
  },
  {
    name: "Ananya Desai",
    location: "Pune, India",
    image: "./src/images/testimonial-5.jpg",
    review:
      "Everything felt premium and welcoming. The pool, food and beautiful surroundings made our holiday truly memorable.",
  },
];

const slides = guests.map((_, index) =>
  [0, 1, 2].map((offset) => guests[(index + offset) % guests.length]),
);

export default function Testimonials() {
  return (
    <section
      className="container-fluid py-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7, 15, 32, 0.2), rgba(7, 20, 32, 0.8)), url('./src/images/testimonial-bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-lg-3">
        <div className="text-center mb-5">
          <span className="text-warning px-3 py-2 mb-3">TESTIMONIALS</span>

          <h2 className="display-6 fw-bold text-white mb-3">
            What Our Guests Say
          </h2>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row g-4 justify-content-center">
                  {slide.map((guest, cardIndex) => (
                    <div
                      className={`col-12 col-md-6 col-lg-4 ${
                        cardIndex === 2 ? "d-none d-lg-block" : ""
                      }`}
                      key={`${index}-${guest.name}`}
                    >
                      <div className="card h-100 border-0 shadow-lg rounded-4">
                        <div className="card-body p-4 p-xl-4 d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="text-warning fs-1 lh-1">“</span>
                            <span className="text-warning">★★★★★</span>
                          </div>

                          <p className="text-secondary lh-lg flex-grow-1">
                            {guest.review}
                          </p>

                          <hr className="text-secondary opacity-25" />

                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={guest.image}
                              alt={guest.name}
                              width="58"
                              height="58"
                              className="rounded-circle border border-2 border-warning p-1"
                            />

                            <div>
                              <h6 className="fw-bold mb-1">{guest.name}</h6>
                              <p className="text-secondary small mb-0">
                                <i className="bi bi-geo-alt me-1"></i>
                                {guest.location}
                              </p>
                            </div>

                            <span className="badge text-bg-light ms-auto">
                              <i className="bi bi-patch-check-fill text-success me-1"></i>
                              Guest
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center align-items-center gap-5 mt-4">
            <button
              className="btn btn-outline-light rounded-circle"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
              aria-label="Previous testimonials"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <button
              className="btn btn-outline-light rounded-circle"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
              aria-label="Next testimonials"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
