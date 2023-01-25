import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { FaQuoteLeft } from "react-icons/fa";
import { GroupButton, handle } from './button';
import './index.css';

const load = handle()

function App() {
  const [quote, setQuote] = useState(load.say);
  const [color, setColor] = useState(load.color);

  return (
    <div class='container' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background:color }}>
      <div class='card' style={{ width: '450px', height: '300px', boxShadow:'3px 3px 3px #000', padding:'10px', border:'1px solid #000' }}>
        <p className='text'><span className='quotesStart'><FaQuoteLeft/>  </span>{quote.phrase}</p>
        <p className='text'>{ quote.author }</p>
        <GroupButton back={color} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)