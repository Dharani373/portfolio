import {
  FaUserGraduate,
  FaCode,
  FaFolderOpen,
  FaTrophy,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useEffect, useState } from "react";

import profile from "../assets/profile.jpeg";

const navItems = [
  { title: "About Me", icon: FaUserGraduate, href: "#home" },
  { title: "Skills", icon: FaCode, href: "#skills" },
  { title: "Projects", icon: FaFolderOpen, href: "#projects" },
  { title: "Achievements", icon: FaTrophy, href: "#achievements" },
  { title: "Experience", icon: FaBriefcase, href: "#experience" },
  { title: "Contact", icon: FaEnvelope, href: "#contact" },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className="
        fixed
        left-6
        top-6
        bottom-6
        w-[290px]
        z-20
        bg-[#111111]
        border
        border-[#242424]
        rounded-[32px]
        px-8
        py-10
        flex
        flex-col
        justify-between
        shadow-2xl
      "
    >
      {/* ================= TOP ================= */}

      <div>
        {/* Profile */}

        <div className="flex flex-col items-center">
          <div className="p-[5px] rounded-full border border-[#303030]">
            <img
              src={profile}
              alt="Dharani"
              className="
                w-40
                h-40
                rounded-full
                object-cover
                transition-all
                duration-500
                hover:scale-105
              "
            />
          </div>

          <div className="w-28 h-px bg-[#2b2b2b] my-10"></div>
        </div>

        {/* Navigation */}

        <nav>
          <ul className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(item.href.substring(1))}
                    className={`
                      flex
                      items-center
                      gap-5
                      px-5
                      py-3.5
                      rounded-xl
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "border border-white border-l-[6px] bg-[#111111] text-white"
                          : "border border-transparent text-gray-400 hover:bg-[#1a1a1a] hover:text-white hover:translate-x-2"
                      }
                    `}
                  >
                    <Icon size={20} />

                    <span
                      className="text-[17px] tracking-wide"
                      style={{
                        fontFamily: "Libre Baskerville",
                      }}
                    >
                      {item.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
