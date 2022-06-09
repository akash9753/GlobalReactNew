import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2>Click on Link to view Topic</h2>
      <div>
      <ul >
        <li>
          <Link to="/proptypesChecking">ProptypesChecking</Link>
        </li>
        <li>
          <Link to="/homecrud">CrudApp</Link>
        </li>
        <li>
          <Link to="/usestate">useState Hook</Link>
        </li>
        <li>
          <Link to="/useeffect">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/usememo">useMemo Hook</Link>
        </li>
        <li>
          <Link to="/usecallback">useCallback Hook</Link>
        </li>
        <li>
          <Link to="/react-table">React Table</Link>
        </li>
        <li>
          <Link to="/sort-table">Sort Table</Link>
        </li>
        <li>
          <Link to="/filter-table">Filter Table</Link>
        </li>
        <li>
          <Link to="/pagination-table">Pagination Table</Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Home;