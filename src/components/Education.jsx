import React from 'react';
import '../css/Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const EducationCard = ({ yearRange, degree, institution, details, icon }) => {
    return (
        <div className="education-card">
            <div className="education-icon">{icon}</div>
            <div className="education-details">
                <p className="year-range">{yearRange}</p>
                <h3>{degree}</h3>
                <p>{institution}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

const educationData = [
    {
        yearRange: '2021 - 2023',
        degree: 'Post Graduation - MCA',
        institution: 'College: Techno College Hooghly',
        details: 'University: M.A.K.A.U.T',
        icon: <FaGraduationCap />
    },
    {
        yearRange: '2017 - 2020',
        degree: 'Graduation - BCA',
        institution: 'College: Techno India Hooghly Campus',
        details: 'University: M.A.K.A.U.T',
        icon: <FaGraduationCap />
    },
    {
        yearRange: '2017',
        degree: 'Higher Secondary - 12th (Intermediate)',
        institution: 'School: Serampore Union Institution',
        details: 'Board: W.B.C.H.S.E',
        icon: <FaGraduationCap />
    },
    {
        yearRange: '2015',
        degree: 'Secondary - 10th (Matriculation)',
        institution: 'School: Serampore Union Institution',
        details: 'Board: W.B.B.S.E',
        icon: <FaGraduationCap />
    }
];

export default function Education() {
    return (
        <div className="education-container">
            <h1>Education</h1>
            <div className="timeline">
                {educationData.map((education, index) => (
                    <EducationCard key={index} {...education} />
                ))}
            </div>
        </div>
    );
}
