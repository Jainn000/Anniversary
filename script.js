const anniversaryDate = new Date(2024, 11, 24);

// ================= DAYS COUNTER =================
function calculateDaysTogether() {
  const now = new Date();
  const diffTime = Math.abs(now - anniversaryDate);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// ================= PHOTO DATA =================
const photos = [
  { url: "photos/first-date.jpeg", description: "Our very first date" },
  { url: "photos/first-trip.jpeg", description: "First Trip memories" },
  {
    url: "photos/birthday-celebration.jpeg",
    description: "Birthday celebration",
  },
  { url: "photos/PhotoBooth.jpeg", description: "Photobooth" },
  { url: "photos/park.png", description: "A moment in the park" },
  { url: "photos/puncak.jpeg", description: "A day in Puncak" },
  {
    url: "photos/emyu.jpeg",
    description: "KING MANCHESTER UNITED JERSEY DATE",
  },
  { url: "photos/campus.jpeg", description: "Where we meet" },
  { url: "photos/gacoan.jpeg", description: "Gacoan date" },
  { url: "photos/after-class.jpeg", description: "After class date" },
  { url: "photos/coffe.jpeg", description: "Coffee date" },
  { url: "photos/coffe2.jpeg", description: "Coffee date again" },
];

// ================= MAIN =================
document.addEventListener("DOMContentLoaded", () => {
  // Days count
  document.getElementById("daysCount").textContent = calculateDaysTogether();

  // Generate gallery
  const gallery = document.getElementById("photoGallery");
  photos.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card fade-in";
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.description}">
      <div class="photo-overlay">
        <div class="photo-description">${photo.description}</div>
      </div>
    `;
    gallery.appendChild(card);
  });

  // Fade-in observer (SETELAH CARD ADA)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // ================= MUSIC =================
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");
  let isPlaying = false;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      fadeIn(music);
      btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      fadeOut(music);
      btn.innerHTML = '<i class="fas fa-music"></i>';
    }
    isPlaying = !isPlaying;
  });
});

// ================= MUSIC FADE =================
function fadeIn(audio) {
  audio.volume = 0;
  audio.play();
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.7) {
      v += 0.02;
      audio.volume = v;
    } else clearInterval(fade);
  }, 100);
}

function fadeOut(audio) {
  let v = audio.volume;
  const fade = setInterval(() => {
    if (v > 0.02) {
      v -= 0.02;
      audio.volume = v;
    } else {
      audio.pause();
      clearInterval(fade);
    }
  }, 100);
}

// ================= FLOATING HEARTS =================
setInterval(() => {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = "16px";
  heart.style.opacity = "0.7";
  heart.style.animation = "floatUp 6s linear";
  heart.style.pointerEvents = "none";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 1200);

photoCard.className = "photo-card fade-in";

photos.forEach((photo) => {
  const photoCard = document.createElement("div");

  photoCard.className = "photo-card fade-in";

  photoCard.innerHTML = `
    <img src="${photo.url}" alt="${photo.description}">
    <div class="photo-overlay">
      <div class="photo-description">${photo.description}</div>
    </div>
  `;

  gallery.appendChild(photoCard);
});
