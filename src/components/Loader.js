import React from 'react';
import spinner from '../asset/icons/Spinner.svg'
const Loader = () => {
    return (
        <div style={{height:"100vh",display:"flex",alignItems:"center"}}>
            <img src={spinner} alt="spinner" />
        </div>
    );
};

export default Loader;