"use strict";

/*
  PORTFOLIO CUSTOMIZATION
  Replace the placeholder URLs and example content below.
  Use complete URLs beginning with https:// for external resources.
*/

const CONFIG = {
  name: "Your Name",
  email: "hello@example.com",
  resumeUrl: "https://example.com/your-resume.pdf",
  linkedinUrl: "https://linkedin.com/in/your-profile",
  githubUrl: "https://github.com/your-username",

  // Optional form service endpoint. Leave empty to open the visitor's email app.
  // Example: your Formspree endpoint URL.
  formEndpoint: "",

  roles: ["Developer", "Problem Solver", "Creative Thinker"]
};

const PLACEHOLDER = "https://placehold.co";

const SKILLS = [
  { icon: "⌨", name: "HTML & CSS", description: "Responsive, accessible interfaces", level: 90 },
  { icon: "⚡", name: "JavaScript", description: "Interactive web experiences", level: 85 },
  { icon: "⚛", name: "React", description: "Component-based applications", level: 75 },
  { icon: "◈", name: "UI / UX Design", description: "Thoughtful user experiences", level: 75 },
  { icon: "⌘", name: "Git & GitHub", description: "Version control and collaboration", level: 80 },
  { icon: "▤", name: "APIs & Tools", description: "Integrations and data handling", level: 70 }
];

const EXPERIENCE = [
  {
    type: "Experience",
    date: "2024 — PRESENT",
    title: "Your Job Title",
    company: "Company Name",
    description: "Replace this text with your responsibilities, projects, and achievements."
  },
  {
    type: "Education",
    date: "2020 — 2024",
    title: "Your Degree",
    company: "University or Institution",
    description: "Add your qualification, specialization, and relevant academic achievements."
  },
  {
    type: "Experience",
    date: "2023 — 2024",
    title: "Intern / Junior Developer",
    company: "Organization Name",
    description: "Describe the practical skills and experience you developed in this role."
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Development",
    description: "A modern responsive portfolio showcasing skills, projects, and experience.",
    image: `${PLACEHOLDER}/800x500/101a29/00e5ff?text=Portfolio+Project`,
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://example.com/",
    github: "https://github.com/",
    featured: true
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "Web Development",
    description: "A dashboard concept for presenting data, insights, and useful visual summaries.",
    image: `${PLACEHOLDER}/800x500/17142c/aa8cff?text=Analytics+Dashboard`,
    tags: ["JavaScript", "Charts", "UI Design"],
    demo: "https://example.com/",
    github: "https://github.com/",
    featured: true
  },
  {
    id: 3,
    title: "Mobile App Concept",
    category: "UI/UX",
    description: "A user-focused interface concept with a clear navigation system and clean layouts.",
    image: `${PLACEHOLDER}/800x500/172b2c/6ef0bd?text=Mobile+App`,
    tags: ["Figma", "UI/UX", "Prototyping"],
    demo: "https://example.com/",
    github: "https://github.com/",
    featured: true
  },
  {
    id: 4,
    title: "Task Manager",
    category: "Applications",
    description: "A productivity app concept for organizing tasks and tracking progress.",
    image: `${PLACEHOLDER}/800x500/2c2017/ffc17a?text=Task+Manager`,
    tags: ["JavaScript", "Local Storage"],
    demo: "https://example.com/",
    github: "https://github.com/",
    featured: false
  },
  {
    id: 5,
    title: "Weather Application",
    category: "Applications",
    description: "A weather interface with a replaceable API integration and responsive layout.",
    image: `${PLACEHOLDER}/800x500/13233b/83c8ff?text=Weather+App`,
    tags: ["JavaScript", "REST API"],
    demo: "https://example.com/",
    github: "https://github.com/",
    featured: false
  },
  {
    id: 6,
    title: "Brand Experience",
    category: "UI/UX",
    description: "A visual design project focused on consistency, typography, and usability.",
    image: `${PLACEHOLDER}/800x500/2a1830/ff9ee8?text=Brand+Design`,
    tags: ["Design", "Prototyping"],
    demo: "https://example.com/",
    github: "https://github.com/",
    featured: false
  }
];

