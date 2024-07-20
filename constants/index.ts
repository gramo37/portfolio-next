import { GrNodes } from "react-icons/gr";
import { FaReact } from "react-icons/fa6";

export const data = {
  name: "Prasanna Gramopadhye",
  email: "gramopadhye37@gmail.com",
  phone: "7875594848",
  profile_photo:
    "https://res.cloudinary.com/dwtxio5dn/image/upload/v1704610545/ljrtq4iqvkrzvh7upwey.jpg",
  profession: "Full Stack Developer",
  twitter_link: "https://twitter.com/gramopadhye37",
  linkedin_link: "https://www.linkedin.com/in/prasanna-gramopadhye",
  github_link: "https://github.com/gramo37",
  resume_link:
    "https://res.cloudinary.com/dwtxio5dn/image/upload/v1719068288/jkt0tc2uu85zevlba7r5.pdf",
  about: {
    "Frontend Development": {
      points: [
        "Responsive Design: I ensure your website looks perfect on any device, from desktops to mobile phones, using modern CSS frameworks and media queries.",
        "Interactive User Experiences: By leveraging JavaScript, React, and other modern frontend technologies, I create dynamic and interactive web applications that captivate your audience.",
        "Performance Optimization: I focus on optimizing your website for speed and efficiency, ensuring quick load times and smooth performance.",
        "Accessibility: I build websites that are accessible to all users, including those with disabilities, adhering to the latest accessibility standards."
      ],
      linesOfCode: 30000,
      icon: FaReact,
      color: "#4ade80",
      projectsCompleted: 10,
    },
    "Backend Development": {
      points: [
        "API Development: I create RESTful and GraphQL APIs that allow seamless communication between your frontend and backend, facilitating efficient data exchange.",
        "Database Management: I design and manage relational and non-relational databases, ensuring your data is organized, secure, and easily retrievable.",
        "Server-Side Logic: I implement complex business logic on the server side, handling data processing, user authentication, and more with precision and reliability.",
        "Scalability: I build scalable backend systems that can handle increasing loads, ensuring your application grows seamlessly with your user base.",
      ],
      linesOfCode: 20000,
      icon: GrNodes,
      color: "#60a5fa",
      projectsCompleted: 8,
    },
  },
  education: [
    {
      degree_name: "Scaler",
      university_name: "A Structured and Flexible Online Program",
      duration: "Apr 2021 - Present",
      description: [
        "Solved more than 400 DSA Problems",
        "Learned about LLD and HLD with real world examples",
      ],
    },
    {
      degree_name: "Bachelors Degree",
      university_name:
        "Pune Vidyarthi Griha's College of Engineering (PVGCOET)",
      duration: "Mar 2017 - Apr 2021",
      description: [
        "Designed and developed the auto-navigation algorithm in python for ML-based Trash collecting boat.",
        "Our BE Project won first prize among 20 teams in the Online National Project Competition.",
        "Successfully cleared all subjects with no backlogs and securing an overall 8.84 CGPA.",
      ],
    },
  ],
  skills: [
    {
      skill_name: "HTML5",
      proficiency: 60,
      maximum_proficiency: 100,
    },
    {
      skill_name: "CSS",
      proficiency: 50,
      maximum_proficiency: 100,
    },
    {
      skill_name: "React",
      proficiency: 50,
      maximum_proficiency: 100,
    },
    {
      skill_name: "NodeJS",
      proficiency: 50,
      maximum_proficiency: 100,
    },
    {
      skill_name: "MongoDB",
      proficiency: 40,
      maximum_proficiency: 100,
    },
    {
      skill_name: "Postgres",
      proficiency: 40,
      maximum_proficiency: 100,
    },
    {
      skill_name: "Typescript",
      proficiency: 50,
      maximum_proficiency: 100,
    },
    {
      skill_name: "SQL",
      proficiency: 50,
      maximum_proficiency: 100,
    },
  ],
  project: [
    {
      project_name: "Online Chess Platform",
      description: [
        "A real-time online chess platform, containerized using Docker for simplified application deployment.",
        "Tech Stack: HTML, CSS, React, Node, websockets, turborepo",
      ],
      techStack: [],
      background_img_url:
        "https://res.cloudinary.com/dwtxio5dn/image/upload/v1704610489/irzefialwctfpjguzyt3.png",
      project_link: "https://resume-builder-3789.netlify.app",
    },
    {
      project_name: "Online Examination Portal",
      description: [
        "SMART EXAM - Web App where Teachers can conduct MCQ Exams",
        "Tech Stack: HTML, CSS, TailwindCSS, React, MongoDB, Node, Express",
      ],
      techStack: [],
      background_img_url:
        "https://res.cloudinary.com/dwtxio5dn/image/upload/v1701934435/aixzgisiwig9iyyvhjfo.png",
      project_link: "https://online-examination-portal.netlify.app",
    },
    {
      project_name: "Resume Builder",
      description: [
        "A Web app built for students/professionals to create resumes within no time.",
        "Tech Stack: HTML, CSS, React, Redux",
      ],
      techStack: [],
      background_img_url:
        "https://res.cloudinary.com/dwtxio5dn/image/upload/v1704610489/irzefialwctfpjguzyt3.png",
      project_link: "https://resume-builder-3789.netlify.app",
    },
    {
      project_name: "Coin Cap Dashboard",
      description: [
        "A dashboard made using HTM, CSS and React along with a custom hook for fetching data from API.",
        "Created a responsive Navbar which shows hamburger icon in small devices",
      ],
      techStack: [],
      background_img_url:
        "https://res.cloudinary.com/dwtxio5dn/image/upload/v1701936185/kwqcrri6wb9tlnaxib1h.png",
      project_link: "https://h3-mart-project.netlify.app",
    },
    {
      project_name: "Sudoku Solver",
      description: [
        "A backtracking algorithm which can solve any sudoku within seconds !!",
      ],
      techStack: [],
      background_img_url:
        "https://res.cloudinary.com/dwtxio5dn/image/upload/v1701934936/ykfypjxx74oxdkv5vk0h.png",
      project_link: "https://sudoku-solver-using-backtracking.netlify.app",
    },
  ],
  workExperience: [
    {
      company_name: "Optanium Gmbh",
      profession: "Consultant",
      duration: "May 2023 - Present",
      description: [
        "Core team member responsible for creating features for a product named Elsa.",
        "Below are some of the recent achievements:",
        "Integrated a Push Notification service for ELSA using pushy.me",
        "Took responsibility for creating Outlook integration for ELSA",
        "Created a service for sending weekly dashboard reports using Nivo Library",
        "Developed a data-driven graph plotting service using canvas",
        "Key Technologies worked: Express.js · TypeScript · Material-UI · PostgreSQL · Redis · Node.js · JavaScript · React.js",
      ],
    },
    {
      company_name: "Tata Consultancy Services Ltd",
      profession: "Assistant System Engineer",
      duration: "Aug 2021 - Apr 2023",
      description: [
        "- Worked as a junior engineer for a client named IndiaFirstLife Insurance on a product named Simplify.",
        "- Responsible for code analysis, debugging, and identifying areas for improvement.",
        "- Acquired expertise in HTML, CSS, and JavaScript with guidance from industry experts.",
        "- Closely worked with the client and other application teams to resolve issues, provide Root Cause Analysis, Technical document preparation.",
        "Key technologies worked with: HTML, CSS, JavaScript, React, Node.js, Typescript, SQL, Git.",
      ],
    },
  ],
};
export const professions = ["Frontend", "Backend", "FullStack"];

export const navOptions = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
];
