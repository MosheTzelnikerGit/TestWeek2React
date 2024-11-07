import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const floorAccess = useSelector(
        (state: { floorAccess: { floorAccess: boolean[] } }) => state.floorAccess.floorAccess
    );
    const { index } = useParams<{ index: string }>();
    const floorIndex = parseInt(index || "0");

    return floorAccess[floorIndex] ? children : <Navigate to="/forbidden" />;
};

export default PrivateRoute;