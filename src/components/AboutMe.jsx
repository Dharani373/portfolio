import { FaDownload } from "react-icons/fa";

function Intro() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        px-5
        sm:px-8
        lg:px-16
        xl:px-20
        py-16
        lg:py-24
        flex
        items-center
      "
    >
      <div className="max-w-4xl">
        {/* Hi, I'm */}
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-gray-500
            text-base
            sm:text-lg
          "
          style={{
            fontFamily: "Libre Baskerville",
          }}
        >
          Hi, I'm
        </p>

        {/* Name */}
        <h1
          className="
            text-white
            text-[72px]
            sm:text-[90px]
            lg:text-[110px]
            xl:text-[120px]
            leading-none
            mt-2
          "
          style={{
            fontFamily: "Allura",
          }}
        >
          Dharani
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-400
            text-base
            sm:text-lg
            lg:text-xl
            leading-8
            lg:leading-10
            max-w-3xl
            mt-8
          "
          style={{
            fontFamily: "Libre Baskerville",
          }}
        >
          I'm a third-year Computer Science undergraduate passionate about
          designing intuitive web applications and solving real-world problems
          through technology. With experience in full-stack development,
          AI-powered applications, and data structures & algorithms, I enjoy
          building software that is both functional and impactful. I'm currently
          looking for Software Engineering Internship opportunities where I can
          learn, contribute, and create meaningful solutions.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-wrap
            gap-4
            sm:gap-5
            mt-10
            lg:mt-12
          "
        >
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              sm:px-8
              py-3.5
              sm:py-4
              rounded-xl
              border
              border-[#2b2b2b]
              bg-[#111111]
              text-white
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
              text-sm
              sm:text-base
            "
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            <FaDownload size={15} />

            <span>Download Resume</span>
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="
              inline-flex
              items-center
              justify-center
              px-6
              sm:px-8
              py-3.5
              sm:py-4
              rounded-xl
              border
              border-[#2b2b2b]
              bg-[#111111]
              text-white
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
              text-sm
              sm:text-base
            "
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
