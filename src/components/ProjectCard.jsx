import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, technologies, github, image }) {
  return (
    <div
      className="
        flex
        lg:flex-row
        flex-col
        items-start
        gap-10
        bg-[#101010]
        border
        border-[#262626]
        rounded-[32px]
        p-8
        hover:border-[#4d4d4d]
        hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]
        transition-all
        duration-500
        "
    >
      {/* ================= IMAGE ================= */}

      <div className="lg:w-[55%] w-full self-start">
        <div className="overflow-hidden rounded-3xl border border-[#2b2b2b]">
          <img
            src={image}
            alt={title}
            className="
              w-full
              object-cover
              rounded-3xl
              transition-all
              duration-700
              hover:scale-[1.03]
            "
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="lg:w-[45%] w-full">
        {/* Title */}

        <h3
          className="text-white text-5xl mb-6"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="text-gray-400 text-lg leading-10 max-w-md mb-10"
          style={{
            fontFamily: "Libre Baskerville",
          }}
        >
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-4 mb-10">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="
                flex
                items-center
                justify-center
                gap-2
                px-3
                py-2.5
                whitespace-nowrap
                rounded-xl
                bg-[#181818]
                border
                border-[#2b2b2b]
                hover:border-white
                hover:bg-[#202020]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <i
                className={`${tech.icon} text-xl`}
                style={{
                  filter: "grayscale(100%) brightness(180%)",
                }}
              />

              <span
                className="text-gray-300 text-[14px]"
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* GitHub Button */}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            px-7
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
          <FaGithub size={22} />

          <span>
            View Repository
            <span className="ml-2">→</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
