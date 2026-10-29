
const features = [
  {
    icon: "bi-wifi",
    title: "Free WiFi",
    description: "Stay connected always",
  },
  {
    icon: "bi-cup-hot",
    title: "Complimentary Breakfast",
    description: "Delicious meals every morning",
  },
  {
    icon: "bi-water",
    title: "Swimming Pool",
    description: "Relax and unwind",
  },
  {
    icon: "bi-car-front",
    title: "Airport Pickup",
    description: "Convenient transportation",
  },
];

export default function Features() {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-6 col-lg-3" key={feature.title}>
              <div className="d-flex align-items-center justify-content-center gap-3 h-100">
                <i className={`bi ${feature.icon} fs-3`}></i>

                <div>
                  <h6 className="fw-bold mb-1">
                    {feature.title}
                  </h6>
                  <p className="text-secondary small mb-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
