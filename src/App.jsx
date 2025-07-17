import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Candidate from "./pages/Candidate";

function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/changePassword" element={<ChangePassword/>}/>
            <Route path="/candidate" element={<Candidate/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App; 