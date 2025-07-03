import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Manually defined quote array
const quotesData = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
];

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Set initial quote
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const randomQuote = quotesData[randomIndex];
    setQuote(randomQuote);
  };

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`,
  )}`;

  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text">“{quote.text}”</p>
        <p id="author">— {quote.author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={tweetURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> Tweet
          </a>
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
