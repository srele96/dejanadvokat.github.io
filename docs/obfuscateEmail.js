(function obfuscateEmail() {
  const user = "vasiljevicdejan21";
  const domain = "gmail";
  const tld = "com";

  const email = `${user}@${domain}.${tld}`;
  const mailto = `mailto:${email}`;

  document.querySelectorAll(".email-container").forEach((el) => {
    el.textContent = email;
    el.setAttribute("data-email", email);

    if (el.tagName.toLowerCase() === "a") {
      el.href = mailto;
    } else {
      if (!el.querySelector || !el.querySelector("a")) {
        const a = document.createElement("a");
        a.href = mailto;
        a.textContent = email;
        a.className = "email text-blue-700 underline";
        a.setAttribute("rel", "noopener noreferrer");
        el.textContent = "";
        el.appendChild(a);
      }
    }
  });
})();
