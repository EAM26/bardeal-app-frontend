import React from 'react';
import './modal.css';

function Modal({ isOpen, onClose, children, className}) {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop"
             onClick={onClose}
            >
            {/*<div className="modal-content" onClick={e => e.stopPropagation()}>*/}
            <div className={`modal-content ${className}`} onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
