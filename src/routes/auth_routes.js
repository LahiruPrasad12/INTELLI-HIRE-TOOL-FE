import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../views/auth/signing";
import Test from "../views/Test";

const AuthRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>} ></Route>
                <Route path="/test" exact element={<Test/>} ></Route>
            </Routes>
        </Router>
    );
};

export default AuthRoutes;