import React from "react";
import "./FirmInfo.css";

function FirmInfo({ company, employees }) {
    return (
        <div className="company-container">
            <div className="company-info">
                <h2>{company.name}</h2>
                <p>
                    <strong>Галузь: </strong>{company.industry}
                </p>
                <p>
                    <strong>Адреса: </strong>{company.address}
                </p>
            </div>
            <div className="employees-block">
                <h3>Працівники: </h3>
                {employees.length === 0 ? (
                    <p className="empty-message">Немає працівників</p>
                ) : (
                    <ul className="employee-list">
                        <>
                            {employees.map((emp) => (
                                <React.Fragment key={emp.id}>
                                    <li className="employee-item">
                                        <span className="emp-name">{emp.name}</span>
                                        <span className="emp-pos">{emp.position}</span>
                                    </li>
                                </React.Fragment>
                            ))}
                        </>
                    </ul>
                )}
            </div>
        </div>

    )
}

export default FirmInfo;