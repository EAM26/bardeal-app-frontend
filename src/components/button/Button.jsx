import React from 'react';
import './Button.css';

function Button({type, children, onClick, classname}) {
    return (
        <button
            type={type}
            className={classname}
            // className={`pdf-hidden ${classname || ''}`.trim()}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
