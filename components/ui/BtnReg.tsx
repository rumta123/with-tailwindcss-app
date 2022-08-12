import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function BtnReg(props) {


    return (

        <button className="btn btn-link" > {props.name} onClick={props.onClick}</button>



    );
};

export default BtnReg;
