import React from 'react';
import PropTypes from 'prop-types';
const ProptypesChecking = (props) => {
    return (
        <div>
            <h2>ProptypesChecking</h2>
            <h1>{props.name} {props.age}</h1>
        </div>
    );
};

ProptypesChecking.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number
}
ProptypesChecking.defaultProps={
    name:'User'
}

export default ProptypesChecking;