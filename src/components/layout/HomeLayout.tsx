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
  return (
    <div className="home-layout">
      <Intro onOpenModal={setActiveModal} />

      <div className="home-main">
        <div className="home-main-top">
          <Header lang={lang} onLangChange={onLangChange} theme={theme} onThemeChange={onThemeChange}/>

          <IntroInfo />

          <SideNav
            active={activeSection}            
            onChange={onSectionChange}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
}
