type Props = {
  lang: "ES" | "EN";
  onLangChange: (l: "ES" | "EN") => void;
  theme: "dark1" | "dark2";
  onThemeChange: (t: "dark1" | "dark2") => void;
};

export default function Header({ lang, onLangChange, theme, onThemeChange }: Props) {
  return (
    <header className="header">
      <div className="header-right">
        <div className="header-theme">
          <select
            value={theme}
            onChange={(e) => onThemeChange(e.target.value as "dark1" | "dark2")}
            className="theme-select"
          >            
            <option value="dark1">Dark1</option>
            <option value="dark2">Dark2</option>
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

        <button className="hamburguer" aria-label="Menú">
          ☰
        </button>
      </div>
    </header>
  );
}
