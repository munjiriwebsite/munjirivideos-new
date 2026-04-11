document.querySelectorAll(".youtube-lite").forEach(el => {
  el.addEventListener("click", () => {
    const id = el.dataset.id;

    el.innerHTML = `
      <iframe
        class="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    `;
  });
});

window.addEventListener("load", () => {
  const hero = document.getElementById("heroVideo");
  if (!hero) return;

  hero.src =
    "https://www.youtube-nocookie.com/embed/JdIaYJL6bS8?autoplay=1&mute=1&loop=1&playlist=JdIaYJL6bS8&controls=0&showinfo=0&rel=0";

  hero.onload = () => hero.classList.add("loaded");
});