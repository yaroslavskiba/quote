import React, { useState, useEffect, useContext, Fragment } from 'react';
import { FaTumblr, FaTwitter, FaCarrot } from "react-icons/fa";

const backgrounds = ['#aee2f6', '#002f49', '#c18f6e', '#72c2f4', '#009ccf', '#601f2d']
const quotes = [{phrase: 'For freecodecamp', author: 'yaroslav'}, {phrase: 'in vino veritas', author: 'skiba'}];
const random = (max , min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function handle() {
  const color = backgrounds[random(backgrounds.length)];
  const say = quotes[random(quotes.length)];
  return {say, color};
}

function Button(props) {
  return (
    <button onClick={props.click} className="button" style={{ width: props.w, height: props.h, border:'1px solid #000', fontSize:'16px' }}>
      {props.children}
    </button>
  );
}

export function GroupButton() {
  return (
    <div className='buttonsContainer' style={{display:'flex', justifyContent:'space-between'}}>
      <div className='social'>
        <Button w='50px' h='40px' >
          <FaTumblr />
        </Button>
        <Button w='50px' h='40px'>
          <FaTwitter />
        </Button>
      </div>
      <Button w='150px' h='40px' click={handle}>
        Next Quote <FaCarrot />
      </Button>
    </div>
  );
}