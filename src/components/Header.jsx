import { useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const HEADER_OFFSET = 100; // adjust this to match header height

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      const scrollY = window.scrollY + HEADER_OFFSET + 50;

      // Check if scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        current = sections[sections.length - 1].id; // last section
      } else {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.id;
          }
        });
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offsetPosition = target.offsetTop - HEADER_OFFSET;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Why Neuberg", target: "why-neuberg" },
    { label: "Services", target: "services" },
    { label: "Benefits", target: "benefits" },
    { label: "Testimonials", target: "testimonials" },
    { label: "Location", target: "location" },
    { label: "Accreditations", target: "accreditations" },
    { label: "FAQs", target: "faq" },
  ];

  return (
    <header
      className={`fixed w-full z-[99] transition-all duration-300 py-4 ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img className="logo" src={assetUrl("images/logo.png")} alt="Logo" />
        <div className="flex gap-6 items-center">
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
          <a href="tel:+911212341212" className="themeBtn flex gap-2 items-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5193 18.3379C15.436 18.3379 13.3777 17.8837 11.3443 16.9754C9.311 16.0671 7.461 14.7796 5.79434 13.1129C4.12767 11.4462 2.84017 9.59622 1.93184 7.56289C1.0235 5.52956 0.569336 3.47122 0.569336 1.38789C0.569336 1.08789 0.669336 0.837891 0.869336 0.637891C1.06934 0.437891 1.31934 0.337891 1.61934 0.337891H5.66934C5.90267 0.337891 6.111 0.417057 6.29434 0.575391C6.47767 0.733724 6.586 0.921224 6.61934 1.13789L7.26934 4.63789C7.30267 4.90456 7.29434 5.12956 7.24434 5.31289C7.19434 5.49622 7.10267 5.65456 6.96934 5.78789L4.54434 8.23789C4.87767 8.85456 5.2735 9.45039 5.73184 10.0254C6.19017 10.6004 6.69434 11.1546 7.24434 11.6879C7.761 12.2046 8.30267 12.6837 8.86934 13.1254C9.436 13.5671 10.036 13.9712 10.6693 14.3379L13.0193 11.9879C13.1693 11.8379 13.3652 11.7254 13.6068 11.6504C13.8485 11.5754 14.086 11.5546 14.3193 11.5879L17.7693 12.2879C18.0027 12.3546 18.1943 12.4754 18.3443 12.6504C18.4943 12.8254 18.5693 13.0212 18.5693 13.2379V17.2879C18.5693 17.5879 18.4693 17.8379 18.2693 18.0379C18.0693 18.2379 17.8193 18.3379 17.5193 18.3379ZM3.59434 6.33789L5.24434 4.68789L4.81934 2.33789H2.59434C2.67767 3.02122 2.79434 3.69622 2.94434 4.36289C3.09434 5.02956 3.311 5.68789 3.59434 6.33789ZM12.5443 15.2879C13.1943 15.5712 13.8568 15.7962 14.5318 15.9629C15.2068 16.1296 15.886 16.2379 16.5693 16.2879V14.0879L14.2193 13.6129L12.5443 15.2879Z" fill="white"/>
            </svg>
            <p>+91 12 1234 1212</p>
          </a>
        </div>
      </div>
    </header>
  );
}