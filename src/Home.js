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
      </ul>
      </div>
    </>
  );
};

export default Home;