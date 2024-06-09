import {
  cloud,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  duzzie,
  digi,
  rstate,
  threejs,
  ibm,
  webs, 
  angstromedu,
  freelancer
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps",
    icon: cloud,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Writer",
    company_name: "Angstromedu",
    icon: angstromedu,
    iconBg: "#E6DEDD",
    date: "March 2021 - July 2021",
    points: [
      "Created and maintained comprehensive documentation for web applications developed with React.js and related technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to gather information and ensure accuracy in documentation.",
      "Developed user guides, API documentation, and training materials that facilitated responsive design and cross-browser compatibility.",
      "Reviewed and edited documentation, providing constructive feedback to improve clarity and quality.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "WEBs Technology",
    icon: webs,
    iconBg: "#383E56",
    date: "June 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shivam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shivam does.",
    name: "Siddarath T.",
    designation: "COO",
    company: "WeClock",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "After Shivam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sandip Gohil",
    designation: "CTO",
    company: "Milople",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];

const projects = [
  {
    name: "Duzzie Saas Automation",
    description:
      "Duzzie SaaS Automation is a cutting-edge B2C SaaS platform designed to empower users to create custom automation workflows with ease.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "prismaORM",
        color: "tan-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: duzzie,
    source_code_link: "https://github.com/shivamm-55/Duzzie-Saas-Automation",
  },
  {
    name: "Digital MarketPlace",
    description:
      "Digital Marketplace is a comprehensive E-commerce platform built. It features a beautiful landing page, custom artwork, a full admin dashboard, and shopping cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: digi,
    source_code_link: "https://github.com/shivamm-55/HippoSphere",
  },
  {
    name: "Real Estate",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rstate,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
