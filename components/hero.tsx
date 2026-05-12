"use client";

import { useState } from "react";
import ChoiceCard from "./ChoiceCard";

type MenuOptions = "projects" | "about" | "fun" | null;

export default function Hero() {
  const [activeMenu, setActiveMenu] = useState<MenuOptions>(null);
  const isMenuOpen = activeMenu !== null;
  return (
    <section className="mx-auto flex min-h-[82vh] max-w-7xl items-center justify-center px-8">
      <div className={`grid w-full items-center gap-16 transition-all duration-500 ${isMenuOpen ? "grid-cols-1 lg:grid-cols-[1.1fr_1.2fr]" : "grid-cols-1"}`}
      > 
        <div className={`transition-all duration-500 ${isMenuOpen ? "text-left" : "mx-auto max-w-4x1 text-center"}`}
        >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          Computer Science Undergrad at WPI
        </p>

        <h2 className="max-w-5xl font-bold leading-tight md:text-6xl">
          Aspiring Software Developer and UI/UX Designer!
        </h2>

        <p className={`mt-6 text-lg text-gray-300 ${isMenuOpen ? "max-w-xl" : "mx-auto max-w-2xl"}`}
        >
          Welcome to my little website. Hope you enjoy your stay! Feel free to look through all my projects.
        </p>

        <div className={`mt-8 flex flex-wrap gap-6 ${isMenuOpen ? "justify-start" : "justify-center"}`}
        >
          <ChoiceCard onClick={() => setActiveMenu("projects")}>
            Projects
          </ChoiceCard>

          <ChoiceCard onClick={() => setActiveMenu("about")}>
            About Me
          </ChoiceCard>
          
          <ChoiceCard onClick={() => setActiveMenu("fun")}>
            Fun
          </ChoiceCard>
        </div>
      </div>

      {isMenuOpen &&(
        <div className="min-h-[360px] w-full border border-white/25 bg-black/40 p-6 shadow-[0_0_35px_rgba(96,165,250,0.25)] backdrop-blur-md">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              {activeMenu}
            </p>
            <button
            onClick={() => setActiveMenu(null)}
            className="border border-white/30 px-3 py-1 text-sm uppercase tracking-wide text-white transition hover:border-blue-300 hover:text-blue-300"
            >
              Back
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto pr-2">
            <button className="mb-3 block w-full border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20">
              Option 1
            </button>
            
            <button className="mb-3 block w-full border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20">
              Option 2
            </button>

            <button className="mb-3 block w-full border border-white/20 bg-white/10 px-4 py-3 text-left hover:bg-white/20">
              Option 3
            </button>
          </div>
          
          <p className="mt-6 text-sm text-gray-300">
            WIP
          </p>

        </div>
      )}
      </div>
    </section>
  );
}