import React from 'react';
import './InnerRowRBs.css'

function InnerRowRBs({ type, name, selected, onChange, options = [], split, splitValue,}) {
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

    const renderOptions = (subset) =>
        subset.map((option) => (
            <label key={option}>
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
        <div className="not_split">
            {!split ? (
                renderOptions(options)
            ) : (
                // <div className="split">
                //     <div>{renderOptions(options.slice(0, splitValue))}</div>
                //     <div>{renderOptions(options.slice(splitValue))}</div>
                //
                // </div>
                <div className="split">
                    <div>{renderOptions(options.slice(0, splitValue))}</div>
                    <div className="column-split">{renderOptions(options.slice(splitValue))}</div>
                </div>

            )}
        </div>
    );
}

export default InnerRowRBs;
