import React from 'react';
import './RowRadioButtons.css';

function RowRadioButtons({type, name, selected, handleChange, options, showLabel = true}) {
    return (
        <div className="row-radio-buttons">
            <p>{showLabel && name}</p>

            {options.map((option) => (
                <label key={option}>
                    <input
                        type={type}
                        name={name}
                        value={option}
                        checked={selected === option}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

export default RowRadioButtons;