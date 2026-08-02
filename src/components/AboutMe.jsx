import { FaDownload } from "react-icons/fa";

function Intro() {
  return (
    <section id="home" className="min-h-screen px-20 py-24">
      <div className="max-w-3xl">
        <p
          className="
          uppercase
          tracking-[0.35em]
          text-gray-500
          text-lg
          "
          style={{
            fontFamily: "Libre Baskerville",
          }}
        >
          Hi, I'm
        </p>

        <h1
          className="
          text-white
          text-[120px]
          leading-none
          mt-2
          "
          style={{
            fontFamily: "Allura",
          }}
        >
          Dharani
        </h1>

        <p
          className="
          text-gray-400
          text-xl
          leading-10
          max-w-2xl
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

        <div className="flex gap-5 mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            <FaDownload size={15} />
            <span>Download Resume</span>
          </a>

          <a
            href="#projects"
            className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-xl
            border
            border-[#2b2b2b]
            bg-[#111111]
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
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
