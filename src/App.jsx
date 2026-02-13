import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

/** ✅ EDIT THESE ONLY */
const PROFILE = {
  name: "Srija Sama",
  tagline: "I'm a Product Analyst",
  linkedin: "https://www.linkedin.com/in/ssrijareddy/",
  github: "https://github.com/srijasama",
  email: "srijasama@email.com", // change
  resumePath: "/resume.pdf",
  photoPath: "/profile.jpg",
};

const ABOUT = {
  titleLine: "Product Analyst | SQL | A/B Testing | Power BI | Python",
  paragraphs: [
    "Hi, I’m Srija — a Product Analyst who loves turning messy data into clear product decisions. I focus on activation, adoption, and retention, and I’m obsessed with finding the “why” behind user behavior.",
    "I work with cross-functional teams to define KPIs, analyze funnels, validate experiments, and build dashboards that help teams ship confidently.",
    "Outside of work, I’m usually polishing my portfolio, learning more about experimentation, or nerding out on how small UX changes can create big retention wins.",
  ],
};

const EDUCATION = [
  {
    degree: "Masters in Business Analytics",
    gpa: "GPA: 3.67",
    years: "2024 - 2025",
    school: "University of New Haven",
  },
  {
    degree: "Bachelors in Business Administration",
    gpa: "GPA: 9.2/10",
    years: "2019 - 2022",
    school: "Osmania University",
  },
];

