import React from 'react';
import './RowRadioButtons.css'

function FormRow({showLabel, rowName, children, className}) {
    return (
        <div className="form-row">
            <label
                className={className}>
                {showLabel && rowName}
            </label>
            <div>
                {children}
            </div>

        </div>
    );
}

export default FormRow;