import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMN } from "./Columns";
import './table.css'

const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    //  columns: columns,
    //  data: data
    columns,
    data,
  },
  useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    tableInstance;

  return (
      <>
              
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                <span>
                    {column.isSorted ? (column.isSortedDesc ? (<> <i class="fa-solid fa-square-caret-down"> </i></>) : (<> <i class="fa-solid fa-square-caret-up"> </i></>)) : ''} 
                </span>
                </th>
              ))}
            </tr>
          );
        })}
      </thead>
      
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
          {
              footerGroups.map((footerGroup)=>{
                  return (
                    <tr {...footerGroup.getFooterGroupProps()}>
                    {footerGroup.headers.map((column)=>(
                        <td {...column.getFooterProps}>{column.render('Footer')}</td>
                    ))}

                </tr>
                  )
                   
              })
          }
      </tfoot>
    </table>

    </>
  );
};

export default SortingTable;