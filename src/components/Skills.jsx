import powerBI from "../assets/powerbi.svg";

function Skills() {
  const skillSections = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "C", icon: "devicon-c-plain" },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "devicon-html5-plain" },
        { name: "CSS", icon: "devicon-css3-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "React", icon: "devicon-react-original" },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "Django", icon: "devicon-django-plain" },
      ],
    },

    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Ubuntu", icon: "devicon-ubuntu-plain" },
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "Power BI", image: powerBI },
      ],
    },

    {
      title: "Concepts",
      skills: [
        { name: "DSA" },
        { name: "OOP" },
        { name: "DBMS" },
        { name: "Operating Systems" },
        { name: "Computer Networks" },
        { name: "REST APIs" },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen ml-[360px] px-20 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <h2
          className="text-white text-8xl mb-16"
          style={{
            fontFamily: "Allura",
          }}
        >
          Skills
        </h2>

        {/* Category Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className="
                bg-[#111111]
                border
                border-[#262626]
                rounded-3xl
                p-8
                hover:border-[#555]
                transition-all
                duration-300
              "
            >
              <h3
                className="text-3xl text-white mb-8"
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-3
                      bg-[#181818]
                      border
                      border-[#2b2b2b]
                      hover:border-white
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-8 h-8"
                        style={{
                          filter: "grayscale(100%) brightness(180%)",
                        }}
                      />
                    ) : (
                      skill.icon && (
                        <i
                          className={`${skill.icon} text-3xl`}
                          style={{
                            filter: "grayscale(100%) brightness(180%)",
                          }}
                        ></i>
                      )
                    )}

                    <span
                      className="text-gray-300 text-[16px]"
                      style={{
                        fontFamily: "Libre Baskerville",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
