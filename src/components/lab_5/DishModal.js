import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./RestaurantMenu.css"

function DishModal({ dish, onClose }) {
    const closeRef = useRef(null);

    useEffect(() => {
        if (!dish) return;
        closeRef.current?.focus();
        document.body.style.overflow = "hidden";
        const handleEsc = e => e.key === "Escape" && onClose();
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEsc);
        };
    }, [dish, onClose]);

    if (!dish) return null;
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="modal-backdrop">
            <div className="modal-window" role="dialog" aria-modal="true">
                <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Закрити"
                >
                    &times;
                </button>
                <h2>{dish.name}</h2>
                <h4>Інгредієнти:</h4>
                <ul>
                    {dish.ingredients.map((ingr, idx) => <li key={idx}>{ingr}</li>)}
                </ul>
            </div>
        </div>,
        modalRoot
    );
}

export default DishModal;