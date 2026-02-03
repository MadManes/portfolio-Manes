import React, { useState } from "react";
import HomeLayout from "../components/layout/HomeLayout";
import Summary from "../components/summary/Summary";
import Footer from "../components/footer/Footer";
import Modal from "../components/modals/Modal";
import ProfileContent from "../components/modals/contents/ProfileContent";
import ContactForm from "../components/modals/contents/ContactForm";
import Project1 from "../components/modals/contents/Project1";
import Project2 from "../components/modals/contents/Project2";
import Project3 from "../components/modals/contents/Project3";
import Project4 from "../components/modals/contents/Project4";

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
        <Modal isOpen={activeModal === "profile"} onClose={() => setActiveModal(null)} size="medium">
          <ProfileContent lang={lang} />
        </Modal>
        <Modal isOpen={activeModal === "contact"} onClose={() => setActiveModal(null)} size="small">
          <ContactForm lang={lang} />
        </Modal>
        <Modal isOpen={activeModal === "project1"} onClose={() => setActiveModal(null)} size="large">
          <Project1 lang={lang} />
        </Modal>
        <Modal isOpen={activeModal === "project2"} onClose={() => setActiveModal(null)} size="large">
          <Project2 lang={lang} />
        </Modal>
        <Modal isOpen={activeModal === "project3"} onClose={() => setActiveModal(null)} size="large">
          <Project3 lang={lang} />
        </Modal>
        <Modal isOpen={activeModal === "project4"} onClose={() => setActiveModal(null)} size="large">
          <Project4 lang={lang} />
        </Modal>
        <Summary section={activeSection} lang={lang} onOpenModal={setActiveModal}>
          <Footer />
        </Summary>
      </main>      
    </div>
  );
}

export default Home;
