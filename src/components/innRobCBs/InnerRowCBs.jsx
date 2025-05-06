// import React from 'react';
// import './InnerRowCBs.css';
//
// function InnerRowCBs({ selected = {}, onChange, options = [], multiSplit = [] }) {
//
//     // Splits options based on the multiSplit indexes
//     const splitOptions = () => {
//         const result = [];
//         let start = 0;
//         for (const end of multiSplit) {
//             result.push(options.slice(start, end));
//             start = end;
//         }
//         result.push(options.slice(start)); // Remaining options
//         return result;
//     };
//
//     const rows = splitOptions();
//
//     return (
//         <div className="checkbox-group">
//             {rows.map((rowOptions, rowIndex) => (
//                 <div className="checkbox-row" key={rowIndex}>
//                     {rowOptions.map(({ label, value }) => (
//                         <div className="checkbox-item" key={value}>
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     name={value}
//                                     checked={selected[value]}
//                                     onChange={onChange}
//                                 />
//                                 {label}
//                             </label>
//                             {/* Special text field for "doOther" */}
//                             {value === 'doOther' && (
//                                 <input
//                                     type="text"
//                                     name="doOtherText"
//                                     value={selected.doOtherText || ''}
//                                     onChange={onChange}
//                                     placeholder="Vul hier uw alternatief in"
//                                     disabled={!selected.doOther}
//                                     style={{ marginLeft: '10px' }}
//                                 />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default InnerRowCBs;

import React from 'react';
import './InnerRowCBs.css';
// import '../../components/formrow/FormRow.css'

function InnerRowCBs({ selected = {}, onChange, options = [], multiSplit = [] }) {

    // Splits options based on the multiSplit indexes
    const splitOptions = () => {
        const result = [];
        let start = 0;
        for (const end of multiSplit) {
            result.push(options.slice(start, end));
            start = end;
        }
        result.push(options.slice(start)); // Remaining options
        return result;
    };

    const rows = splitOptions();

    // Helper to check if this option should render an extra input
    const hasExtraField = (value) => {
        return value === 'doOther'
            || value === 'companyLow'
            || value === 'companyMiddle'
            || value === 'companyHigh'
            || value === 'companyVeryHigh';
    };

    return (
        <div className="checkbox-group">
            {rows.map((rowOptions, rowIndex) => (
                <div className="checkbox-row" key={rowIndex}>
                    {rowOptions.map(({ label, value }) => (
                        <div className="checkbox-item" key={value}>
                            <label>
                                <input
                                    type="checkbox"
                                    name={value}
                                    checked={selected[value]}
                                    onChange={onChange}
                                />
                                {label}
                            </label>
                            {/* Special text field for "doOther" and company checkboxes */}
                            {hasExtraField(value) && selected[value] && (
                                <input
                                    type="text"
                                    name={`${value}Text`}
                                    value={selected[`${value}Text`] || ''}
                                    onChange={onChange}
                                    placeholder="Vul in..."
                                    style={{ marginLeft: '10px' }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default InnerRowCBs;

