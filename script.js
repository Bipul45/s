// ===============================
// GLOBAL VARIABLES
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

// ===============================
// START
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.25
});

sections.forEach(sec=>observer.observe(sec));


// ===============================
// BALLOON
// ===============================

const heart=document.querySelector(".heart");

heart.onclick=()=>{

heart.classList.add("open");

setTimeout(()=>{

window.scrollBy({

top:window.innerHeight,

behavior:"smooth"

});

},1000);

};


// ===============================
// HEART
// ===============================

heart.onclick=()=>{

heart.classList.add("open");

setTimeout(()=>{

window.scrollBy({

top:window.innerHeight,

behavior:"smooth"

});

},1000);

};


// ===============================
// PREMIUM TYPING EFFECT
// ===============================

const typingText=document.getElementById("typingText");

const lines=[

"Dear My Love ❤️,",

"",

"Thank you for making",

"my life beautiful.",

"",

"Every heartbeat",

"whispers your name.",

"",

"You are my peace.",

"You are my happiness.",

"You are my forever.",

"",

"I promise to love you",

"today, tomorrow,",

"and every single day.",

"",

"Happy National",

"Girlfriend Day ❤️"

];

let line=0;
let letter=0;
let html="";

function typeLine(){

if(line>=lines.length) return;

if(letter<lines[line].length){

html+=lines[line].charAt(letter);

typingText.innerHTML=html+"<span class='cursor'>|</span>";

letter++;

setTimeout(typeLine,55);

}

else{

html+="<br>";

line++;

letter=0;

setTimeout(typeLine,450);

}

}

const typingSection=document.querySelector(".typing");

const typingObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typingObserver.disconnect();

typeLine();

}

});

},{threshold:.5});

typingObserver.observe(typingSection);

// ===============================
// FLOATING HEARTS
// ===============================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},450);


// ===============================
// STARS
// ===============================

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}


// ===============================
// MUSIC
// ===============================

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="▶ Play Music";

musicBtn.classList.remove("music-playing");

playing=false;

}else{

music.play();

musicBtn.innerHTML="⏸ Pause Music";

musicBtn.classList.add("music-playing");

playing=true;

}

};


// ===============================
// PREMIUM GIFT
// ===============================

const gift=document.getElementById("giftBox");

const surprise=document.getElementById("giftSurprise");

let opened=false;

gift.onclick=()=>{

if(opened) return;

opened=true;

gift.classList.add("open");

gift.innerHTML="💖";

setTimeout(()=>{

surprise.classList.add("show");

celebrate();

},700);

};

// ===============================
// SCROLL INDICATOR AUTO HIDE
// ===============================

const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

if(window.scrollY > 120){

scrollIndicator.style.opacity = "0";

scrollIndicator.style.transform = "translateY(-20px)";

}else{

scrollIndicator.style.opacity = ".8";

scrollIndicator.style.transform = "translateY(0)";

}

});


// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("scroll",()=>{

let y = window.pageYOffset;

document.querySelector(".hero").style.backgroundPositionY = y * 0.45 + "px";

});


// ===============================
// HEART GLOW
// ===============================

window.addEventListener("scroll",()=>{

const value = window.scrollY / 15;

const heart = document.querySelector(".heart");

heart.style.filter = `drop-shadow(0 0 ${value}px #ff4f87)`;

});


// ===============================
// BUTTON RIPPLE
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.35)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .7s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


// ===============================
// FINAL CELEBRATION
// ===============================

function celebrate(){

for(let i=0;i<180;i++){

const item=document.createElement("div");

item.className="floating-heart";

item.innerHTML=["❤️","💖","💕","✨","🎉"][Math.floor(Math.random()*5)];

item.style.left=Math.random()*100+"vw";

item.style.fontSize=(18+Math.random()*28)+"px";

item.style.animationDuration=(2+Math.random()*4)+"s";

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},7000);

}

}


// ===============================
// FINAL PAGE
// ===============================

const finalSection=document.querySelector(".final-section");

const finalObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

celebrate();

}

});

},{threshold:.6});

finalObserver.observe(finalSection);


// ===============================
// END
// ===============================

console.log("❤️ Girlfriend Day Website Loaded Successfully ❤️");


// ===============================
// PREMIUM GALLERY
// ===============================

const photos=[
"assets/photo1.jpg",
"assets/photo2.jpg",
"assets/photo3.jpg",
"assets/photo4.jpg",
"assets/photo5.jpg",
"assets/photo6.jpg"
];

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

let current=0;

document.querySelectorAll(".photo img").forEach((img,index)=>{

img.onclick=()=>{

current=index;

showImage();

};

});

function showImage(){

lightbox.classList.add("active");

lightboxImg.src=photos[current];

}

document.getElementById("closeLightbox").onclick=()=>{

lightbox.classList.remove("active");

};

document.getElementById("nextImg").onclick=()=>{

current++;

if(current>=photos.length) current=0;

showImage();

};

document.getElementById("prevImg").onclick=()=>{

current--;

if(current<0) current=photos.length-1;

showImage();

};

// ===============================
// PREMIUM SCROLL REVEAL
// ===============================

const revealItems=document.querySelectorAll(

".timeline-card,.photo,.letter,.quote,.typing,.music-section,.gift-section,.final-section"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.25});

revealItems.forEach(item=>{

item.classList.add("fade-up");

revealObserver.observe(item);

});


// ===============================
// HERO FADE
// ===============================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

const y=window.scrollY;

hero.style.opacity=1-(y/450);

hero.style.transform=`scale(${1+y/5000})`;

});

// ===============================
// SNAP ACTIVE SECTION
// ===============================

const allSections=document.querySelectorAll("section");

const activeObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}else{

entry.target.classList.remove("active");

}

});

},{
threshold:.6
});

allSections.forEach(sec=>{

activeObserver.observe(sec);

});


// ===============================
// HERO PARALLAX
// ===============================

window.addEventListener("scroll",()=>{

const y=window.scrollY;

const heroContent=document.querySelector(".hero-content");

heroContent.style.transform=`translateY(${y*0.25}px)`;

});


// ===============================
// AUTO SCROLL INDICATOR
// ===============================

setInterval(()=>{

const indicator=document.querySelector(".scroll-indicator");

indicator.animate([

{transform:"translateY(0px)"},

{transform:"translateY(10px)"},

{transform:"translateY(0px)"}

],{

duration:1200

});

},1500);

// ===============================
// MUSIC PLAYER
// ===============================

const progressBar=document.getElementById("progressBar");

const volume=document.getElementById("volume");

const muteBtn=document.getElementById("muteBtn");

music.volume=1;

volume.oninput=()=>{

music.volume=volume.value;

};

muteBtn.onclick=()=>{

music.muted=!music.muted;

muteBtn.innerHTML=music.muted?"🔇":"🔊";

};

music.addEventListener("timeupdate",()=>{

const percent=(music.currentTime/music.duration)*100;

progressBar.style.width=percent+"%";

});

// ===============================
// FIREWORKS
// ===============================

function fireworks(){

for(let i=0;i<80;i++){

const fw=document.createElement("div");

fw.className="firework";

fw.style.left=Math.random()*100+"vw";

fw.style.top=Math.random()*100+"vh";

fw.style.background=`hsl(${Math.random()*360},100%,70%)`;

fw.style.setProperty("--x",(Math.random()*300-150)+"px");

fw.style.setProperty("--y",(Math.random()*300-150)+"px");

document.body.appendChild(fw);

setTimeout(()=>{

fw.remove();

},1500);

}

}


// ===============================
// FINAL SECTION
// ===============================

const endSection=document.querySelector(".final-section");

const endObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

fireworks();

celebrate();

}

});

},{threshold:.7});

endObserver.observe(endSection);


// ===============================
// END
// ===============================

console.log("❤️ Premium Website Loaded ❤️");
