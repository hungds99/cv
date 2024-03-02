import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hung (Ethan) Dinh S.",
  initials: "Hung Dinh S.",
  location: "Da Nang, Viet Nam",
  locationLink:
    "https://google.com/maps/place/%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam",
  about:
    "A Software Engineer focused on building products and contributing to open source.",
  summary: `With over 3 years of hands-on experience, 
          I've actively contributed to various projects in both product and outsourcing IT companies, building solutions from the ground up. 
          <br> As an engineer, I am always eager to learn new things. 
          Currently, my focus lies in TypeScript, ReactJs, NodeJs, and Shopify development. 
          I specialize in deploying products on AWS infrastructure using a Serverless architecture, which includes Lambda, API Gateway, S3, CloudFront, DynamoDB, SQS, and more.`,
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
        "Streamlined e-commerce operations for organizations by building a Shopify multi-merchant management tool. This application simplifies store setup, facilitates product and inventory management, and provides insightful analytics across all stores.",
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
        "Collaborated effectively with remote team members to deliver a customized UI dashboard that exceeded our US client's expectations.",
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
        "Enhanced the Map4D SDK by developing essential support functions for the map interface. Collaborated closely with the tool team to streamline the project management process, resulting in a 20% reduction in bug reporting time. Additionally, I designed and implemented innovative map manipulation features that enable users and admins to customize the map with 3D objects and display dynamic content on the web.",
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
        "Adeptly built a full-fledged e-commerce website selling clothes from scratch during my internship, leveraging Java and Spring MVC. This project showcased my ability to independently design, develop, and deploy a functional web application. Subsequently, I moved to a restaurant management project, where I played a pivotal role in supporting fellow interns, troubleshooting bugs, and ensuring the project's successful launch.",
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
