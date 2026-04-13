import { useState, useEffect } from "react";
import { ExternalLink, Bug, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type ProjectType = "all" | "qa";

interface Project {
  title: string;
  description: string;
  type: string;
  image?: string;
  carouselImages?: string[];
  tags: string[];
  live?: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "IT Support & System Deployment (OJT Experience)",
    description:
      "Performed operating system installation and configuration on workstations, assembled desktop computers, and conducted hardware testing. Assisted in network cabling and device connectivity, ensuring stable connections and proper cable management. Also supported workstation setup and deployment for end-users.",
    type: "IT Support",
    carouselImages: [
      "/assets/ojt-1.jpg",
      "/assets/ojt-2.jpg",
      "/assets/ojt-3.jpg",
    ],
    tags: ["OS Installation", "PC Assembly", "Network Cabling", "Troubleshooting", "Workstation Setup"],
    highlights: [
      "Operating system installation & configuration",
      "Desktop computer assembly",
      "Hardware testing & verification",
      "Network cabling & device connectivity",
    ],
  },
  {
    title: "Kiosk System Maintenance and Technical Support (OJT Experience)",
    description:
      "Performed on-site troubleshooting, cleaning, and preventive maintenance of kiosk machines. Diagnosed hardware issues, inspected internal components, and conducted basic repairs to ensure stable system performance. Monitored units after maintenance to maintain reliability and functionality.",
    type: "IT Support",
    carouselImages: ["/assets/ojt-4.jpg", "/assets/ojt-5.jpg"],
    tags: [
      "Troubleshooting",
      "Hardware Diagnostics",
      "Preventive Maintenance",
      "Technical Support",
      "Basic Repair",
      "Monitoring",
    ],
    highlights: [
      "On-site kiosk troubleshooting & cleaning",
      "Hardware inspection & diagnostics",
      "Preventive maintenance and monitoring",
      "Basic repairs to ensure system reliability",
    ],
  },
];

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<Record<string, number>>({});

  const animationStyle = `
    @keyframes projectFadeIn {
      from { opacity: 0; transform: scale(1.01); }
      to { opacity: 1; transform: scale(1); }
    }
    .project-fade-in {
      animation: projectFadeIn 420ms ease-out;
    }
  `;

  // Auto-carousel effect for any project with carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => {
        const next: Record<string, number> = { ...prev };
        for (const project of projects) {
          const images = project.carouselImages;
          if (!images || images.length <= 1) continue;
          const current = prev[project.title] || 0;
          next[project.title] = (current + 1) % images.length;
        }
        return next;
      });
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getCarouselIndex = (projectTitle: string) => carouselIndex[projectTitle] || 0;

  return (
    <section id="experience" className="py-24" style={{ background: "#0a0e1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <style>{animationStyle}</style>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-[#64ffda]"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "1rem" }}
          >
            03.
          </span>
          <h2
            className="text-[#ccd6f6]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.75rem", fontWeight: 700 }}
          >
            Experience
          </h2>
          <div className="flex-1 h-px bg-[#1e2a45] max-w-xs" />
        </div>

        <p
          className="text-[#8892b0] mb-12"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
        >
          Here are some of my QA & IT Support experiences.
        </p>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden border border-[#1e2a45] hover:border-[#64ffda]/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ background: "#0f1629" }}
              onClick={() =>
                setExpanded(expanded === project.title ? null : project.title)
              }
            >
              {/* Project Image / Carousel */}
              <div className="relative h-44 overflow-hidden">
                {project.carouselImages ? (
                  <>
                    <ImageWithFallback
                      key={`${project.title}-${getCarouselIndex(project.title)}`}
                      src={project.carouselImages[getCarouselIndex(project.title)]}
                      alt={project.title}
                      className="project-fade-in w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: "brightness(0.75)" }}
                    />
                    {/* Carousel Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {project.carouselImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all ${
                            idx === getCarouselIndex(project.title)
                              ? "bg-[#64ffda] w-6"
                              : "bg-[#64ffda]/40 w-2"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <ImageWithFallback
                    src={project.image!}
                    alt={project.title}
                    className="project-fade-in w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: "brightness(0.75)" }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629] via-transparent to-transparent" />

                {/* Type badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className="px-2 py-1 rounded text-xs flex items-center gap-1 bg-[#64ffda]/20 text-[#64ffda] border border-[#64ffda]/30"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    <Bug size={10} />
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600 }}
                  >
                    {project.title}
                  </h3>
                  {project.live && (
                    <div className="flex gap-2 ml-2 flex-shrink-0">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>

                <p
                  className="text-[#8892b0] mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    display: "-webkit-box",
                    WebkitLineClamp: expanded === project.title ? "unset" : 3,
                    WebkitBoxOrient: "vertical",
                    overflow: expanded === project.title ? "visible" : "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights (expanded) */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: expanded === project.title ? 140 : 0,
                    opacity: expanded === project.title ? 1 : 0,
                    marginBottom: expanded === project.title ? 16 : 0,
                  }}
                >
                  <ul className="space-y-1 pt-1">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[#8892b0]"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                      >
                        <span className="text-[#64ffda] mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-[#8892b0]"
                        style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem" }}
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}