import { useEffect } from "react";
import "./modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: "large" | "medium" | "small";
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, size="large", children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Bloque scroll
        }
        
        // Cuando se cierra
        return () => {
            document.body.style.overflow = 'unset'; // Libera scroll
        };
    }, [!isOpen]);

    if (!isOpen) return null;    

    return (
        <div className="modal-overlay">
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