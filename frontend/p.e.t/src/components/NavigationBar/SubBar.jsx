import React, {useContext} from 'react';
import ManagerBar from './ManagerBar';
import UserBar from './UserBar';
import EmployeeBar from './EmployeeBar';
import { UserContext } from '../../App';

export default function SubBar(){
const userContext = useContext(UserContext);

if(userContext.userType === 'Cliente')
    return (<UserBar/>)
if(userContext.userType === 'Manager')
    return (<ManagerBar/>)
if(userContext.userType === 'Employee')
    return (<EmployeeBar/>)
}