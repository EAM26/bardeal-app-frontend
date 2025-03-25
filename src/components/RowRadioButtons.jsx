import React from 'react';
import './RowRadioButtons.css';
import InnerRowRBs from "./InnerRowRBs.jsx";

function RowRadioButtons({type, name, selected, handleChange, options, showLabel = true, split}) {
    return (
        <div className="row-radio-buttons">
            <p>{showLabel && name}</p>

           <InnerRowRBs split={split} type={type} name={name} selected={selected} handleChange={handleChange} options={options} />
        </div>
    );
}

export default RowRadioButtons;