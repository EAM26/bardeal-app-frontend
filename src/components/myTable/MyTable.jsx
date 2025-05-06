import React from 'react';
import '../../index.css'
import './MyTable.css';

function MyTable({data, renderRowActions }) {
    if (!data || data.length === 0) return <p>Loading...</p>;
    const headers = Object.keys(data[0]);
    return (
        <div className="outer">
            <table>
                <thead>
                <tr>
                {headers.map(tableHeader => (
                    <th key={tableHeader}>{tableHeader}</th>
                ))}
                    {renderRowActions && <th>Actions</th>}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {headers.map(header => (
                            <td key={header}>{row[header]}</td>
                        ))}
                        {renderRowActions && <td>{renderRowActions(row)}</td>}
                    </tr>
                ))}

                </tbody>
            </table>

        </div>
    );
}

export default MyTable;