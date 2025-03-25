import React from 'react';

function Button({type, children, classname, onClick}) {
    return (
        <div>
            <button
            type={type}
            className={classname}
            onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;
