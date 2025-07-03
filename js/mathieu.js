
//   _____                            __  __       _        _      
//  / ____|                          |  \/  |     | |      (_)     
// | |     __ _ _ ____   ____ _ ___  | \  / | __ _| |_ _ __ ___  __
// | |    / _` | '_ \ \ / / _` / __| | |\/| |/ _` | __| '__| \ \/ /
// | |___| (_| | | | \ V / (_| \__ \ | |  | | (_| | |_| |  | |>  < 
//  \_____\__,_|_| |_|\_/ \__,_|___/ |_|  |_|\__,_|\__|_|  |_/_/\_\
                                                                 
                                                                 


// recupération de canvas et creation du contexte pour dessiner
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

//Le canvas prend toute la largeur et la hauteur de la fenêtre du navigateur
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Crée une chaîne contenant des lettres et les mettre dans un tableau lettre par lettre

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// on definie la taille des caractere et combien de colonne (caractere) on peur placer sur la largeur
var fontSize = 10, 
columns = canvas.width / fontSize;

//drops : tableau qui contient la position verticale (en lignes) de chaque "goutte" (colonne de texte).
//Chaque goutte démarre à la position 1 (qui correspond en haut de la fenêtre).

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}


function draw() {
  //cela va assombrit légèrement le canvas avec un rectangle noir transparent pour créer un effet de traînée (comme une "persistence" du mouvement).
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);



  for (var i = 0; i < drops.length; i++) {
    // Pour chaque colonne : on choisit une lettre aléatoire dans le tableau letters.
    // et on l'affiche à la position (x, y) correspondant à la colonne et la ligne actuelle de la goutte.
    //'#0f0' est du vert fluo (comme dans Matrix).
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    //La goutte descend d'une ligne (effet de "pluie").
    drops[i]++;
    //Si une goutte dépasse le bas du canvas, elle a une chance de redémarrer au sommet (drops[i] = 0)
    //Math.random() > .95 rend ce redémarrage aléatoire (donc pas toutes en même temps)
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

//La fonction draw() est appelée toutes les 50 millisecondes créant une animation en continue.
setInterval(draw, 50);



//                 _                 _   _               _____  _           _        
//     /\         (_)               | | (_)             |  __ \| |         | |       
//    /  \   _ __  _ _ __ ___   __ _| |_ _  ___  _ __   | |__) | |__   ___ | |_ ___  
//   / /\ \ | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \  |  ___/| '_ \ / _ \| __/ _ \ 
//  / ____ \| | | | | | | | | | (_| | |_| | (_) | | | | | |    | | | | (_) | || (_) |
// /_/    \_\_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_| |_|    |_| |_|\___/ \__\___/ 
                                                                                   

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const photo = document.getElementById('photo');
    photo.style.display = 'block'; 
    photo.classList.add('fadeIn');
  }, 6000); 
});



//   _____ _ _      _      _____  _           _        
//  / ____| (_)    | |    |  __ \| |         | |       
// | |    | |_  ___| | __ | |__) | |__   ___ | |_ ___  
// | |    | | |/ __| |/ / |  ___/| '_ \ / _ \| __/ _ \ 
// | |____| | | (__|   <  | |    | | | | (_) | || (_) |
//  \_____|_|_|\___|_|\_\ |_|    |_| |_|\___/ \__\___/ 
                                                     
                                                     
document.getElementById('photo').addEventListener('click', function() {
document.getElementById('modal').classList.add('show_modal');
});

document.getElementById('croix').addEventListener('click', function() {
document.getElementById('modal').classList.add('close_modal');
setTimeout(function () {
    document.getElementById('modal').classList.remove('close_modal');
    document.getElementById('modal').classList.remove('show_modal');
  }, 2000);

});


const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");

hamburger.addEventListener('click', function() {
  nav.classList.toggle('d-none');
});
