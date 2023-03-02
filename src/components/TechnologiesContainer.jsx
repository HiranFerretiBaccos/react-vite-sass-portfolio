import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

import "../styles/components/technologiesContainer.sass";

const TechnologiesContainer = () => {
  const technologies = [
    {
      id: "html",
      name: "HTML5",
      icon: <DiHtml5 />,
      text: "HTML stands for 'Hyper Text Markup Language'. (Describes the structure of a Web page. Consists of a series of elements)",
    },
    {
      id: "css",
      name: "CSS3",
      icon: <DiCss3 />,
      text: "CSS stands for 'Cascading Style Sheets'. (Describes how HTML elements are to be displayed on screen).",
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <DiJsBadge />,
      text: "JavaScript is the world's most popular programming language of the web. (Program the behavior of web pages).",
    },
    {
      id: "ts",
      name: "TypeScript",
      icon: <SiTypescript />,
      text: "TypeScript is a syntactic superset of JavaScript which adds static typing. (Syntax for types).",
    },
    {
      id: "react",
      name: "React.js",
      icon: <DiReact />,
      text: "React.js is a JavaScript library for building user interfaces (Single-page applications). (Allows us to create reusable UI components).",
    },
    {
      id: "next",
      name: "Next.js",
      icon: <SiNextdotjs />,
      text: "Next.js enables you to create full-stack web applications by extending the latest React features.",
    },
  ];

  //Parênteses no map() pra retornar JSX.
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
