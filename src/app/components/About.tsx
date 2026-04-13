import { CheckCircle } from "lucide-react";
const cjPhoto = "/assets/1x1_cj.png";

const highlights = [
  "Manual Testing",
  "IT Troubleshooting & Support",
  "Bug Tracking & Reporting",
  "System Maintenance",
  "Network Configuration",
];

export function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#0a0e1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-[#64ffda]"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "1rem" }}
          >
            01.
          </span>
          <h2
            className="text-[#ccd6f6]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.75rem", fontWeight: 700 }}
          >
            About Me
          </h2>
          <div className="flex-1 h-px bg-[#1e2a45] max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="space-y-5 text-[#8892b0] mb-8" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              <p>
                Hello! I'm <span className="text-[#64ffda]">Chester Jeff A. Araño</span>, a dedicated{" "}
                <span className="text-[#64ffda]">Software Tester</span> and{" "}
                <span className="text-[#64ffda]">IT Support Specialist</span> with a
                passion for ensuring software quality and delivering reliable technical
                solutions. My primary focus is on breaking systems so users don't have
                to — and fixing them when they do.
              </p>
              <p>
                I have hands-on experience in manual testing, bug
                tracking, system troubleshooting, and network maintenance. I take pride
                in writing detailed test plans, executing comprehensive test cases, and
                producing clear defect reports that help development teams ship
                high-quality software.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#64ffda] flex-shrink-0" />
                  <span
                    className="text-[#8892b0] text-sm"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Border accent */}
              <div className="absolute -inset-0 border-2 border-[#64ffda] rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="relative w-72 h-72 rounded-lg overflow-hidden bg-[#0f1629]">
                <img
                  src={cjPhoto}
                  alt="Chester Jeff A. Araño"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle teal overlay */}
                <div className="absolute inset-0 bg-[#64ffda]/5 mix-blend-color" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}