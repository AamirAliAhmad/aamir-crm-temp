//import MasterLayout from "../MasterLayout/MasterLayout";
// import ReactNavSideMenu from '../MasterLayout/ReactNavSideMenu.js'
export default function HomePage() {
    return (
        <div>
            {/* <MasterLayout></MasterLayout> */}
            {/* aamir test change */}
            {/* hellow */}
            {/* <ReactNavSideMenu></ReactNavSideMenu> */}


            {/* from here pages will create easily, rest of code need to devide into top menu and side menu */}

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="card border-dark">
                        <div className="card-heading bg-info p-2">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fa fa-comments fa-5x"></i>
                                </div>
                                <div className="col-9 text-end">
                                    <div className="huge">26</div>
                                    <div>New Comments!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="card-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card border-dark">
                        <div className="card-heading bg-success p-2">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fa fa-tasks fa-5x"></i>
                                </div>
                                <div className="col-9 text-end">
                                    <div className="huge">12</div>
                                    <div>New Tasks!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="card-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card border-dark">
                        <div className="card-heading bg-warning p-2">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fa fa-shopping-cart fa-5x"></i>
                                </div>
                                <div className="col-9 text-end">
                                    <div className="huge">124</div>
                                    <div>New Orders!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="card-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card border-dark">
                        <div className="card-heading bg-danger p-2">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fa fa-support fa-5x"></i>
                                </div>
                                <div className="col-9 text-end">
                                    <div className="">13</div>
                                    <div>Support Tickets!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="card-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}