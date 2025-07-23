import React from "react"
import './MultiplicationTable.css'

function MultiplicationTable({ rows, cols }) {
    const rowArr = Array.from({ length: rows }, (_, i) => i + 1);
    const colArr = Array.from({ length: cols }, (_, i) => i + 1);

    return (
        <table className="mult-table">
            <thead>
                <tr>
                    <th className="mult-th"></th>
                    {colArr.map((col) => (
                        <th key={col} className="mult-th">{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <>
                    {rowArr.map((row) => (
                        <tr key={row}>
                            <th className="mult-th">{row}</th>
                            <>
                                {colArr.map((col) => (
                                    <td key={col} className="mult-td">{row * col}</td>
                                ))}
                            </>
                        </tr>
                    ))}
                </>
            </tbody>

        </table>

    )
}

export default MultiplicationTable;