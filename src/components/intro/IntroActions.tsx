import { profile_translations } from "../../constants/profile_translations";

type Props = {
  onOpenModal: (type: string) => void;
  lang: "ES" | "EN";
};

export default function IntroActions({ onOpenModal, lang }: Props) {
  const t = profile_translations[lang].tech_profile;

  return (
    <nav className="intro-actions">
      <a onClick={() => onOpenModal("profile")} style={{cursor: 'pointer'}}>{t.profile}</a>
      <a onClick={() => onOpenModal("contact")} style={{cursor: 'pointer'}}>{t.contact}</a>
    </nav>
  );
}
