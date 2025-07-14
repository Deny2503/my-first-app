import React from "react";
import './Profile.css';

const name = "Dima Bilotserkovskyi";
const email = "bilotserkovskiydimayt@gmail.com";
const tel_number = "+380689198441";

function Profile() {
    return(
        <div className="resume-card">
            <h1 className="resume-name">{name}</h1>
            <hr />
            <p className="resume-field">
                <span className="resume-label">Email:</span>
                <a>{email}</a>
            </p>
            <p className="resume-field">
                <span className="resume-label">Phone:</span>
                <a>{tel_number}</a>
            </p>
        </div>
    );
}

export default Profile;