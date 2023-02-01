import React from 'react';

export function Button(props) {
  return (
    <a href={props.href} id={props.id} onClick={props.click} className="button" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      color: props.back,
      width: props.w,
      height: props.h,
      border: `1.5px solid ${props.back}`,
      fontSize: '24px',
      borderRadius: '15px',
      cursor:'pointer',
    }}>
      {props.children}
    </a>
  );
}

