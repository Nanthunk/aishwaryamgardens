import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Aishwarya Gardens. All Rights Reserved.</p>
        <p>
          Built with ❤️ by Team Zugo. The Official Marketing Partner of Aishwarya Gardens. 
        </p>

        {/* Social & Contact Icons */}
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919626287589" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aishwaryamgardens@gmail.com">
            <MdEmail />
          </a>
          <a href="#enquire">
            <BiMessageDetail />
          </a>
          <a href="tel:+919626287589">
            <FaPhoneAlt />
          </a>
          <a
  href="https://www.google.com/maps?q=12.5278121,78.5779893"
  target="_blank"
  rel="noreferrer"
>
  <FaMapMarkerAlt />
</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
