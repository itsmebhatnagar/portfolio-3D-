import { FadeIn } from '../ui/FadeIn';

const experienceList = [
  {
    period: "Mar 2026 - Present",
    role: "Coding Club Member",
    company: "Anand International College Of Engineering",
    desc: "Actively contributing to technical workshops, hackathons, and collaborative coding projects within the college community."
  },
  {
    period: "Jan 2026 - Present",
    role: "Co-Founder",
    company: "Oneclip Hub",
    desc: "Leading the vision and product strategy for a centralized content management platform for creators."
  },
  {
    period: "Nov 2025 - Feb 2026",
    role: "Chief Product Officer",
    company: "Eli Marco",
    desc: "Oversaw product development and user experience design, bridging the gap between technical execution and business goal."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full max-w-5xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 w-full">
          <div className="flex flex-col gap-8 md:gap-12 max-w-[800px]">
            <FadeIn delay={0.1} y={20}>
              <p className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]">
                I craft immersive digital interfaces that bridge the gap between imagination and reality. With a focus on performance and motion, I build applications that are not just functional, but memorable. I believe every interaction is an opportunity to tell a story.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <p className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]">
                Currently based in the digital realm, working with modern technologies like React, Framer Motion, and Tailwind CSS to push the boundaries of the web.
              </p>
            </FadeIn>
          </div>

          <div className="w-full mt-4 sm:mt-10">
            <FadeIn delay={0.3} y={30}>
               <h3 className="text-[#D7E2EA] font-black uppercase text-[clamp(2.5rem,8vw,100px)] mb-10 md:mb-16 text-center leading-none">
                 Experience
               </h3>
            </FadeIn>
            <div className="flex flex-col w-full">
              {experienceList.map((item, i) => (
                <FadeIn key={item.role} delay={0.4 + i * 0.1} y={20}>
                  <div className="flex flex-col sm:flex-row sm:items-start py-8 sm:py-10 md:py-12 border-b border-[rgba(215,226,234,0.15)] last:border-b-0 gap-4 sm:gap-10 md:gap-16">
                    <div className="w-full sm:w-[350px] md:w-[400px] shrink-0">
                      <h4 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-black text-[#D7E2EA] leading-none mb-4">
                        {item.role}
                      </h4>
                      <div className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-bold flex flex-col gap-1">
                        <span className="text-[#D7E2EA]">{item.period}</span>
                        <span className="text-[#D7E2EA]/80">at {item.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-4 flex-1 mt-4 sm:mt-0">
                      <p className="text-[#D7E2EA] font-medium leading-relaxed opacity-80 text-[clamp(1rem,1.5vw,1.25rem)] max-w-2xl text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
