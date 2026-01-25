import IntroPhoto from "./IntroPhoto";
import IntroActions from "./IntroActions";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-top">
        <IntroPhoto />
      </div>

      <IntroActions />
    </section>
  );
}
