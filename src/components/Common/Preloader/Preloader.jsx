import React from 'react';
import preloader from './../../../assets/img/loader.gif';

let Preloader = () => {
    return <div style={{ backgroundColor : '#ccc' }}>
        <img src={preloader} width="60" />
    </div>
}

export default Preloader;