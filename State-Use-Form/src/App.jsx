import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
  FiArrowRight,
  FiArrowLeft,
  FiChevronDown,
} from "react-icons/fi";
import "./App.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  dob: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState({ ...initialForm });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const details = [
    { label: "Full Name", value: formData.fullName, Icon: FiUser },
    { label: "Email Address", value: formData.email, Icon: FiMail },
    { label: "Phone Number", value: formData.phone, Icon: FiPhone },
    { label: "Age", value: formData.age, Icon: FiCalendar },
    { label: "Gender", value: formData.gender, Icon: FiUser },
    { label: "Date of Birth", value: formData.dob, Icon: FiCalendar },
    {
      label: "Password",
      value: formData.password ? "•••••••• (hidden)" : "—",
      Icon: FiLock,
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setIsSubmitted(true);
    setShowPassword(false);
    setError("");
  }

  function handleReset() {
    setFormData({ ...initialForm });
    setShowPassword(false);
    setIsSubmitted(false);
    setError("");
  }

  return (
    <main
      className={`registration-page ${
        isSubmitted ? "submitted-mode" : "form-mode"
      }`}
    >
      {!isSubmitted ? (
        <section className="panel form-panel">
          <div className="form-heading">
            <div className="profile-icon">
              <FiUser />
            </div>

            <h1>Create Account</h1>
            <p>Fill in your details to register</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>
                <div className="input-wrap">
                  <FiUser className="input-icon" />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <div className="input-wrap">
                  <FiMail className="input-icon" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <div className="input-wrap">
                  <FiPhone className="input-icon" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="age">
                  Age <span>*</span>
                </label>
                <div className="input-wrap">
                  <FiCalendar className="input-icon" />
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                    min="1"
                    max="120"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="gender">
                  Gender <span>*</span>
                </label>
                <div className="input-wrap select-wrap">
                  <FiUser className="input-icon" />
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="dob">
                  Date of Birth <span>*</span>
                </label>
                <div className="input-wrap">
                  <FiCalendar className="input-icon" />
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field full-width">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <div className="input-wrap">
                  <FiLock className="input-icon" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={8}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                <small className="field-hint">Use at least 8 characters.</small>
              </div>
            </div>

            {error && (
              <p className="error-message" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="primary-button">
              Create Account
              <FiArrowRight />
            </button>
          </form>
        </section>
      ) : (
        <section className="submitted-only">
          <div className="panel result-panel">
            <div className="result-heading">
              <div className="success-icon">
                <FiCheck />
              </div>

              <h2>Registration Successful!</h2>
              <p>Your form has been submitted successfully.</p>
            </div>

            <div className="details-card">
              {details.map(({ label, value, Icon }) => (
                <div className="detail-row" key={label}>
                  <Icon className="detail-icon" />
                  <span className="detail-label">{label}</span>
                  <strong>{value || "—"}</strong>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="primary-button back-button"
              onClick={handleReset}
            >
              <FiArrowLeft />
              Back to Form
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
