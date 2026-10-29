
export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white pt-4">
      <div className="container">
        <div className="row g-4 pb-4">

          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-crown-fill text-warning me-2"></i>
              ROYAL STAY
            </h5>

            <p className="text-white-50 small">
              Your perfect gateway for luxury,
              comfort and unforgettable experiences.
            </p>

            <div className="d-flex gap-3 fs-5">
              <a href="#facebook" className="link-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" className="link-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#twitter" className="link-light">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#youtube" className="link-light">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-2">
            <h6 className="fw-bold mb-2">Quick Links</h6>

            <ul className="list-unstyled small d-grid gap-1">
              <li><a href="#home" className="link-light text-decoration-none">Home</a></li>
              <li><a href="#rooms" className="link-light text-decoration-none">Rooms</a></li>
              <li><a href="#amenities" className="link-light text-decoration-none">Amenities</a></li>
              <li><a href="#gallery" className="link-light text-decoration-none">Gallery</a></li>
              <li><a href="#contact" className="link-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Contact Us</h6>

            <p className="small text-white-50 mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Beach Road, Goa, India
            </p>

            <p className="small text-white-50 mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +91 98765 43210
            </p>

            <p className="small text-white-50 mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@royalstay.com
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="fw-bold mb-2">Newsletter</h6>

            <p className="small text-white-50">
              Subscribe to get latest offers and updates.
            </p>

            <form
              className="row g-2"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <div className="col-7">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-warning btn-sm">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-top border-secondary">
        <div className="container">
          <div className="row align-items-center py-3 g-2">
            <div className="col-12 col-md-6 text-center text-md-start">
              <small className="text-white-50">
                © 2026 Royal Stay. All Rights Reserved.
              </small>
            </div>

            <div className="col-12 col-md-6 text-center text-md-end">
              <small className="text-white-50">
                Designed with <span className="text-danger">❤️</span> for Travelers
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
