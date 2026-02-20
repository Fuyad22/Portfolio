(() => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) closeNav();
      else openNav();
    });

    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('a[href^="#"]')) closeNav();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target === navToggle || nav.contains(target)) return;
      if (header && header.contains(target)) return;
      closeNav();
    });
  }

  // Contact form -> mailto:
  const form = document.querySelector("[data-contact-form]");
  const note = document.querySelector("[data-form-note]");

  const setNote = (message) => {
    if (!note) return;
    note.textContent = message;
  };

  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const message = String(formData.get("message") ?? "").trim();

      if (!name || !email || !message) {
        setNote("Please fill in all fields.");
        return;
      }

      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

      // Update this email address in index.html too if you change it.
      const to = "you@example.com";
      const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;

      setNote("Opening your email app...");
      window.location.href = mailtoUrl;

      form.reset();
      setTimeout(() => setNote(""), 2500);
    });
  }
})();
