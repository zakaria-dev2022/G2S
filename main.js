// Initialize AOS when the library is loaded from CDN
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS animations
  const AOS = window.AOS // Declare the AOS variable
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }

  // WhatsApp floating button animation
  const whatsappFloat = document.querySelector(".whatsapp-float")
  if (whatsappFloat) {
    setTimeout(() => {
      whatsappFloat.style.animation = "pulse 2s ease-in-out infinite"
    }, 3000)
  }

  // Mobile menu improvements
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  if (navbarToggler && navbarCollapse) {
    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click()
        }
      })
    })
  }
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Counter animation for stats (if needed)
function animateCounter(element, target) {
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    element.textContent = Math.floor(current)
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    }
  }, 20)
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  })
}, observerOptions)

// Observe all service cards when DOM is loaded
window.addEventListener("load", () => {
  document.querySelectorAll(".service-card, .process-card").forEach((card) => {
    observer.observe(card)
  })
})

// Improved responsive behavior
function handleResize() {
  const heroImagesContainer = document.querySelector(".hero-images-container")
  if (window.innerWidth <= 768 && heroImagesContainer) {
    heroImagesContainer.style.height = "400px"
  } else if (heroImagesContainer) {
    heroImagesContainer.style.height = "600px"
  }
}

window.addEventListener("resize", handleResize)
window.addEventListener("load", handleResize)

// Loading animation (optional)
window.addEventListener("load", () => {
  const loadingOverlay = document.querySelector(".loading-overlay")
  if (loadingOverlay) {
    loadingOverlay.style.opacity = "0"
    setTimeout(() => {
      loadingOverlay.style.display = "none"
    }, 500)
  }
})
