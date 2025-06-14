import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            AMEL MAAROUFI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  À Propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Compétences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Expérience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 bg-gradient-dark">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 bg-primary rounded-circle"
                  style={{ width: "200px", height: "200px", zIndex: 0 }}
                ></div>
                <img
                  src="/amal.jpg"
                  alt="Amel Maaroufi"
                  className="position-relative rounded-circle shadow mb-3"
                  width="190"
                  height="190"
                  style={{
                    objectFit: "cover",
                    border: "4px solid #0d6efd",
                    zIndex: 1,
                  }}
                />
              </div>
              <h1 className="display-4 fw-bold mt-4">Maaroufi Amel</h1>
              <p className="lead text-light">
                Développeuse Full Stack MERN | Spécialiste en Business
                Information System
              </p>
              <div className="d-flex mt-4">
                <a href="#contact" className="btn btn-primary me-3 px-4 py-2">
                  Me Contacter
                </a>
                <a
                  href="https://github.com/Maaroufiamel07"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light px-4 py-2"
                >
                  Voir GitHub
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="bg-dark p-4 rounded-3 shadow-lg">
                <h3 className="text-primary mb-4">
                  Expert en Technologies Modernes
                </h3>
                <div className="d-flex justify-content-center flex-wrap">
                  <div className="tech-icon m-2">
                    <i className="fab fa-react fa-3x text-info"></i>
                    <span>React</span>
                  </div>
                  <div className="tech-icon m-2">
                    <i className="fab fa-node-js fa-3x text-success"></i>
                    <span>Node.js</span>
                  </div>
                  <div className="tech-icon m-2">
                    <i className="fas fa-database fa-3x text-warning"></i>
                    <span>MongoDB</span>
                  </div>
                  <div className="tech-icon m-2">
                    <i className="fab fa-docker fa-3x text-info"></i>
                    <span>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-darker">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h2 text-primary mb-4">
                🎯 Objectif Professionnel
              </h2>
              <p className="lead">
                Diplômée en licence Business Computing (spécialité Business
                Information System) à la Faculté des Sciences Juridiques,
                Économiques et de Gestion de Jendouba.
              </p>
              <p className="mt-3">
                Passionnée par le développement de solutions logicielles
                innovantes et performantes. Je mets mes compétences en
                développement full stack au service de projets ambitieux qui
                nécessitent une expertise technique solide et une vision
                stratégique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-gradient-dark">
        <div className="container py-4">
          <h2 className="h2 text-center text-primary mb-5">
            🧠 Compétences Techniques
          </h2>

          <div className="row">
            <div className="col-md-6">
              <h3 className="h4 text-light mb-4">Frontend & UI/UX</h3>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>React.js</span>
                  <span>90%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>HTML5/CSS3</span>
                  <span>95%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>Bootstrap</span>
                  <span>90%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>JavaScript/TypeScript</span>
                  <span>85%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h3 className="h4 text-light mb-4">Backend & DevOps</h3>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>Node.js/Express</span>
                  <span>85%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>MongoDB/NoSQL</span>
                  <span>80%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>Docker</span>
                  <span>75%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar mb-4">
                <div className="d-flex justify-content-between">
                  <span>API Design (REST/GraphQL)</span>
                  <span>85%</span>
                </div>
                <div className="progress bg-dark" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="h4 text-center text-light mb-4">
              Autres Compétences
            </h3>
            <div className="d-flex flex-wrap justify-content-center">
              {[
                "Java",
                "C#",
                "PHP",
                "SQL/MySQL",
                "Problem Solving",
                "Power BI",
                "JEE",
                "Git",
                "CI/CD",
                "Microservices",
                "AWS Basics",
              ].map((skill, index) => (
                <div key={index} className="m-2">
                  <span className="badge bg-secondary fs-6 py-2 px-3 rounded-pill">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-darker">
        <div className="container py-4">
          <h2 className="h2 text-center text-primary mb-5">
            💼 Expérience Professionnelle
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content bg-dark p-4 rounded-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h4 mb-0">MajestEYE</h3>
                  <span className="badge bg-primary">Jan 2025 - Mai 2025</span>
                </div>
                <h4 className="h5 text-info">Développeuse Full Stack</h4>
                <ul className="mt-3">
                  <li>
                    Conception et développement d'une application de gestion des
                    espaces de stagiaire
                  </li>
                  <li>
                    Intégration avec Power BI pour des rapports analytiques en
                    temps réel
                  </li>
                  <li>
                    Mise en place d'une architecture microservices avec Node.js
                    et React
                  </li>
                  <li>
                    Optimisation des performances de la base de données MongoDB
                  </li>
                </ul>
                <div className="mt-3">
                  <span className="badge bg-secondary me-1">React</span>
                  <span className="badge bg-secondary me-1">Node.js</span>
                  <span className="badge bg-secondary me-1">MongoDB</span>
                  <span className="badge bg-secondary me-1">Power BI</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content bg-dark p-4 rounded-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h4 mb-0">MajestEYE</h3>
                  <span className="badge bg-primary">Juil 2024 - Sep 2024</span>
                </div>
                <h4 className="h5 text-info">Stagiaire en Développement</h4>
                <ul className="mt-3">
                  <li>
                    Développement d'un système de gestion des demandes de stage
                  </li>
                  <li>Création d'API RESTful avec Express.js</li>
                  <li>
                    Conception de l'interface utilisateur avec React et
                    Bootstrap
                  </li>
                  <li>
                    Implémentation de l'authentification JWT et gestion des
                    rôles
                  </li>
                </ul>
                <div className="mt-3">
                  <span className="badge bg-secondary me-1">Express.js</span>
                  <span className="badge bg-secondary me-1">React</span>
                  <span className="badge bg-secondary me-1">JWT</span>
                  <span className="badge bg-secondary me-1">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-gradient-dark">
        <div className="container py-4">
          <h2 className="h2 text-center text-primary mb-5">
            🚀 Projets Réalisés
          </h2>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 card-title text-light">
                      Plateforme de Gestion des Stages
                    </h3>
                    <span className="badge bg-info">Full Stack</span>
                  </div>
                  <p className="card-text text-light">
                    Application complète pour la gestion des stages avec système
                    d'authentification, tableau de bord administrateur et
                    génération de rapports.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-secondary me-1">React</span>
                    <span className="badge bg-secondary me-1">Node.js</span>
                    <span className="badge bg-secondary me-1">MongoDB</span>
                  </div>
                </div>
                <div className="card-footer bg-darker border-0">
                  <a href="#" className="btn btn-sm btn-outline-info">
                    Voir Détails
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 card-title text-light">
                      Système d'Analyse BI
                    </h3>
                    <span className="badge bg-success">Data</span>
                  </div>
                  <p className="card-text text-light">
                    Intégration Power BI avec application web pour visualisation
                    de données en temps réel avec filtres interactifs et export
                    PDF.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-secondary me-1">Power BI</span>
                    <span className="badge bg-secondary me-1">Express.js</span>
                    <span className="badge bg-secondary me-1">SQL</span>
                  </div>
                </div>
                <div className="card-footer bg-darker border-0">
                  <a href="#" className="btn btn-sm btn-outline-info">
                    Voir Détails
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 card-title text-light">
                      API Microservices
                    </h3>
                    <span className="badge bg-warning text-dark">
                      Architecture
                    </span>
                  </div>
                  <p className="card-text text-light">
                    Architecture microservices avec Docker, Kubernetes et
                    communication entre services via RabbitMQ pour une
                    application e-commerce.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-secondary me-1">Docker</span>
                    <span className="badge bg-secondary me-1">Node.js</span>
                    <span className="badge bg-secondary me-1">RabbitMQ</span>
                  </div>
                </div>
                <div className="card-footer bg-darker border-0">
                  <a href="#" className="btn btn-sm btn-outline-info">
                    Voir Détails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-darker">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h2 className="h2 text-center text-primary mb-5">
                📞 Contactez-moi
              </h2>

              <div className="card bg-dark border-secondary">
                <div className="card-body">
                  <div className="mb-4">
                    <h3 className="h5 text-light">Informations de Contact</h3>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        <a
                          href="mailto:maaroufiamel7@gmail.com"
                          className="text-light"
                        >
                          maaroufiamel7@gmail.com
                        </a>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-phone me-2 text-primary"></i>
                        <a href="tel:+21652525884" className="text-light">
                          +216 52 525 884
                        </a>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-birthday-cake me-2 text-primary"></i>
                        <span className="text-light">01/01/2003</span>
                      </li>
                      <li className="mt-4">
                        <div className="d-flex">
                          <a
                            href="www.linkedin.com/in/maaroufi-amel-03b923257"
                            className="me-3 text-decoration-none"
                          >
                            <i className="fab fa-linkedin fa-2x text-info"></i>
                          </a>
                          <a
                            href="https://github.com/Maaroufiamel07/"
                            className="text-decoration-none"
                          >
                            <i className="fab fa-github fa-2x text-light"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-black text-center">
        <div className="container">
          <p className="mb-0 text-light">
            © {new Date().getFullYear()} Amel Maaroufi — Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Font Awesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style jsx>{`
        .bg-gradient-dark {
          background: linear-gradient(to right, #1a1a2e, #16213e);
        }
        .bg-darker {
          background-color: #0f0f1b;
        }
        .tech-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
        }
        .tech-icon span {
          margin-top: 10px;
          font-size: 0.9rem;
        }
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #0d6efd;
          left: 50%;
          margin-left: -1px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
        }
        .timeline-item:nth-child(even) {
          padding-left: calc(50% + 30px);
        }
        .timeline-item:nth-child(odd) {
          padding-right: calc(50% + 30px);
          text-align: right;
        }
        .timeline-content {
          position: relative;
        }
        .timeline-item::before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #0d6efd;
          top: 20px;
        }
        .timeline-item:nth-child(odd)::before {
          right: calc(50% - 8px);
        }
        .timeline-item:nth-child(even)::before {
          left: calc(50% - 8px);
        }
        @media (max-width: 767px) {
          .timeline::before {
            left: 30px;
          }
          .timeline-item:nth-child(odd),
          .timeline-item:nth-child(even) {
            padding-left: 70px;
            padding-right: 0;
            text-align: left;
          }
          .timeline-item::before {
            left: 22px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
