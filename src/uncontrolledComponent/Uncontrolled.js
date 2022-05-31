import React, { useRef } from 'react';

const Uncontrolled = () => {
    const inputRef = useRef();

    const submitForm=(event)=>{
        event.preventDefault();
        console.log(inputRef.current.value);
    }
    return (
        <div className='App'>
            <form onSubmit={(event)=>submitForm(event)}>
                <input type="text" ref={inputRef}/><br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Uncontrolled;