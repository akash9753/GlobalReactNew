import React from 'react';
import './App.css';
import Navbar from './MaterialCrud/Navbar';
import AddUser from './MaterialCrud/AddUser';
import Allusers from './MaterialCrud/Allusers';
import HomeCrud from './MaterialCrud/HomeCrud';
import {  Routes, Route } from 'react-router-dom';
import EditUser from './MaterialCrud/EditUser';

function CrudApp() {
  return (
    <div className="app">
        <Navbar />
        <Routes>
         <Route path="/" element={<HomeCrud />} />
         <Route path="/alluser" element={<Allusers />} />
         <Route path="/adduser" element={<AddUser />} />
         <Route path="/crudapp/edituser/:id" element={<EditUser />} />
        </Routes>
      
    </div>
  )
}

export default CrudApp;