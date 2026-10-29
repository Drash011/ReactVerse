const galleryImages = [
  {
    image: "./src/images/gallery-1.png",
    alt: "Luxury resort swimming pool",
  },
  {
    image: "./src/images/gallery-2.png",
    alt: "Luxury hotel bedroom",
  },
  {
    image: "./src/images/gallery-3.png",
    alt: "Elegant hotel restaurant",
  },
  {
    image: "./src/images/gallery-4.png",
    alt: "Tropical swimming pool",
  },
  {
    image: "./src/images/gallery-5.png",
    alt: "Premium hotel suite",
  },
  {
    image: "./src/images/gallery-6.png",
    alt: "Sunset at the resort",
  },
];

export default function Gallery() {
  return (
    <section className="container-fluid bg-white py-4">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-warning fw-bold small">GALLERY</span>

          <h2 className="fw-bold mb-2">Moments at Royal Stay</h2>

          <p className="text-secondary mb-0">
            Take a glimpse into the beauty and experiences that await you.
          </p>
        </div>

        <div className="row g-2">
          {galleryImages.map((item) => (
            <div className="col-6 col-md-4 col-lg-2" key={item.image}>
              <div className="overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="img-fluid w-100"
                  style={{
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
