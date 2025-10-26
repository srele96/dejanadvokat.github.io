(function menuToggler() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  const mql = window.matchMedia("(min-width: 768px)");
  let isOpen = false;
  let locked = false; // prevents double-toggles on rapid clicks
  let abortOutside; // to remove outside-click listener when closed

  function setAria(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function onOutsideClick(e) {
    if (nav.contains(e.target) || btn.contains(e.target)) return;
    toggle(false);
  }

  function addOutside() {
    abortOutside = new AbortController();
    document.addEventListener("click", onOutsideClick, {
      signal: abortOutside.signal,
    });
  }

  function removeOutside() {
    if (abortOutside) abortOutside.abort();
    abortOutside = null;
  }

  function toggle(open) {
    if (isOpen === open) return;
    isOpen = open;
    if (isOpen) {
      nav.classList.remove("hidden");
      addOutside();
    } else {
      nav.classList.add("hidden");
      removeOutside();
    }
    setAria(isOpen);
  }

  // Button: guard against rapid/repeated clicks
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (locked) return;
    locked = true;
    toggle(!isOpen);
    setTimeout(() => (locked = false), 80); // tiny lock to ignore double-fire
  });

  // Close when a menu link is clicked (mobile only)
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    if (!mql.matches) toggle(false);
  });

  // On resize to desktop: force open (shown via md:block), clean listeners
  mql.addEventListener("change", (ev) => {
    if (ev.matches) {
      // ≥768px: keep menu visible (Tailwind md:block takes over), but clear state
      removeOutside();
      isOpen = false; // state irrelevant on desktop
      setAria(false);
      // Ensure hidden class is present so when we go back to mobile it starts closed
      nav.classList.add("hidden");
    }
  });

  // Initial: start closed on mobile, desktop handled by md:block
  nav.classList.add("hidden");
  setAria(false);
})();
