function getData() {
    fetch("https://solarapi.niei.net/data")
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('production-value').innerHTML = json.production;
        document.getElementById('consumption-value').innerHTML = json.consumption;
        document.getElementById('grid-value').innerHTML = json.grid;
        if (json.feedIn === true && document.getElementById('feed-in-text').innerHTML === '(purchase)'){
            document.getElementById('feed-in-text').innerHTML = '(feed in)';
        }
        else if (json.feedIn === false && document.getElementById('feed-in-text').innerHTML === '(feed in)'){
            document.getElementById('feed-in-text').innerHTML = '(purchase)';
        }
    });
return;
}

function copyToClipboard(text){
  navigator.clipboard.writeText(text);

  this.classList.add("copied");
  // Remove the "copied" class after 2 seconds to revert the tooltip text
  setTimeout(() => {
    this.classList.remove("copied");
  }, 2000);
}

function handleSpanClick(event) {
  const clickedSpan = event.target;
  copyToClipboard.call(clickedSpan, clickedSpan.innerHTML);
}

const spans = document.querySelectorAll('span[id$="-value"]');
spans.forEach((span) => {
  span.addEventListener("click", handleSpanClick);
});

getData();
setInterval(function () { getData(); }, 3000);
