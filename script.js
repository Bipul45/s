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

const beginBtn=document.getElementById("beginBtn");

beginBtn.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

const music=document.getElementById("bgMusic");

music.play().catch(()=>{});

});


// ===============================
// HEART
// ===============================

const heart=document.querySelector(".heart");

heart.addEventListener("click",()=>{

heart.style.transform="scale(1.35)";

heart.style.transition=".5s";

setTimeout(()=>{

window.scrollBy({

top:window.innerHeight,

behavior:"smooth"

});

},600);

});


// ===============================
// TYPING EFFECT
// ===============================

const message=`Thank you for making my life beautiful.

You are the smile behind my happiness.

You are the peace inside my heart.

Every single day with you is my favourite memory.

I promise to love you forever.

Happy National Girlfriend Day ❤️`;

const typing=document.getElementById("typingText");

let index=0;
let started=false;

function typeText(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeText,40);

}

}

const typingObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !started){

started=true;

typeText();

}

});

},{threshold:.5});

typingObserver.observe(document.querySelector(".typing"));

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

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="▶ Play Music";

playing=false;

}

});


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
// GALLERY ZOOM
// ===============================

document.querySelectorAll(".photo img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.92)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="92%";

image.style.maxHeight="92%";

image.style.borderRadius="20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>overlay.remove();

});

});

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
