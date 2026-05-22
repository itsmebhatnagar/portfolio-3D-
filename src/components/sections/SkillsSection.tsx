import { FadeIn } from '../ui/FadeIn';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    className: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "TypeScript", "Python", "C", "C++", "JavaScript", "GraphQL"],
    className: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
    className: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Vite", "Figma", "Postman", "Vercel", "Loveable", "Stitch", "Google AI Studio"],
    className: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "IDEs",
    skills: ["Windsurf", "VS Code", "Antigravity", "Turbo C", "Cursor"],
    className: "md:col-span-1 lg:col-span-1"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="pb-24 sm:pb-32 px-5 sm:px-8 md:px-10 bg-[#0C0C0C]">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-12 sm:mb-16 md:mb-20 leading-none">
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 grid-flow-dense">
        {skillCategories.map((category, i) => (
          <FadeIn key={category.title} delay={i * 0.1} y={20} className={category.className}>
            <div className="bg-[#131313] rounded-[2rem] p-8 md:p-10 h-full border border-[rgba(215,226,234,0.05)] hover:border-[rgba(215,226,234,0.2)] transition-colors duration-500 flex flex-col group">
              <h3 className="text-[#D7E2EA]/40 uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-10 group-hover:text-[#D7E2EA] transition-colors duration-500">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-5 py-2.5 rounded-xl bg-[rgba(215,226,234,0.03)] border border-[rgba(215,226,234,0.08)] text-[#D7E2EA] font-medium text-sm hover:bg-[#D7E2EA] hover:text-[#0C0C0C] hover:-translate-y-1 hover:scale-105 hover:border-transparent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
