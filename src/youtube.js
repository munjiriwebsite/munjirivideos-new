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

  hero.src = hero.dataset.src;

  hero.onload = () => {
    hero.style.opacity = "1";
  };
});