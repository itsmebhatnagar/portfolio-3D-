import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const row1Images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

// Combine arrays three times to create a seamless looping effect when scrolling
const scrollRow1 = [...row1Images, ...row1Images, ...row1Images];
const scrollRow2 = [...row2Images, ...row2Images, ...row2Images];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      {/* Row 1 */}
      <motion.div 
        className="flex gap-2 sm:gap-3 w-max"
        style={{ x: x1, willChange: 'transform' }}
      >
        {scrollRow1.map((src, idx) => (
          <img 
            key={`r1-${idx}`} 
            src={src} 
            alt="Project Preview" 
            className="w-[280px] h-[180px] sm:w-[420px] sm:h-[270px] rounded-2xl object-cover shrink-0"
            loading="lazy"
          />
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div 
        className="flex gap-2 sm:gap-3 w-max"
        style={{ x: x2, willChange: 'transform' }}
      >
        {scrollRow2.map((src, idx) => (
          <img 
            key={`r2-${idx}`} 
            src={src} 
            alt="Project Preview" 
            className="w-[280px] h-[180px] sm:w-[420px] sm:h-[270px] rounded-2xl object-cover shrink-0"
            loading="lazy"
          />
        ))}
      </motion.div>
    </section>
  );
}
