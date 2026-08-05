

       function addUrlArrow(targetId, url) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("aria-label", "Tovább");
    link.style.display = "inline-flex";
    link.style.alignItems = "flex-end";
    link.style.textDecoration = "none";

    link.innerHTML = `
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18H20"
          stroke="var(--green)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 13L20 18L15 23"
          stroke="var(--green)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `;

    target.appendChild(link);
  }

    document.addEventListener("DOMContentLoaded", () => {
    addUrlArrow("arrow-dszit", "/dszit-szemleletu-foglalkozas");
    addUrlArrow("arrow-kepessegfelmeres", "/kepessegfelmeres");
    addUrlArrow("arrow-terapia", "/egyeni-terapia");
  });

        /* small script: set year and mobile improvements */
      document.getElementById("year").textContent = new Date().getFullYear();

      // Smooth scroll for internal links (modern browsers)
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const target = document.querySelector(a.getAttribute("href"));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
