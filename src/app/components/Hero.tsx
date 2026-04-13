import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";

const roles = [
  "Software Tester",
  "IT Support Specialist",
  
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1424 50%, #0a1628 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0080ff]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p
            className="text-[#64ffda] mb-4"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "1rem" }}
          >
            Hi, my name is
          </p>

          {/* Name */}
          <h1
            className="text-[#e6f1ff] mb-2"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 700, lineHeight: 1.1, fontFamily: "'Inter', sans-serif" }}
          >
            Chester Jeff Araño.
          </h1>

          {/* Role with typewriter */}
          <h2
            className="text-[#8892b0] mb-6"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, fontFamily: "'Inter', sans-serif" }}
          >
            I'm a{" "}
            <span className="text-[#64ffda]">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-[#8892b0] mb-10 max-w-2xl"
            style={{ fontSize: "1.05rem", lineHeight: 1.8, fontFamily: "'Inter', sans-serif" }}
          >
            I specialize in{" "}
            <span className="text-[#ccd6f6]">Quality Assurance</span> and{" "}
            <span className="text-[#ccd6f6]">IT Support</span>, ensuring
            software systems are reliable, well-tested, and running smoothly. With expertise in manual testing, bug tracking, and technical troubleshooting, I deliver quality solutions that keep systems and users satisfied.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("projects")}
              className="px-7 py-3 bg-transparent border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all duration-200 text-sm"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3 bg-[#64ffda] text-[#0a0e1a] rounded hover:bg-[#64ffda]/90 transition-all duration-200 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <div className="h-px bg-[#1e2a45] flex-1 max-w-16" />
            <div className="flex gap-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1CmLozFDKE/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 hover:-translate-y-1 transform"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chester-jeff-ara%C3%B1o-228742330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 hover:-translate-y-1 transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:chesterjeff.arano@gmail.com"
                aria-label="Email"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 hover:-translate-y-1 transform"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                aria-label="Resume"
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 hover:-translate-y-1 transform"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8892b0] animate-bounce">
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem" }}>scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}