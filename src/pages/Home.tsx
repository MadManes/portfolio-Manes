import React, { useState } from "react";
import HomeLayout from "../components/layout/HomeLayout";
import Summary from "../components/summary/Summary";
import Footer from "../components/footer/Footer";
import Modal from "../components/modals/Modal";
import ProfileContent from "../components/modals/contents/ProfileContent";
import ContactForm from "../components/modals/contents/ContactForm";

function Home() {
  const [lang, setLang] = useState<"ES" | "EN">("ES");
  const [theme, setTheme] = useState<"dark1" | "dark2">("dark1");
  const [activeSection, setActiveSection] = useState("home");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="page" data-theme={theme}>
      <main>
        <HomeLayout
          lang={lang}
          onLangChange={setLang}
          theme={theme}
          onThemeChange={setTheme}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          setActiveModal={setActiveModal}
        />
        <Modal isOpen={activeModal === "profile"} onClose={() => setActiveModal(null)} size="large">
          <ProfileContent />
        </Modal>
        <Modal isOpen={activeModal === "contact"} onClose={() => setActiveModal(null)} size="large">
          <ContactForm />
        </Modal>
        <Summary section={activeSection} lang={lang}>
          <Footer />
        </Summary>
      </main>      
    </div>
  );
}

export default Home;
