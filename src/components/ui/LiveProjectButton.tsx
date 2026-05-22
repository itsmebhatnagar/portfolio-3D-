export function LiveProjectButton({ url }: { url?: string }) {
  const Component = url ? 'a' : 'button';
  return (
    <Component 
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors inline-block text-center"
    >
      Live Project
    </Component>
  );
}
