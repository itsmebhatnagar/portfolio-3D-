import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: "01",
    name: "Web Dev",
    desc: "Building high-performance, accessible, and responsive web applications that deliver exceptional user experiences."
  },
  {
    num: "02",
    name: "App dev",
    desc: "Creating seamless and engaging mobile applications designed to perform beautifully across all devices."
  },
  {
    num: "03",
    name: "Frontend Design",
    desc: "Crafting beautiful, intuitive interfaces with a focus on modern aesthetics, solid typography, and smooth interactions."
  },
  {
    num: "04",
    name: "Self projects",
    desc: "Experimenting with new technologies and pushing boundaries through innovative personal side projects."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={20}>
            <div className="flex flex-col sm:flex-row sm:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 gap-6 sm:gap-10 md:gap-16">
              <div className="text-[clamp(3rem,10vw,140px)] font-black text-[#0C0C0C] leading-none shrink-0 w-[120px] sm:w-[150px] md:w-[200px]">
                {service.num}
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 flex-1">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)] max-w-2xl">
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
