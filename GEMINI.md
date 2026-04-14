# Personal Portfolio – Project Documentation

## Project Overview
This portfolio presents my work as a Frontend Developer and Agentic AI Developer, featuring modern designs, responsive layouts, and projects that demonstrate my skills, growth, and hands-on experience.
## Core Sections
- **Hero Section** — introduction, roles, and call-to-action.
- **About Me** — background, education, and skillset.
- **Skills & Technologies** — Tailwind, TypeScript, Next.js, ShadCN UI, APIs, and more.
- **Projects Showcase** — detailed project cards with images, descriptions, and live/demo links.
- **Contact Section** — social icons, email, and a clean form.
- **Footer** — simple, professional ending with copyright.

## Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI / Custom Components
- **Language**: TypeScript
- **Icons**: React Icons / Custom SVGs
- **Deployment**: Vercel
- **Effects**: Typewriter, animations, responsive grids

## File Structure (Simplified)
portfolio/
├── app/
│ ├── page.tsx # Main landing page
│ ├── projects/
│ │ └── page.tsx # Projects section
│ 
│ ├── contact/
│ │ └── page.tsx # Contact page
│ └── components/
│ ├── navbar.tsx
│ ├── footer.tsx
│ ├── hero.tsx
│ ├── project-card.tsx
│ └── ui/ # Custom UI components
├── public/
│ └── images/ # Project screenshots & assets
└── styles/
└── globals.css


## Design Principles
- Responsive for **mobile, tablet, and desktop**
- Clean layouts using **grid & flexbox**
- Professional spacing and modern typography
- Dark/Light mode support (optional)
- Minimal animations for smooth UX


# Hero / Landing Page

## Welcome Section

The hero section introduces Kristina with a **typewriter effect** and a split layout:

---

### Left Side: Introduction & Typewriter Effect

**Heading:**  
Hi, I’m Kristina  

**Typewriter Titles (animated one by one):**  
- Frontend Website Developer  
- Agentic AI Developer  
- AI Automation Specialist  
- n8n Workflow Builder  

**Description:**  
I create modern, responsive, and interactive web applications, combining clean design, smooth animations, and AI-driven automation. My work reflects creativity, hands-on experience, and a passion for building impactful digital solutions.

