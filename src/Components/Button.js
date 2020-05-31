import React from 'react';
import {Link} from 'react-router-dom';

const Button = (props) => {
  return (
    <div className="button" onClick={props.click} >
    	<h3><Link to={props.src}>{props.name}</Link></h3>
    </div>
  )
}

export default Button;