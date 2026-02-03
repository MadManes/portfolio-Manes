type Props = {
  lang: "ES" | "EN";
  onLangChange: (l: "ES" | "EN") => void;
  theme: "dark1" | "dark2";
  onThemeChange: (t: "dark1" | "dark2") => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function Header({ lang, onLangChange, theme, onThemeChange, isMenuOpen, toggleMenu }: Props) {
  return (
    <header className="header">
      <div className="header-right">
        <div className="header-theme">
          <select
            value={theme}
            onChange={(e) => onThemeChange(e.target.value as "dark1" | "dark2")}
            className="theme-select"
          >            
            <option value="dark1">Blue Moon</option>
            <option value="dark2">Nightwolf</option>
            <option value="light1">Natural Mystic</option>
          </select>
        </div>
        <div className="header-lang">
          <button
            className={lang === "ES" ? "active" : ""}
            onClick={() => onLangChange("ES")}
          >
            ES
          </button>
          <span>|</span>
          <button
            className={lang === "EN" ? "active" : ""}
            onClick={() => onLangChange("EN")}
          >
            EN
          </button>
        </div>

        <button 
          className={`hamburguer ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
