import { useState } from "react";
import {
  Bug,
  Monitor,
  Network,
  FileText,
  Wrench,
  Code2,
  Globe,
  Server,
  BarChart2,
} from "lucide-react";

type Category = "qa" | "itsupport";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const categories: { id: Category; label: string; description: string }[] = [
  {
    id: "qa",
    label: "Quality Assurance",
    description: "Testing methodologies, bug tracking, and quality processes",
  },
  {
    id: "itsupport",
    label: "IT Support",
    description: "Helpdesk, troubleshooting, infrastructure, and systems",
  },
];

const skills: Record<Category, Skill[]> = {
  qa: [
    { name: "Manual Testing", level: 90, icon: <Bug size={16} /> },
    { name: "Test Case Design", level: 88, icon: <FileText size={16} /> },
    { name: "Bug Tracking (Jira/Trello)", level: 85, icon: <BarChart2 size={16} /> },
    { name: "Test Documentation", level: 88, icon: <FileText size={16} /> },
    { name: "UAT (User Acceptance Testing)", level: 80, icon: <Monitor size={16} /> },
    { name: "Performance Testing", level: 70, icon: <BarChart2 size={16} /> },
  ],
  itsupport: [
    { name: "Helpdesk & Troubleshooting", level: 92, icon: <Wrench size={16} /> },
    { name: "Network Configuration", level: 80, icon: <Network size={16} /> },
    { name: "System Maintenance", level: 85, icon: <Monitor size={16} /> },
    { name: "Hardware Setup & Repair", level: 82, icon: <Wrench size={16} /> },
    { name: "Remote Desktop Support", level: 88, icon: <Monitor size={16} /> },
    { name: "IT Documentation", level: 85, icon: <FileText size={16} /> },
  ],
};

const techStack = [
  { name: "JavaScript", color: "#f7df1e" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#ffffff" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "Jira", color: "#0052cc" },
  { name: "Git", color: "#f05032" },
];

// Add animation keyframes
const animationStyle = `
  @keyframes fillBar {
    from {
      width: 0%;
    }
    to {
      width: var(--skill-level);
    }
  }
  
  .skill-bar-animated {
    animation: fillBar 1.2s ease-out forwards;
  }
`;

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="mb-5">
      <style>{animationStyle}</style>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-[#ccd6f6]">
          <span className="text-[#64ffda]">{skill.icon}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>{skill.name}</span>
        </div>
        <span
          className="text-[#64ffda]"
          style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.8rem" }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#1e2a45] rounded-full overflow-hidden">
        <div
          className="skill-bar-animated h-full rounded-full"
          style={{
            "--skill-level": `${skill.level}%`,
            background: "linear-gradient(90deg, #64ffda, #00b4d8)",
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState<Category>("qa");

  return (
    <section id="skills" className="py-24" style={{ background: "#0f1629" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-[#64ffda]"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: "1rem" }}
          >
            02.
          </span>
          <h2
            className="text-[#ccd6f6]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.75rem", fontWeight: 700 }}
          >
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-[#1e2a45] max-w-xs" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                active === cat.id
                  ? "bg-[#64ffda] text-[#0a0e1a]"
                  : "border border-[#1e2a45] text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: active === cat.id ? 600 : 400 }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category description */}
        <p
          className="text-[#8892b0] mb-10"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
        >
          {categories.find((c) => c.id === active)?.description}
        </p>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-x-16 mb-20">
          {skills[active].map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>


      </div>
    </section>
  );
}