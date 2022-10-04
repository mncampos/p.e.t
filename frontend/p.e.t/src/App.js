import "./App.css";
import { useState, useEffect, createContext } from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/NavigationBar/Navbar";
import Footer from "./components/FooterBar/Footer";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LogOut from "./components/LogOut/LogOut";
import MyPetsPage from "./components/MyPetsPage/MyPetsPage";
import NewPet from "./components/NewPetPage/NewPet";
import {ProtectedRoute} from "./ProtectedRoutes";
import RegisterService from "./components/RegisterService/RegisterService";
import ServicesHistory from "./components/ServicesHistory/ServicesHistory";
import { EmployeeRoute } from "./EmployeeRoute";
import DelegateService from "./components/DelegateService/DelegateService";
import EmployeeServices from "./components/EmployeeServices/EmployeeServices";
import SubBar from "./components/NavigationBar/SubBar";
import ProceduresView from "./components/ManagerProceduresView/ProceduresView";
import ProceduresHistory from "./components/ProceduresHistory/ProceduresHistory";

export const UserContext = createContext({});
let isUserLoggedIn = false;

function App() {
  const [userSession, setUserSession] = useState(true);

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        const res = await fetch('/api/isAuth');
        if (!res.ok) return;

        setUserSession(await res.json());
        isUserLoggedIn = true;
       
      } catch (error) {
        
        console.error("Error fetching auth info.", error);
        return;
      }
    };
    fetchUserAuth();
  }, []);

  return (
    <UserContext.Provider value={userSession}>
      <Navbar/>
      {isUserLoggedIn? <SubBar/> : null}
      <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/signin' element={<RegisterPage />} />
        <Route path='/logout' element={ <ProtectedRoute><LogOut /> </ProtectedRoute>} />
        <Route path='/myPets' element={<ProtectedRoute><MyPetsPage /> </ProtectedRoute>} />
        <Route path='/newPet' element={<ProtectedRoute><NewPet/> </ProtectedRoute>}/>
        <Route path='/registerService' element={ <ProtectedRoute><RegisterService/></ProtectedRoute>} />
        <Route path='/servicesHistory' element={ <ProtectedRoute><ServicesHistory/></ProtectedRoute>} />
        <Route path='/delegateService' element={ <EmployeeRoute><DelegateService/></EmployeeRoute>} />
        <Route path='/employeeServices' element={ <EmployeeRoute><EmployeeServices/></EmployeeRoute>} />
        <Route path='/proceduresView' element={ <EmployeeRoute><ProceduresView/></EmployeeRoute>} />
        <Route path='/proceduresHistory' element={ <ProtectedRoute><ProceduresHistory/></ProtectedRoute>} />
      </Routes>
      <Footer/>
    </UserContext.Provider>
  );
}

export default App;
