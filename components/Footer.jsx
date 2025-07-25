import React from "react";
import './Footer.css';
function Footer() {
  return (
    <footer className="text-white py-4 mt-5 ">
      <div className="container text-center">
        <h5>Interventions</h5>
        <ul className="list-inline mt-3">
          <li className="list-inline-item mx-2">
            <a href="/" className="text-white text-decoration-none">Accueil</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#about" className="text-white text-decoration-none">À propos</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#contact" className="text-white text-decoration-none">Contact</a>
          </li>
        </ul>
        <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Gestion Interventions – Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
