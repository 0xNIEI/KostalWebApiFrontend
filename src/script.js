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

getData();
setInterval(function () { getData(); }, 3000);