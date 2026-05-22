import { FadeIn } from '../ui/FadeIn';
import { Youtube, Twitch } from 'lucide-react';

const roles = [
  {
    title: "MR. OUTPLAYS",
    role: "Channel Manager & Managing Moderator",
    desc: "Managing channel operations, content strategy, and community growth for the MR. OUTPLAYS YouTube channel. Overseeing community engagement, managing live stream moderation, and ensuring a positive environment for a growing gaming community.",
    links: [
      {
        icon: Youtube,
        url: "https://www.youtube.com/@mroutplays",
        name: "YouTube"
      },
      {
        icon: Twitch,
        url: "https://www.twitch.tv/mroutplays006",
        name: "Twitch"
      }
    ]
  },
  {
    title: "YTDANGEROP",
    role: "Standard Moderator",
    desc: "Assisting in chat moderation and community management during live broadcasts and content releases.",
    links: [
      {
        icon: Youtube,
        url: "https://www.youtube.com/@YTDANGEROP",
        name: "YouTube"
      },
      {
        icon: Twitch,
        url: "https://www.twitch.tv/tsxdanger",
        name: "Twitch"
      }
    ]
  }
];

export function ExtraSection() {
  return (
    <section id="extra" className="bg-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 -mt-10">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Extra
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {roles.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1} y={20}>
            <div className="flex flex-col sm:flex-row sm:items-start py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 gap-4 sm:gap-10 md:gap-16">
              <div className="w-full sm:w-[250px] md:w-[300px] shrink-0">
                <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-[#0C0C0C] leading-none mb-2">
                  {item.title}
                </h3>
                <div className="text-[#0C0C0C]/60 uppercase tracking-widest text-xs sm:text-sm font-bold">
                  {item.role}
                </div>
                {item.links && (
                  <div className="flex gap-4 mt-4 sm:mt-6">
                    {item.links.map((link, idx) => {
                      const Icon = link.icon;
                      return (
                        <a 
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0C0C0C] text-[#D7E2EA] p-3 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-[#0C0C0C]/90 transition-all duration-300 shadow-xl"
                          aria-label={link.name}
                        >
                          <Icon size={20} className="sm:w-5 sm:h-5" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 flex-1 mt-4 sm:mt-0">
                <p className="text-[#0C0C0C] font-medium leading-relaxed opacity-80 text-[clamp(1rem,1.8vw,1.25rem)] max-w-2xl">
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
