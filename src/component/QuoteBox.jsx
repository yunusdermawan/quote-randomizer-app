import './QuoteBox.css'

const QuoteBox = ({quote, handleNewQuote}) => (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h1 id="quote-author">{quote.author}</h1>
      <div id="action">
        <button
          id="new-quote"
          class="button"
          onClick={handleNewQuote}
         >
          New Quote
        </button>
        <a
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
         >
          Tweet Quote on Twitter
        </a>
      </div>
    </div>
  )

  export default QuoteBox