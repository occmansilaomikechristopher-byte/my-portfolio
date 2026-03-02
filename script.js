// Main script for portfolio interactions and animations.
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");
  const progressFills = document.querySelectorAll(".progress-fill");
  const backToTopButton = document.querySelector("#backToTop");

  // Intersection Observer for section fade-in and progress bar animation.
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        if (entry.target.id === "about") {
          progressFills.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width") || "0%";
            bar.style.width = targetWidth;
          });
        }

        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  // Back to top behavior.
  backToTopButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Subtle parallax for decorative floating shapes.
  const shapes = document.querySelectorAll(".shape");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.04;
      shape.style.transform = `translateY(${scrollTop * speed}px)`;
    });
  });

  // Project carousel / slider behavior.
  const track = document.querySelector("#projectsTrack");
  const carousel = document.querySelector("#projectsCarousel");
  const prevButton = document.querySelector("#prevProject");
  const nextButton = document.querySelector("#nextProject");

  if (track && carousel && prevButton && nextButton) {
    const cards = Array.from(track.children);
    let currentIndex = 0;

    const getCardsPerView = () => {
      if (window.innerWidth <= 720) {
        return 1;
      }
      if (window.innerWidth <= 980) {
        return 2;
      }
      return 3;
    };

    const updateSlider = () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(cards.length - cardsPerView, 0);
      currentIndex = Math.min(currentIndex, maxIndex);

      const firstCard = cards[0];
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      const step = firstCard.getBoundingClientRect().width + gap;

      track.style.transform = `translateX(-${currentIndex * step}px)`;

      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= maxIndex;
      prevButton.style.opacity = prevButton.disabled ? "0.45" : "1";
      nextButton.style.opacity = nextButton.disabled ? "0.45" : "1";
      prevButton.style.cursor = prevButton.disabled ? "not-allowed" : "pointer";
      nextButton.style.cursor = nextButton.disabled ? "not-allowed" : "pointer";
    };

    prevButton.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSlider();
    });

    nextButton.addEventListener("click", () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(cards.length - cardsPerView, 0);
      currentIndex = Math.min(currentIndex + 1, maxIndex);
      updateSlider();
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
  }

  // Prevent default submit while keeping form UX clean for static portfolio.
  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.textContent = "Message Sent";
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
        form.reset();
      }, 1500);
    }
  });
});