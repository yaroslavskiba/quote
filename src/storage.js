import React from 'react';

const random = (max , min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function handle() {
  const backgrounds = ['#7B2869', '#9D3C72', '#C85C8E', '#FFBABA', '#FFB100', '#FBC252', '#A3BB98']
  const quotes = [{ phrase: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { phrase: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.", author: "Elie Wiesel" },
  { phrase: "Have you ever noticed how ‘What the hell’ is always the right decision to make?", author: "Terry Johnson, Insignificance" },
  { phrase: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank, Anne Frank's Tales from the Secret Annex: A Collection of Her Short Stories, Fables, and Lesser-Known Writings" },
  { phrase: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has", author: "Margaret Mead" },
  { phrase: "We have to dare to be ourselves, however frightening or strange that self may prove to be.", author: "May Sarton" },
  { phrase: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away", author: "Stephen Hawking" }];

  const color = backgrounds[random(backgrounds.length)];
  const say = quotes[random(quotes.length)];
  return {say, color};
}


