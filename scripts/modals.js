// Elements to trigger modals
let architectBtn = document.getElementById('architect');
let codepenBtn = document.getElementById('codepen-app');
let lawBtn = document.getElementById('law')
let ytBtn = document.getElementById('youtube-app');
let restaurantBtn = document.getElementById('restaurant');
let mapBtn = document.getElementById('map-app');
let fashionBtn = document.getElementById('fashion');
let ghBtn = document.getElementById('github-app');
let comicBtn = document.getElementById('comic');
let spaBtn = document.getElementById('spa-app');
let trackerBtn = document.getElementById('tracker-app');
let moviesBtn = document.getElementById('movies-app');

// Modals to be triggered
let architectModal = document.getElementById('architect-modal');
let codepenModal = document.getElementById('codepen-modal');
let lawModal = document.getElementById('law-modal');
let youtubeModal = document.getElementById('youtube-modal');
let restaurantModal = document.getElementById('restaurant-modal')
let mapModal = document.getElementById('map-modal');
let fashionModal = document.getElementById('fashion-modal');
let githubModal = document.getElementById('github-modal');
let comicModal = document.getElementById('comic-modal');
let spaModal = document.getElementById('spa-modal');
let trackerModal = document.getElementById('tracker-modal');
let moviesModal = document.getElementById('movies-modal');

// <span> elements to close modal
let architectClose = document.getElementById('architect-close');
let codepenClose = document.getElementById('codepen-close');
let lawClose = document.getElementById('law-close');
let ytClose = document.getElementById('youtube-close');
let restaurantClose = document.getElementById('restaurant-close');
let mapClose = document.getElementById('map-close');
let fashionClose = document.getElementById('fashion-close');
let githubClose = document.getElementById('github-close');
let comicClose = document.getElementById('comic-close');
let spaClose = document.getElementById('spa-close');
let trackerClose = document.getElementById('tracker-close');
let moviesClose = document.getElementById('movies-close');

// Architect section
architectBtn.onclick = function() {
    architectModal.style.display = "block";
}

architectClose.onclick = function() {
    architectModal.style.display = "none";
}

// CodePen section
codepenBtn.onclick = function() {
    codepenModal.style.display = "block";
}

codepenClose.onclick = function() {
    codepenModal.style.display = "none";
}

// Law section
lawBtn.onclick = function() {
    lawModal.style.display = "block";
}

lawClose.onclick = function() {
    lawModal.style.display = "none"
}

// Youtube API section
ytBtn.onclick = function() {
    youtubeModal.style.display = "block";
}

ytClose.onclick = function() {
    youtubeModal.style.display = "none";
}

// Restaurant section
restaurantBtn.onclick = function() {
    restaurantModal.style.display = "block";
}

restaurantClose.onclick = function() {
    restaurantModal.style.display = "none";
}

// Map section
mapBtn.onclick = function() {
    mapModal.style.display = "block";
}

mapClose.onclick = function() {
    mapModal.style.display = "none";
}

// Fashion section
fashionBtn.onclick = function() {
    fashionModal.style.display = "block";
}

fashionClose.onclick = function() {
    fashionModal.style.display = "none";
}

// GitHub section
ghBtn.onclick = function() {
    githubModal.style.display = "block";
}

githubClose.onclick = function() {
    githubModal.style.display = "none";
}

// Comic section
comicBtn.onclick = function() {
    comicModal.style.display = "block";
}

comicClose.onclick = function() {
    comicModal.style.display = "none";
}

// SPA section
spaBtn.onclick = function() {
    spaModal.style.display = "block";
}

spaClose.onclick = function() {
    spaModal.style.display = "none";
}

// Tracker section
trackerBtn.onclick = function() {
    trackerModal.style.display = "block";
}

trackerClose.onclick = function() {
    trackerModal.style.display = "none";
}

// Movies section
moviesBtn.onclick = function() {
    moviesModal.style.display = "block";
}

moviesClose.onclick = function() {
    moviesModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == architectModal) {
        architectModal.style.display = "none";
    }
    if (event.target == codepenModal) {
        codepenModal.style.display = "none";
    }
    if (event.target == lawModal) {
        lawModal.style.display = "none";
    }
    if (event.target == youtubeModal) {
        youtubeModal.style.display = "none";
    }
    if (event.target == restaurantModal) {
        restaurantModal.style.display = "none";
    }
    if (event.target == mapModal) {
        mapModal.style.display = "none";
    }
    if (event.target == fashionModal) {
        fashionModal.style.display = "none";
    }
    if (event.target == githubModal) {
        githubModal.style.display = "none";
    }
    if (event.target == comicModal) {
        comicModal.style.display = "none";
    }
    if (event.target == spaModal) {
        spaModal.style.display = "none";
    }
    if (event.target == trackerModal) {
        trackerModal.style.display = "none";
    }
    if (event.target == moviesModal) {
        moviesModal.style.display = "none";
    }
}