**Social Media Links with icons:**  
- GitHub: [https://github.com/kristinasamuel](https://github.com/kristinasamuel)  
- LinkedIn: [Kristina LinkedIn](https://www.linkedin.com/in/kristina-samuel-21a6942ba") 
- Email: kristina97@gmail.com  
 with icons 
**Call-to-Action Button (optional):**  
- “Contact Me” → scrolls to Contact section  

---

### Right Side: Image

- Display an **image of Kristina** from the `public` folder.  
- Image should be responsive and visually complement the introduction.  
- Add **smooth hover or entrance animations** for interactivity.  

---

### Layout & Design Notes

- **Split layout:** Left (text & typewriter), Right (image)  
- **Responsive design:** Works on mobile, tablet, and desktop  
- **Animations:** Typewriter effect for roles, subtle image entrance animation  
- **Background:** Gradient or black/green theme to match portfolio style  
- **Social icons:** Inline with hover effects, centered under text  

---

**Implementation Suggestions:**

- Use **Typewriter effect library** for React (e.g., `typewriter-effect`)  
- Next.js `<Image />` for optimized image loading  
- Tailwind CSS for responsive layout, spacing, and colors  
- Optional: Add smooth scroll when clicking the “Contact Me” button
# Featured Projects

## 1. Personal Portfolio Website
- **Live Link:** https://assignment-01-portfolio.vercel.app/
- **Description:** Responsive personal portfolio showcasing skills, projects, animations, and clean UI design.
- **Tech Stack:** Next.js, TailwindCSS, ShadCN UI

## 2. Funiro E-commerce Website
- **Live Link:** https://marketplace-builder-hackathon-2025-e-commerce-website.vercel.app/
- **Description:** Figma-to-code e-commerce store with dynamic product sections and a fully responsive layout.
- **Tech Stack:** Next.js, TailwindCSS, Sanity CMS

## 3. Blog Website
- **Live Link:** https://milestone-3-assignment-1.vercel.app/
- **Description:** Responsive blog platform with post cards, category sections, and clean reading UI.
- **Tech Stack:** Next.js, TailwindCSS

## 4. Vanar Chain Project
- **Live Link:** https://vanar-chain.vercel.app/
- **Description:** 2-day company task — responsive landing page with modern UI blocks and animations.
- **Tech Stack:** Next.js, TailwindCSS

## 5. RoboAlert (Firebase Studio Project)
- **Live Link:** https://studio--studio-1552111972-e22bb.us-central1.hosted.app/
- **Description:** Full Firebase project featuring dynamic backend, hosting, user authentication, and deployment.
- **Tech Stack:** Firebase (Firestore, Hosting, Auth)

## 6. AI Chatbot Project
- **Live Link:** (Frontend coming soon)
- **Description:** Interactive AI chatbot powered by UV + Agentic AI SDK, connected to a Next.js frontend.
- **Tech Stack:** Python, Agentic AI SDK, FastAPI, Next.js

---

# Project Card Structure

Each project becomes a **card component**, containing:

- 🖼️ **Image banner**  
- 🏷️ **Project Name**  
- 📝 **Short description**  
- 🔗 **Buttons:** *Live Demo* + *GitHub*  
- 🎨 **Animated hover effects**  

# About Me
I am Kristina, a passionate Frontend Developer and Agentic AI Developer focused on creating modern, interactive, and user-friendly web applications. I enjoy transforming ideas into polished digital experiences and building intelligent workflows and chatbots that solve real-world problems. Each project reflects my creativity, continuous learning, and dedication to delivering impactful solutions.
---

## What I Work With

- **Frontend:** Next.js, React, Tailwind CSS, ShadCN UI, HTML, CSS  
- **Backend / APIs:** FastAPI, Firebase, Sanity  
- **AI & Automation:** Agentic AI SDK, Gemini API, Gemini CLI, MCP, n8n, Python  
- **Tools & Deployment:** UV, GitHub, Vercel, Postman  
- **Frameworks:** Streamlit, Chainlit  

---

## My Journey

- Started with the **GIAIC program**, learning full-stack and AI concepts  
- Built **30+ projects**, including e-commerce apps, dashboards, blogs, and AI chatbots  
- Completed multiple hackathons and real-world assignments  
- Currently expanding skills in **Agentic AI development**, automation workflows, AI-based tooling, and scalable frontend architecture  
  

## Contact & Social Integrations
# Contact Me

## Get in Touch

You can reach me through the following channels:

- **GitHub:** [https://github.com/kristinasamuel](https://github.com/kristinasamuel)  
- **LinkedIn:** [Kristina LinkedIn](https://www.linkedin.com/in/kristina-linkedin)  
- **Email:** kristina97@gmail.com  

Social icons will be displayed **centered** on the page with **flex layout** and **hover effects** for a clean, interactive look.

---

## Address

**Location:**  
Block H, No. 54, Steel Town, Bin Qasim, Malir, Karachi, Pakistan  

A **map** will be embedded on the contact page to visually show the location for visitors.

---

## Contact Form

Visitors can fill out a **contact form** directly on the website. The form will include:

- **Name** (input field)  
- **Email** (input field)  
- **Message** (textarea)  
- **Submit Button**  

When the form is submitted, the message will be sent **directly to kristina97@gmail.com**.  
The form should be responsive and work across **mobile, tablet, and desktop** devices.

---

### Implementation Notes

- Use **Next.js API Route** or **Formspree / Nodemailer** to handle form submissions.  
- Ensure **form validation**: required fields and proper email format.  
- Include **success/error messages** after submission.  
- Keep the **design consistent** with the portfolio style and dark/light mode support.  
- Social icons can be implemented using **React Icons** with hover animations for interactivity.  
- Use **Google Maps iframe** or map component to show the address visually.

## Additional Notes
This project evolves as I learn new technologies. Regular updates include:
- New projects from 30 Days of 30 Projects challenge  
- New automation projects  
- Updated blog posts documenting my journey

portfolio/
├── app/
│ ├── page.tsx # Main landing page
│ ├── projects/
│ │ └── page.tsx # Projects section
│ ├── contact/
│ │ └── page.tsx # Contact page
│ └── components/
│ ├── navbar.tsx
│ ├── footer.tsx
│ ├── hero.tsx
│ ├── project-card.tsx
│ └── ui/ # Custom UI components
├── public/
│ └── images/ # Project screenshots & assets
└── styles/
└── globals.css


---

## Design Principles
- Responsive for **mobile, tablet, and desktop**  
- Clean layouts using **grid & flexbox**  
- Professional spacing and modern typography  
- Dark/Light mode support (optional)  
- Minimal animations for smooth UX  

---

# Hero / Landing Page

## Welcome Section
The hero section introduces **Kristina** with a **typewriter effect** and a split layout.

### Left Side: Introduction & Typewriter Effect
**Heading:**  
Hi, I’m Kristina  

**Typewriter Titles (animated one by one):**  
- Frontend Website Developer  
- Agentic AI Developer  
- AI Automation Specialist  
- n8n Workflow Builder  

**Description:**  
I create modern, responsive, and interactive web applications, combining clean design, smooth animations, and AI-driven automation. My work reflects creativity, hands-on experience, and a passion for building impactful digital solutions.

**Social Media Links:**  
- GitHub: [https://github.com/kristinasamuel](https://github.com/kristinasamuel)  
- LinkedIn: [Kristina LinkedIn](https://www.linkedin.com/in/kristina-linkedin)  
- Email: kristina97@gmail.com  

**Call-to-Action Button (optional):**  
- “Contact Me” → scrolls to Contact section  

### Right Side: Image
- Display an **image of Kristina** from the `public` folder.  
- Image should be responsive and visually complement the introduction.  
- Add **smooth hover or entrance animations** for interactivity.  

### Layout & Design Notes
- **Split layout:** Left (text & typewriter), Right (image)  
- **Responsive design:** Works on mobile, tablet, and desktop  
- **Animations:** Typewriter effect for roles, subtle image entrance animation  
- **Background:** Gradient or black/green theme to match portfolio style  
- **Social icons:** Inline with hover effects, centered under text  

**Implementation Suggestions:**  
- Use **Typewriter effect library** for React (e.g., `typewriter-effect`)  
- Next.js `<Image />` for optimized image loading  
- Tailwind CSS for responsive layout, spacing, and colors  
- Optional: Add smooth scroll when clicking the “Contact Me” button  

---

# Featured Projects

### 1. Personal Portfolio Website
- **Live Link:** https://assignment-01-portfolio.vercel.app/  
- **Description:** Responsive personal portfolio showcasing skills, projects, animations, and clean UI design.  
- **Tech Stack:** Next.js, TailwindCSS, ShadCN UI  

### 2. Funiro E-commerce Website
- **Live Link:** https://marketplace-builder-hackathon-2025-e-commerce-website.vercel.app/  
- **Description:** Figma-to-code e-commerce store with dynamic product sections and fully responsive layout.  
- **Tech Stack:** Next.js, TailwindCSS, Sanity CMS  

### 3. Blog Website
- **Live Link:** https://milestone-3-assignment-1.vercel.app/  
- **Description:** Responsive blog platform with post cards, category sections, and clean reading UI.  
- **Tech Stack:** Next.js, TailwindCSS  

### 4. Vanar Chain Project
- **Live Link:** https://vanar-chain.vercel.app/  
- **Description:** 2-day company task — responsive landing page with modern UI blocks and animations.  
- **Tech Stack:** Next.js, TailwindCSS  

### 5. RoboAlert (Firebase Studio Project)
- **Live Link:** https://studio--studio-1552111972-e22bb.us-central1.hosted.app/  
- **Description:** Full Firebase project featuring dynamic backend, hosting, user authentication, and deployment.  
- **Tech Stack:** Firebase (Firestore, Hosting, Auth)  

### 6. AI Chatbot Project
- **Live Link:** (Frontend coming soon)  
- **Description:** Interactive AI chatbot powered by UV + Agentic AI SDK, connected to a Next.js frontend.  
- **Tech Stack:** Python, Agentic AI SDK, FastAPI, Next.js  

---

# Project Card Structure
Each project becomes a **card component**, containing:  
- 🖼️ **Image banner**  
- 🏷️ **Project Name**  
- 📝 **Short description**  
- 🔗 **Buttons:** *Live Demo* + *GitHub*  
- 🎨 **Animated hover effects**  

---

# About Me
I am Kristina, a passionate **Frontend Developer** and **Agentic AI Developer** focused on creating modern, interactive, and user-friendly web applications. I enjoy transforming ideas into polished digital experiences and building intelligent workflows and chatbots that solve real-world problems. Each project reflects my creativity, continuous learning, and dedication to delivering impactful solutions.

## What I Work With
- **Frontend:** Next.js, React, Tailwind CSS, ShadCN UI, HTML, CSS  
- **Backend / APIs:** FastAPI, Firebase, Sanity  
- **AI & Automation:** Agentic AI SDK, Gemini API, Gemini CLI, MCP, n8n, Python  
- **Tools & Deployment:** UV, GitHub, Vercel, Postman  
- **Frameworks:** Streamlit, Chainlit  

## My Journey
- Started with the **GIAIC program**, learning full-stack and AI concepts  
- Built **30+ projects**, including e-commerce apps, dashboards, blogs, and AI chatbots  
- Completed multiple hackathons and real-world assignments  
- Currently expanding skills in **Agentic AI development**, automation workflows, AI-based tooling, and scalable frontend architecture  

---

# Contact & Social Integrations

## Get in Touch
You can reach me through the following channels:  
- **GitHub:** [https://github.com/kristinasamuel](https://github.com/kristinasamuel)  
- **LinkedIn:** [Kristina LinkedIn](https://www.linkedin.com/in/kristina-linkedin)  
- **Email:** kristina97@gmail.com  

Social icons are displayed **centered** with **flex layout** and **hover effects** for a clean, interactive look.

## Address
**Location:**  
Block H, No. 54, Steel Town, Bin Qasim, Malir, Karachi, Pakistan  

A **map** is embedded on the contact page to visually show the location.

## Contact Form
Visitors can fill out a **contact form** directly on the website:  
- **Name** (input field)  
- **Email** (input field)  
- **Message** (textarea)  
- **Submit Button**  

When the form is submitted, the message is sent **directly to kristina97@gmail.com**.  
The form is fully responsive across **mobile, tablet, and desktop** devices.

### Implementation Notes
- Use **Next.js API Route** or **Formspree / Nodemailer** for submissions  
- Ensure **form validation** for required fields and proper email format  
- Include **success/error messages**  
- Maintain consistent design with the portfolio style and dark/light mode support  
- Social icons implemented with **React Icons** and hover animations  
- Embed map using **Google Maps iframe** or map component

---

