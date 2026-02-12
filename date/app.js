const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;

const gifs = [
  "resources/cat-heart.gif",
  "resources/rusure.gif",
  "resources/3shocked-1.gif",
  "resources/4.crying.gif",
  "resources/5.crying.gif",
  "resources/idc.gif"
];

// preload gifs
gifs.forEach(src => {
  const img = new Image();
  img.src = src;
});

// NO button
no.addEventListener("click", () => {
  if (count === 2) {
    gif.src = "resources/rusure.gif";
    text.innerHTML = "Are you sure you want to press NO again? My GIFs get angrier 😡😂";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;

  } else if (count === 3) {
    gif.src = "resources/3shocked-1.gif"; // make sure this file is inside your resources folder
    text.innerHTML = "If only I could punch you… D 😜";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;

  } else if (count === 4) {
    gif.src = "resources/4.crying.gif";
    text.innerHTML = "I'm gonna cry 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;

  } else if (count === 5) {
    gif.src = "resources/5.crying.gif";
    text.innerHTML = "Please D 🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// YES button
yes.addEventListener("click", () => {
  if (vid) {
    vid.currentTime = 0; // restart video
    vid.play().catch(err => console.log("Video play blocked:", err));
  }

  gif.src = "resources/idc.gif";
  text.innerHTML = "Knew it! 😎 You cannot resist me 😜";

  yes.innerHTML = '<a href="https://www.instagram.com/karishma_nitz/" target="_blank">Message me</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";

  if (vid) {
    setTimeout(() => {
      vid.style.display = "none";
    }, 9000);
  }
});
