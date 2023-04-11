const quoteText = document.getElementById('quotes-text');
const authorText = document.getElementById('author-text');
const nextBtn = document.getElementById('next');
const copyBtn = document.getElementById('copy');

copyBtn.addEventListener('click', () => {

    var copiedText = document.querySelector("p");
    const textForCopy = copiedText.innerHTML;
    navigator.clipboard.writeText(`${textForCopy} By ${authorText.innerHTML}`);

    alert(`Your Quote ${textForCopy} By ${authorText.innerHTML} is Ready To use`)

})

nextBtn.addEventListener('click', getquotes = async () => {

    const api = "https://api.quotable.io/random";
    try {
        let data = await fetch(api);
        realData = await data.json();
        quoteText.innerHTML = `❝ ${realData.content} ❞`
        authorText.innerHTML = `Author :- ${realData.author}`
    }
    catch (err) { }



})


getquotes();
