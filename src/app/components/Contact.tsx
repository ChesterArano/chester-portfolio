import { Mail, Phone } from "lucide-react";

// Facebook SVG icon (no lucide-react equivalent)
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// LinkedIn SVG icon (no lucide-react equivalent)
function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-2 4H7v14h10V7zm-8 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9zm4 6a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm0 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24" style={{ background: "#0a0e1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-[#64ffda]"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "1rem" }}
          >
            04.
          </span>
          <h2
            className="text-[#ccd6f6]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.75rem", fontWeight: 700 }}
          >
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-[#1e2a45] max-w-xs" />
        </div>

        <div className="mt-10">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-[#8892b0] text-justify"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.85 }}
            >
              Looking for a detail-oriented <span className="text-[#ccd6f6]">Software Tester</span> or a reliable{" "}
              <span className="text-[#ccd6f6]">IT Support Specialist</span>? I help teams ship stable, user-friendly
              releases by executing thorough manual testing, writing clear test cases, and reporting defects with
              actionable steps and evidence. On the IT side, I troubleshoot workstations, assist end-users, and support
              system setup and maintenance to keep day-to-day operations running smoothly. If you'd like to discuss an
              opportunity, feel free to reach out through the channels below. I typically respond within 24–48 hours.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Mail size={22} />,
                  label: "Email",
                  value: "chesterjeff.arano@gmail.com",
                  href: "mailto:chesterjeff.arano@gmail.com",
                  sub: "Send me a message",
                  cta: "Send Email",
                },
                {
                  icon: <Phone size={22} />,
                  label: "Phone",
                  value: "+63 912 345 6789",
                  href: "tel:+639123456789",
                  sub: "Call or message me",
                  cta: "Call / Text",
                },
              ].map(({ icon, label, value, href, sub, cta }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl border border-[#1e2a45] hover:border-[#64ffda]/40 transition-colors duration-200"
                  style={{ background: "#0f1629" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p
                        className="text-[#8892b0] text-xs"
                        style={{ fontFamily: "'Fira Code', monospace" }}
                      >
                        {label}
                      </p>
                      <a
                        href={href}
                        className="block mt-2 text-[#ccd6f6] hover:text-[#64ffda] transition-colors break-words"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 700 }}
                      >
                        {value}
                      </a>
                      <p
                        className="text-[#8892b0] mt-1"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                      >
                        {sub}
                      </p>
                    </div>

                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-[#64ffda] flex-shrink-0"
                      style={{ background: "rgba(100, 255, 218, 0.1)" }}
                    >
                      {icon}
                    </div>
                  </div>

                  <a
                    href={href}
                    className="mt-5 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl border border-[#1e2a45] text-[#ccd6f6] hover:text-[#64ffda] hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 700 }}
                  >
                    {cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#1e2a45]" style={{ background: "#0f1629" }}>
              <div className="p-6">
                <p className="text-[#8892b0] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  You can also find me on
                </p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Facebook",
                      name: "Chester Jeff Araño",
                      href: "https://www.facebook.com/share/1CmLozFDKE/",
                      icon: <FacebookIcon size={20} />,
                    },
                    {
                      label: "LinkedIn",
                      name: "Chester Jeff Araño",
                      href: "https://www.linkedin.com/in/chester-jeff-ara%C3%B1o-228742330",
                      icon: <LinkedInIcon size={20} />,
                    },
                  ].map(({ label, name, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#1e2a45] hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5 transition-all duration-200 group"
                      style={{ background: "#0a0e1a" }}
                    >
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors flex-shrink-0">
                        {icon}
                      </span>
                      <div className="min-w-0">
                        <p
                          className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-[#ccd6f6] truncate"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 700 }}
                        >
                          {name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="mt-6 p-5 rounded-2xl border border-[#64ffda]/20"
              style={{ background: "rgba(100, 255, 218, 0.05)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#64ffda] animate-pulse mt-2 flex-shrink-0" />
                <div>
                  <p
                    className="text-[#64ffda]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 700 }}
                  >
                    Available for new opportunities
                  </p>
                  <p
                    className="text-[#8892b0] mt-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                  >
                    Open to Software Testing roles and IT Support positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}