import { useState } from "react";

function Home() {
  const [lang, setLang] = useState("ES");
  return (
    <div className="page">
      <main>
        <div className="home-layout">
          <section className="intro">
            <div className="intro-top">
              <div className="intro-photo">
                <img src="/profile.png" alt="Foto de perfil" />
              </div>
            </div>
            <nav className="intro-actions">
              <a href="#perfil">Perfil</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </section>

          <div className="home-main">
            <div className="home-main-top">
              <header className="header">
                <div className="header-right">
                  <div className="header-lang">
                    <button
                      className={lang === "ES" ? "active" : ""}
                      onClick={() => setLang("ES")}
                    >
                      ES
                    </button>
                    <span>|</span>
                    <button
                      className={lang === "EN" ? "active" : ""}
                      onClick={() => setLang("EN")}                    
                    >
                      EN
                    </button>
                  </div>
                  <button className="hamburguer" aria-label="Menú">
                    ☰
                    {/*<img src="/menu-burger.png" />*/}
                  </button>
                </div>
              </header>
              <div className="intro-info">
                <h1>Martín Manes</h1>
                <h2>Software & Web Developer</h2>
              </div>
              <nav className="side-nav">
                <ul className="side-nav-list">
                  <li className="action">Proyectos</li>
                  <li className="action">Habilidades</li>
                  <li className="action">Botón 3</li>
                  <li className="action">Botón 4</li>
                  <li className="action">Botón 5</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <section className="summary">
          <p>
            Desarrollador en formación de aplicaciones de escritorio, web y sistemas interactivos, priorizando soluciones reales y mantenibles.
          </p>
        </section>
      </main>

      <footer className="footer">Footer</footer>
    </div>
  )
}

export default Home;