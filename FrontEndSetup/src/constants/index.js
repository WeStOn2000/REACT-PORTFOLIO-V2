import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";

export const HERO_CONTENT = `I'm Weston Rwigema, a dedicated and passionate Full Stack JavaScript Developer. I specialize in building dynamic, scalable web applications using modern technologies like React, Javascript, Node.js, Express, and SQLite. With a strong foundation in both front-end and back-end development, I am eager to bring my skills to a collaborative team and take on new challenges. I am also comfortable working with other tools and technologies as needed, and I'm always eager to learn new things`;

export const ABOUT_TEXT = `I’m a passionate Full Stack Developer with a solid foundation in JavaScript and extensive experience with React and Node.js. My skill set includes Express, SQL, and a variety of tools like Git, GitHub, and Postman, which help streamline my development process. I thrive in dynamic environments, embracing Agile methodologies and Scrum to deliver high-quality projects efficiently. Whether I'm crafting sleek front-end designs with CSS and HTML or building robust back-end solutions, I’m committed to creating seamless user experiences. I also have a keen interest in e-commerce management, where I leverage my expertise to enhance online retail platforms. Let’s build something great together!`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Personal Projects",
    description:`Proficient in JavaScript, React, Node.js, and Express, with
    hands-on experience in developing user-friendly applications.
    Highlights include building RESTful APIs, implementing user
    authentication, and optimizing databases with SQLite,
    demonstrating strong problem-solving and collaboration skills
    throughout projects.`,
    technologies: ["Javascript", "React.js", "RESTAPI", "SQL", "TailwindCss", "Node.js", "Express"],
  },
  {
    year: "2024 - Present",
    role: "Digital Marketing",
    company: "Shopify Stores",
    description: `I specialize in SEO-optimized content creation, e-commerce
product management, and audience-focused copywriting for a
Shopify store. My skills include keyword research, product
listing optimization, and crafting persuasive descriptions to
improve visibility, attract traffic, and increase conversions in
digital retail.`,
    technologies:[]
  },
];

export const PROJECTS = [
  {
    title: "BOOK COURSES",
    image: project1,
    description:
      "This project is a Full Stack JavaScript application that demonstrates the use of React, React Context, React Hooks, React Router, and Express with SQLite for creating, retrieving, updating, and deleting course data. It integrates both Client-Side Rendering (CSR) and Server-Side Rendering (SSR) to provide a seamless experience for authenticated users.",
    technologies: ["HTML", "CSS", "React", "Node.js", "SQLITE", "RESTApi", "Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Displaying expertise in HTML, JavaScript, Pug, Express, and CSS, I have created five impressive projects. These projects showcase dynamic web applications, utilizing a phrase engine for content manipulation. The CSS files are meticulously styled with customized colors and background colors, enhancing the visual appeal. Additionally, the font family has been changed to a classic style, providing a timeless aesthetic that complements the modern functionality of the applications.",
    technologies: ["HTML", "CSS", "Pug", "Javascript", "Express"],
  },
  {
    title: "Grocery List",
    image: project3,
    description:
      "I built a React grocery list app where I can add, mark, and remove items easily. It helps me manage my shopping efficiently and stay organized!",
    technologies: ["HTML", "CSS", "React", "Javascript"],
  },
  {
    title: "React Gallery",
    image: project4,
    description:
      "This application displays a gallery of employee profiles fetched from the Random User Generator API. Each employee card can be clicked to view detailed information in a modal window. Users can also filter employees by name using a search feature. Features: Gallery Display",
    technologies: ["HTML", "CSS", "Javascript", "Api", "React"],
  },
];

export const CONTACT = {
  address: "Canada",
  phoneNo: "+1 613-220-7156",
  email: "tonytany53@gmail.com",
};
