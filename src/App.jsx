import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Candidate from "./pages/Candidate";
import Internship from "./pages/Internship";
import  Dashboard  from "./pages/Sidebar";
import MainLayout from "./layouts/MainLayout";
import DashboardContent from "./pages/DashboardContent";

function App(){

    return(
        <>
        <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboardHome" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardContent />} />
        <Route path="profile" element={<Profile />} />
        <Route path="internship" element={<Internship />} />
        <Route path="candidate" element={<Candidate />} />
      </Route>
       {/* <Route path="/dashboardHome" element={<MainLayout/>}>
            <Route path="/dashboardHome/profile" element={<Profile/>}/>
            <Route path="/dashboardHome/candidate" element={<Candidate/>}/>
            <Route path="/dashboardHome/internship" element={<Internship/>}/>
            <Route path="/dashboardHome/dashboard" element={<Dashboard/>}/>
        </Route> */}
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App; 