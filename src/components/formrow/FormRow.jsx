import React from 'react';
import './FormRow.css';

function FormRow({ showLabel=true, rowName, children, className }) {
    return (
        <div className="form-row">
            {showLabel && (
                <label className={`${className} form-row-label`}>
                    {rowName}
                </label>
            )}
            <div className={showLabel ? 'form-row-content' : 'form-row-full'}>
                {children}
            </div>
        </div>
    );
}

export default FormRow;
