import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const QUOTES_API = "https://type.fit/api/quotes";

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [quotes, setQuotes] = useState([]);

  // Fetch quotes once
  useEffect(() => {
    fetch(QUOTES_API)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        getRandomQuote(data);
      });
  }, []);

  const getRandomQuote = (quoteList = quotes) => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    const randomQuote = quoteList[randomIndex];
    setQuote({
      text: randomQuote.text,
      author: randomQuote.author || "Unknown",
    });
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
          <button id="new-quote" onClick={() => getRandomQuote()}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);