import React, {useState} from "react";
// import {useAsyncDebounce} from 'react-table'
import "bootstrap/dist/css/bootstrap.min.css";
const GlobalFilter = ({ filter, setFilter }) => {

    // const [value, setvalue] = useState(filter)

    // const onChange = useAsyncDebounce(value => {
    //     setFilter(value || undefined)
    // },1000)

  return (
    <div className="App">
      <span>
        Search:{" "}
        <input style={{marginLeft: 4}} 
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
        
      </span>
    </div>
  );
};

export default GlobalFilter;
