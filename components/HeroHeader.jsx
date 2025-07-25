import React from "react";
import "./HeroHeader.css"; 
import heroImage from "../assets/technician-hero.jpg"; 

function HeroHeader() {
  return (
    <section className="container py-5 d-flex align-items-center justify-content-between flex-wrap-reverse">
      <div className="col-md-6 text-center text-md-start">
        <h1 className="display-4 fw-bold">Gérez vos Interventions Techniques</h1>
        <p className="lead">
          Suivi en temps réel, affectation rapide, traçabilité complète – tout dans une seule plateforme.
        </p>
        <a href="#start" className="btn btn-primary btn-lg mt-3">
          Commencer
        </a>
      </div>
      <div className="col-md-5 text-center">
        <img
          src={heroImage}
          alt="Intervention technique"
          className="img-fluid"
          
        />
      </div>
    </section>
  );
}

export default HeroHeader;
