import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";

function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/changePassword" element={<ChangePassword/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App; 