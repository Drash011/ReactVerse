import { useEffect, useState } from "react";
import { MailCheck } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

export default function App() {
  const [totalSecond, setTotalSecond] = useState(120);
  const [isLoader, setIsLoader] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [lockSecond, setLockSecond] = useState(0);

  const minute = Math.floor(totalSecond / 60);
  const second = totalSecond % 60;

  useEffect(() => {
    if (totalSecond <= 0) {
      return;
    }

    const timeInterval = setInterval(() => {
      setTotalSecond((state) => state - 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [totalSecond]);

  useEffect(() => {
    if (lockSecond <= 0) {
      return;
    }

    const lockInterval = setInterval(() => {
      setLockSecond((state) => {
        if (state <= 1) {
          setResendCount(0);
          return 0;
        }

        return state - 1;
      });
    }, 1000);

    return () => clearInterval(lockInterval);
  }, [lockSecond]);

  const resendOTP = () => {
    if (totalSecond !== 0 || isLoader) return;

    if (lockSecond > 0) {
      toast.error("Please try again after 1 hour.");
      return;
    }

    if (resendCount >= 3) {
      setLockSecond(3600);
      toast.error("Maximum 3 attempts reached. Try again after 1 hour.");
      return;
    }

    setIsLoader(true);

    setTimeout(() => {
      setResendCount((count) => count + 1);
      setTotalSecond(120);
      setIsLoader(false);

      toast.success(`OTP sent successfully! (${resendCount + 1}/3)`);
    }, 2000);
  };

  return (
    <div className="otp-page">
      <div className="otp-card">
        <div className="otp-content">
          <div className="otp-icon">
            <MailCheck size={40} strokeWidth={1.8} />
          </div>

          <h1>OTP Sent</h1>

          <p className="otp-message">
            We have sent a 6-digit OTP to
            <br />
            your email.
          </p>

          <button
            onClick={resendOTP}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: totalSecond === 0 ? "pointer" : "default",
            }}
            className="otp-action"
          >
            {totalSecond !== 0 && (
              <p>
                {minute}:{second < 10 ? 0 : ""}
                {second}
              </p>
            )}

            {totalSecond === 0 &&
              (isLoader ? (
                <div className="sending-loader">
                  <span className="loader-spinner"></span>
                  <span>Sending OTP...</span>
                </div>
              ) : (
                <p>Resend OTP</p>
              ))}
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="glass-toast"
        bodyClassName="glass-toast-body"
        progressClassName="glass-toast-progress"
      />
    </div>
  );
}