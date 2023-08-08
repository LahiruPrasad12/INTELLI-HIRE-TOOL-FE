import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "../views/dashboard/index";

const DashboardRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" exact element={<Dashboard/>} ></Route>
            </Routes>
        </Router>
    );
};

export default DashboardRoute;