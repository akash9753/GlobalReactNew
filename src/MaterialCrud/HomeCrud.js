import React from 'react';
import Navbar from './Navbar';
import AddUser from './AddUser';
import Allusers from './Allusers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './EditUser';
const HomeCrud = () => {
    return (
        <div>
            <Navbar />
            <h1 align="center" style={{marginTop:10}}>Welcome to CRUD Application</h1>
            
        </div>
    );
};

export default HomeCrud;