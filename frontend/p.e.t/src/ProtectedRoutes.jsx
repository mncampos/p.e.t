import React, {useContext} from 'react';
import { UserContext } from './App';
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const userContext = useContext(UserContext);

    if (!userContext.email) {
        return <Navigate to="/"/>;
    }
    return children;
};