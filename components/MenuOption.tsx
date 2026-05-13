type MenuOptionProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export default function MenuOption({
  children,
  isActive,
  onClick,
}: MenuOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        mb-3 block w-full border px-4 py-3 text-left transition-all duration-200
        ${isActive
            ? "border-white bg-white/25 shadow-[0_0_18px_rgba(255,255,255,0.45)]"
            : "border-white/20 bg-white/10 hover:border-white hover:bg-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.45)]"
        }
      `}
    >
      {children}
    </button>
  );
}