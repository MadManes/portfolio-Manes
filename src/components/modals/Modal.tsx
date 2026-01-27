import "./modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: "large" | "medium" | "small";
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, size="large", children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={`modal-content ${size}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    )
}