const CERTIFICATIONS = [
  {
    title: "Web Development Certificate",
    issuer: "Issuing Organization",
    image: `${PLACEHOLDER}/700x500/101a29/00e5ff?text=Certificate+1`,
    url: "https://example.com/"
  },
  {
    title: "JavaScript Certification",
    issuer: "Issuing Organization",
    image: `${PLACEHOLDER}/700x500/17142c/aa8cff?text=Certificate+2`,
    url: "https://example.com/"
  },
  {
    title: "Professional Skills Certificate",
    issuer: "Issuing Organization",
    image: `${PLACEHOLDER}/700x500/172b2c/6ef0bd?text=Certificate+3`,
    url: "https://example.com/"
  }
];

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function safeExternalUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function setExternalLink(element, url) {
  if (!element) return;
  element.href = safeExternalUrl(url);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function renderSkills() {
  $("#skillsGrid").innerHTML = SKILLS.map(skill => `
    <article class="skill-card reveal">
      <div class="skill-icon" aria-hidden="true">${skill.icon}</div>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      <div class="skill-track"
        role="progressbar" aria-label="${skill.name}"
        aria-valuemin="0" aria-valuemax="100" aria-valuenow="${skill.level}">
        <div class="skill-fill" style="width:${skill.level}%"></div>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  $("#timeline").innerHTML = EXPERIENCE.map(item => `
    <article class="timeline-item reveal">
      <div class="timeline-card">
        <span class="timeline-date">${item.date} · ${item.type}</span>
        <h3>${item.title}</h3>
        <h4>${item.company}</h4>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

function renderFilters() {
  const categories = ["All", ...new Set(PROJECTS.map(project => project.category))];
  $("#projectFilters").innerHTML = categories.map((category, index) => `
    <button class="filter-btn ${index === 0 ? "active" : ""}"
      type="button" data-filter="${category}"
      aria-pressed="${index === 0}">
      ${category}
    </button>
  `).join("");
}

function renderProjects(category = "All") {
  const projects = PROJECTS.filter(project =>
    category === "All" || project.category === category
  );

  $("#projectsGrid").innerHTML = projects.map(project => `
    <article class="project-card reveal" tabindex="0" role="button"
      data-project="${project.id}"
      aria-label="View details for ${project.title}">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-open" aria-hidden="true">↗</span>
      </div>
      <div class="project-info">
        <span class="project-category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-list">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  $("#emptyProjects").hidden = projects.length > 0;
  observeReveals();
}

function renderCertifications() {
  $("#certGrid").innerHTML = CERTIFICATIONS.map((cert, index) => `
    <article class="cert-card reveal" tabindex="0" role="button"
      data-cert="${index}" aria-label="View ${cert.title}">
      <img src="${cert.image}" alt="${cert.title}" loading="lazy">
      <div class="cert-info">
        <h3>${cert.title}</h3>
        <p>${cert.issuer} · View certificate ↗</p>
      </div>
    </article>
  `).join("");
  observeReveals();
}

let previousFocus = null;

function openModal(project) {
  if (!project) return;

  previousFocus = document.activeElement;
  $("#modalImage").src = project.image;
  $("#modalImage").alt = project.title;
  $("#modalCategory").textContent = project.category;
  $("#modalTitle").textContent = project.title;
  $("#modalDescription").textContent = project.description;
  $("#modalTags").innerHTML = project.tags
    .map(tag => `<span class="tag">${tag}</span>`).join("");

  const demo = $("#modalDemo");
  const github = $("#modalGithub");
  setExternalLink(demo, project.demo);
  setExternalLink(github, project.github);

  demo.hidden = !project.demo || safeExternalUrl(project.demo) === "#";
  github.hidden = !project.github || safeExternalUrl(project.github) === "#";

  $("#projectModal").hidden = false;
  document.body.classList.add("modal-open");
  $(".modal-close").focus();
}

function openCertificate(cert) {
  if (!cert) return;

  const project = {
    title: cert.title,
    category: "Certification",
    description: cert.issuer,
    image: cert.image,
    tags: ["Certificate"],
    demo: cert.url,
    github: ""
  };

  openModal(project);
  $("#modalGithub").hidden = true;
  $("#modalDemo").textContent = "View Credential ↗";
  $("#modalDemo").hidden = !cert.url || safeExternalUrl(cert.url) === "#";
}

function closeModal() {
  $("#projectModal").hidden = true;
  document.body.classList.remove("modal-open");
  $("#modalDemo").textContent = "Live Demo ↗";
  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

function observeReveals() {
  const elements = $$(".reveal:not([data-observed])");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("visible"));
    return;
  }

  elements.forEach(el => {
    el.dataset.observed = "true";
    revealObserver.observe(el);
  });
}

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

function initNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        $$(".nav-link").forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    }, { rootMargin: "-25% 0px -60% 0px" });

    $$("main section[id]").forEach(section => sectionObserver.observe(section));
  }

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    $("#progress").style.width = `${progress}%`;
  }, { passive: true });
}

function initTyping() {
  const target = $("#typedText");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.textContent = CONFIG.roles[0] || "Developer";
    $(".cursor").hidden = true;
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const role = CONFIG.roles[roleIndex] || "Developer";
    target.textContent = role.slice(0, charIndex);

    if (!deleting) {
      charIndex++;
      if (charIndex > role.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        charIndex = 0;
        deleting = false;
        roleIndex = (roleIndex + 1) % CONFIG.roles.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 90);
  }

  tick();
}

function initCounters() {
  const counters = $$("[data-count]");
  if (!("IntersectionObserver" in window)) {
    counters.forEach(el => el.textContent = el.dataset.count);
    return;
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const start = performance.now();
      const duration = 1000;

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * progress);
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));
}

function initTheme() {
  const button = $("#themeToggle");
  const saved = (() => {
    try { return localStorage.getItem("portfolio-theme"); }
    catch { return null; }
  })();

  if (saved === "light") document.body.classList.add("light");

  function updateButton() {
    const light = document.body.classList.contains("light");
    button.textContent = light ? "☾" : "☼";
    button.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
  }

  updateButton();

  button.addEventListener("click", () => {
    document.body.classList.toggle("light");
    try {
      localStorage.setItem(
        "portfolio-theme",
        document.body.classList.contains("light") ? "light" : "dark"
      );
    } catch {
      // Theme switching still works when storage is unavailable.
    }
    updateButton();
  });
}

function initProjectInteractions() {
  $("#projectFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    $$(".filter-btn").forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    renderProjects(button.dataset.filter);
  });

  $("#projectsGrid").addEventListener("click", event => {
    const card = event.target.closest("[data-project]");
    if (card) openModal(PROJECTS.find(p => p.id === Number(card.dataset.project)));
  });

  $("#projectsGrid").addEventListener("keydown", event => {
    if (!["Enter", " "].includes(event.key)) return;
    const card = event.target.closest("[data-project]");
    if (!card) return;
    event.preventDefault();
    openModal(PROJECTS.find(p => p.id === Number(card.dataset.project)));
  });

  $("#certGrid").addEventListener("click", event => {
    const card = event.target.closest("[data-cert]");
    if (card) openCertificate(CERTIFICATIONS[Number(card.dataset.cert)]);
  });

  $("#certGrid").addEventListener("keydown", event => {
    if (!["Enter", " "].includes(event.key)) return;
    const card = event.target.closest("[data-cert]");
    if (!card) return;
    event.preventDefault();
    openCertificate(CERTIFICATIONS[Number(card.dataset.cert)]);
  });

  $("#projectModal").addEventListener("click", event => {
    if (event.target.closest("[data-close-modal]")) closeModal();
  });

  document.addEventListener("keydown", event => {
    if ($("#projectModal").hidden) return;
    if (event.key === "Escape") closeModal();

    if (event.key === "Tab") {
      const focusable = $$(
        'a[href]:not([hidden]), button:not([hidden]), [tabindex="0"]',
        $("#projectModal")
      ).filter(el => !el.disabled);

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");

  form.addEventListener("submit", async event => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    const button = $(".submit-btn", form);
    const originalText = button.textContent;

    if (CONFIG.formEndpoint) {
      button.disabled = true;
      button.textContent = "Sending…";

      try {
        const response = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("The service rejected the submission.");

        status.textContent = "Message sent successfully!";
        status.classList.add("success");
        form.reset();
      } catch {
        status.textContent = "Unable to send your message. Please try again or email directly.";
        status.classList.add("error");
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }

      return;
    }

    // Without a backend, prepare an email in the visitor's email application.
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );

    status.textContent = "Opening your email application. Sending depends on your email client.";
    status.classList.add("success");

    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

function init() {
  document.title = `${CONFIG.name} | Portfolio`;

  const heroHeading = $("h1");
  heroHeading.innerHTML = `${CONFIG.name.trim().split(/\s+/)[0].replace(/[&<>"]/g, "")} <span>${CONFIG.name.trim().split(/\s+/).slice(1).join(" ").replace(/[&<>"]/g, "")}</span>`;

  $("#year").textContent = new Date().getFullYear();
  $("#emailText").textContent = CONFIG.email;
  setExternalLink($("#emailLink"), `mailto:${CONFIG.email}`);
  setExternalLink($("#linkedinLink"), CONFIG.linkedinUrl);
  setExternalLink($("#resumeLink"), CONFIG.resumeUrl);

  // Update social links in the hero section.
  const social = $$(".social-links a");
  setExternalLink(social[0], CONFIG.githubUrl);
  setExternalLink(social[1], CONFIG.linkedinUrl);
  setExternalLink(social[2], `mailto:${CONFIG.email}`);

  renderSkills();
  renderTimeline();
  renderFilters();
  renderProjects();
  renderCertifications();

  observeReveals();
  initNavigation();
  initTyping();
  initCounters();
  initTheme();
  initProjectInteractions();
  initContactForm();
}

document.addEventListener("DOMContentLoaded", init);