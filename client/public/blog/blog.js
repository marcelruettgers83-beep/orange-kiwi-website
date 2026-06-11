(() => {
  const progress = document.querySelector("[data-reading-progress]");
  if (progress) {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const width = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, width))}%`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-topics]");
  const finderResult = document.querySelector("[data-finder-result]");
  const finderCopy = {
    all: "Not sure where to start? Begin with the deadline guide if you run a Dutch BV, the Xero guide if your books are messy, or the Amsterdam checklist if you are choosing an accountant.",
    local: "Best place to start if you want an English-speaking accountant in Amsterdam and need to know what to ask before you hire.",
    xero: "Best place to start if Xero is set up, but the numbers still feel hard to trust.",
    deadlines: "Best place to start if you want the VAT, annual accounts, and monthly review dates in one place."
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const topic = button.getAttribute("data-filter") || "all";
      filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      cards.forEach((card) => {
        const topics = card.getAttribute("data-topics") || "";
        card.classList.toggle("hidden-card", topic !== "all" && !topics.includes(topic));
      });
      if (finderResult) {
        finderResult.textContent = finderCopy[topic] || finderCopy.all;
      }
    });
  });

  document.querySelectorAll("[data-checklist]").forEach((box) => {
    const checks = Array.from(box.querySelectorAll("input[type='checkbox']"));
    const fill = box.querySelector("[data-score-fill]");
    const message = box.querySelector("[data-score-message]");
    const total = checks.length;

    const updateScore = () => {
      const checked = checks.filter((item) => item.checked).length;
      const score = total ? Math.round((checked / total) * 100) : 0;
      if (fill) fill.style.width = `${score}%`;
      if (message) {
        if (score === 0) {
          message.textContent = "Tick the items that are already handled.";
        } else if (score < 50) {
          message.textContent = `${checked} of ${total} handled. This area probably needs attention.`;
        } else if (score < 100) {
          message.textContent = `${checked} of ${total} handled. Good base, with a few gaps to close.`;
        } else {
          message.textContent = "All items handled. This is the rhythm to keep.";
        }
      }
    };

    checks.forEach((item) => item.addEventListener("change", updateScore));
    updateScore();
  });

  const tocLinks = Array.from(document.querySelectorAll(".article-side a[href^='#']"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    const sections = tocLinks
      .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
      .filter(Boolean);
    const setActive = (id) => {
      tocLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  const quarterButtons = document.querySelectorAll("[data-quarter]");
  const deadlineResult = document.querySelector("[data-deadline-result]");
  const deadlines = {
    q1: "Q1 covers January to March. The usual VAT filing and payment deadline is April 30.",
    q2: "Q2 covers April to June. The usual VAT filing and payment deadline is July 31.",
    q3: "Q3 covers July to September. The usual VAT filing and payment deadline is October 31.",
    q4: "Q4 covers October to December. The usual VAT filing and payment deadline is January 31 of the following year."
  };

  quarterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      quarterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      const quarter = button.getAttribute("data-quarter") || "q1";
      if (deadlineResult) deadlineResult.textContent = deadlines[quarter];
    });
  });
})();
