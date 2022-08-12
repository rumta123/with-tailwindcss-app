import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function BtnReg(props) {


    return (

        <button className="btn btn-link" onClick={props.onClick} style={props.style}> {props.name} </button>



    );
};

export default BtnReg;
