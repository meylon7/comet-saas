import React, { FC } from 'react';
import { Navigate } from 'react-router';

const AuthenticatedRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    const expire = localStorage.getItem('expire');
    const now = Date.now();
    // if (token && expire && parseInt(expire) > parseInt(now.toString())) {
    //     return element;
    // } else {
    //     return <Navigate to="/" replace />
    // }
    return <Navigate to="/" replace />
};

export default AuthenticatedRoute;