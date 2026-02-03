import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "60%",
    left: "60%",
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [sending, setSending] = useState(false);
  const noButtonRef = useRef(null);

  const handleNoHover = () => {
    // Generate random position to move the No button
    const randomTop = Math.random() * 80 + 10; // Between 10% and 90%
    const randomLeft = Math.random() * 80 + 10; // Between 10% and 90%

    setNoButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const sendNotification = async () => {
    setSending(true);

    try {
      // EmailJS configuration
      // Replace these with your EmailJS credentials
      const serviceId = "service_43bkenc";
      const templateId = "template_idjj2us";
      const userId = "dFYAHMJmJpny-R84w";

      const templateParams = {
        to_email: "anmolpogo52@gmail.com", // ADD YOUR EMAIL HERE
        to_name: "You",
        from_name: "Your Valentine",
        message:
          "🎉 SHE SAID YES! 🎉 Your girlfriend accepted your Valentine proposal!",
        reply_to: "noreply@valentine.com",
      };

      // If you haven't set up EmailJS, this will fail silently
      // For now, it will just show the celebration
      if (serviceId !== "YOUR_SERVICE_ID") {
        await emailjs.send(serviceId, templateId, templateParams, userId);
        console.log("✅ Notification sent successfully!");
      } else {
        console.log(
          "⚠️ EmailJS not configured. Set up your credentials in App.jsx",
        );
        console.log("🎉 SHE SAID YES! 🎉");
      }
    } catch (error) {
      console.error("Failed to send notification:", error);
      console.log("🎉 But she still said YES! 🎉");
    } finally {
      setSending(false);
    }
  };

  const handleYesClick = () => {
    setShowCelebration(true);
    sendNotification();

    // Create confetti effect
    createConfetti();
  };

  const createConfetti = () => {
    const colors = ["#ff0000", "#ff69b4", "#ff1493", "#ffc0cb", "#ff6b9d"];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + "s";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }, i * 30);
    }
  };

  if (showCelebration) {
    return (
      <div className="app celebration">
        <div className="celebration-content">
          <h1 className="celebration-title">🎉 YAY! 🎉</h1>
          <p className="celebration-text">I knew you'd say yes! ❤️</p>
          <div className="hearts">
            <span className="heart">💕</span>
            <span className="heart">💖</span>
            <span className="heart">💗</span>
            <span className="heart">💝</span>
            <span className="heart">💓</span>
          </div>
          <p className="celebration-subtext">
            {sending
              ? "Sending notification..."
              : "Get ready for the best Valentine's Day ever!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="content">
        <h1 className="title">
          <span className="heart-icon">💝</span>
          Will You Be My Valentine?
          <span className="heart-icon">💝</span>
        </h1>

        <div className="subtitle">I promise to make it special! 🌹</div>

        <div className="buttons-container">
          <button className="yes-button" onClick={handleYesClick}>
            Yes! 💖
          </button>

          <button
            ref={noButtonRef}
            className="no-button"
            onMouseEnter={handleNoHover}
            style={{
              position: "absolute",
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease",
            }}
          >
            No 😢
          </button>
        </div>

        <div className="footer">
          <p className="hint">💡 Hint: The "No" button is shy...</p>
        </div>
      </div>

      <div className="floating-hearts">
        <span className="floating-heart">❤️</span>
        <span className="floating-heart">💕</span>
        <span className="floating-heart">💖</span>
        <span className="floating-heart">💗</span>
        <span className="floating-heart">💝</span>
        <span className="floating-heart">💓</span>
      </div>
    </div>
  );
}

export default App;
