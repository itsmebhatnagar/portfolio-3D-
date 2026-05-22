import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { FadeIn } from '../ui/FadeIn';

const projects = [
  {
    num: "01",
    client: "Personal",
    name: "Oneclip Hub",
    url: "https://onecliphub.in",
    images: {
      col1_1: "https://api.microlink.io/?url=https%3A%2F%2Fonecliphub.in&screenshot=true&meta=false&embed=screenshot.url",
      col1_2: "https://api.microlink.io/?url=https%3A%2F%2Fonecliphub.in&screenshot=true&meta=false&embed=screenshot.url",
      col2: "https://api.microlink.io/?url=https%3A%2F%2Fonecliphub.in&screenshot=true&meta=false&embed=screenshot.url"
    }
  },
  {
    num: "02",
    client: "Personal",
    name: "Syntax Co.",
    url: "https://syntaxco.vercel.app",
    images: {
      col1_1: "https://api.microlink.io/?url=https%3A%2F%2Fsyntaxco.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      col1_2: "https://api.microlink.io/?url=https%3A%2F%2Fsyntaxco.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      col2: "https://api.microlink.io/?url=https%3A%2F%2Fsyntaxco.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    }
  },
  {
    num: "03",
    client: "Personal",
    name: "Flux IDE",
    url: "https://fluxide.vercel.app",
    images: {
      col1_1: "https://api.microlink.io/?url=https%3A%2F%2Ffluxide.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      col1_2: "https://api.microlink.io/?url=https%3A%2F%2Ffluxide.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      col2: "https://api.microlink.io/?url=https%3A%2F%2Ffluxide.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    }
  }
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 pb-32"
    >
      <FadeIn y={40} className="w-full mb-16 sm:mb-24 md:mb-32">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(4rem,14vw,180px)] leading-none">
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          // Calculate the range over which this card should scale down
          // We divide the scroll into chunks based on number of cards
          // For card 0: range is [0, 0.5] (first half of scrolling past subsequent cards)
          // For card 1: range is [0.5, 1] 
          const range = [i * (1 / (projects.length)), 1]; 
          
          return (
            <ProjectCard 
              key={project.num}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
              totalCards={projects.length}
            />
          );
        })}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  key?: string | number;
  project: typeof projects[0];
  index: number;
  progress: any;
  range: number[];
  targetScale: number;
  totalCards: number;
}

function ProjectCard({ project, index, progress, range, targetScale, totalCards }: ProjectCardProps) {
  // Use framer motion to scale down the card as we scroll past it
  const scale = useTransform(progress, range, [1, targetScale]);
  // Optional: slightly dim older cards
  const opacity = useTransform(progress, range, [1, 0.8 + index * 0.1]);

  return (
    <div className="h-auto min-h-[75vh] sm:min-h-0 sm:h-[85vh] md:h-[85vh] sticky top-20 md:top-32 flex items-start justify-center origin-top mb-16 sm:mb-0">
      <motion.div 
        style={{ scale, opacity, top: `calc(${index * 28}px)` }}
        className="w-full relative rounded-[32px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-8 origin-top"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="flex items-end gap-3 sm:gap-8">
            <span className="text-[clamp(2.5rem,8vw,100px)] font-black text-[#D7E2EA] leading-none">
              {project.num}
            </span>
            <div className="flex flex-col gap-1 pb-1 sm:pb-2">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-sm font-light">
                {project.client}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-3xl md:text-5xl tracking-tight leading-none">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="md:pb-4 self-start md:self-auto hidden sm:block">
            <LiveProjectButton url={project.url} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 flex-1 w-full h-full pb-2 md:pb-4 rounded-xl overflow-hidden min-h-[300px] sm:min-h-0">
          <div className="w-full sm:w-[40%] flex flex-row sm:flex-col gap-3 sm:gap-6">
            <div className="flex-1 sm:w-full rounded-[20px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden sm:h-[clamp(130px,16vw,230px)] aspect-square sm:aspect-auto">
              <img src={project.images.col1_1} alt="Project Detail" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700 hover:opacity-90" />
            </div>
            <div className="flex-1 sm:w-full rounded-[20px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden sm:h-[clamp(160px,22vw,340px)] aspect-square sm:aspect-auto">
              <img src={project.images.col1_2} alt="Project Detail" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700 hover:opacity-90" />
            </div>
          </div>
          <div className="w-full sm:w-[60%] flex-1 rounded-[20px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden min-h-[220px] sm:min-h-[300px]">
            <img src={project.images.col2} alt="Project Main" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700 hover:opacity-90" />
          </div>
        </div>
        
        <div className="w-full sm:hidden pt-2">
          <LiveProjectButton url={project.url} />
        </div>
      </motion.div>
    </div>
  );
}
