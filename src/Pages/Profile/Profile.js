import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Profile = () => {
    const { user } = useAuth();
    return (
        <>
            <Header></Header>
            <div style={{ textAlign: 'center', marginTop: "3rem" }}>
                <h2 style={{ fontWeight: '600' }}>Welcome Mr. <span style={{ color: 'rgb(23,23,229)' }}>{user.displayName}</span></h2>
                <p>User profile details coming soon...</p>
            </div>
        </>
    );
};

export default Profile;