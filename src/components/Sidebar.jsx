import {
  FaUserGraduate,
  FaCode,
  FaFolderOpen,
  FaTrophy,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";
import { useEffect, useState } from "react";

import profile from "../assets/profile.jpeg";

const navItems = [
  {
    title: "About Me",
    icon: FaUserGraduate,
    href: "#home",
  },
  {
    title: "Skills",
    icon: FaCode,
    href: "#skills",
  },
  {
    title: "Projects",
    icon: FaFolderOpen,
    href: "#projects",
  },
  {
    title: "Achievements",
    icon: FaTrophy,
    href: "#achievements",
  },
  {
    title: "Experience",
    icon: FaBriefcase,
    href: "#experience",
  },
  {
    title: "Contact",
    icon: FaEnvelope,
    href: "#contact",
  },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ============================================
  // DETECT ACTIVE SECTION WHILE SCROLLING
  // ============================================
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ============================================
  // CLOSE MENU WHEN ESCAPE KEY IS PRESSED
  // ============================================
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ============================================
  // PREVENT BACKGROUND SCROLL WHEN MENU IS OPEN
  // ============================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ============================================
  // HANDLE NAVIGATION CLICK
  // ============================================
  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);

    // Close mobile menu
    setIsMenuOpen(false);

    // Smooth scroll
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          MOBILE MENU BUTTON
          Visible only below lg (1024px)
      ===================================================== */}

      <button
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open navigation menu"
        className="
          lg:hidden
          fixed
          left-5
          top-5
          z-50
          w-12
          h-12
          flex
          items-center
          justify-center
          rounded-xl
          bg-[#111111]
          border
          border-[#242424]
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#1a1a1a]
          hover:scale-105
        "
      >
        <FaBars size={21} />
      </button>

      {/* =====================================================
          MOBILE DARK OVERLAY
          Appears when sidebar is open
      ===================================================== */}

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="
            lg:hidden
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-[2px]
          "
        />
      )}

      {/* =====================================================
          SIDEBAR
          
          Desktop:
          - Always visible
          - Left: 24px
          - Top: 24px
          - Bottom: 24px
          
          Mobile:
          - Hidden by default
          - Slides from left when opened
      ===================================================== */}

      <aside
        className={`
          fixed
          z-50
          bg-[#111111]
          border
          border-[#242424]
          shadow-2xl

          /* Mobile */
          left-0
          top-0
          bottom-0
          w-[290px]
          rounded-r-[32px]
          px-8
          py-10

          flex
          flex-col
          justify-between

          transition-transform
          duration-300
          ease-in-out

          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}

          /* Desktop */
          lg:left-6
          lg:top-6
          lg:bottom-6
          lg:w-[290px]
          lg:rounded-[32px]
          lg:px-8
          lg:py-10
          lg:translate-x-0
        `}
      >
        {/* =================================================
            MOBILE CLOSE BUTTON
        ================================================= */}

        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
          className="
            lg:hidden
            absolute
            top-5
            right-5
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-lg
            text-gray-400
            hover:text-white
            hover:bg-[#1a1a1a]
            transition-all
            duration-300
          "
        >
          <FaXmark size={21} />
        </button>

        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div>
          {/* =================================================
              PROFILE
          ================================================= */}

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

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav>
            <ul className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;

                const sectionId = item.href.substring(1);

                const isActive = activeSection === sectionId;

                return (
                  <li key={item.title}>
                    <button
                      onClick={() => handleNavigation(sectionId)}
                      className={`
                        w-full
                        flex
                        items-center
                        gap-5
                        px-5
                        py-3.5
                        rounded-xl
                        transition-all
                        duration-300
                        text-left

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
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
