import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function Button(props) {


    return (

        <button type="submit" className="btn btn-success mx-1"> {props.name} </button>



    );
};

export default Button;
