import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMN } from "./Columns";
import "./table.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { FcRight,FcLeft } from "react-icons/fc";
const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() =>{
      return{
          Filter: ColumnFilter
      }
  })

  const tableInstance = useTable(
    {
      //  columns: columns,
      //  data: data
      columns,
      data,
      defaultColumn
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
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

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
                            <i class="fa-solid fa-square-caret-down"> </i>
                          </>
                        ) : (
                          <>
                            {" "}
                            <i class="fa-solid fa-square-caret-up"> </i>
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
          <button class="btn btn-light" onClick={() => previousPage()} disabled={!canPreviousPage}><FcLeft/> Previous</button>
          <button style={{marginLeft:"8px"}} class="btn btn-light" onClick={() =>nextPage()} disabled={!canNextPage}>Next <FcRight/> </button>
      </div>
    </>
  );
};

export default PaginationTable;