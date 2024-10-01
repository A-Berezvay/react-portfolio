// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional if you want to add custom styling

const Footer = () => {
  return (
    <footer className="footer">
        <Link to="https://www.linkedin.com/in/albert-berezvay/" target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.facebook.com/profile.php?id=61565913697254" target="blank"><i class="fa-brands fa-facebook"></i></Link>
        <Link to="https://github.com/A-Berezvay" target="_blank"><i class="fa-brands fa-github"></i></Link>
        <Link to="https://x.com/AlbertBerezvay" target="_blank"><i class="fa-brands fa-x-twitter"></i></Link>
    </footer>
  );
};

export default Footer;
