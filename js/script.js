// js/main.js

// DOM Elements
const preloader = document.querySelector(".preloader")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section")
const skillProgress = document.querySelectorAll(".skill-progress")
const scrollTopBtn = document.querySelector(".scroll-top")
const sliderTrack = document.querySelector(".slider-track")
const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const dots = document.querySelectorAll(".dot")
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("form-message")

// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }, 1000)
})

// Import AOS library (assuming it's included in your HTML)
// Initialize AOS Animation Library
// Assuming AOS is a global variable after being included in your HTML
// Declare AOS if it's not already declared
if (typeof AOS === "undefined") {
  console.warn("AOS is not defined. Make sure to include the AOS library in your HTML.")
} else {
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  })
}

// Import Typed.js library (assuming it's included in your HTML)
// Typed.js Initialization
// Assuming Typed is a global variable after being included in your HTML
// Declare Typed if it's not already declared
if (typeof Typed === "undefined") {
  console.warn("Typed is not defined. Make sure to include the Typed.js library in your HTML.")
} else {
  const typed = new Typed("#typed-text", {
    strings: ["Business Strategist", "Digital Transformation Leader", "Data-Driven Decision Maker", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 1000,
    loop: true,
  })
}

// Mobile Navigation
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Active navigation link based on scroll position
function highlightNavLink() {
  const scrollPosition = window.scrollY

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Animate skill bars when in viewport
function animateSkillBars() {
  skillProgress.forEach((progress) => {
    const progressValue = progress.getAttribute("data-progress")
    const position = progress.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (position < screenPosition) {
      progress.style.width = `${progressValue}%`
    }
  })
}

// Show/Hide scroll to top button
function toggleScrollTopBtn() {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("active")
  } else {
    scrollTopBtn.classList.remove("active")
  }
}

// Add this function to fix any potential horizontal scroll issues
function preventHorizontalScroll() {
  // Force horizontal scroll position to 0
  if (window.scrollX > 0) {
    window.scrollTo(0, window.scrollY)
  }
}

// Scroll event listeners
window.addEventListener("scroll", () => {
  highlightNavLink()
  animateSkillBars()
  toggleScrollTopBtn()
  preventHorizontalScroll() // Add this line

  // Header shadow on scroll
  const header = document.querySelector(".header")
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }
})

// Scroll to top button click event
scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Form validation and submission
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Basic validation
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (!name || !email || !subject || !message) {
      formMessage.className = "form-message error"
      formMessage.textContent = "Please fill in all fields"
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      formMessage.className = "form-message error"
      formMessage.textContent = "Please enter a valid email address"
      return
    }

    // Simulate form submission
    formMessage.className = "form-message success"
    formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!'

    // Reset form
    contactForm.reset()

    // Clear success message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = ""
      formMessage.className = "form-message"
    }, 5000)
  })
}

// Initialize on page load
window.addEventListener("load", () => {
  // Highlight active nav link
  highlightNavLink()

  // Animate skill bars if in viewport
  animateSkillBars()

  // Prevent horizontal scroll
  preventHorizontalScroll()
})

window.addEventListener("resize", preventHorizontalScroll)

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  })
})

