import { Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-8 border-t border-[#1e2a45]"
      style={{ background: "#0a0e1a" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span
            className="text-[#8892b0]"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.9rem" }}
          >
          
          </span>

          {/* Copyright */}
          <p
            className="text-[#8892b0] flex items-center gap-1.5 text-center"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem" }}
          >
            Designed & Built with
            <Heart size={12} className="text-[#64ffda] fill-[#64ffda]" />
            by Chester Jeff A. Araño · {new Date().getFullYear()}
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1CmLozFDKE/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chester-jeff-ara%C3%B1o-228742330"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:chesterjeff.arano@gmail.com"
              aria-label="Email"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}