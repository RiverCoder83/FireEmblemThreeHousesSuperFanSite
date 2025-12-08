lord = document.getElementById("lord");
vassal = document.getElementById("vassal");
description = document.getElementById("text");
musicPlayer = document.getElementById("crest");
songs = [
  new Audio("audio/theShackledWolves.mp3"),
  new Audio("audio/edgeOfDawn.mp3"),
  new Audio("audio/roarOfDominion.mp3"),
  new Audio("audio/betweenHeavenAndEarth.mp3"),
  new Audio("audio/chasingDaybreak.mp3"),
  new Audio("audio/theLongRoad.mp3"),
  new Audio("audio/godShatteringStar.mp3"),
  new Audio("audio/apexOfTheWorld.mp3"),
];
randomSong = new Audio();
edelgard = new Audio("audio/edelgard.mp3");
hubert = new Audio("audio/hubert.mp3");
dimitri = new Audio("audio/dimitri.mp3");
dedue = new Audio("audio/dedue.mp3");
claude = new Audio("audio/claude.mp3");
hilda = new Audio("audio/hilda.mp3");

function empire() {
  lord.src = "images/edelgard.webp";
  vassal.src = "images/hubert.webp";
  document.body.setAttribute("class", "adrestia");
  document.getElementById("characterImagesDiv").style.visibility = "visible";
  // Empire description
  description.innerHTML = `The Adrestian Empire has many territories, but is ruled by the emperor in the 
  capital city, Enbarr. The nearby island chain of Brigid is a vassal state to the empire. The empire once
  controlled all of Fódlan, and some seek to regain this so-called unity...`;
}

function kingdom() {
  lord.src = "images/dimitri.webp";
  vassal.src = "images/dedue.webp";
  document.body.setAttribute("class", "kingdom");
  document.getElementById("characterImagesDiv").style.visibility = "visible";
  description.innerHTML = `The Holy Kingdom of Faerghus is ruled by the king in the capital, Fhirdiad. However,
  ever since the Tragedy of Duscur, where nearly the entire royal family was killed, it has been ruled by a
  regent. To the north, Faerghus borders the territory of Sreng, who periodically attack the kingdom. The
  kingdom is very religious and chivalrous, with many aiming to become knights.`;
}

function alliance() {
  lord.src = "images/claude.webp";
  vassal.src = "images/hilda.webp";
  document.body.setAttribute("class", "alliance");
  document.getElementById("characterImagesDiv").style.visibility = "visible";
  description.innerHTML = `The Leicester Alliance is led by a roundtable of its most influential noble 
  houses: Riegan, Gloucester, Goneril, Ordelia, and Edmund. Its capital is Derdriu, also known as the 
  Aquatic Capital, which is located in Riegan territory. To the east, the fort known as Fódlan's Locket
  protects the Alliance from attacks by the neighboring Almyrans.`;
}

function goHome() {
  // Gets the width of the actual webpage, rather than the screen size.
  document.body.style.backgroundImage = "";
  if (getComputedStyle(document.body).width > 600) {
    document.body.setAttribute("class", "");
  } else {
    document.body.setAttribute("class", "");
  }
  document.getElementById("characterImagesDiv").style.visibility = "hidden";
  description.innerHTML = `Welcome to the continent of Fódlan, from the game Fire Emblem: Three Houses!`;
}

// Displays a description of each lord.
function lordDesc() {
  if (lord.src.includes("images/edelgard.webp")) {
    description.innerHTML = `Edelgard von Hresvelg is the future ruler of the Adrestian Empire
    and leader of the Black Eagles at Garreg Mach Monastery. Determined to change the world,
    no person, leader, or obstacle will stop her from achieving her goals of uniting the 
    continent under one unified nation...`;
    // Play selection quote
    edelgard.play();
  } else if (lord.src.includes("images/dimitri.webp")) {
    description.innerHTML = `Dimitri Alexandre Blaiddyd is the future king of the Holy Kingdom 
    of Faerghus and leader of the Blue Lions at Garreg Mach Monastery. Noble
    and strong, he believes in doing the right thing and protecting the
    innocent. When he was 10, his entire family was killed in the Tragedy of
    Duscur. He secretly dreams of getting his revenge for this, no matter how long it takes.`;
    // Play selection quote
    dimitri.play();
  } else if (lord.src.includes("images/claude.webp")) {
    description.innerHTML = `Claude von Riegan is the future leader of the Leicester Alliance 
    and leader of the Golden Deer at Garreg Mach Monastery. Wily and strategic, he always has
    another trick up his sleeve to gain the upper hand. Instead of using violence, he prefers to win
    through his many crafty schemes.`;
    // Play selection quote
    claude.play();
  }
}
// Displays a description of each vassal.
function vassalDesc() {
  if (vassal.src.includes("images/hubert.webp")) {
    description.innerHTML = `Hubert von Vestra keeps his cards close to his chest. He is 
    loyal only to Lady Edelgard and he will do anything to help her achieve her 
    goals, no matter how underhanded...`;
    // Play selection quote
    hubert.play();
  } else if (vassal.src.includes("images/dedue.webp")) {
    description.innerHTML = `Dedue Molinaro is from Duscur, the land responsible for the 
    Tragedy of Duscur. This land has since been burned, and the survivors from
    Duscur, including Dedue, are still hated years later. During the Tragedy, Dimitri saved 
    his life, and since then, he has been Dimitri's loyal vassal and protector.`;
    // Play selection quote
    dedue.play();
  } else if (vassal.src.includes("images/hilda.webp")) {
    description.innerHTML = `Hilda Valentine Goneril serves as something of a co-leader of 
    the Golden Deer. Extremely spoiled, she always puts in as little effort as possible.
    In reality, she is quite capable. She is extremely close with her brother, Holst, and her
    best friend, Marianne.`;
    // Play selection quote
    hilda.play();
  }
}

function playRandomSong() {
  // Choose a random song
  if (musicPlayer.src.includes("images/crestOfFlames.jpg")) {
    musicPlayer.src = "images/whiteCrestOfFlames.jpg";
    // Choose a new song
    randomSong = songs[Math.floor(Math.random() * songs.length)];
    // Reload the song so it plays from the start again.
    randomSong.load();
    // Play the new song
    randomSong.play();
  }
  // Pause the playing song
  else {
    musicPlayer.src = "images/crestOfFlames.jpg";
    // Stop the playing song
    randomSong.pause();
  }
}
