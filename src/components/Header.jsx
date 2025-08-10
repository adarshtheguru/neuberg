import { useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // default active

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = document.querySelectorAll("section[id]");
      let current = "home"; // fallback to home if no match
      const scrollY = window.scrollY + 150; // offset for header height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Why Neuberg", target: "why-neuberg" },
    { label: "Services", target: "services" },
    { label: "Benefits", target: "benefits" },
    { label: "Testimonials", target: "testimonials" },
    { label: "Accreditations", target: "accreditations" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-[99] transition-all duration-300 py-4 ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img className="logo" src={assetUrl("images/logo.png")} alt="Logo" />
        <nav className="space-x-4 customNav">
          {navItems.map((item) => (
            <a
              key={item.target}
              href="#"
              data-target={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className={`cursor-pointer ${
                activeSection === item.target ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}