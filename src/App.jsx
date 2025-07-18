import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Candidate from "./pages/Candidate";
import Internship from "./pages/Internship";

function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/candidate" element={<Candidate/>}/>
            <Route path="/internship" element={<Internship/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App; 