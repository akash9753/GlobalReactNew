// import {format} from 'date-fns'
import { Button } from '@chakra-ui/react'


// import ColumnFilter from './ColumnFilter'
import React from 'react';


   const alertDeleteId= (id)=>{
    alert(`Do u want to delete this id : ${id}`)
   }
   const alertEditId= (id)=>{
    alert(`Do u want to Edit this id : ${id}`)
   }

    
    export const COLUMNSCrud = [
    {
        Header: 'Id',
        Footer:'Id',
        accessor:'_id',
        // Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'First Name',
        Footer:'First Name',
        accessor:'fname',
        // Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer:'Last Name',
        accessor:'lname',
        // Filter: ColumnFilter
        
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor:'gender',
        // Filter: ColumnFilter,
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor:'email',
        // Filter: ColumnFilter
    },
    {
        Header: 'Mobile',
        Footer:'Mobile',
        accessor:'mobile',
        Cell:({row}) => `91${row.values.mobile}`
    },
    {
        Header: 'State',
        Footer:'State',
        accessor:'state',
        // Filter: ColumnFilter
    },
    {
        Header: "Action",
        accessor:"actionEdit",
        disableFilters: true,
        Cell:({row}) => (
            <Button onClick={() => alertEditId(`id : ${row.values._id}`)}>Edit</Button>
        )
    },
    {
        Header: "Action",
        accessor:"actionDelete",
        disableFilters: true,
        Cell:({row}) => (
            <Button onClick={() => alertDeleteId(row.values._id)}>Delete</Button>
        )
    },
]





