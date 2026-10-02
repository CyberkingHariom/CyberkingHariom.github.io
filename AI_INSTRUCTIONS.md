# 🇮🇳 THE CYBER INDIA — MASTER AI INSTRUCTIONS & ARCHITECTURE SPECIFICATION
**File:** `AI_INSTRUCTIONS.md`  
**Target Domain:** `thecyberindia.me`  
**Brand Identity:** `THE CYBER INDIA — An Independent Cybersecurity & Intelligence Platform`  
**Founder:** Hariom Singh (Cybercrime Investigator & OSINT Specialist)

---

## 1. Master Directive: "Do Not Skip or Forget Any Requirement"
Whenever an AI model, developer, or automated system reads or modifies this project:
1. **Never dilute or alter the core identity:** The platform is an **independent cybersecurity and intelligence platform**. It must NEVER claim to be an official government entity, military organ, or law enforcement agency, while proudly supporting India's national security interests and digital safety.
2. **Preserve the full thematic aesthetic:** Dark HUD, cyberpunk intelligence terminal, military-tactical grid, subtle Indian tricolor accents, radar sweeps, and responsive glassmorphism.
3. **Preserve all 15 Core Functional Sections:** 
   - Boot Sequence (Terminal loader)
   - Hero Section (Cinematic radar, typing roles, metrics)
   - Cyber War Visualization (Fictional network threat simulation)
   - About Profile (Hariom Singh bio, credential badge, terminal card)
   - Work / Capabilities (6 major domains)
   - Services (What I Can Help With + Interactive Spec Modals)
   - Tools Arsenal (VAJAR Intel Bot, VAJAR IP Forensic, CDR Analyzer + Live Simulation Modals)
   - Projects / Builds (6 flagship engineering builds)
   - Casework History (Deoria & Ghaziabad police collaboration timelines with forensic bars)
   - Credentials & Certifications (DCCI, DCJSP, Defronix Internship, CCC, Python)
   - Field Feedback (Testimonials with admin approval pipeline)
   - Team / TCI Network (Hariom Singh + 6 specialized team friends/operators with badges & dossiers)
   - India Section (Patriotic digital map, tricolor accents, JAI HIND banner)
   - Cyber News Feed (Categorized threat intelligence stream)
   - Social Media Hub (YouTube, Instagram, GitHub, Telegram, LinkedIn, X)
   - Contact & Availability (Secure channel transmission form + direct channels)
   - Admin Command Center (`/admin`)
   - Responsible Use & Legal Disclaimer (`/disclaimer`)

---

## 2. UI / UX Design & Color Palette
* **Theme Feeling:** Futuristic, dark, patriotic, tactical intelligence HUD, cinematic, ultra-clean.
* **Background Colors:**
  - Base Background: `#05070A`
  - Secondary Elevated Layer: `#080D12`
  - Tertiary / Card Layer: `#0D141B`
* **Accent Colors:**
  - Cyber Cyan: `#00F5FF` (Primary interactive highlight & glow)
  - Electric Green: `#00FF41` (Success, active status, defensive verification)
  - Indian Saffron: `#FF9933` (Patriotic emphasis, warning highlights)
  - Deep Orange / Alert: `#FF6B35` (Threat indicators, alerts)
  - India Green: `#138808` (Tricolor badge)
  - Pure White: `#FFFFFF`
* **Typography:**
  - Headings / Tactical Titles: `'Orbitron', monospace` & `'Space Grotesk', sans-serif`
  - Body & Content: `'Inter', sans-serif`
  - Terminal & Data HUDs: `'JetBrains Mono', monospace`
* **Motion & Animations:**
  - Canvas Particle Field with subtle connection lines and cursor gravitation.
  - Interactive Custom Cursor (dot + lagging ring with automatic element hover detection).
  - Conic-gradient Radar Sweep and concentric sonar pulse rings.
  - SVG Threat Containment Simulation on scroll.
  - Expandable modal drawers with animated terminal runtimes.

---

## 3. Responsive Layout & Mobile Support
* **Mobile-First Principles:**
  - Desktop: Full interactive HUD, magnetic buttons, custom cursor, deep 3D-feel glass cards.
  - Mobile / Tablets: Custom cursor auto-disabled to avoid touch conflicts, simplified particle density (60 particles vs 120), swipeable/scrollable tool cards, touch-friendly tap targets (minimum 44px).
  - Navigation: Desktop horizontal menu; Mobile slide-in glass drawer with animated hamburger toggle.

