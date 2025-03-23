// projects-script.js

// DOM Elements
const preloader = document.querySelector(".preloader")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const categoryTabs = document.querySelectorAll(".category-tab")
const projectCards = document.querySelectorAll(".project-card")
const viewDetailsButtons = document.querySelectorAll(".view-details")
const projectModal = document.querySelector(".project-modal")
const modalContent = document.querySelector(".modal-content")
const modalBody = document.querySelector(".modal-body")
const closeModal = document.querySelector(".close-modal")
const scrollTopBtn = document.querySelector(".scroll-top")

// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }, 1000)
})

// Initialize AOS Animation Library
// Declare AOS if it's not globally available
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  })
} else {
  console.warn("AOS is not defined. Make sure to include the AOS library.")
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

// Category Filtering
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    categoryTabs.forEach((t) => t.classList.remove("active"))

    // Add active class to clicked tab
    tab.classList.add("active")

    // Get category to filter
    const category = tab.getAttribute("data-category")

    // Filter projects
    filterProjects(category)
  })
})

function filterProjects(category) {
  projectCards.forEach((card) => {
    const projectCategory = card.getAttribute("data-category")

    if (category === "all" || projectCategory === category) {
      card.style.display = "flex"
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, 100)
    } else {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      setTimeout(() => {
        card.style.display = "none"
      }, 300)
    }
  })
}

// Project Modal
viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()

    const projectId = button.getAttribute("data-project")
    const projectContent = getProjectDetails(projectId)

    modalBody.innerHTML = projectContent
    projectModal.classList.add("active")
    document.body.style.overflow = "hidden"
  })
})

closeModal.addEventListener("click", () => {
  projectModal.classList.remove("active")
  document.body.style.overflow = "auto"
})

// Close modal when clicking outside of modal content
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.classList.remove("active")
    document.body.style.overflow = "auto"
  }
})

