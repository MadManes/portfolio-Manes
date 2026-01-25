import { useState } from "react";
import HomeLayout from "../components/layout/HomeLayout";
import Summary from "../components/summary/Summary";

function Home() {
  const [lang, setLang] = useState<"ES" | "EN">("ES");
  const [activeSection, setActiveSection] = useState("summary");

  return (
    <div className="page">
      <main>
        <HomeLayout
          lang={lang}
          onLangChange={setLang}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <Summary section={activeSection} />
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default Home;
