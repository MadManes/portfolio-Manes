import { translations } from "../../../constants/translations";
import "./contactForm.css"

type Props = {
  lang: "ES" | "EN";
}

export default function ContactForm({ lang }: Props) {  
  const t = translations[lang].intro;

  return (
    <form className="contact-form">
      <h2>{t.contact}</h2>
      <input type="email" className="input_form" placeholder={t.email} />
      <input type="text" className="input_form" placeholder={t.subject} />
      <textarea className="input_form" placeholder={t.message} />
      <button type="submit" className="button">{t.send}</button>
    </form>
  );
}