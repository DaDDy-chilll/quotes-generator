const quoteNew = document.querySelector('.btn-new');
const author = document.querySelector('.author');
const quote = document.querySelector('.quote');

let newQuote;
const randomQuote = ()=>{
    
 
    
}

async function quoteGenerator(){
    const url = 'https://type.fit/api/quotes';
    const data  = await fetch(url);
    const quotes = await data.json();
    const random = Math.floor(Math.random() * quotes.length);
    newQuote = quotes[random];
    author.textContent = newQuote.author;
    quote.textContent = newQuote.text;
}
quoteGenerator();

quoteNew.addEventListener('click',quoteGenerator)