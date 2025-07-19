import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Candidate from "./pages/Candidate";
import Internship from "./pages/Internship";
import  Dashboard  from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App(){

    return(
        <>
        <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Login/>}/>
       <Route path="/dashboardHome" element={<MainLayout/>}>
            <Route path="/dashboardHome/profile" element={<Profile/>}/>
            <Route path="/dashboardHome/candidate" element={<Candidate/>}/>
            <Route path="/dashboardHome/internship" element={<Internship/>}/>
            <Route path="/dashboardHome/dashboard" element={<Dashboard/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App; 