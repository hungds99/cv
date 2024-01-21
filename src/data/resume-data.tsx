import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hung (Ethan) Dinh S.",
  initials: "Hung Dinh S.",
  location: "Da Nang, Viet Nam",
  locationLink:
    "https://google.com/maps/place/%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam",
  about:
    "A Software Engineer focused on building products with extra attention to detail.",
  summary: `With over 3 years of hands-on experience, I've actively contributed to various projects in both product and outsourcing IT companies, building solutions from the ground up. As an engineer, I am always eager to learn new things. Currently, my focus lies in TypeScript, ReactJs, NodeJs, and Shopify development. I specialize in deploying products on AWS infrastructure using a Serverless architecture, which includes Lambda, API Gateway, S3, CloudFront, DynamoDB, SQS, and more.`,
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
      logo: "",
      start: "Sep 2021",
      end: "Present",
      description:
        "We built an application that allows organizations to manage multiple merchants on Shopify using Amazon Web Services (AWS) Serverless. Technologies: NodeJs, ReactJs, Shopify, GraphQL, AWS (Lambda, Api Gateway, S3, Cloudfront, DynamoDB, SQS ...)",
    },
    {
      company: "Freelancer",
      link: "https://www.supremetech.vn/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "",
      start: "Sep 2021",
      end: "Present",
      description:
        "Collaborated with remote team members in seamlessly developing a customized UI dashboard for our valued US client.",
    },
    {
      company: "IOTLink - Map4D",
      link: "https://map.map4d.vn/",
      badges: ["Onsite", "Contract"],
      title: "Frontend Developer",
      logo: "",
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
      logo: "",
      start: "Jun 2019",
      end: "Aug 2019",
      description:
        "I participated as a talented intern and built an e-commerce site selling clothes using Java and Spring MVC on my own. After that, I joined a restaurant management project as a key member to assist other interns in fixing bugs and launching the project. Technologies: Java, Spring MVC, Hibernate, MySQL, HTML, CSS, JavaScript",
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js/Remix",
    "Node.js/Express",
    "Java",
    "Spring MVC/Boot",
    "AWS/Serverless Architecture",
  ],
  projects: [
    {
      title: "Quiz Online",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Socket.io",
        "Node.js/Express",
      ],
      description:
        "QuizOn is my graduation project at university. It is a website that allows users to take a real-time quiz.",
      logo: "",
      link: {
        label: "quizz.com",
        href: "https://quizz.com/",
      },
    },
  ],
} as const;
