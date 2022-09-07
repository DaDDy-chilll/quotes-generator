const quoteNew = document.querySelector('.btn-new');
const author = document.querySelector('.author');
const quote = document.querySelector('.quote');

let newQuote;

async function quoteGenerator(){
    const url = 'https://type.fit/api/quotes';
    const data  = await fetch(url);
    const quotes = await data.json();
    const random = Math.floor(Math.random() * quotes.length);
    newQuote = quotes[random];
    // console.log(quotes);
    quote.textContent = newQuote.text;
    if(newQuote.author == null){
        console.log('hi');
        author.textContent = "Anonymous";
    }else{
        author.textContent = newQuote.author;
    }
}
quoteGenerator();

quoteNew.addEventListener('click',quoteGenerator)