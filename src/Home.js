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
      </ul>
      </div>
    </>
  );
};

export default Home;