import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const increment = () => {
    if (count >= 25) {
      toast.warning("Maximum limit reached! You cannot go above 25.", {
        toastId: "maximum-limit",
        position: "top-center",
        autoClose: 2500,
        theme: "dark",
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
        position: "top-center",
        autoClose: 2500,
        theme: "dark",
      });
      return;
    }

    if (count <= 0) {
      toast.warning("Click + to start counting!", {
        toastId: "minimum-limit",
        position: "top-center",
        autoClose: 2500,
        theme: "dark",
      });
      return;
    }

    const next = count - 1;

    setCount(next);
    setMinimum((prev) => Math.min(prev, next));
  };

  const reset = () => {
    setCount(0);
    setMinimum(0);
    setMaximum(0);
    setHasStarted(false);

    toast.info("Counter has been reset!", {
      position: "top-center",
      autoClose: 1500,
      theme: "dark",
    });
  };

  return (
    <main className="app-wrapper">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        limit={1}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable={false}
        theme="dark"
        toastClassName="glass-toast"
        progressClassName="glass-toast-progress"
      />

      <section className="counter-card">
        <div className="background-line line-one" />
        <div className="background-line line-two" />
        <div className="background-line line-three" />  

        <header className="app-header">
          <div className="rocket-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.5 3c2.2-1.5 4.4-1.5 6.5-1.5C21 7 19.5 10 17 12.5l-4 4-5-5 4-4C12.8 5.8 13.6 4.2 14.5 3ZM16 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM7 12l5 5-3 4-2-3-3-2 3-4Z" />
            </svg>
          </div>

          <h1>
            Counter <span>App</span>
          </h1>

          <p className="tagline">Count · Track · Achieve</p>
        </header>

        <section className="counter-display" aria-label="Counter">
          <div className="counter-inner">
            <span className="count-number" aria-live="polite">
              {count}
            </span>
          </div>
        </section>

        <div className="controls">
          <button
            type="button"
            className="control-button minus-button"
            onClick={decrement}
            aria-label="Decrease count"
          >
            −
          </button>

          <button
            type="button"
            className="control-button reset-button"
            onClick={reset}
            aria-label="Reset counter"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 11a9 9 0 1 1 2.6 6.4" />
              <path d="M3 4v7h7" />
            </svg>
          </button>

          <button
            type="button"
            className="control-button plus-button"
            onClick={increment}
            aria-label="Increase count"
          >
            +
          </button>
        </div>

        <section className="stats-panel" aria-label="Counter statistics">
          <div className="stat-item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="13" width="4" height="8" rx="1" />
              <rect x="10" y="8" width="4" height="13" rx="1" />
              <rect x="17" y="3" width="4" height="18" rx="1" />
            </svg>
            <strong>{minimum}</strong>
            <span>Minimum</span>
          </div>

          <div className="stat-item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 2 3.1 6.3 7 1-5.05 4.92 1.2 6.95L12 17.9l-6.25 3.27 1.2-6.95L1.9 9.3l7-1L12 2Z" />
            </svg>
            <strong>{count}</strong>
            <span>Current</span>
          </div>

          <div className="stat-item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 3H2l2 11h6L7 3Zm10 0 2 11h-6l2-11h2ZM8 14h8l-2 4h-4l-2-4Zm2 5h4v3h-4v-3Z" />
            </svg>
            <strong>{maximum}</strong>
            <span>Maximum</span>
          </div>
        </section>

        <footer className="card-footer">
          <span className="status-dot" />
          COUNTER SYSTEM ONLINE
        </footer>

        <div className="background-line line-one1" />
        <div className="background-line line-two1" />
        <div className="background-line line-three1" />
      </section>
    </main>
  );
}

export default App;
