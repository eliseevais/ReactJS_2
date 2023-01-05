import React from "react";
import PropTypes from 'prop-types';


const Button = (props) => {
  return (
    <>
      <button {...props} style={{color: 'black'}} onClick={props.click}>{props.children}</button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string
}

export default Button;