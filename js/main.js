const API_KEY = 'yHJtjID6pjld0jHQ7sMG44dWQixOOLmS';
const historique = [];

init();

function init() {
    retrieveHistorique();
}


function getRandomGif() {
    const oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "https://api.giphy.com/v1/gifs/random?api_key="+API_KEY+"&tag=&rating=g", true);
    oReq.send();
}

function reqListener() {
    const response = JSON.parse(this.responseText);
    const image = response.data.images.preview_webp.url;
    document.getElementById('image').src = image;

    historique.push(image);
    localStorage.setItem('memes', JSON.stringify(historique));

    const listHTML = document.getElementById('historique');

    const imgHTML = document.createElement('img');

    imgHTML.setAttribute('src', image);

    const li = document.createElement('li');
    li.appendChild(imgHTML);

    listHTML.appendChild(li);
}

function retrieveHistorique() {
    const memes = JSON.parse(localStorage.getItem('memes'));

    const listHTML = document.getElementById('historique');

    for (let meme of memes) {
        const image = document.createElement('img');
        image.setAttribute('src', meme);

        const li = document.createElement('li');
        li.appendChild(image);

        listHTML.appendChild(li);
    }

}
