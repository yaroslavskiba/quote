import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaQuoteLeft, FaTumblr, FaTwitter, FaCarrot } from "react-icons/fa";
import { Button } from './button';
import { handle } from './storage';
import './index.css';

function App() {
  const load = handle();

  const [quote, setQuote] = useState(load.say);
  const [color, setColor] = useState(load.color);

  return (
      <div className='container' style={{
        transition:'all 1.5s ease',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: color,
      }}>
      
        <div className='card' id="quote-box" style={{
          maxWidth: '760px',
          width: '100%',
          background: '#fff',
          padding: '35px',
          border: `1px solid ${color}`,
          borderRadius:'15px',
          display: 'flex',
          justifyContent:'space-between',
          flexDirection: 'column'
        }}>
          
          <div className='quotes'>
            <p className='text' id="text" style={{
              padding: '0 0 0 25px',
              color: color,
              fontSize: '30px'
            }}><FaQuoteLeft /> {quote.phrase}</p>
            
            <div className='authorContainer' style={{
              display: 'flex',
              justifyContent:'flex-end',
              width: '100%',
            }}>
              
              <p className='author' id="author" style={{
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
          
          
          <div className='buttonsContainer' style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div className='social' style={{display:'flex', gap:'25px'}}>
            <Button w='70px' h='70px' id="tumblr-quote" back={color} href='https://www.tumblr.com/' >
              <FaTumblr />
            </Button>
            <Button w='70px' h='70px' id="tweet-quote" back={color} href='https://www.twitter.com/intent/tweet/' >
              <FaTwitter />
            </Button>
          </div>

          <Button w='230px' h='70px' id="new-quote" click={() => {
            let loadHandler;
            do {
              loadHandler = handle();
              console.log(loadHandler.say.phrase, quote)
            } while (loadHandler.say.phrase === quote.phrase);

              setColor(loadHandler.color);
              setQuote(loadHandler.say);
            }} back={color}>
            Next Quote <FaCarrot />
          </Button>

          </div>
        </div>
      </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)