// Project Details Content
function getProjectDetails(projectId) {
  const projectDetails = {
    "market-research": `
      <div class="modal-header">
        <h2>Market Research Dashboard</h2>
      </div>
      <div class="modal-project-content">
        <img src="https://via.placeholder.com/800x400?text=Market+Research+Dashboard" alt="Market Research Dashboard">
        <div class="project-description">
          <h3>Project Overview</h3>
          <p>This comprehensive market research dashboard was developed for a retail client to analyze consumer behavior, market trends, and competitive positioning. The project involved collecting and analyzing data from multiple sources to provide actionable insights.</p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Interactive visualization of market trends and consumer preferences</li>
            <li>Competitor analysis with benchmarking metrics</li>
            <li>Demographic segmentation and targeting recommendations</li>
            <li>Predictive modeling for future market trends</li>
          </ul>
          
          <h3>Technologies Used</h3>
          <div class="tech-stack">
            <span>Tableau</span>
            <span>Python</span>
            <span>SQL</span>
            <span>R</span>
          </div>
          
          <h3>Outcomes</h3>
          <p>The dashboard enabled the client to identify untapped market segments, resulting in a 15% increase in targeted marketing efficiency and a 12% growth in market share within six months of implementation.</p>
        </div>
      </div>
    `,
    ecommerce: `
      <div class="modal-header">
        <h2>E-Commerce Platform</h2>
      </div>
      <div class="modal-project-content">
        <img src="https://via.placeholder.com/800x400?text=E-Commerce+Platform" alt="E-Commerce Platform">
        <div class="project-description">
          <h3>Project Overview</h3>
          <p>A fully responsive e-commerce platform built from the ground up, featuring a comprehensive product catalog, shopping cart functionality, and secure payment integration. The platform was designed with a focus on user experience and conversion optimization.</p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Responsive design optimized for all devices</li>
            <li>Advanced product filtering and search capabilities</li>
            <li>Secure checkout process with multiple payment options</li>
            <li>Customer account management and order tracking</li>
            <li>Admin dashboard for inventory and order management</li>
          </ul>
          
          <h3>Technologies Used</h3>
          <div class="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Redux</span>
            <span>Stripe API</span>
          </div>
          
          <h3>Outcomes</h3>
          <p>The platform achieved a 25% higher conversion rate compared to the client's previous solution, with a 40% reduction in cart abandonment and a significant improvement in mobile sales.</p>
        </div>
      </div>
    `,
    crm: `
      <div class="modal-header">
        <h2>CRM System</h2>
      </div>
      <div class="modal-project-content">
        <img src="https://via.placeholder.com/800x400?text=CRM+System" alt="CRM System">
        <div class="project-description">
          <h3>Project Overview</h3>
          <p>A custom customer relationship management system designed to streamline lead tracking, customer data management, and reporting for a mid-sized business. The system integrates with existing business tools to provide a unified platform for customer interactions.</p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Lead tracking and qualification workflow</li>
            <li>Customer data management with detailed profiles</li>
            <li>Task management and reminders for follow-ups</li>
            <li>Reporting dashboard with customizable metrics</li>
            <li>Email integration for communication tracking</li>
          </ul>
          
          <h3>Technologies Used</h3>
          <div class="tech-stack">
            <span>Laravel</span>
            <span>MySQL</span>
            <span>Vue.js</span>
            <span>Chart.js</span>
            <span>REST API</span>
          </div>
          
          <h3>Outcomes</h3>
          <p>The CRM implementation resulted in a 30% increase in lead conversion rates, 45% reduction in response time to customer inquiries, and improved team collaboration across departments.</p>
        </div>
      </div>
    `,
    marketing: `
      <div class="modal-header">
        <h2>Digital Marketing Campaign</h2>
      </div>
      <div class="modal-project-content">
        <img src="https://via.placeholder.com/800x400?text=Digital+Marketing+Campaign" alt="Digital Marketing Campaign">
        <div class="project-description">
          <h3>Project Overview</h3>
          <p>A comprehensive digital marketing strategy and implementation for a local business looking to expand their online presence. The campaign included SEO optimization, content marketing, social media management, and paid advertising.</p>
          
          <h3>Key Components</h3>
          <ul>
            <li>Website audit and SEO optimization</li>
            <li>Content strategy and blog development</li>
            <li>Social media campaign across multiple platforms</li>
            <li>Google Ads and Facebook Ads management</li>
            <li>Email marketing automation</li>
          </ul>
          
          <h3>Tools & Platforms</h3>
          <div class="tech-stack">
            <span>Google Analytics</span>
            <span>SEMrush</span>
            <span>Mailchimp</span>
            <span>Hootsuite</span>
            <span>Google Ads</span>
            <span>Facebook Business Manager</span>
          </div>
          
          <h3>Results</h3>
          <p>The campaign achieved a 40% increase in website traffic, 65% growth in social media engagement, and a 25% improvement in conversion rates, resulting in a 3x ROI on marketing spend.</p>
        </div>
      </div>
    `,
    strategy: `
      <div class="modal-header">
        <h2>Business Strategy Development</h2>
      </div>
      <div class="modal-project-content">
        <img src="https://via.placeholder.com/800x400?text=Business+Strategy" alt="Business Strategy">
        <div class="project-description">
          <h3>Project Overview</h3>
          <p>Developed a comprehensive business strategy and market entry plan for a tech startup looking to disrupt the local service industry. The project included market analysis, competitive positioning, and a detailed growth roadmap.</p>
          
          <h3>Key Components</h3>
          <ul>
            <li>Market analysis and opportunity identification</li>
            <li>Competitive landscape assessment</li>
            <li>Business model development and validation</li>
            <li>Financial projections and funding strategy</li>
            <li>Growth roadmap with key milestones</li>
          </ul>
          
          <h3>Methodologies</h3>
          <div class="tech-stack">
            <span>SWOT Analysis</span>
            <span>Porter's Five Forces</span>
            <span>Business Model Canvas</span>
            <span>Lean Startup</span>
            <span>Agile Planning</span>
          </div>
          
          <h3>Outcomes</h3>
          <p>The strategy enabled the startup to secure seed funding, achieve product-market fit within 6 months, and establish a growing customer base with a 30% month-over-month growth rate.</p>
        </div>
      </div>
    `,
    community: `
      <div class="modal-header">
        <h2>Community Outreach Initiative</h2>
      </div>
      <div class="modal-project-content">
        <img src="https://via.placeholder.com/800x400?text=Community+Project" alt="Community Project">
        <div class="project-description">
          <h3>Project Overview</h3>
          <p>Led a community education program providing technology skills training to underprivileged youth. The initiative included curriculum development, volunteer coordination, and partnership building with local businesses and educational institutions.</p>
          
          <h3>Key Components</h3>
          <ul>
            <li>Curriculum development for basic to advanced tech skills</li>
            <li>Volunteer recruitment and training program</li>
            <li>Partnership development with local businesses</li>
            <li>Resource acquisition and management</li>
            <li>Impact measurement and reporting</li>
          </ul>
          
          <h3>Skills & Approaches</h3>
          <div class="tech-stack">
            <span>Project Management</span>
            <span>Stakeholder Engagement</span>
            <span>Curriculum Design</span>
            <span>Volunteer Management</span>
            <span>Impact Assessment</span>
          </div>
          
          <h3>Impact</h3>
          <p>The program successfully trained over 100 youth participants, with 75% reporting improved confidence in tech skills and 40% pursuing further education or employment in technology-related fields.</p>
        </div>
      </div>
    `,
  }

  return projectDetails[projectId] || `<p>Project details not found.</p>`
}

// Show/Hide scroll to top button
function toggleScrollTopBtn() {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("active")
  } else {
    scrollTopBtn.classList.remove("active")
  }
}

// Scroll event listeners
window.addEventListener("scroll", () => {
  toggleScrollTopBtn()

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

