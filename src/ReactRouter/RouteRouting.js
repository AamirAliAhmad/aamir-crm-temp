import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "../App.js";
import HomePage from "../Components/HomePage.js";
import UserLogin from "../UserLogin.js";
import DefaultError from "../DefaultError.js";
import ComplaintRegistration from '../Components/ComplaintRegistration.js'
import TestPage from "../Components/TestPage.js"
import ReactNavSideMenu from "../MasterLayout/ReactNavSideMenu.js";
export default function RouteRouting() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<UserLogin/>}/>  */}
                {/* default should be login page if success then redirect to components/homepage */}
                {/* <Route path="/" element={<ComplaintRegistration/>}/>  */}
                {/* <Route path="/Components/ComplaintRegistration" element={<ComplaintRegistration/>}></Route> */}
                <Route path="/Components/HomePage" element={<HomePage/>}/>  
                <Route path="/" element={<ReactNavSideMenu/>}/> 
                {/* <Route path="/" element={<ReactNavSideMenu/>}/>  */}

                <Route path="*" element={<DefaultError/>}/>
              
            </Routes>

        </BrowserRouter>
    );
}