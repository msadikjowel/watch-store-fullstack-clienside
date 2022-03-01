import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            {/* react helmet for dynamic tab name */}
            <Helmet>
                <title>Nothing found. Go back</title>
            </Helmet>
            <div className="notfound">

            </div>
            <div className="notfound-text">

                <NavLink to='/home'><button>GO HOME</button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;