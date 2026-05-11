export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#090b1f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a,_transparent_35%)]" />

      <div className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white" />
      <div className="absolute left-[30%] top-[10%] h-1 w-1 rounded-full bg-white" />
      <div className="absolute left-[70%] top-[25%] h-1 w-1 rounded-full bg-white" />
      <div className="absolute left-[85%] top-[15%] h-1 w-1 rounded-full bg-white" />
      <div className="absolute left-[55%] top-[40%] h-1 w-1 rounded-full bg-white" />
    </div>
  );
}