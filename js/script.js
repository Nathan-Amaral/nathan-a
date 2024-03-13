//titre
const title = document.querySelector('h1');
const txt = "Bienvenue sur mon Portfolio"

function typewriter(word, index){

if(index < word.length) {

setTimeout(() => {

title.innerHTML += `<span>${word[index]}</span>`

typewriter(txt, index + 1)

}, 300);

}

}
setTimeout(() => {

typewriter(txt, 0)

}, 200);


//timer
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer l'élément du timer
    const timerElement = document.querySelector('.timer');

    // Mettre à jour le contenu du span toutes les secondes
    setInterval(function () {
        // Obtenir l'heure en temps réel
        const now = new Date();

        // Extraire les composants de l'heure
        const hours = now.getHours();
        const minutes = now.getMinutes();

        // Formater l'heure
        const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}`;

        // Mettre à jour le contenu du span avec l'heure actuelle
        timerElement.textContent = formattedTime;
    }, 1000);

    // Fonction pour rajouter un nombre avec un zéro si nécessaire
    function padNumber(number) {
        return number < 10 ? '0' + number : number;
    }
});

// custom cursor

document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector(".custom-cursor");

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'A') {
            cursor.style.width = '35px';
            cursor.style.height = '35px';
        }
        else if (e.target.tagName === 'VIDEO') {
            cursor.style.width = '35px';
            cursor.style.height = '35px';
        }
        else {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        }
    });

    document.addEventListener('mouseout', function (e) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
});

// card
    const card =document.querySelectorAll(".card")

    card.forEach( el => {
        el.addEventListener("mousemove", e => {
            let elRect = el.getBoundingClientRect()

            let x = e.clientX - elRect.x
            let y = e.clientY - elRect.y

            let midCardWidth = elRect.width / 2
            let midCardHeight = elRect.height / 2

            let angleY = -(x - midCardWidth) / 8
            let angleX = (y - midCardHeight) / 8

            let reflectX = x / elRect.width * 100
            let reflectY = y / elRect.height * 100

            el.children[0].style.transform =`rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
            el.children[1].style.transform =`rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
            el.children[1].style.background =`radial-gradient(circle at ${reflectX}% ${reflectY}%, rgb(184, 196, 211), transparent)`
    })
        el.addEventListener("mouseleave", () => {
            el.children[0].style.transform = "rotateX(0) rotateY(0)"
            el.children[1].style.transform = "rotateX(0) rotateY(0)"
        })
    })

// stars

function stars(){
        let e = document.createElement('div');
        e.setAttribute('class','star');
        document.body.appendChild(e);
        e.style.left = Math.random() * + innerWidth + 'px';

        let size = Math.random() * 12;
        let duration = Math.random() * 3;

        e.style.fontSize = 12 + size + 'px';
        e.style.animationDuration = 2 + duration + 's';

        setTimeout(function(){
            document.body.removeChild(e);
        },5000)
}

setInterval(function(){
    stars()
},100)