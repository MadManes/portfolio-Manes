type Props = {
  lang: "ES" | "EN";
  onLangChange: (l: "ES" | "EN") => void;
};

export default function Header({ lang, onLangChange }: Props) {
  return (
    <header className="header">
      <div className="header-right">
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
