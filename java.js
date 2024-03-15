function showContent() {
    var content = document.querySelector('.contact');
    content.style.display = 'none';
    var content = document.querySelector('.main');
    content.style.display = 'block';
    var content = document.querySelector('.about');
    content.style.display = 'none';

    var content = document.querySelector('.buttont');
    content.style.backgroundColor = '';
    var content = document.querySelector('.button');
    content.style.backgroundColor = 'black';
    var content = document.querySelector('.buttono');
    content.style.backgroundColor = '';
}

function showContento() {
    var content = document.querySelector('.main');
    content.style.display = 'none';
    var content = document.querySelector('.contact');
    content.style.display = 'block';
    var content = document.querySelector('.about');
    content.style.display = 'none';

    var content = document.querySelector('.buttont');
    content.style.backgroundColor = '';
    var content = document.querySelector('.button');
    content.style.backgroundColor = '';
    var content = document.querySelector('.buttono');
    content.style.backgroundColor = 'black';
}

function showContentt() {
    var content = document.querySelector('.main');
    content.style.display = 'none';
    var content = document.querySelector('.contact');
    content.style.display = 'none';
    var content = document.querySelector('.about');
    content.style.display = 'block';

    var content = document.querySelector('.button');
    content.style.backgroundColor = '';
    var content = document.querySelector('.buttono');
    content.style.backgroundColor = '';
    var content = document.querySelector('.buttont');
    content.style.backgroundColor = 'black';
}

function showContentMe() {
    var content = document.querySelector('.findme');
    content.style.display = 'block';

    var content = document.querySelector('.rightone');
    content.style.display = 'none';
}

function showContentB() {
    var content = document.querySelector('.findme');
    content.style.display = 'none';

    var content = document.querySelector('.rightone');
    content.style.display = 'block';
}

function showContentMek() {
    var content = document.querySelector('.one');
    content.style.display = 'block';
    var content = document.querySelector('.two');
    content.style.display = 'none';

    var content = document.querySelector('.me');
    content.style.borderRight = '5px solid green';
    var content = document.querySelector('.ras');
    content.style.borderRight = '5px solid gray';
}

function showContentRaspis() {
    var content = document.querySelector('.one');
    content.style.display = 'none';
    var content = document.querySelector('.two');
    content.style.display = 'block';

    var content = document.querySelector('.me');
    content.style.borderRight = '5px solid gray';
    var content = document.querySelector('.ras');
    content.style.borderRight = '5px solid green';
}

var photos = [
"file:///C:/Users/user/Downloads/2023-06-16-22-18-34.png",
"file:///C:/Users/user/Downloads/2023-06-16-22-27-28.png",
"file:///C:/Users/user/Downloads/q-Tu5f-Mk2-YCE.jpg"
];
var currentPhotoIndex = 0;
var square = document.getElementById("square");

function showPhoto(index) {
square.style.backgroundImage = "url('" + photos[index] + "')";
square.style.backgroundSize = 'cover';
square.style.backgroundPosition = 'center'
}

function showNextPhoto() {
if (currentPhotoIndex < photos.length - 1) {
    currentPhotoIndex++;
} else {
    currentPhotoIndex = 0;
}
showPhoto(currentPhotoIndex);
}

function showPreviousPhoto() {
if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
} else {
    currentPhotoIndex = photos.length - 1;
}
showPhoto(currentPhotoIndex);
}

showPhoto(currentPhotoIndex);

function changeStyle() {
    var styleSheet = document.getElementById("myStyle");
    var toggle = document.getElementById("styleToggle");
    if (toggle.checked) {
        styleSheet.setAttribute("href", "css1.css");
    } else {
        styleSheet.setAttribute("href", "Front_techn.css");
    }
}