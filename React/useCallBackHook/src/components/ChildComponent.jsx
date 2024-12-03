/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'

const ChildComponent = React.memo(
  (props) => {
    console.log("Child component go");
    
    return (
      <div>
        <button>
          {props.buttonName}
        </button>
      </div>
    )
  }
);

export default ChildComponent
// React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nhi to nahi hoga
