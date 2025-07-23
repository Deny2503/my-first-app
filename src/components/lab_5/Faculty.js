import React from "react";
import "./Faculty.css"

function Faculty({ faculty }) {
    return (
        <div className="faculty-block">
            <h2 className="faculty-title">{faculty.name}</h2>
            <div className="groups-block">
                {faculty.groups.length === 0 ? (
                    <p className="no-groups">Груп немає</p>
                ) : (
                    <>
                        {faculty.groups.map((group) => (
                            <React.Fragment key={group.id}>
                                <div className="group-block">
                                    <h3 className="group-title">{group.name}</h3>
                                    {group.students.length === 0 ? (
                                        <p className="no-students">Студентів немає</p>
                                    ) : (
                                        <ul className="students-list">
                                            <>
                                                {group.students.map((student) => (
                                                    <React.Fragment key={student.id}>
                                                        <li className="student-item">{student.name}</li>
                                                    </React.Fragment>
                                                ))}
                                            </>
                                        </ul>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Faculty;