import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div className="subscribe-container" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <h2>Core Functionality of a Smart Watch</h2>
            <h3>Features</h3>

            <div className="features-container">
                <div className="feature1">
                    <ul>
                        <li>A travel buddy right on your wrist</li>
                        <li> Finding a phone, key or device is even easier
                        </li>
                        <li>They work as a good fitness tracker
                        </li>
                        <li>Reply to messages and receive calls instantly
                        </li>
                    </ul>
                </div>
                <div className="feature2">
                    <ul>
                        <li>See your social media notifications
                        </li>
                        <li>You are even connected while doing activities
                        </li>
                        <li>It keeps you connected longer than your phone
                        </li>
                        <li>Reminds You to Stop and Breathe
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Feature;