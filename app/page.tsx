import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Socials />
      </div>
    </main>
  );
}