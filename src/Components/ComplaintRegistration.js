//import MasterLayout from "../MasterPage/MasterLayout";
//import '../BS-Style.css';
import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom"; router dom-5
import { useNavigate } from 'react-router-dom'  //router dom-6
//import { loadOptions } from "@babel/core";
import 'bootstrap/dist/css/bootstrap.min.css';

 
export default function ComplaintRegistration(props) {
    //console.log(props);
    //Defining states
    let [Entities, SetEntities] = useState([]);
    let [SubEntities, SetsubEntities] = useState([]);
    let [Projects, SetProjects] = useState([]);
    let [ComplaintTypes, SetComplaintTypes] = useState([]);
    let [ComplaintSubTypes, SetComplaintSubTypes] = useState([]);
    let [CompalaintSources, SetCompalaintSources] = useState([]);
    let [CompalaintPriority, SetCompalaintPriority] = useState([]);


    let [CompFormData, SetCompFormData] = useState({
        entityId: "" ,
        subEntityId: "",
        projectId:"",
        compTypeId:"",
        compSubTypeId:"",
        citizenName:"",
        email:"",
        contactNo:"",
        address:"",
        complaint:"",
        compDateTime:"",
        sourceId:"",
        priorityId:"",
        refNo:"",
        uploadedFile:""
    });
    //const history = useHistory();
  

    const requestOption = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
        //, body: ""JSON.stringify({ 'UserId': userId, 'UserPassword': userPassword })
    }

    //useEffect is work as page load with [] array with second parameter and first parameter as anonymous function.
    useEffect(() => {

        // SetCompFormData({...CompFormData, entityId:props.entityId==""?"":props.data.entityId});
        // console.log(CompFormData.entityId);
    
        //alert('page load called');

        //Fetching Entity==
        fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmEntity', requestOption)
            .then(response => response.json())
            .then(data => {
                SetEntities(data);
             
            })
            .catch(error => {
                alert(error);
            });

        //Fetching Project===
        fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmProjects', requestOption)
            .then(response => response.json())
            .then(data => {
                SetProjects(JSON.parse(data));
            })
            .catch(error => {
                alert(error);
            });

        //Fetching Source===
        fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmCompaintSource', requestOption)
            .then(response => response.json())
            .then(data => {
                SetCompalaintSources(JSON.parse(data));
            })
            .catch(error => {
                alert(error);
            });

        //Fetching Priority===
        fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmCompaintPriority', requestOption)
            .then(response => response.json())
            .then(data => {
                SetCompalaintPriority(JSON.parse(data));
            })
            .catch(error => {
                alert(error);
            });

    }, []);
    //passing blank array to useeffect will prevent calling again and again while change a state.
    //like isnotpostback.

    //console.log(response.headers.get('Content-Type'));
    //console.log(response.headers.get('Date'));

    //console.log(response.status);
    //console.log(response.statusText);
    //console.log(response.type);
    //console.log(response.url);

    let ddlEntity_changed = (val) => {
        if (val != "" && val != undefined) {
            fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmSubEntity/' + val, requestOption)
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    SetsubEntities(JSON.parse(data));
                })
                .catch(error => {
                    alert(error);
                });
        }
        else {
            SetsubEntities([]);
        }
    }

    let ddlProject_changed = (projectId) => {
        if (projectId != "" && projectId != undefined) {
            //Fetching Complaint Type===
            fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmComplaintType/' + projectId, requestOption)
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    SetComplaintTypes(JSON.parse(data));
                })
                .catch(error => {
                    alert(error);
                });
        }
        else {
            SetComplaintTypes([]);
        }
    }


    let ddlCompType_changed = (ComplaintTypeId) => {
        if (ComplaintTypeId != "" && ComplaintTypeId != undefined) {
            //Fetching Complaint Type===
            fetch('http://laptop-j65d2d5f/CrmDashboard/api/MainModule/CrmComplaintSubType/' + ComplaintTypeId, requestOption)
                .then(response => response.json())
                .then(data => {
                    SetComplaintSubTypes(JSON.parse(data));
                })
                .catch(error => {
                    alert(error);
                });
        }
        else {
            SetComplaintSubTypes([]);

        }
    }


    function SaveComplaint() {
        console.warn(CompFormData);
        fetch('http://localhost:1085/api/Complaint/SaveComplaintPost',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            , body: JSON.stringify(CompFormData)
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            alert(data);
        })
        .catch(error => {
            alert(error);
        });
    }
    //==================================================================================================================================

    const name = "b";

    if (name === "a")
        return (<h1>You Don't Have Permission To Access This Page..</h1>)
    else
        return (
            <div>
                {/* <MasterLayout></MasterLayout> */}
                {/* <div id="page-wrapper"> */}
                    {/* <div className="container-fluid"> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 className="page-header">Complaint Registration</h5>
                                <hr/>
                            </div>
                        </div>

                        <form role="form" action="#">
                                 <div className="row mb-2">
                                        <label className="col-md-2 control-label" htmlFor="ddlEntity">Entity
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <select id="ddlEntity" required className="form-control" 
                                            onChange={(e) => { ddlEntity_changed(e.target.value); CompFormData.entityId=e.target.value; }}
                                            value={CompFormData.entityId}
                                            >
                                                <option value="">-- Select --</option>
                                                {
                                                    Entities.map((val, idx) => {
                                                        return <option key={idx} value={Entities[idx].Id}>{Entities[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="ddlSubEntity">Sub-Entity
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <select id="ddlSubEntity" className="form-control" onChange={(e) => { CompFormData.subEntityId=e.target.value; }}>
                                                <option defaultValue>-- Select --</option>
                                                {
                                                    SubEntities.map((val, idx) => {
                                                        return <option key={idx} value={SubEntities[idx].Id}>{SubEntities[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                  
                                </div>


                                <div className="row mb-2">
                                    
                                        <label className="col-md-2 control-label" htmlFor="ddlProject">Project
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <select id="ddlProject" className="form-control" onChange={(e) => { ddlProject_changed(e.target.value); CompFormData.projectId=e.target.value; }}>
                                                <option defaultValue>-- Select --</option>
                                                {
                                                    Projects.map((val, idx) => {
                                                        return <option key={idx} value={Projects[idx].Id}>{Projects[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="ddlCompType">Complaint Type
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4"> 
                                            <select id="ddlCompType" className="form-control" onChange={(e) => { ddlCompType_changed(e.target.value); CompFormData.compTypeId=e.target.value; }}>
                                                <option defaultValue>-- Select --</option>
                                                {
                                                    ComplaintTypes.map((val, idx) => {
                                                        return <option key={idx} value={ComplaintTypes[idx].Id}>{ComplaintTypes[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                     
                                </div>


                                <div className="row mb-2">
                                   
                                        <label className="col-md-2 control-label" htmlFor="ddlCompSubType">Comp.Sub Type
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <select id="ddlCompSubType" className="form-control" onChange={(e) => { CompFormData.compSubTypeId=e.target.value; }}>
                                                <option defaultValue>-- Select --</option>
                                                {
                                                    ComplaintSubTypes.map((val, idx) => {
                                                        return <option key={idx} value={ComplaintSubTypes[idx].Id}>{ComplaintSubTypes[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="txtCitizenName">Citizen Name
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="text" id="txtCitizenName" className="form-control" onChange={(e) => { CompFormData.citizenName=e.target.value; }}></input>
                                        </div>
                                    
                                </div>


                                <div className="row mb-2">
                                   
                                        <label className="col-md-2 control-label" htmlFor="txtEmail">Email
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="text" id="txtEmail" className="form-control" onChange={(e) => { CompFormData.email=e.target.value; }}></input>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="txtContactNo">Contact No
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="text" id="txtContactNo" className="form-control" onChange={(e) => { CompFormData.contactNo=e.target.value; }}></input>
                                        </div>
                                    
                                </div>

                                <div className="row mb-2">
                                    
                                        <label className="col-md-2 control-label" htmlFor="ddlCompSubType">Address
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="text" id="txtCitizenName" className="form-control" onChange={(e) => { CompFormData.address=e.target.value; }}></input>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="txtCitizenName">Complaint
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="text" id="txtCitizenName" className="form-control" onChange={(e) => { CompFormData.complaint=e.target.value; }}></input>
                                        </div>
                                    
                                </div>

                                <div className="row mb-2">
                                    
                                        <label className="col-md-2 control-label" htmlFor="dtComplaintDate">Complaint Date
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="date" defaultValue="2017-05-24" id="dtComplaintDate" className="form-control" onChange={(e) => { CompFormData.compDateTime=e.target.value; }}></input>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="dtComplaintTime">Complaint Time
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="time" id="dtComplaintTime" defaultValue="07:30" className="form-control"></input>
                                        </div>
                                    
                                </div>

                                <div className="row mb-2">
                                    
                                        <label className="col-md-2 control-label" htmlFor="ddlSource">Source
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <select id="ddlSource" className="form-control" onChange={(e) => { CompFormData.sourceId=e.target.value; }}>  
                                                <option defaultValue>-- Select --</option>
                                                {
                                                    CompalaintSources.map((val, idx) => {
                                                        return <option key={idx} value={CompalaintSources[idx].Id}>{CompalaintSources[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="ddlPriority">Priority
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <select id="ddlPriority" className="form-control" onChange={(e) => { CompFormData.priorityId=e.target.value; }}>
                                                <option defaultValue>-- Select --</option>
                                                {
                                                    CompalaintPriority.map((val, idx) => {
                                                        return <option key={idx} value={CompalaintPriority[idx].Id}>{CompalaintPriority[idx].Name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                     
                                </div>

                                <div className="row mb-2">
                                    
                                        <label className="col-md-2 control-label" htmlFor="txtReferenceNo">Reference No
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="text" id="txtReferenceNo" className="form-control" onChange={(e) => { CompFormData.refNo=e.target.value; }}></input>
                                        </div>
                                        <label className="col-md-2 control-label" htmlFor="fileUploadImage">Upload Image
                                            <div style={{ float: "right" }}>:</div>
                                        </label>
                                        <div className="col-md-4">
                                            <input type="file" id="fileUploadImage" accept=".jpg,.jpeg,.png" onChange={(e) => { CompFormData.uploadedFile=e.target.files[0]; }}></input>
                                        </div>
                                   
                                </div>
                                <div className="row mb-2">
                                    <div className="" style={{ textAlign: "center" }}>

                                        <button type="button" className="btn btn-success" onClick={SaveComplaint}>Save</button>
                                        &nbsp;&nbsp;
                                        <button type="button" className="btn btn-warning">Reset</button>
                                        &nbsp; &nbsp;
                                        <button type="button" className="btn btn-primary">Home</button>
                                        &nbsp; &nbsp;<a href="https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json">click me to know bind drop down</a>

                                    </div>
                                </div>
                            
                        </form>
                    </div>
            //     </div>
            // </div>
        );
}