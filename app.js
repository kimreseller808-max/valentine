document.addEventListener("DOMContentLoaded", () => {

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

  // Preload GIFs
  gifs.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // NO button click
  no.addEventListener("click", () => {

    if (count === 2) {
      gif.src = gifs[1];
      text.innerHTML = "Are you sure you want to press NO again? My GIFs get angrier 😡😂";
      yes.style.height = "65%";
      yes.style.width = "60%";
      no.style.width = "30%";
      count++;

    } else if (count === 3) {
      gif.src = gifs[2];
      text.innerHTML = "If only I could punch you… 😜";
      yes.style.height = "70%";
      yes.style.width = "70%";
      no.style.width = "20%";
      count++;

    } else if (count === 4) {
      gif.src = gifs[3];
      text.innerHTML = "I'm gonna cry 😭";
      yes.style.height = "80%";
      yes.style.width = "80%";
      no.style.fontSize = "4vh";
      no.style.width = "10%";
      count++;

    } else if (count === 5) {
      gif.src = gifs[4];
      text.innerHTML = "Please 🥺😘";
      yes.style.height = "90%";
      yes.style.width = "96%";
      no.style.display = "none";
    }

  });

  // YES button click
  yes.addEventListener("click", () => {

    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(err => console.log("Video play blocked:", err));
    }

    gif.src = gifs[5];
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

