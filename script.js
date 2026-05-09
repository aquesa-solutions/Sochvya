const cards = document.querySelectorAll(".carousel-card");
const dots = document.querySelectorAll(".dot");

if (cards.length && dots.length) {
  let activeIndex = 0;

  const showSlide = (index) => {
    cards[activeIndex].classList.remove("is-active");
    dots[activeIndex].classList.remove("is-active");
    activeIndex = index;
    cards[activeIndex].classList.add("is-active");
    dots[activeIndex].classList.add("is-active");
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  setInterval(() => {
    const nextIndex = (activeIndex + 1) % cards.length;
    showSlide(nextIndex);
  }, 3200);
}

const submissionForm = document.querySelector(".submission-form");
const formNote = document.querySelector(".form-note");

if (submissionForm && formNote) {
  submissionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Submission form placeholder for now. We can connect it to a real workflow next.";
  });
}
