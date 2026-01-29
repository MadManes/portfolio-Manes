import IntroPhoto from "./IntroPhoto";
import IntroActions from "./IntroActions";

type IntroProps = {
  onOpenModal: (type: string) => void;
  lang: "ES" | "EN";
};

export default function Intro({ onOpenModal, lang }: IntroProps) {
  return (
    <section className="intro">
      <div className="intro-top">
        <IntroPhoto />
      </div>

      <IntroActions onOpenModal={onOpenModal} lang={lang} />
    </section>
  );
}
