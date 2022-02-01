import { useState } from 'react';
import { useNavigate } from 'react-router-dom';//Redirect
import '../src/UserLogin.css'


function UserLogin()
{
    //const [usernamestate, setUserName] = useState("0");//FIRST RUN HAVING DEFUALT VALUE WHICH IS ZERO useState("0")
    //let [loginData, setLoginData] = useState([]);
    let [IsAuthorised, setAuthorised] = useState(false);
    //let [isLoaded, setIsLoaded] = useState(false);
    let navigate = useNavigate();

    function LoginFetch() {
        //setUserName(doc);
        //alert(username);
        let userId = document.getElementById("txtUserName").value;
        let userPassword = document.getElementById("txtPassword").value;
        //alert(userId + " , " + userPassword);

        if (userId != null && userPassword != null) {
            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'UserId': userId, 'UserPassword': userPassword })
            }

            fetch('http://laptop-j65d2d5f/CrmDashboard/api/User/Login', requestOption)
                .then(response => response.json())
                .then(data => {
                    // setLoginData(data);
                     setAuthorised(true); 
                    //setIsLoaded(true);
                    //console.log(data);     
                    console.log(data);
                    localStorage.clear();
                    sessionStorage.setItem("UserId", userId);
                    sessionStorage.setItem("IsAuthorised", IsAuthorised);
                    console.log(navigate);
                    navigate('/Components/HomePage');
                })
                .catch(error => {
                    alert(error);
                });

            // if (loginData !== null && loginData!==[])  {

            //     // localStorage.clear();
            //     // sessionStorage.setItem("UserId", userId);
            //     // sessionStorage.setItem("IsAuthorised", IsAuthorised);
            //     // console.log(history);
            //     // history.push('../MasterPage/MasterLayout');

            //     if (!isLoaded) {
            //         return <div>Loading...</div>
            //     }
            //     // else {
            //     //     // localStorage.clear();
            //     //     // sessionStorage.setItem("UserId", userId);
            //     //     // sessionStorage.setItem("IsAuthorised", IsAuthorised);
            //     //     // console.log(history);
            //     //     // history.push('../MasterPage/MasterLayout');

            //     //     // // return(<Redirect to="../MasterPage/MasterLayout"></Redirect>)
            //     //     // // alert('Redirect To Home Page');
            //     //     // // let history=useHistory();
            //     //     // // history.push('../MasterPage/MasterLayout');
            //     // }
            // }
            // debugger;
            // if(IsAuthorised==true)
            // {

            //     return <Redirect to="/Components/Dashboard"></Redirect>
            // }

        }
    }


    return (
        <div>
            <form>
                <div className="login-background mt-auto mb-auto">
                    <div className="login-background-left"></div>
                    <div className="login-background-right"></div>
                </div>
                <div className="content-center">
                    <div className="login-circle-big rounded-circle">
                        <div className="content-center-child">
                            <div className="login-circle-small rounded-circle">
                                <div className="controls-contentbox">
                                    <div className="container">

                                        <div className="text-center">
                                            <h2 className="login-header">
                                                <span>ASCENTech</span>
                                                {/*style="color:blue;" */}
                                                <br />
                                                CRM Dashboard
                                            </h2>
                                            <p>Sign in to start your session</p>
                                            {/* style="font-size:11px;" */}
                                            <div className="dropdown-divider"></div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="txtUserName">User Name</label>
                                                <input className="form-control" type="text" id="txtUserName" />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label htmlFor="txtPassword">Password</label>
                                                <input className="form-control" type="text" id="txtPassword" />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12 text-center">
                                                <button type="button" id="btnLogin" onClick={LoginFetch} className="btn btn-primary">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
    }


export default UserLogin;