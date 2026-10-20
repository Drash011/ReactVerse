import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const increment = () => {
    if (count >= 15) {
      toast.warning("Maximum limit reached! You cannot go above 15.", {
        toastId: "maximum-limit",
      });
      return;
    }

    const next = count + 1;

    setCount(next);
    setMaximum((prev) => Math.max(prev, next));

    if (!hasStarted) {
      setHasStarted(true);
      setMinimum(1);
    }
  };

  const decrement = () => {
    if (count <= 1 && hasStarted) {
      toast.warning("Minimum limit reached! Count cannot go below 1.", {
        toastId: "minimum-limit",
      });
      return;
    }

    if (count <= 0) {
      toast.warning("Click + to start counting!", {
        toastId: "minimum-limit",
      });
      return;
    }

    setCount((prev) => prev - 1);
  };

  const deleteProduct = () => {
    setIsDeleted(true);
    toast.info("Product removed.");
  };

  if (isDeleted) {
    return (
      <main className="cart-page">
        <ToastContainer position="top-right" limit={1} theme="light" />
        <section className="empty-cart">
          <h2>Product removed</h2>
          <p>Your Counter App product is no longer displayed.</p>
          <button
            type="button"
            className="restore-button"
            onClick={() => setIsDeleted(false)}
          >
            Restore product
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        limit={1}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable={false}
        theme="light"
        toastClassName="cart-toast"
      />

      <article className="cart-product">
        <div className="product-image-wrapper">
          <img
            className="product-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_1b6t_q0ayG4fuiA60JAZMuuuwH88arvpNNiArZiVw&s=10"
            alt="Samsung Galaxy S26 Ultra"
          />
        </div>

        <section className="product-info">
          <h1>Samsung Galaxy S26 Ultra</h1>

          <p className="product-description">
            Premium Samsung smartphone with an immersive display, advanced
            camera system, and powerful performance.
          </p>

          <div className="counter-statistics">
            <div className="stat">
              <span>Current count:</span>
              <strong>{count}</strong>
            </div>

            <div className="stat">
              <span>Minimum:</span>
              <strong>{minimum}</strong>
            </div>

            <div className="stat">
              <span>Maximum:</span>
              <strong>{maximum}</strong>
            </div>
          </div>
        </section>

        <aside className="product-summary">
          <div className="product-price">₹1,29,999</div>
          <p className="stock-status">
            <span className="stock-dot" />
            In Stock
          </p>

          <div className="counter-controls" aria-label="Counter controls">
            <button
              type="button"
              onClick={decrement}
              aria-label="Decrease count"
            >
              −
            </button>

            <span className="counter-value" aria-live="polite">
              {count}
            </span>

            <button
              type="button"
              onClick={increment}
              aria-label="Increase count"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="delete-button"
            onClick={deleteProduct}
          >
            <svg
              viewBox="0 0 24 24"
              width="23"
              height="23"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="m19 6-1 14H6L5 6" />
              <path d="M10 10v6M14 10v6" />
            </svg>
            <span>Delete</span>
          </button>
        </aside>
      </article>
    </main>
  );
}

export default App;
