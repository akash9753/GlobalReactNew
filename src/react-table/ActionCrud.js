import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table";
import { COLUMNSCrud } from "./ColumnCrudAction";
import "./table.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { FcRight,FcLeft,FcPrevious } from "react-icons/fc";
import { getUsers } from './Api';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const url = "https://nodejsreact1234.herokuapp.com/user/all"

const PaginationTable = () => {

  
    const [users, setUsers] = useState([])

    // useEffect(()=>{
    //   const fetchUsers = async () => {
    //           try{
    //              const {data} = await axios.get(url)
    //              setUsers(data.data);
    //              console.log("data",data.data);
    //            }catch(error){
    //               console.log(error);
    //           }
    //   }
    //   fetchUsers();
    // },[])
    console.log('users object',users);
    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log("getUserDetails",response);
        setUsers(response.data.data)
        
    }

    const columns = useMemo(() => COLUMNSCrud, []);
    const data = useMemo(() => users, [users]);
    console.log("Data",data);
  const defaultColumn = useMemo(() =>{
      return{
          Filter: ColumnFilter
      }
  },[])
  
  const tableInstance = useTable(
    {
      //  columns: columns,
      //  data: data
      columns,
      data,
      defaultColumn,
      initialState:{pageIndex:0}
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    <span>
                    
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <>
                            {" "}
                            <i className="fa-solid fa-square-caret-down"> </i>
                          </>
                        ) : (
                          <>
                            {" "}
                            <i className="fa-solid fa-square-caret-up"> </i>
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    <div></div>
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterProps}>{column.render("Footer")}</td>
                ))}
              </tr>
            );
          })}
        </tfoot> */}
      </table>
      <div className="App">
          <span>
              Page{' '}
              <strong>
                  {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
          </span>
          <span>
              | Go To page: {' '}
              <input type="number" defaultValue={pageIndex + 1}
              onChange={ e =>{
                  const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
                  gotoPage(pageNumber)}}
                  style={{width:"50px"}}
                  />
                  
          </span>
          <select value={pageSize}
          onChange={(e)=>setPageSize(Number(e.target.value))}
          >
            {[10 , 15, 20].map((pageSize)=>(
                <option key={pageSize} value={pageSize}>
                    show {pageSize}
                </option>
            ))}  
          </select>
          <button style={{marginLeft:"8px"}} className="btn btn-light" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button style={{marginLeft:"8px"}} className="btn btn-light" onClick={() => previousPage()} disabled={!canPreviousPage}><FcLeft/> </button>
          <button style={{marginLeft:"8px"}} className="btn btn-light" onClick={() =>nextPage()} disabled={!canNextPage}><FcRight/> </button>
          <button style={{marginLeft:"8px"}} className="btn btn-light" onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  );
};

export default PaginationTable;