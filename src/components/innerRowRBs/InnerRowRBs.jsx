import React from 'react';
import './InnerRowRBs.css'

function InnerRowRBs({ type, name, selected, onChange, options = [], split, splitValue, firstOptionAlignCenter = false, className = '' }) {
    const isCheckbox = type === 'checkbox';

    const isChecked = (option) => {
        if (isCheckbox && Array.isArray(selected)) {
            return selected.includes(option);
        }
        return selected === option;
    };

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (isCheckbox) {
            const newValue = checked
                ? [...(selected || []), value]
                : (selected || []).filter((v) => v !== value);
            onChange({ target: { name, value: newValue } });
        } else {
            onChange(e);
        }
    };
    const renderOptions = (subset, columnIndex) =>
        subset.map((option, index) => (
            <label
                key={option}
                className={firstOptionAlignCenter && columnIndex === 0 && index === 0 ? 'center-vertical' : ''}
            >
                <input
                    type={type}
                    name={name}
                    value={option}
                    checked={isChecked(option)}
                    onChange={handleChange}
                />
                {option}
            </label>
        ));


    return (
        // <div className="not_split">
        <div className={`not_split ${split ? 'split' : ''} ${className}`}>

        {!split ? (
                renderOptions(options)
            ) : (
                <div className={`split ${firstOptionAlignCenter ? 'split-line' : ''}`}>
                    <div className="column-split">
                        {renderOptions(options.slice(0, splitValue), 0)}
                    </div>
                    <div className="column-split">
                        {renderOptions(options.slice(splitValue), 1)}
                    </div>
                </div>

            )}
        </div>
    );
}

export default InnerRowRBs;
