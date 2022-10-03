import React, {useContext} from 'react';
import { UserContext } from './App';
import { Navigate } from "react-router-dom";

export const EmployeeRoute = ({children}) => {
    const userContext = useContext(UserContext);

    if (!userContext.email || userContext.userType === 'Cliente') {
        return <Navigate to="/"/>;
    }
    return children;
};