const EXPERIENCE = [
  {
    role: "Product Analyst",
    company: "ServiceNow (Contract)",
    dates: "July 2025 – Present",
    bullets: [
      "Defined KPIs for activation, workflow completion, and feature engagement to support product releases.",
      "Analyzed onboarding and feature adoption using SQL and Python to identify user journey friction points.",
      "Conducted A/B test analysis on UI and workflow variants, measuring lift and statistical significance.",
      "Built Power BI dashboards tracking activation, retention, and time-to-value across releases.",
    ],
  },
  {
    role: "Process Analyst",
    company: "Tata Consultancy Services (TCS) — Client: Wolters Kluwer (USA)",
    dates: "June 2023 – Jan 2024",
    bullets: [
      "Prepared, validated, and submitted U.S. state-level annual tax filings using HCue and advanced Excel.",
      "Reconciled large datasets, performed QA checks, and resolved exceptions to meet statutory deadlines.",
      "Coordinated with client and cross-functional stakeholders to ensure compliance and on-time submissions.",
    ],
  },
  {
    role: "Process Analyst",
    company: "Tata Consultancy Services (TCS) — Client: BICS (Belgium)",
    dates: "Nov 2022 – May 2023",
    bullets: [
      "Managed end-to-end billing and financial disputes using Salesforce in a high-volume environment.",
      "Built and maintained operational dashboards tracking dispute volumes, timelines, and KPIs.",
      "Collaborated with finance and operations teams to meet SLAs and improve reporting turnaround time.",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "The Product Owner Profession: Unleashing the Power of Scrum",
    issuer: "SkillUp",
    date: "Issued Feb 2026",
    id: "BT6WXTH7Q7V6",
  },
  {
    name: "Introduction to Business Analytics",
    issuer: "Tableau Learning Partner",
    id: "CCDIH86GR9YNC",
  },
  {
    name: "SQL Foundations",
    issuer: "Microsoft (Coursera)",
    id: "K4NVOW7LSG4D",
  },
  {
    name: "Product Analytics Micro-Certification",
    issuer: "Product School",
    id: "cert_rdhgtkz1",
  },
  {
    name: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    id: "P2i3PNCkoxdmPMwGd",
  },
  {
    name: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
  },
];

const PROJECTS = [
  {
    title: "Customer Segmentation & Purchase Insights",
    desc: "Segmentation analysis + insights dashboard (replace with your real description).",
    tags: ["SQL", "Python", "Power BI"],
    github: "https://github.com/srijasama",
    live: "https://example.com",
  },
  {
    title: "Employee Engagement Analysis",
    desc: "Survey + engagement metrics analysis (replace with your real description).",
    tags: ["Analytics", "Excel", "Visualization"],
    github: "https://github.com/srijasama",
    live: "https://example.com",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      init={loadFull}
      options={{
        background: { color: "#000000" },
        fpsLimit: 60,
        fullScreen: { enable: false },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 120, duration: 0.3 } },
        },
        particles: {
          number: { value: 70, density: { enable: true, area: 900 } },
          color: { value: "#22d3ee" },
          links: {
            enable: true,
            distance: 160,
            color: "#22d3ee",
            opacity: 0.35,
            width: 1,
          },
          move: { enable: true, speed: 1, outModes: { default: "out" } },
          opacity: { value: 0.65 },
          size: { value: { min: 2, max: 3 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}

function TopRightIcons() {
  const iconBtn =
    "w-11 h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 grid place-items-center transition";
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3">
      <a className={iconBtn} href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <Github className="w-5 h-5" />
      </a>
      <a className={iconBtn} href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5" />
      </a>
      <a className={iconBtn} href={`mailto:${PROFILE.email}`} aria-label="Email">
        <Mail className="w-5 h-5" />
      </a>
      <a className={iconBtn} href={PROFILE.resumePath} target="_blank" rel="noreferrer" aria-label="Resume">
        <FileText className="w-5 h-5" />
      </a>
    </div>
  );
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticlesBg />
      <TopRightIcons />
      <div className="max-w-5xl mx-auto px-6">
        <Header />
        {children}
      </div>
    </div>
  );
}

function Header() {
  const navItem = ({ isActive }) =>
    cn(
      "px-0 py-2 text-white/70 hover:text-white transition border-b-2",
      isActive ? "border-cyan-400 text-white" : "border-transparent"
    );

  const linkCls = "mr-8";

  return (
    <div className="pt-24">
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">{PROFILE.name}</h1>
      <p className="mt-3 text-xl md:text-2xl text-white/70">
        {PROFILE.tagline.split("Product Analyst").map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i === 0 && (
              <span className="text-cyan-300 underline underline-offset-8 decoration-cyan-400">
                Product Analyst
              </span>
            )}
          </React.Fragment>
        ))}
      </p>

      <nav className="mt-10 flex flex-wrap gap-x-10 gap-y-2 text-lg">
        <NavLink className={({ isActive }) => cn(linkCls, navItem({ isActive }))} to="/about">
          About
        </NavLink>
        <NavLink className={({ isActive }) => cn(linkCls, navItem({ isActive }))} to="/projects">
          Projects
        </NavLink>
        <NavLink className={({ isActive }) => cn(linkCls, navItem({ isActive }))} to="/education">
          Education
        </NavLink>
        <NavLink className={({ isActive }) => cn(linkCls, navItem({ isActive }))} to="/certifications">
          Certifications
        </NavLink>
        <NavLink className={({ isActive }) => cn(linkCls, navItem({ isActive }))} to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

function Page({ kicker, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="pb-20"
    >
      <div className="mt-14">
        <div className="text-xs tracking-[0.35em] text-white/40 uppercase">{kicker}</div>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">{title}</h2>
      </div>

      <div className="mt-10">{children}</div>
    </motion.div>
  );
}

function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function HomePage() {
  // Sakshi-style home is basically hero + nav only.
  // Keep it clean.
  return <div className="pb-10" />;
}

function AboutPage() {
  return (
    <Page kicker="About" title="Learn more about me">
      <div className="grid md:grid-cols-[360px_1fr] gap-10 items-start">
        <GlassCard className="overflow-hidden">
          <img
            src={PROFILE.photoPath}
            alt="Srija"
            className="w-full h-[420px] object-cover"
          />
        </GlassCard>

        <div>
          <h3 className="text-cyan-300 text-2xl md:text-3xl font-bold">{ABOUT.titleLine}</h3>
          <div className="mt-6 space-y-6 text-white/75 leading-8 italic">
            {ABOUT.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

function ProjectsPage() {
  return (
    <Page kicker="Projects" title="Some things I’ve built">
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <GlassCard key={p.title} className="p-6 hover:bg-white/7 transition">
            <div className="rounded-xl bg-white/10 border border-white/10 h-44 mb-5 grid place-items-center text-white/40">
              Add project image later
            </div>

            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-white/70 leading-7">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition"
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </Page>
  );
}

function EducationPage() {
  return (
    <Page kicker="Education" title="My Education & Experience">
      <div className="grid gap-8">
        <GlassCard className="p-6">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-4 grid gap-5">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="border border-white/10 rounded-xl p-4 bg-white/5">
                <div className="font-semibold text-lg">{e.degree}</div>
                <div className="text-white/70 mt-1">{e.gpa}</div>
                <div className="text-white/60 mt-1">{e.years}</div>
                <div className="text-white/70 mt-2">{e.school}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-2xl font-bold">Experience</h3>
          <div className="mt-5 grid gap-5">
            {EXPERIENCE.map((x) => (
              <div key={x.role + x.company} className="border border-white/10 rounded-xl p-4 bg-white/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <div className="font-semibold text-lg">{x.role}</div>
                  <div className="text-white/60">{x.dates}</div>
                </div>
                <div className="text-white/75 mt-1">{x.company}</div>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-white/70 leading-7">
                  {x.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </Page>
  );
}

function CertificationsPage() {
  return (
    <Page kicker="Certifications" title="Credentials & Courses">
      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((c) => (
          <GlassCard key={c.name} className="p-6">
            <div className="text-lg font-bold">{c.name}</div>
            <div className="mt-2 text-white/70">{c.issuer}</div>
            {c.date && <div className="mt-1 text-white/60">{c.date}</div>}
            {c.id && <div className="mt-2 text-white/60 text-sm">Credential ID: {c.id}</div>}
          </GlassCard>
        ))}
      </div>
    </Page>
  );
}

function ContactPage() {
  return (
    <Page kicker="Contact" title="Let’s connect">
      <GlassCard className="p-8">
        <p className="text-white/70 leading-7">
          Want to talk product, analytics, or roles? Email me and I’ll reply.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
          >
            <Mail className="w-5 h-5" /> Email Me
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>

          <a
            href={PROFILE.resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition"
          >
            <FileText className="w-5 h-5" /> Resume
          </a>
        </div>
      </GlassCard>
    </Page>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  );
}
