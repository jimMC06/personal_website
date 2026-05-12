type ChoiceCardProperties = {
    children: React.ReactNode;
    href: string;
    variant?: "main" | "persona";
};

export default function ChoiceCard({
    children,
    href,
    variant = "main",

}: ChoiceCardProperties){
    const base = "group relative inline-bloc -skew-x-12 overflow-hidden border px-8 py-3 font-bold uppercase tracking-wude transition-all duration-200 hover:scale-105 hover:shadoow-[0_0_25px_rgba(96,165,250,0.8)]";
    const styles = variant === "main" ? "border-white bg-white text-black": "border-white/40 bg-black/20 text-white";

    return(
    <a href={href} className={`${base} ${styles}`}>
        <span className="inline-block skew-x-12">{children}</span>
        <span className="absolute inset-0 -translate-x-full bg-blue-400/30 transition-transform duration-300 group-hover:translate-x-0" />
        </a>
    );

}

  