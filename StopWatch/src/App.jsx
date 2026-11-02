import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Timer,
  Clock3,
  Play,
  Square,
  RotateCcw,
  Plus,
  BookOpen,
  Dumbbell,
  Code2,
  Coffee,
  BookText,
  Gamepad2,
  Activity,
} from "lucide-react";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [totalSecond, setTotalSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [activities, setActivities] = useState([]);
  const [message, setMessage] = useState("");

  const hours = Math.floor(totalSecond / 3600);
  const minutes = Math.floor((totalSecond % 3600) / 60);
  const seconds = totalSecond % 60;

  const formatTime = (time) => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;

    return `${h < 10 ? "0" : ""}${h}:${
      m < 10 ? "0" : ""
    }${m}:${s < 10 ? "0" : ""}${s}`;
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timeInterval = setInterval(() => {
      setTotalSecond((state) => state + 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    setMessage("");
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTotalSecond(0);
    setMessage("");
  };

  const addActivity = () => {
    if (isRunning) {
      setMessage("Please stop the stopwatch before adding an activity.");
      return;
    }

    if (activityName.trim() === "") {
      setMessage("Please enter an activity name.");
      return;
    }

    if (totalSecond === 0) {
      setMessage("Start the stopwatch before adding an activity.");
      return;
    }

    const newActivity = {
      name: activityName,
      duration: totalSecond,
    };

    setActivities((previous) => [...previous, newActivity]);
    setActivityName("");
    setTotalSecond(0);
    setMessage("");
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getActivityIcon = (name) => {
    const activity = name.toLowerCase();

    if (activity.includes("study") || activity.includes("react")) {
      return <BookOpen size={25} />;
    }

    if (activity.includes("workout") || activity.includes("gym")) {
      return <Dumbbell size={25} />;
    }

    if (activity.includes("code") || activity.includes("project")) {
      return <Code2 size={25} />;
    }

    if (activity.includes("break")) {
      return <Coffee size={25} />;
    }

    if (activity.includes("book") || activity.includes("read")) {
      return <BookText size={25} />;
    }

    if (activity.includes("game") || activity.includes("play")) {
      return <Gamepad2 size={25} />;
    }

    return <Activity size={25} />;
  };

  return (
    <div className={`stopwatch-app ${theme}`}>
      <div className="background-wave wave-one"></div>
      <div className="background-wave wave-two"></div>

      <div className="stopwatch-container">
        {/* Header */}
        <header className="header">
          <div className="brand">
            <div className="brand-icon">
              <Timer size={35} />
            </div>

            <div>
              <h1>Stopwatch</h1>
              <p>Track and manage your activities</p>
            </div>
          </div>

          <button className="theme-toggle" onClick={changeTheme}>
            <span className={theme === "light" ? "active" : ""}>
              <Sun size={23} />
            </span>

            <span className={theme === "dark" ? "active" : ""}>
              <Moon size={23} />
            </span>
          </button>
        </header>

        {/* Main Content */}
        <main className="main-layout">
          {/* Stopwatch Section */}
          <section className="timer-panel">
            <div className="timer-circle">
              <div className="timer-inner">
                <div className="timer-center-icon">
                  <Timer size={43} />
                </div>

                <h2>
                  {hours < 10 ? "0" : ""}
                  {hours}:{minutes < 10 ? "0" : ""}
                  {minutes}:{seconds < 10 ? "0" : ""}
                  {seconds}
                </h2>

                <div className="time-labels">
                  <span>Hours</span>
                  <span>Minutes</span>
                  <span>Seconds</span>
                </div>

                <div className="timer-status">
                  <span
                    className={isRunning ? "status-dot running" : "status-dot"}
                  ></span>
                  {isRunning ? "Stopwatch Running" : "Stopwatch Paused"}
                </div>
              </div>
            </div>

            {/* Timer Controls */}
            <div className="timer-controls">
              <button
                className="control-btn start-btn"
                onClick={startTimer}
                disabled={isRunning}
              >
                <Play size={21} fill="currentColor" />
                Start
              </button>

              <button
                className="control-btn stop-btn"
                onClick={stopTimer}
                disabled={!isRunning}
              >
                <Square size={20} fill="currentColor" />
                Stop
              </button>

              <button className="control-btn reset-btn" onClick={resetTimer}>
                <RotateCcw size={21} />
                Reset
              </button>
            </div>

            {/* Activity Input */}
            <div className="activity-form">
              <label htmlFor="activity">Activity Name</label>

              <div className="activity-input-row">
                <div className="input-wrapper">
                  <Activity size={21} />

                  <input
                    id="activity"
                    type="text"
                    placeholder="Enter activity name (e.g. Study, Workout, Coding)"
                    value={activityName}
                    onChange={(e) => setActivityName(e.target.value)}
                  />
                </div>

                <button className="add-btn" onClick={addActivity}>
                  <Plus size={23} />
                  Add
                </button>
              </div>

              {message && <p className="form-message">{message}</p>}
            </div>
          </section>

          {/* Activity Log */}
          <section className="activity-panel">
            <div className="activity-header">
              <div className="activity-heading-icon">
                <Activity size={30} />
              </div>

              <div className="activity-heading-text">
                <h2>Activity Log</h2>
                <p>Your recorded activities with time duration</p>
              </div>

              <span className="activity-count">Total: {activities.length}</span>
            </div>

            <div className="activity-list">
              {activities.length === 0 ? (
                <div className="empty-state">
                  <Clock3 size={48} />
                  <h3>No Activities Yet</h3>
                  <p>Start your stopwatch and add your first activity.</p>
                </div>
              ) : (
                activities.map((activity, index) => (
                  <div className="activity-card" key={index}>
                    <div className={`activity-icon icon-${index % 6}`}>
                      {getActivityIcon(activity.name)}
                    </div>

                    <div className="activity-info">
                      <h3>{activity.name}</h3>
                      <p>Activity {index + 1}</p>
                    </div>

                    <div className={`duration duration-${index % 6}`}>
                      {formatTime(activity.duration)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>Stay Focused. Track Your Time. Achieve More.</p>
        </footer>
      </div>
    </div>
  );
}
