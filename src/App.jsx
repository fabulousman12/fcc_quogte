import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom/client";
import "./App.css";
const quotesData = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "A room without books is like a body without a soul.",
    author: "Cicero",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
];

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[random]);
  };

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" — ${quote.author}`,
  )}`;

  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">— {quote.author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={tweetURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
