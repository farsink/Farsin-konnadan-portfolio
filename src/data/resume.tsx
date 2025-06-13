import { Icons } from "@/components/icons";
import { Code, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Farsin",
  initials: "K",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-Stack Developer | AI Enthusiast | Innovator\n\n\n\nPassionate about building scalable solutions, crafting AI-powered experiences, and redefining the digital landscape. Always exploring new tech and solving complex problems with code",
  summary:
    "After earning my B.Tech from [MEA Engineering College](http://www.meacollege.ac.in/), I transitioned from traditional software engineering to full-time innovation. Specializing in Full-Stack Development, AI, and DevOps, I create scalable solutions—like [Pariyapuram Super League](https://pariyapuramsuperleague.netlify.com/) and an [AI-powered sign language detection](https://github.com/farsink/AI-Powered-Sign-Language-Detection-and-Conversion.git) tool—that turn complex challenges into impactful, user-friendly applications.\nWith expertise in MERN stack, AI/ML, and DevOps \n\n 🚀 What drives me?\n\n ○ Transforming ideas into high-performance software solutions\n \n ○ Merging AI and web technologies for smarter applications\n\n ○ Contributing to open-source and collaborating with tech communities\n\nCurrently exploring the next big leap in AI and software development—let’s build something amazing together!",
  avatarUrl: "/farsi.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
    "Node.js",
    "Express.js",
    "mongoDB",
    "MySQL",
    "Angular",
    "Expo",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: Code, label: "Project" },
  ],
  contact: {
    email: "farsinkonadan@gmail.com",
    tel: "+91 8137856941",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/farsink",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/farsinkonnadan",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/farsin360",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      whatsapp: {
        name: "Farzie",
        url: "https://wa.me/918137856941",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Rearway Technologies",
      href: "https://www.rearway.com/",
      badges: [],
      location: "Manjeri, India",
      title: "Backend Developer Intern",
      logoUrl: "https://www.rearway.com/assets/Rearway-B7lO62KJ.png",
      start: "May 2025",
      end: "Present",
      description:
        "As a Backend Developer Intern, I contributed to the development of the 'Deal Buddy' product, focusing on backend services and APIs. I also assisted with various tasks and services across other projects, gaining experience in Node.js, Express.js, and AWS environments.",
    },
    {
      company: "Luminar Technolab",
      href: "https://www.luminartechnolab.com/",
      badges: [],
      location: "Kochi, India",
      title: "MERN Stack Intern",
      logoUrl:
        "https://studyapp-prod-s3.s3.amazonaws.com/logo/favicon_ClqK3ND.png",
      start: "July 2024",
      end: "Jan 2025",
      description:
        "Developed a full-stack web application designed for football tournament management. It integrates fixture scheduling, player bidding, live streaming, ticket sales, and news updates. A secure bidding and ticketing system—powered by Stripe—processed over $50K in sales with a 98% success rate. Developed with React.js, Node.js, Express, and MongoDB, it also leverages YouTube Live and Twitch APIs along with n8n ai-agents for automation ",
    },
  ],
  education: [
    {
      school: "MEA Engineering College",
      href: "https://www.meaec.edu.in",
      degree: "Bachelor's Degree of Technology (B.Tech)",
      logoUrl: "https://www.meaec.edu.in/images/meaec-2-1.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "St. Mary's Higher Secondary School",
      href: "https://www.justdial.com/Malappuram/St-Marys-Higher-Secondary-School-Pariyapuram/9999PX483-X483-180819024712-P2P9_BZDET",
      degree: "Higher Secondary School",
      logoUrl:
        "https://img.icons8.com/?size=100&id=tP3OXTLBOXKl&format=png&color=000000",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Pariyapuram Super League",
      href: "https://pariyapuramsuperleague.netlify.app/",
      dates: "Jan 2025 - Apr 2025",
      active: true,
      description:
        "A comprehensive full-stack web application for football tournament management. It features fixture scheduling, player bidding, live streaming, ticket sales, and news updates. A secure bidding and ticketing system using Stripe processed over $50K in sales with a 98% success rate, leveraging YouTube Live, Twitch APIs, and n8n for automation.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "YouTube Live API",
        "Twitch API",
        "n8n ai-agents",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/Pariyapuram-Super-League.git",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image:
        "https://res.cloudinary.com/drug15xds/image/upload/v1741681669/project-video_dkmj26.gif",
      video: "",
    },
    {
      title: "AI-Powered Sign Language Detection",
      href: "#ai-sign-language-detection",
      dates: "Sep 2023 - Dec 2023",
      active: false,
      description:
        "Developed an AI solution for real-time sign language gesture recognition using CNNs and RNNs. Achieved 95% accuracy, enhancing user experience by 50% and increasing daily usage by 30%.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Tkinter",
        "Keras",
        "Scikit-learn",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/AI-Powered-Sign-Language-Detection-and-Conversion.git",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/Sign_AI.jpg",
      video: "",
    },
    {
      title: "Socium - Social Media Dashboard",
      href: "https://github.com/farsink/Socium-dev",
      dates: "Jan 2025 - In Progress",
      active: true,
      description:
        "Monitor real-time engagement across Twitter, Instagram, and YouTube with interactive charts and AI-driven insights. Securely analyze 15K+ monthly posts, optimize strategies via role-based access, and export actionable reports—all in one centralized dashboard ",
      technologies: [
        "React",
        "TypeScript",
        "Recharts",
        "Node.js",
        "next.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "OAuth 2.0",
        "Passport.js",
        "WebSocket",
        "AWS ECS",
        "Docker",
        "Nodemailer",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/Socium-dev",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/Socium.png",
      video: "",
    },
  ],
} as const;
