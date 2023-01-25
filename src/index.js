import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { FaQuoteLeft, FaTumblr, FaTwitter, FaCarrot } from "react-icons/fa";
import { Button } from './button';
import './index.css';



const backgrounds = ['#7B2869', '#9D3C72', '#C85C8E', '#FFBABA', '#FFB100', '#FBC252', '#A3BB98']
const quotes = [{ phrase: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { phrase: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.", author: "Elie Wiesel" },
  { phrase: "Have you ever noticed how ‘What the hell’ is always the right decision to make?", author: "Terry Johnson, Insignificance" },
  { phrase: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank, Anne Frank's Tales from the Secret Annex: A Collection of Her Short Stories, Fables, and Lesser-Known Writings" },
  { phrase: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has", author: "Margaret Mead" },
  { phrase: "We have to dare to be ourselves, however frightening or strange that self may prove to be.", author: "May Sarton" },
  { phrase: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away", author: "Stephen Hawking" }];

const random = (max , min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

function GroupButton(props) {
  return (
      <div className='buttonsContainer' style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {props.children}
      </div>
  );
}

function handle() {
  const color = backgrounds[random(backgrounds.length)];
  const say = quotes[random(quotes.length)];
  return {say, color};
}

const load = handle();

function App() {
  const [quote, setQuote] = useState(load.say);
  const [color, setColor] = useState(load.color);


  return (
      <div className='container' style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: color,
      }}>
        <div className='card' style={{
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
        <GroupButton>
          <div className='social' style={{display:'flex', gap:'25px'}}>
            <Button w='70px' h='70px' back={color} >
              <FaTumblr />
            </Button>
            <Button w='70px' h='70px' back={color}>
              <FaTwitter />
            </Button>
          </div>
          <Button w='230px' h='70px' click={() => {
            let loadHandler = handle();
            if (loadHandler.say.phrase === quote) {
              loadHandler = handle();
            }
            setColor(loadHandler.color);
            setQuote(loadHandler.say);
          }} back={color}>
            Next Quote <FaCarrot />
          </Button>
        </GroupButton>
        </div>
      </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)