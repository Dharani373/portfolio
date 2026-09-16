import ProjectCard from "./ProjectCard";

import mindcare from "../assets/mindcare.png";
import mealmate from "../assets/mealmate.png";
import civicvoice from "../assets/civicvoice.png";
import forever from "../assets/forever.png";
import agrovision from "../assets/agrovision.png";

function Projects() {
  const projects = [
    {
      title: "AgroVision",

      description:
        "A smart agriculture platform that combines full-stack development with Machine Learning to provide data-driven crop and yield insights for farmers.",

      image: agrovision,

      github: "https://github.com/Dharani373/AgroVision",

      technologies: [
        {
          name: "React",
          icon: "devicon-react-original",
        },
        {
          name: "Node.js",
          icon: "devicon-nodejs-plain",
        },
        {
          name: "Express",
          icon: "devicon-express-original",
        },
        {
          name: "MongoDB",
          icon: "devicon-mongodb-plain",
        },
        {
          name: "Python",
          icon: "devicon-python-plain",
        },
      ],
    },

    {
      title: "Civic Voice",

      description:
        "A hyperlocal civic complaint resolution platform that enables citizens to report issues, monitor complaint progress, and engage through community-driven participation.",

      image: civicvoice,

      github: "https://github.com/Dharani373/CivicVoice",

      technologies: [
        {
          name: "React",
          icon: "devicon-react-original",
        },
        {
          name: "Node.js",
          icon: "devicon-nodejs-plain",
        },
        {
          name: "Express",
          icon: "devicon-express-original",
        },
        {
          name: "MongoDB",
          icon: "devicon-mongodb-plain",
        },
        {
          name: "Socket.IO",
          icon: "devicon-socketio-original",
        },
      ],
    },

    {
      title: "Mind Care",
      description:
        "An AI-powered mental health support platform that leverages sentiment analysis to understand user emotions and provide personalized mental wellness insights through an intuitive dashboard.",

      image: mindcare,

      github: "https://github.com/Dharani373/MindCare-Psychological-Support",

      technologies: [
        {
          name: "Django",
          icon: "devicon-django-plain",
        },
        {
          name: "JavaScript",
          icon: "devicon-javascript-plain",
        },
        {
          name: "SQLite",
          icon: "devicon-sqlite-plain",
        },
      ],
    },

    {
      title: "Meal Mate",

      description:
        "A full-stack food ordering platform featuring user authentication, product browsing, shopping cart management, and an intuitive responsive user interface.",

      image: mealmate,

      github: "https://github.com/Dharani373/MealMate",

      technologies: [
        {
          name: "React",
          icon: "devicon-react-original",
        },
        {
          name: "Node.js",
          icon: "devicon-nodejs-plain",
        },
        {
          name: "Express",
          icon: "devicon-express-original",
        },
        {
          name: "MongoDB",
          icon: "devicon-mongodb-plain",
        },
      ],
    },

    {
      title: "Forever",

      description:
        "A modern e-commerce platform designed with a responsive interface, secure authentication, and seamless product browsing experience.",

      image: forever,

      github: "https://github.com/Dharani373/Forever-ECommerce-Website",

      technologies: [
        {
          name: "React",
          icon: "devicon-react-original",
        },
        {
          name: "Node.js",
          icon: "devicon-nodejs-plain",
        },
        {
          name: "Express",
          icon: "devicon-express-original",
        },
        {
          name: "MongoDB",
          icon: "devicon-mongodb-plain",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen lg:ml-[360px] px-5 sm:px-8 lg:px-20 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <h2
          className="text-white text-5xl sm:text-6xl lg:text-8xl mb-16"
          style={{
            fontFamily: "Allura",
          }}
        >
          Projects
        </h2>

        {/* Cards */}

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
