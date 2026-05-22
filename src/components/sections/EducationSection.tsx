import { FadeIn } from '../ui/FadeIn';

const educationList = [
  {
    period: "August 2025 - Present",
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Anand International College of Engineering",
    desc: "Pursuing a degree in engineering with a focus on modern technology and problem-solving."
  },
  {
    period: "Completed 2025",
    degree: "Schooling",
    institution: "Defence Public School",
    desc: "Completed higher secondary education with a focus on Science and Mathematics."
  }
];

export function EducationSection() {
  return (
    <section id="education" className="bg-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 -mt-10">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Education
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {educationList.map((item, i) => (
          <FadeIn key={item.degree} delay={i * 0.1} y={20}>
            <div className="flex flex-col sm:flex-row sm:items-start py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 gap-4 sm:gap-10 md:gap-16">
              <div className="w-full sm:w-[350px] md:w-[400px] shrink-0">
                <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-black text-[#0C0C0C] leading-none mb-4">
                  {item.degree}
                </h3>
                <div className="text-[#0C0C0C]/60 uppercase tracking-widest text-xs sm:text-sm font-bold flex flex-col gap-1">
                  <span className="text-[#0C0C0C]">{item.period}</span>
                  <span className="text-[#0C0C0C]/80">at {item.institution}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 flex-1 mt-4 sm:mt-0">
                <p className="text-[#0C0C0C] font-medium leading-relaxed opacity-80 text-[clamp(1rem,1.5vw,1.25rem)] max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
