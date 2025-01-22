import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111827", color: "#ffffff", padding: "2rem 1rem", textAlign: "center" }}>
      {/* Top Section */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
        {/* Logo and Description */}
        <div style={{ flex: "1 1 30%", textAlign: "left" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", marginBottom: "1rem" }} />
          <p>"Hi, I’m Vivek Maurya, a MERN stack developer."</p>
          {/* Social Media Icons Row */}
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "1rem", marginTop: "1rem" }}>
            <a
              href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff4757",
                fontSize: "1.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ff4757")}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-maurya-93a549252/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1da1f2",
                fontSize: "1.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1da1f2")}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Vivek1893"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#e1306c",
                fontSize: "1.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e1306c")}
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/918655685272"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0077b5",
                fontSize: "1.5rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0077b5")}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 20%", textAlign: "left" }}>
          <h3 style={{ color: "#ff4757", marginBottom: "1rem", fontWeight: "bold" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/about"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  position: "relative",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D97706";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                About Us
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/blogs"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  position: "relative",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D97706";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Blogs
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/portfolio"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  position: "relative",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D97706";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Portfolio
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  position: "relative",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D97706";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 30%", textAlign: "left" }}>
          <h3 style={{ color: "#ff4757", marginBottom: "1rem", fontWeight: "bold" }}>Contact Info</h3>
          <p
            style={{
              marginBottom: "0.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D97706")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            📞 <a href="tel:+918655685272" style={{ color: "inherit", textDecoration: "none" }}>+91 8655685272</a>
          </p>
          <p
            style={{
              marginBottom: "0.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D97706")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            ✉️ <a href="mailto:vivekmaurya1893@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>vivekmaurya1893@gmail.com</a>
          </p>
          <p
            style={{
              marginBottom: "0.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D97706")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            📍 Borivali East, Mumbai
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ margin: "2rem 0", borderTop: "1px solid #ff4757" }}></div>

      {/* Bottom Section */}
      <div className="w-full py-10">
        <p className="text-center text-gray-500 text-base">© 2025. All rights reserved by Vivek Maurya</p>
      </div>
    </footer>
  );
};

export default Footer;
