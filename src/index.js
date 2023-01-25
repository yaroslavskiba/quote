import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GroupButton, handle } from './button';
import './index.css';

const load = handle();

// export const MyContext = React.createContext(load);

function App() {
  const [quote, setQuote] = useState(load.say);
  // const context = useContext(MyContext);
  const [color, setColor] = useState(load.color);
  useEffect(() => {
    // setQuote(context.say)
    // setColor(context.color)
  }, color, quote)

  return (
    // <MyContext.Provider value={handle}>
      <div className='container' style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: color,
        // background: context.color,
      }}>
        <div className='card' style={{
          maxWidth: '760px',
          width: '100%',
          // height:'100%',
          background: '#fff',
          padding: '35px',
          border: `1px solid ${color}`,
          borderRadius:'15px',
          display: 'flex',
          justifyContent:'space-between',
          flexDirection: 'column'
        }}>
          <div className='quotes'>
            <p className='text' style={{
              padding: '0 0 0 25px',
              color: color,
              fontSize: '30px'
            }}><FaQuoteLeft /> {quote.phrase}</p>
            <div className='authorContainer' style={{
              display: 'flex',
              justifyContent:'flex-end',
              width: '100%',
            }}>
              <p className='author' style={{
                fontSize:'18px',
                textTransform:'uppercase',
                fontWeight:'500',
                margin: '25px 0',
                width: '350px',
                textAlign:'right',
                color: color
              }}>- {quote.author}</p>
            </div>
          </div>
          <GroupButton back={color} />
        </div>
      </div>
    // </MyContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)