import { useState, useEffect, useRef } from "react";
import Intro from "../intro/Intro";
import Header from "../header/Header";
import IntroInfo from "../intro/IntroInfo";
import SideNav from "../navigation/SideNav";

type Props = {
  lang: "ES" | "EN";
  onLangChange: (l: "ES" | "EN") => void;
  theme: "dark1" | "dark2";
  onThemeChange: (t: "dark1" | "dark2") => void;
  activeSection: string;  
  onSectionChange: (s: string) => void;
  setActiveModal: (type: string | null) => void;
};

export default function HomeLayout({
  lang,
  onLangChange,
  theme,
  onThemeChange,
  activeSection,  
  onSectionChange,
  setActiveModal,
}: Props) {
  const [isMenuOpen, setIsMenuOpen ] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Escuchar evento de click todo el documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavigation = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="home-layout">
      <Intro onOpenModal={setActiveModal} lang={lang} />

      <div className="home-main">
        <div className="home-main-top">
          <Header 
            lang={lang} 
            onLangChange={onLangChange} 
            theme={theme} 
            onThemeChange={onThemeChange}
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />

          <IntroInfo />

          <SideNav
            active={activeSection}            
            onChange={onSectionChange}
            lang={lang}
          />

          {/* Menu desplegable */}
          {isMenuOpen && (
            <div className="mobile-nav-overlay" ref={menuRef}>
              <nav className="mobile-nav">
                <ul>
                  <li onClick={() => handleNavigation("home")}>
                    {lang === "ES" ? "Inicio" : "Home"}
                  </li>
                  <li onClick={() => handleNavigation("projects")}>
                    {lang === "ES" ? "Proyectos" : "Projects"}
                  </li>
                  <li onClick={() => handleNavigation("skills")}>
                    {lang === "ES" ? "Habilidades" : "Skills"}
                  </li>
                  <li onClick={() => handleNavigation("education")}>
                    {lang === "ES" ? "Estudios" : "Education"}
                  </li>
                </ul>

                <div className="mobile-lang-switcher">
                  <button onClick={() => onLangChange("ES")} className={lang === "ES" ? "active" : ""}>ES</button>
                  <span>|</span>
                  <button onClick={() => onLangChange("EN")} className={lang === "EN" ? "active" : ""}>EN</button>
                </div>
              </nav>
            </div>              
          )}
        </div>
      </div>
    </div>
  );
}
