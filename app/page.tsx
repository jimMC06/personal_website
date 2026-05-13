import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />

      <div className="relative z-10 grid h-screen grid-rows-[auto_1fr_auto]">
        <Navbar />

        <div className="flex flex-1 items-center justify-center">
          <Hero />
        </div>

        <div className="pb-2 text-center">
            <Socials />
            <p className="mt-3 text-sm text-white/40">
              © 2026 Jimmy Murcia Calderon
            </p>
        </div>
      </div>
    </main>
  );
}