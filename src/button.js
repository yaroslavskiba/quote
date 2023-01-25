import React from 'react';

export function Button(props) {
  return (
    <button onClick={props.click} className="button" style={{
      color: props.back,
      width: props.w,
      height: props.h,
      border: `1.5px solid ${props.back}`,
      fontSize: '24px',
      borderRadius:'15px'
    }}>
      {props.children}
    </button>
  );
}

