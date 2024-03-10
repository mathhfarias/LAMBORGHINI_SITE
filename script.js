const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

// Obtém o elemento onde você deseja exibir a data e hora
let dataHoraElement = document.getElementById("data-hora");

// Obtém a data e hora atual
let dataAtual = new Date();

// Formata a data e hora no formato desejado
let dataHoraFormatada = dataAtual.toLocaleString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

// Define o conteúdo do elemento HTML
dataHoraElement.textContent = dataHoraFormatada;

//let data = new Date();
//console.log(data)
//console.log(data)
//document.write(data)

//imagens home 
let imagensHome = [
    'IMG/HOME.1.jpg',
    'IMG/HOME.2.jpg',
    'IMG/HOME.3.jpg',
    'IMG/HOME.4.jpg'
  ]
  
  let indexHome = 0;
  let timeHome = 3000;
  
  function slideShowHome() {
    document.getElementById('img-home').src = imagensHome[indexHome];
    indexHome++;
  
    if (indexHome === imagensHome.length) {
      indexHome = 0;
    }
  
    setTimeout(slideShowHome, timeHome);
  };
  
  slideShowHome();

  let imagensAventadorSvj = [
    'img/aventador_svj.png',
    'img/aventador_svj_2.png',
    'img/aventador_svj_3.png'
  ];
  
  let indexAventadorSvj = 0;
  let timeAventadorSvj = 3000;
  
  function slideShowAventadorSvj() {
    document.getElementById('img-aventador_svj').src = imagensAventadorSvj[indexAventadorSvj];
    indexAventadorSvj++;
  
    if (indexAventadorSvj === imagensAventadorSvj.length) {
      indexAventadorSvj = 0;
    }
  
    setTimeout(slideShowAventadorSvj, timeAventadorSvj);
  }
  
  slideShowAventadorSvj();

  let imagensAbout = [
    'img/aventador_sobre(3).png',
    'img/aventador_sobre(2).png'
  ];
  
  let indexAbout = 0;
  let timeAbout = 3000;
  
  function slideShowAbout() {
    document.getElementById('img-about').src = imagensAbout[indexAbout];
    indexAbout++;
  
    if (indexAbout === imagensAbout.length) {
      indexAbout = 0;
    }
  
    setTimeout(slideShowAbout, timeAbout);
  }
  
  slideShowAbout();

  let imagensAventadorSvjRoxa = [
    'img/aventador_svj_roxa.png',
    'img/aventador_svj_roxa(2).png',
    'img/aventador_svj_roxa(3).png'
  ];
  
  let indexAventadorSvjRoxa = 0;
  let timeAventadorSvjRoxa = 3000;
  
  function slideShowAventadorSvjRoxa() {
    document.getElementById('img-aventador_svj_roxa').src = imagensAventadorSvjRoxa[indexAventadorSvjRoxa];
    indexAventadorSvjRoxa++;
  
    if (indexAventadorSvjRoxa === imagensAventadorSvjRoxa.length) {
      indexAventadorSvjRoxa = 0;
    }
  
    setTimeout(slideShowAventadorSvjRoxa, timeAventadorSvjRoxa);
  }
  
  slideShowAventadorSvjRoxa();

  let imagensUrus = [
    'img/urus.png',
    'img/urus(2).png'
  ];
  
  let indexUrus = 0;
  let timeUrus = 3000;
  
  function slideShowUrus() {
    document.getElementById('img-urus').src = imagensUrus[indexUrus];
    indexUrus++;
  
    if (indexUrus === imagensUrus.length) {
      indexUrus = 0;
    }
  
    setTimeout(slideShowUrus, timeUrus);
  }

  slideShowUrus();

  let imagensAventadorSvjLaranja = [
    'img/aventador_svj_laranja.png',
    'img/aventador_svj_laranja(2).png',
  ];
  
  let indexAventadorSvjLaranja = 0;
  let timeAventadorSvjLaranja = 3000;
  
  function slideShowAventadorSvjLaranja() {
    document.getElementById('img-aventador_svj_laranja').src = imagensAventadorSvjLaranja[indexAventadorSvjLaranja];
    indexAventadorSvjLaranja++;
  
    if (indexAventadorSvjLaranja === imagensAventadorSvjLaranja.length) {
      indexAventadorSvjLaranja = 0;
    }
  
    setTimeout(slideShowAventadorSvjLaranja, timeAventadorSvjLaranja);
  }
  
  slideShowAventadorSvjLaranja();

  let imagensAventadorMiami = [
    'img/aventador_miami.png',
    'img/aventador_miami(2).png',
];

let indexAventadorMiami = 0;
let timeAventadorMiami = 3000;

function slideShowAventadorMiami() {
    document.getElementById('img-aventador_miami').src = imagensAventadorMiami[indexAventadorMiami];
    indexAventadorMiami++;

    if (indexAventadorMiami === imagensAventadorMiami.length) {
        indexAventadorMiami = 0;
    }

    setTimeout(slideShowAventadorMiami, timeAventadorMiami);
}

slideShowAventadorMiami();

let imagensHuracanSto = [
  'img/huracan_sto(2).png',
  'img/huracan_sto.png',
];
 
let indexHuracanSto = 0;
let timeHuracanSto = 3000;
 
function slideShowHuracanSto() {
  document.getElementById('img-huracan_sto').src = imagensHuracanSto[indexHuracanSto];
  indexHuracanSto++;
 
  if (indexHuracanSto === imagensHuracanSto.length) {
    indexHuracanSto = 0;
  }
 
  setTimeout(slideShowHuracanSto, timeHuracanSto);
}
 
slideShowHuracanSto();

  
//declarado e chamando o id (DOM)
const btnMob = document.querySelector('#btnMob');

function toggleMenu(){
    const navbar = document.querySelector("#nav")
    navbar.classList.toggle("active")
}

btnMob.addEventListener('click', toggleMenu);

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('light-theme')
});


