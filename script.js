
const quoteBtn = document.querySelector('button');
const quoteText = document.querySelector('.auther');
const url = "https://api.quotable.io/random";

function randomquote() {
    
    quoteBtn.innerHTML = "Loading";

    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            document.querySelector(".quote").innerHTML = data.content;
            document.querySelector(".auther").innerHTML = " - " + data.author;

            
            quoteBtn.innerHTML = "New Quote";
        })
        .catch(function (err) {
            console.log(err);
            
            
            quoteBtn.innerHTML = "New Quote";
        });
}

quoteBtn.addEventListener('click', randomquote);
