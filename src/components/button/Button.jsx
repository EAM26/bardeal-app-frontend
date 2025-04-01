import React from 'react';
import './Button.css';

function Button({type, children, onClick}) {
    return (
        <button
            type={type}
            className="pdf-hidden"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
