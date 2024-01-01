import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Hung (Ethan) Dinh S.",
  initials: "Hung Dinh S.",
  location: "Da Nang, Viet Nam",
  locationLink:
    "https://google.com/maps/place/%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam",
  about:
    "A Software Engineer focused on building products with extra attention to detail.",
  summary: `I have over 3+ years of experience in working and built many projects from scratch with both product + outsourcing IT companies. 
  As an Engineer, I am always willing to learn new things. Currently, I work mostly with TypeScript, React, Node.js, and Shopify. I deploy the most of products on AWS infrastructure using Serverless architecture (Lambda, Api Gateway, S3, Cloudfront, DynamoDB, SQS ...).`,
  avatarUrl: "https://avatars.githubusercontent.com/hungds99",
  personalWebsiteUrl: "https://hungds.space",
  contact: {
    email: "dinhsyhung99@gmail.com",
    tel: "0393 403 012",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hungds99",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dinhsyhung99/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/hungds99",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Dong A University",
      degree: "Bachelor's Degree in Information Technology",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "SUPREMETECH CO., LTD",
      link: "https://www.supremetech.vn/",
      badges: ["Onsite"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "Sep 2021",
      end: "Present",
      description:
        "We built an application that allows organizations to manage multiple merchants on Shopify using Amazon Web Services (AWS) Serverless. Technologies: NodeJs, ReactJs, Shopify, GraphQL, AWS (Lambda, Api Gateway, S3, Cloudfront, DynamoDB, SQS ...)",
    },
    {
      company: "IOTLink Coporation",
      link: "https://map.map4d.vn/",
      badges: ["Onsite", "Contract"],
      title: "Frontend Developer",
      logo: ClevertechLogo,
      start: "Jul 2020",
      end: "Apr 2021",
      description:
        "Worked on the Map4D SDK to develop support functions for the map. Collaborated with the tool team to develop and improve the project management tool, reducing bug reporting time by 20%. Developed map manipulation functions with 3D objects that allowed users or admins to customize the map with content to display on the web.. Technologies: React, TypeScript, Material UI",
    },
    {
      company: "Paracel Technology Solutions",
      link: "https://paraceltech.com/en/",
      badges: ["Internship"],
      title: "Java Backend Developer",
      logo: JojoMobileLogo,
      start: "Jun 2019",
      end: "Aug 2019",
      description:
        "I participated as a talented intern and built an e-commerce site selling clothes using Java and Spring MVC on my own. After that, I joined a restaurant management project as a key member to assist other interns in fixing bugs and launching the project. Technologies: Java, Spring MVC, Hibernate, MySQL, HTML, CSS, JavaScript",
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Java",
    "Spring MVC/Boot",
    "AWS",
  ],
  projects: [
    {
      title: "Quiz Online Realtime",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Socket.io",
        "Node.js/Express",
      ],
      description:
        "QuizOn is my graduation project at university. It is a website that allows users to take a real-time quiz.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
