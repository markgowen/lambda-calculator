import React from 'react';

const OperatorButton = props => {
  console.log(props);
  return (
      <div className='operatorBtnContainer'>
        <button className="operator-button">
          {
            /* Display a button element rendering the data being passed down from the parent container on props */
            props.operators.value
          }
        </button>
      </div>
  );
};

export default OperatorButton;
