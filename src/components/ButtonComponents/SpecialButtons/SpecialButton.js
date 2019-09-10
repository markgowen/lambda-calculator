import React from "react";

const SpecialButton = props => {
  console.log(props)

  return (
      <div className='specialBtnContainer'>
        <button className='special-button'>
          {/* Display a button element rendering the data being passed down from the parent container on props */
          props.specials}
        </button>
      </div>
  );
};

export default SpecialButton;