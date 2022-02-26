// getting the required elements
var quoteText = document.querySelector('.quote');
var authorText = document.querySelector('.authorText');
var btnGen = document.getElementById('btnGenerate');
var sound = document.querySelector('.sound');
var copy = document.querySelector('.copy');
var popMenu = document.querySelector('.popup');
var twitter = document.querySelector('.twitter');

btnGen.addEventListener('click', ()=>{

    btnGen.classList.add('loading');
    btnGen.innerText = "Loading Quote";

    // Fetching the quotes from quotable api
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerHTML = result.content;
        authorText.innerHTML = result.author;
        btnGen.classList.remove('loading');
        btnGen.innerText = "New Quote";
        console.log(result);
    })
});


sound.addEventListener('click', ()=>{
    let speech = new SpeechSynthesisUtterance(quoteText.innerText);
    speechSynthesis.speak(speech);
});

// copy the quote to the clipboard
copy.addEventListener('click', ()=>{

    navigator.clipboard.writeText(quoteText.innerHTML);

    popMenu.classList.add('popped');

    setTimeout(function(){ 
        popMenu.classList.remove('popped');
    }, 3000);

});

// tweet the quote
twitter.addEventListener('click', ()=>{
    let tweet = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;

    window.open(tweet, "_blank");
});
