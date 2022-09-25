import "./App.css";
import { useState, useEffect, createContext } from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/NavigationBar/Navbar";
import Footer from "./components/FooterBar/Footer";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LogOut from "./components/LogOut/LogOut";

export const UserContext = createContext({});

function App() {
  const [userSession, setUserSession] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/isAuth');
        if (!res.ok) return setLoading(false);

        setUserSession(await res.json());
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching auth info.", error);
        return;
      }
    };
    fetchUserAuth();
  }, []);

  return (
    <UserContext.Provider value={userSession}>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/signin' element={<RegisterPage />} />
        <Route path='/logout' element={<LogOut /> } />
        {loading? <>loading...</> : <>carregado</>}
      </Routes>
      <Footer/>
    </UserContext.Provider>
  );
}

export default App;
