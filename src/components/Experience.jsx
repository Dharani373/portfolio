import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from "react-icons/fa";

import infosysLogo from "../assets/islogo.png";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Django",
  "OpenAI API",
  "SQLite",
];

const contributions = [
  "Designed and developed an Intelligent Quiz Management System with Auto-Generated Questions.",
  "Integrated the OpenAI API to generate customized quizzes based on topic, difficulty level, and number of questions.",
  "Implemented secure authentication, role-based access control, quiz history, daily streak tracking, and leaderboard functionality.",
];

function Experience() {
  return (
    <section id="experience" className="min-h-screen ml-[360px] px-20 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <h2
          className="text-white text-8xl mb-16"
          style={{ fontFamily: "Allura" }}
        >
          Experience
        </h2>

        {/* Card */}

        <div
          className="
            bg-[#111111]
            border
            border-[#262626]
            rounded-[32px]
            p-10
            hover:border-[#555]
            hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]
            transition-all
            duration-500
          "
        >
          {/* Header */}

          <div className="flex items-start gap-6">
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-white
                border
                border-[#2b2b2b]
                flex
                items-center
                justify-center
                overflow-hidden
                shadow-sm
                "
            >
              <img
                src={infosysLogo}
                alt="Infosys Springboard"
                className="w-12 h-12 object-contain"
              />
            </div>

            <div>
              <h3
                className="text-white text-4xl"
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                Virtual Intern – Quiz Management System
              </h3>

              <p
                className="text-gray-300 text-xl mt-3"
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                Infosys Springboard
              </p>
              <p
                className="text-gray-500 mt-1"
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                September 2025 – November 2025
              </p>
            </div>
          </div>

          {/* Description */}

          <p
            className="text-lg leading-10 mt-10 max-w-4xl"
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            Successfully completed the
            <strong> Infosys Springboard Virtual Internship</strong>, where I
            designed and developed an
            <strong>
              {" "}
              Intelligent Quiz Management System with Auto-Generated Questions
            </strong>
            . The internship focused on building an AI-powered Django web
            application by integrating the OpenAI API for intelligent quiz
            generation while implementing secure authentication, automated
            evaluation, and performance analytics.
          </p>

          {/* QuizForge */}

          <div
            className="
              mt-12
              bg-[#181818]
              border
              border-[#2b2b2b]
              rounded-2xl
              p-7
            "
          >
            <h4
              className="text-white text-3xl mb-5"
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Featured Project — QuizForge AI
            </h4>

            <p
              className="text-gray-400 leading-9"
              style={{
                fontFamily: "Libre Baskerville",
              }}
            >
              QuizForge AI is an AI-powered quiz generation platform built using
              Django and the OpenAI API. Users can generate customized quizzes
              by selecting a topic, difficulty level, and number of questions.
              The platform features secure authentication, personalized
              dashboards, quiz history, leaderboard rankings, daily streak
              tracking, and automated evaluation with detailed answer
              explanations.
            </p>
          </div>

          {/* Contributions */}

          <div className="mt-12">
            <h4
              className="text-white text-3xl mb-6"
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Key Contributions
            </h4>

            <div className="space-y-5">
              {contributions.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <FaCheckCircle className="text-white mt-1 flex-shrink-0" />

                  <p
                    className="text-gray-400 leading-8"
                    style={{
                      fontFamily: "Libre Baskerville",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3 mt-12">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="
                  px-4
                  py-3
                  rounded-xl
                  bg-[#181818]
                  border
                  border-[#2b2b2b]
                  text-gray-300
                  hover:border-white
                  hover:bg-[#202020]
                  transition-all
                  duration-300
                "
              >
                <span
                  style={{
                    fontFamily: "Libre Baskerville",
                  }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="/certificates/Infosys Springboard Internship.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-xl
                border
                border-[#2b2b2b]
                bg-[#111111]
                text-gray-200
                hover:bg-white
                hover:text-black
                hover:-translate-y-1
                transition-all
                duration-300
              "
              style={{
                fontFamily: "Libre Baskerville",
              }}
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>

            <a
              href="https://github.com/Dharani373/QuizForge-AI"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-xl
                border
                border-[#2b2b2b]
                bg-[#111111]
                text-gray-200
                hover:bg-white
                hover:text-black
                hover:-translate-y-1
                transition-all
                duration-300
              "
              style={{
                fontFamily: "Libre Baskerville",
              }}
            >
              <FaGithub />
              View Project
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
