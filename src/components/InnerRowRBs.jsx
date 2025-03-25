import React from 'react';
import './RowRadioButtons.css';

function InnerRowRBs({type, name, selected, handleChange, options, split}) {
    return (
        <div>
            {!split ? (options.map((option) => (
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
            ))) : <div className="split">
                <div>{options.map((option) => (
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
                ))}</div>
                <div>{options.map((option) => (
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
            </div>
            }

        </div>
    );
}

export default InnerRowRBs;