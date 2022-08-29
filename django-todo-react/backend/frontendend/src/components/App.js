import React, { Component} from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Hello from "./hello";
import { useState,useEffect} from "react";
import axiosInstance from "../axiosApi";


const App = () => {



    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };


        return (
            <div className="site">
                <nav>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
                <main>
                    <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>

                    <Routes>
                        <Route exact path={"/login/"} element={<Login />}/>
                        <Route exact path={"/signup/"} element={<Signup />}/>
                        <Route exact path={"/hello/"} element={<Hello />}/>
                        <Route path={"/"} render={() => <div>Home again</div>} />
                    </Routes>
                </main>
            </div>
        );
}
export default App;