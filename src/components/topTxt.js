import React from 'react';
import '../index.css';

function TopTxt(props){
    return(
        <div className="card__txt-1">
            {props.txt}
        </div>  
    );
}

export default TopTxt;