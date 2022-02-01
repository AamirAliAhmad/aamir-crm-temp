import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App.js";
import HomePage from "../Components/HomePage.js";
import UserLogin from "../UserLogin.js";
import DefaultError from "../DefaultError.js";

export default function RouteRouting() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<UserLogin/>}/>  */}
                <Route path="/" element={<HomePage/>}/> 
                <Route path="/Components/HomePage" element={<HomePage/>}/>  
                <Route path="*" element={<DefaultError/>}/>
            </Routes>

        </BrowserRouter>
    );
}