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

const bgHero = document.getElementById("bgHero");
const moon = document.getElementById("moonEffect");

// Hover pada tombol konsultasi membuat efek bulan bersinar
moon.addEventListener("mouseover", function () {
  bgHero.classList.add("scale-150");
  bgHero.classList.remove("brightness-15");
});

moon.addEventListener("mouseleave", function () {
  bgHero.classList.remove("scale-150");
  bgHero.classList.add("brightness-15");
});
