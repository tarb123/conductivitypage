import React, { useState } from 'react';
import './PersonalityTest.css';

const PersonalityTest = () => {
    const [answers, setAnswers] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answers); // Using answers after submission
        // Further processing...
    };

    return (
        <div className="personality-test">
            <h1>Personality Test</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Question 1:
                    <input type="text" name="question1" onChange={handleInputChange} />
                </label>
                {/* Add more questions */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PersonalityTest;
