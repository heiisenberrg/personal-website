import React, { useState, useEffect } from "react";
import "./index.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scrolling to update the active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming sections are <section> tags
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId) {
        setActiveLink(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle clicking on menu items
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveLink(targetId);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
    setMenuOpen(false); // Close the menu if it’s open (mobile menu)
  };

  // Handle toggle for mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when resizing above 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 801px)").matches && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className={menuOpen ? "menu-is-open s-header" : "s-header"}>
        {/* Mobile Header */}
        <div className="header-mobile">
          <span className="mobile-home-link">
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>Ajaykkumar Rajendran.</a>
          </span>
          <a
            className={`mobile-menu-toggle ${menuOpen ? "is-clicked" : ""}`}
            onClick={toggleMenu}
          >
            <span>Menu</span>
          </a>
        </div>

        {/* Main Navigation */}
        <div className={`row wide main-nav-wrap`}>
          <nav className="column lg-12 main-nav">
            <ul>
              <li>
                <a
                  href="#home"
                  className={`home-link ${activeLink === "home" ? "current" : ""}`}
                  onClick={(e) => handleScroll(e, "home")}
                >
                  Ajaykkumar.
                </a>
              </li>
              <li className={activeLink === "intro" ? "current" : ""}>
                <a href="#intro" onClick={(e) => handleScroll(e, "intro")}>Intro</a>
              </li>
              <li className={activeLink === "about" ? "current" : ""}>
                <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
              </li>
              <li className={activeLink === "works" ? "current" : ""}>
                <a href="#works" onClick={(e) => handleScroll(e, "works")}>Works</a>
              </li>
              <li className={activeLink === "contact" ? "current" : ""}>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Say Hello</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
