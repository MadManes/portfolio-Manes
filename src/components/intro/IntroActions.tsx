type Props = {
  onOpenModal: (type: string) => void;
};

export default function IntroActions({ onOpenModal }: Props) {
  return (
    <nav className="intro-actions">
      <a onClick={() => onOpenModal("profile")} style={{cursor: 'pointer'}}>Perfil</a>
      <a onClick={() => onOpenModal("contact")} style={{cursor: 'pointer'}}>Contacto</a>
    </nav>
  );
}
