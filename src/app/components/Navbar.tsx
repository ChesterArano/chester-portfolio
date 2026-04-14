import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#1e2a45]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center overflow-hidden rounded-full transition-transform duration-200 hover:scale-105"
          aria-label="Home"
        >
          <img
            src="/assets/logo.jpg"
            alt="Chester Portfolio Logo"
            className="h-10 w-10 object-cover"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm transition-colors duration-200 hover:text-[#64ffda] ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#64ffda]"
                  : "text-[#8892b0]"
              }`}
            >
              <span
                className="text-[#64ffda] mr-1"
                style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem" }}
              >
                0{i + 1}.
              </span>
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded text-sm hover:bg-[#64ffda]/10 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1629] border-t border-[#1e2a45] px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            >
              <span
                className="text-[#64ffda] mr-2"
                style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem" }}
              >
                0{i + 1}.
              </span>
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="text-center px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded text-sm hover:bg-[#64ffda]/10 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}