import Intro from "../intro/Intro";
import Header from "../header/Header";
import IntroInfo from "../intro/IntroInfo";
import SideNav from "../navigation/SideNav";

type Props = {
  lang: "ES" | "EN";
  onLangChange: (l: "ES" | "EN") => void;
  activeSection: string;
  onSectionChange: (s: string) => void;
};

export default function HomeLayout({
  lang,
  onLangChange,
  activeSection,
  onSectionChange,
}: Props) {
  return (
    <div className="home-layout">
      <Intro />

      <div className="home-main">
        <div className="home-main-top">
          <Header lang={lang} onLangChange={onLangChange} />

          <IntroInfo />

          <SideNav
            active={activeSection}
            onChange={onSectionChange}
          />
        </div>
      </div>
    </div>
  );
}
