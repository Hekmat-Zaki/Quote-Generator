
var quote = document.getElementById("quote");
var author=document.getElementById("author")

var quotesArray=[
    {
        quoteText:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        authorName:"Bernard M. Baruch"
    },
    {
        quoteText:"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
        authorName:"Maurice Switzer, Mrs. Goose, Her Book"
    },
    {
        quoteText:"That which does not kill us makes us stronger.",
        authorName:"Friedrich Nietzsche"
    },
    {
        quoteText:"It is never too late to be what you might have been.",
        authorName:"George Eliot"
    },
    {
        quoteText:"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        authorName:"J.K. Rowling, Harry Potter and the Sorcerer's Stone"
    },
    {
        quoteText:"There is no greater agony than bearing an untold story inside you.",
        authorName:"Maya Angelou, I Know Why the Caged Bird Sings "
    }
];

function generateQuote(){
var x =Math.floor(Math.random()*quotesArray.length);
quote.innerHTML=`"${quotesArray[x].quoteText}"`;
author.innerHTML=`--${quotesArray[x].authorName}`;

}
