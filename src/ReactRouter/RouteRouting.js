import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App.js";
import HomePage from "../Components/HomePage.js";
import UserLogin from "../UserLogin.js";
import DefaultError from "../DefaultError.js";
import ComplaintRegistration from '../Components/ComplaintRegistration.js'
import TestPage from "../Components/TestPage.js"
//import ReactNavSideMenu from "../MasterLayout/ReactNavSideMenu.js";
//import MasterLayout from "../MasterLayout/MasterLayout-RefPage.js";
export default function RouteRouting() {
    return (
        <p>asdfasdfasdfasdf</p>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/Components/ComplaintRegistration" element={<ComplaintRegistration/>}/> 
        //         <Route path="/Components/HomePage" element={<HomePage/>}/>  
        //         <Route path="/" element={<ReactNavSideMenu/>}/> 
        //         <Route path="*" element={<DefaultError/>}/>               
        //     </Routes>
        // </BrowserRouter>
    );
}