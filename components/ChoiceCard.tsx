type ChoiceCardProperties = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function ChoiceCard({
    children,
    onClick,

}: ChoiceCardProperties){
    return (
        <button
        onClick={onClick}
        className="group relative inline-block overflow-hidden border border-white/50 bg-black/20 px-10 py-3 font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(96,165,250,0.8)] [clip-path:polygon(12%_0%,100%_0%,88%_100%,0%_100%)]"
        >
            <span className="relative z-10 block">{children}</span>
            <span className="absolute inset-0 -translate-x-full bg-blue-400/30 transition-transform duration-300 group-hover:translate-x-0" />
        </button>
    );
}

  