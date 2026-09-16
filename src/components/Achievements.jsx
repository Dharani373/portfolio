import { FaTrophy, FaLaptopCode } from "react-icons/fa";

const achievements = [
  {
    title: "Smart India Hackathon (SIH)",
    icon: FaTrophy,
    description:
      "Collaborated with a multidisciplinary team in the Smart India Hackathon (SIH) to develop an innovative software solution for a real-world problem statement. Contributed to the project's design and development, and the team was selected for Round 2 of the competition.",
    tags: ["Teamwork", "Problem Solving", "Innovation"],
  },

  {
    title: "HackVibe",
    icon: FaLaptopCode,
    description:
      "Participated in HackVibe, a 24-hour hackathon, where our team successfully designed and developed a functional software prototype within the competition timeframe, demonstrating rapid problem-solving, teamwork, and full-stack development skills.",
    tags: ["Rapid Prototyping", "Team Collaboration"],
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </h2>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className="
                  bg-[#111111]
                  border
                  border-[#262626]
                  rounded-3xl
                  p-8
                  hover:border-[#555]
                  hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#181818]
                    border
                    border-[#2b2b2b]
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                    mb-6
                  "
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3
                  className="text-white text-4xl mb-5"
                  style={{
                    fontFamily: "Cormorant Garamond",
                  }}
                >
                  {achievement.title}
                </h3>

                {/* Description */}

                <p
                  className="text-gray-400 leading-9 mb-8"
                  style={{
                    fontFamily: "Libre Baskerville",
                  }}
                >
                  {achievement.description}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-3">
                  {achievement.tags.map((tag) => (
                    <div
                      key={tag}
                      className="
                        px-4
                        py-3
                        rounded-xl
                        bg-[#181818]
                        border
                        border-[#2b2b2b]
                        text-gray-300
                        hover:border-white
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        style={{
                          fontFamily: "Libre Baskerville",
                        }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
