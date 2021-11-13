import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="notfound">

            </div>
            <div className="notfound-text">

                <NavLink to='/home'><button>GO HOME</button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;