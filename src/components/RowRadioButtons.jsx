import React from 'react';

function RowRadioButtons({type, name, selected, handleChange, options}) {
    return (
        <div>
            <p>{name}</p>

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