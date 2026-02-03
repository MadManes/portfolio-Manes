import { project_translations } from "../../../constants/projects_translations";
import "./projects.css"

type Props = {
  lang: "ES" | "EN";
}

export default function Project1({ lang }: Props) {  
  const t = project_translations[lang].project1;
  
  return (
    <h2>{t.name}</h2>
  )

}