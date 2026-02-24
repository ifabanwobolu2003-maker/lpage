import React from "react";
import { Code, Laptop, Presentation } from "lucide-react";
import { Users } from "lucide-react";
import { Rocket } from "lucide-react";

import user1 from "../assets/feyi.jpeg";
import user2 from "../assets/shal.jpeg";
import user3 from "../assets/semi.jpeg";
import user4 from "../assets/stepg.jpeg";
import user5 from "../assets/tife.jpeg";
import user6 from "../assets/tosin.jpeg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "CTA", href: "#cta" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Lydia Feyishayo",
    Program: "Product Designer (UI/UX)",
    image: user1,
    text: "The product design course taught me research, prototyping, and real-world design thinking.",
  },
  {
    user: "Shalom Adeoye",
    Program: "Frontend Developer",
    image: user2,
    text: "THUB completely changed my tech journey, I went from begineer to building real applications in just a few months.",
  },
  {
    user: "Semilore Grace",
    Program: "Software Engineer Intern",
    image: user3,
    text: "The mentorship and project-based learning helped me land my first internship.",
  },
  {
    user: "Iberi Stephanie",
    Program: "Backend Developer",
    image: user4,
    text: "The backend program at THUB helped me understand APIs, databases, and authentication properly. I now feel confident building fullstack applications.",
  },
  {
    user: "Ifabanwo Boluwatife",
    Program: "Fullstack Developer",
    image: user5,
    text: "The live coding sessions and code reviews made all the difference in my learning journey.",
  },
  {
    user: "Obabiyi Oluwatosin",
    Program: "Data Analyst",
    image: user6,
    text: "The data analytics track made SQL and python easy to understand. I now analyze datasets confidently.",
  },
];

export const features = [
  {
    icon: <Laptop />,
    text: "Project Based Learning",
    description:
      "Work on real-world projects instead of just theory.",
  },
  {
    icon: <Code />,
    text: "Structured Curriculum",
    description:
      "Clear roadmap from beginners to join-ready developers.",
  },
  {
    icon: <Presentation />,
    text: "Live Coding Sessions",
    description:
      "Code along with experienced developers in real-time.",
  },
  {
    icon: <Rocket />,
    text: "Industry Ready Tools",
    description:
      "Learn tools and framework companies actually use.",
  },
  {
    icon: <Users />,
    text: "Dedicated Mentorship",
    description:
      "Get personalized guidance from industry experts.",
  },
  {
    icon: <Users />,
    text: "Community Support",
    description:
      "Join a network of developers and tech creators.",
  }
];

export const checklistItems = [
  {
    title: "Step 1",
    description:
      "Sign Up",
  },
  {
    title: "Step 2",
    description:
      "Choose Your Learning Path",
  },
  {
    title: "Step 3",
    description:
      "Start Learning",
  },
  {
    title: "Step 4",
    description:
      "Build Projects",
  },
];

export const pricingOptions = [
  {
    title: "Beginner",
    price: "#50,000",
    features: [
      "Structured Curriculum",
      "Project-Based Learning",
      "Community Access",
      "Certificate of Completion",
    ],
  },
  {
    title: "Pro",
    price: "#120,000",
    features: [
      "Everything in Beginner",
      "Live Coding Sessions",
      "Mentorship Access",
      "Code Reviews",
      "Career Preparation",
    ],
  },
  {
    title: "Premium",
    price: "#200,000",
    features: [
      "Everything in Pro",
      "Internship Placement",
      "1-on-1 Mentorship",
      "Interview Prep",
      "Priority Support",
    ],
  },
];