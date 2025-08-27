import React from "react";
import "./Footer.css";
import confetti from "canvas-confetti";
import {
  FaShareAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaLink,
  FaSmile,
} from "react-icons/fa";

function Footer() {
  const surpriseMessage = () => {
    alert(
      "🎉 Surprise! You’re awesome for visiting Back2Youuu. Have a great day!"
    );
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const shareWebsite = async () => {
    try {
      await navigator.share({
        title: "Back2youu – Find Mee Protal",
        text: "Report or find lost items easily at Back2youu!",
        url: window.location.href,
      });
    } catch (err) {
      console.log("Sharing not supported:", err);
    }
  };

  return (
    <>
      <div className="floating-buttons">
        <button onClick={surpriseMessage} title="Surprise!">
          <FaSmile className="icon" />
        </button>
        <button onClick={shareWebsite} title="Share Website">
          <FaShareAlt className="icon" />
        </button>
      </div>

      <footer className="custom-footer">
        <div className="footer-flex">
          <div className="footer-column">
            <h2 className="footer-title">Back2youu</h2>
            <p className="footer-quote">
              Our mission is to reconnect people with their lost items —
              quickly, safely, and with kindness. 🧡
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/add">Report</a>
              </li>
              <li>
                <a href="/myreports">My Reports</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/prabhas.puttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/prabhas-puttu-18b2002b2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/PuttuPrabhas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linktr.ee/PuttuPrabhas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>

        <p className="footer-bottom">
          Created with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/prabhas-puttu-18b2002b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prabhas Puttu
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
