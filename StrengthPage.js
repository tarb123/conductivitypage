import React from 'react';
import './StrengthPage.css';  // Make sure you create this CSS file

const StrengthPage = () => {
    return (
        <div className="strength-page">
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + '/cover_2.jpg'} alt="Cover" className="cover-image" max-width="1200" width= "1500px" height="450"  />
                <div className="text-overlay">
                    <h1>Unlocking Employee Strengths</h1>
                    <p>Our company values the unique strengths each individual brings to the team...</p>
                </div>
            </div>
        </div>
    );
};

export default StrengthPage;