---

## 4. Directory & File Architecture
```
thecyberindiawebsit/
├── app/
│   ├── admin/
│   │   └── page.tsx           # Admin Command Center (/admin) with password auth
│   ├── disclaimer/
│   │   └── page.tsx           # Responsible Use & Legal Disclaimer (/disclaimer)
│   ├── favicon.ico
│   ├── globals.css            # Custom CSS vars, fonts, scanline, noise, glow effects
│   ├── layout.tsx             # Root layout, metadata, OpenGraph tags, font preconnects
│   └── page.tsx               # Orchestration page for all 15 sections + boot state
├── components/
│   ├── AboutSection.tsx       # Profile, bio, terminal card, credentials
│   ├── BootSequence.tsx       # Cinematic startup boot sequence with progress bar
│   ├── CaseworkSection.tsx    # Forensic casework timeline & evidence gauges
│   ├── CertsSection.tsx       # 5 professional certifications & internship details
│   ├── ContactSection.tsx     # Transmission form + direct contact methods
│   ├── CustomCursor.tsx       # Dynamic cyber cursor dot + lagging ring
│   ├── CyberWarViz.tsx        # Fictional cyber threat & defensive containment animation
│   ├── FeedbackSection.tsx    # User testimonials & feedback submission form
│   ├── Footer.tsx             # Site footer, nav links, disclaimer link, JAI HIND
│   ├── HeroSection.tsx        # Main cinematic hero, radar rings, typing role effect
│   ├── IndiaSection.tsx       # Safer Digital India section with map & tricolor accents
│   ├── Navbar.tsx             # Sticky blur navbar with scroll detection & mobile drawer
│   ├── NewsSection.tsx        # Cyber intelligence feed with category filters
│   ├── ParticleField.tsx      # Canvas-based particle & neural connection animation
│   ├── ProjectsSection.tsx    # 6 engineering builds & GitHub integrations
│   ├── ServicesSection.tsx    # 6 service domains with interactive spec sheet modals
│   ├── SocialSection.tsx      # Social cards (YouTube, Instagram, GitHub, etc.)
│   ├── TeamSection.tsx        # Hariom Singh + 6 specialized team friends/operators
│   └── ToolsSection.tsx       # Arsenal tools + live terminal simulation modals
├── public/                    # Static assets & icons
├── AI_INSTRUCTIONS.md         # This master instruction file
├── README.md                  # Complete developer & deployment guide
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 5. The Team (Hariom Singh & 6 Friends / Operators)
The team is rendered in `components/TeamSection.tsx` and configurable via code or `/admin`:
1. **Hariom Singh** (`NEXUS-PRIME`): Founder & Lead Cybercrime Investigator
2. **Co-Investigator 1 / Brother** (`SPECTER-OSINT`): Tactical OSINT & Footprint Analyst
3. **Network Specialist** (`NET-HAWK`): Network Forensics, STUN Protocols & IP Analysis
4. **Tool & Automation Developer** (`CORE-DEV`): Python Backends, CLI Engines & Bot Development
5. **Cyber Awareness & Media Director** (`MEDIA-SHIELD`): YouTube, Instagram & Educational Content
6. **CDR & IPDR Data Analyst** (`CHRONO-INTEL`): Telecom Dumps, Timeline Synthesis & Movement Geolocation
7. **Web Security & UI/UX Architect** (`CYBER-ARCH`): Full-Stack Next.js Architecture, Cryptographic Verification & Frontend HUD

---

## 6. Security & Legal Considerations
* **Platform Status:** All tools, research, and casework must maintain clear disclaimers that they are intended strictly for educational, defensive, research, and authorized law enforcement purposes.
* **Sensitive Data Redaction:** Public casework logs must anonymize victim and suspect personally identifiable information (PII) per privacy laws and Section 65B compliance.
* **Admin Access:** Default admin panel at `/admin` protected by master password (`tci@admin2026`). In production, back with Firebase Auth or HTTP-only cookie sessions.

---

## 7. SEO & Performance
* Semantic HTML5 markup throughout.
* Next.js metadata configured with OpenGraph tags, dynamic title, Twitter cards, keywords (`OSINT`, `Cybercrime Investigator`, `Deoria`, `Ghaziabad Police`, `The Cyber India`).
* CSS font imports loaded with preconnect to optimize First Contentful Paint (FCP).
