import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen ml-[360px] px-20 py-24 pb-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}

        <h2
          className="text-white text-8xl mb-16"
          style={{
            fontFamily: "Allura",
          }}
        >
          Contact
        </h2>

        {/* Contact Card */}

        <div
          className="
            bg-[#111111]
            border
            border-[#262626]
            rounded-[32px]
            p-12
            hover:border-[#555]
            hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]
            transition-all
            duration-500
          "
        >
          {/* Title */}

          <h3
            className="text-white text-5xl"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            Let's Connect
          </h3>

          {/* Description */}

          <p
            className="text-gray-400 text-lg leading-10 mt-8 max-w-3xl"
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            I'm actively seeking Software Engineering Internship opportunities
            where I can contribute, learn, and grow as a developer. Feel free to
            reach out if you'd like to collaborate on projects, discuss
            technology, or explore potential opportunities.
          </p>

          {/* Contact Information */}

          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-5">
              <FaEnvelope className="text-white text-[26px]" />

              <a
                href="mailto:krdharani777@gmail.com"
                className="text-lg text-gray-200 hover:text-white transition"
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                krdharani777@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-5">
              <FaPhoneAlt className="text-white text-[26px]" />

              <a
                href="tel:+919121431681"
                className="text-lg text-gray-200 hover:text-white transition"
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                +91 91214 31681
              </a>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-white text-[26px]" />

              <span
                className="text-lg text-gray-300"
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                Hyderabad, Telangana, India
              </span>
            </div>
          </div>

          {/* Social Links */}

          <div className="flex flex-wrap gap-5 mt-14">
            <a
              href="https://github.com/Dharani373"
              target="_blank"
              rel="noreferrer"
              className="
                w-[190px]
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-xl
                border
                border-[#2b2b2b]
                bg-[#181818]
                hover:border-white
                hover:bg-[#202020]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub size={22} />

              <span
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/dharanikr/"
              target="_blank"
              rel="noreferrer"
              className="
                w-[190px]
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-xl
                border
                border-[#2b2b2b]
                bg-[#181818]
                hover:border-white
                hover:bg-[#202020]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={22} />

              <span
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                LinkedIn
              </span>
            </a>

            <a
              href="https://leetcode.com/krdharani_777/"
              target="_blank"
              rel="noreferrer"
              className="
                w-[190px]
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-xl
                border
                border-[#2b2b2b]
                bg-[#181818]
                hover:border-white
                hover:bg-[#202020]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <SiLeetcode size={22} />

              <span
                style={{
                  fontFamily: "Libre Baskerville",
                }}
              >
                LeetCode
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
