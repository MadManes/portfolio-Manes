import { profile_translations } from "../../../constants/profile_translations";
import "./profileContent.css"

type Props = {
  lang: "ES" | "EN";
}

export default function ProfileContent({lang}: Props) {
  const t = profile_translations[lang].tech_profile;

  return (
    <div className="profile-content">
      <h2>{t.profileTitle}</h2>
      <p>{t.profileDesc}</p>
    </div>
  );
}
