"use client";
import { playSound } from "./playSound";
import { useState } from "react";
import ChoiceCard from "./ChoiceCard";
import { menuData, type MenuKey } from "@/data/menuData";
import MenuOption from "./MenuOption";

type ActiveMenu = MenuKey | null;

export default function Hero() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const isMenuOpen = activeMenu !== null;
  return (
    <section className="mx-auto flex h-full max-w-7xl items-center justify-center px-8">
      <div className={`grid w-full items-center gap-16 transition-all duration-500 ${isMenuOpen ? "grid-cols-1 lg:grid-cols-[1.1fr_1.2fr]" : "grid-cols-1"}`}
      > 
        <div className={`transition-all duration-500 ${isMenuOpen ? "text-left" : "mx-auto max-w-4xl text-center"}`}
        >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          Aspiring Software Developer!
        </p>

        <h2 className="max-w-5xl font-bold leading-tight md:text-6xl">
          Welcome, Please Enjoy Your Stay!
        </h2>

        <p className={`mt-6 text-lg text-gray-300 ${isMenuOpen ? "max-w-xl" : "mx-auto max-w-2xl"}`}
        >
          Feel free to look through all my projects.
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
            onClick={() => {
              playSound("/sounds/P5 Close.wav", 0.25);
              setActiveMenu(null);
            }}
              
          
            className="border border-white/30 px-3 py-1 text-sm uppercase tracking-wide text-white transition hover:border-blue-300 hover:text-blue-300"
            >
              Back
            </button>
          </div>
          
          <div className="max-h-64 overflow-y-auto pr-2">
            {activeMenu &&
              menuData[activeMenu].map((item) => (
                <MenuOption
                  key={item.id}
                  isActive={activeOption === item.id}
                  onClick={() => {
                    playSound("/sounds/P5 UI Select.mp3", 0.25);
                    setActiveOption(item.id);
                  }}
                >
                  {item.label}
                </MenuOption>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-300">
            {activeMenu && activeOption
              ? menuData[activeMenu].find((item) => item.id === activeOption)?.description
              : "Select an option to see more information."}
          </p>

        </div>
      )}
      </div>
    </section> 
  );
}

