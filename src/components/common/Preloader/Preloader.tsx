import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

const Preloader = () => {
    return (
        <div style={ {margin: '0 auto', textAlign: 'center'}}>
            <img src={preloader} />
        </div>
    );
};

export default Preloader;