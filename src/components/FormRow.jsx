import React from 'react';
import './RowRadioButtons.css'

function FormRow({showLabel, name, children, className}) {
    return (
        <div className="form-row">
            <label
                className={className}>
                {showLabel && name}
            </label>
            <div>
                {children}
            </div>

        </div>
    );
}

export default FormRow;