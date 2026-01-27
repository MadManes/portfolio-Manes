import IntroPhoto from "./IntroPhoto";
import IntroActions from "./IntroActions";

type IntroProps = {
  onOpenModal: (type: string) => void;
};

export default function Intro({ onOpenModal }: IntroProps) {
  return (
    <section className="intro">
      <div className="intro-top">
        <IntroPhoto />
      </div>

      <IntroActions onOpenModal={onOpenModal}/>
    </section>
  );
}
