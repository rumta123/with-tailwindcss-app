import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function Button(props) {


    return (
        <button type="submit" className="btn btn-success btn btn-success input-bordered w-full max-w-xs" onClick={props.onClick}> {props.name} </button>
    );
};

export default Button;
