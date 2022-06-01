import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsers, deleteUser } from '../server/Api';
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const Thead = styled(TableRow)`
background: #000;
& > th {
    color:#fff;
    font-size:20px;
}
`

const TBody = styled(TableRow)`
& > td {
    font-size:18px;
}
`

const Allusers = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data.data)
    }

    const deleteUserById = async (id)=>{
           alert("R u sure u want to delete this user")
           await deleteUser(id);
           toast.success("user deleted successfully")
           getUserDetails();
    }

    return (
        <div>
        <Navbar/>
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Mobile Number</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Action</TableCell>
                </Thead>

            </TableHead>
            <TableBody>
                {
                    users.map((user,index) => {
                        return (
                            <TBody key={user.id}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{user.fname}</TableCell>
                                <TableCell>{user.lname}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.mobile}</TableCell>
                                <TableCell>{user.state}</TableCell>
                                <TableCell>
                          <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edituser/${user._id}`}>Edit</Button>
                          <button type="button" className="btn btn-danger" onClick={()=>deleteUserById(user._id)}>Delete</button>
                    </TableCell>
                            </TBody>
                        )
                    })
                }
            </TableBody>
        </StyledTable>
        <ToastContainer />
        </div>
        
    );
};

export default Allusers;