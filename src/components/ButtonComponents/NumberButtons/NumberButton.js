import React from 'react';

const NumberButton = props => {
  console.log(props);
  return (
      <div className='numberBtnContainer'>
        <button className="number-button">
          {
            /* Display a button element rendering the data being passed down from the parent container on props */
            props.numbers
          }
        </button>
      </div>
  );
};

export default NumberButton;
