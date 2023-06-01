const head = document.querySelector("header");
const logo = document.querySelector("header nav a img");
const link = document.querySelectorAll("nav div ul li a");
// Fungsi DOM untuk mengubah componen pada header seperti background dan logo
window.addEventListener("scroll", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      logo.setAttribute("src", "img/hariseninlogo.png");
      head.classList.remove("desktop:bg-transparent");
      head.classList.add("desktop:bg-white");
      head.style.transition = "background-color 1s linear";
      link.forEach((e) => {
        e.classList.add("text-[#291800]");
        e.classList.remove("text-white");
      });
    } else {
      head.classList.remove("desktop:bg-white");
      head.classList.add("desktop:bg-transparent");
      logo.setAttribute("src", "img/hariseninlogo2.png");
      link.forEach((e) => {
        e.classList.remove("text-[#291800]");
        e.classList.add("text-white");
      });
    }
  }
});

//Fungsi DOM untuk membuat teks hero berganti
(function () {
  const word = document.querySelector("#words");

  let words = [
      "Beda Jurusan.",
      "Baru Lulus Kuliah.",
      "Kurang Pengalaman.",
      "Budged Pas - Pasan.",
      "Pindah Jalur Karir.",
    ],
    i = 0;
  setInterval(function () {
    word.innerHTML = words[(i = (i + 1) % words.length)];
  }, 3000);
})();

// Fungsi untuk menghitung alumni pada Hero Section
function animateValue(count, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp + startTimestamp) / duration, 1);
    count.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 3854) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const batchCount = document.getElementById("count");
animateValue(batchCount, 0, 3854, 5000);
