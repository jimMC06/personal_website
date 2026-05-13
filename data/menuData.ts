export type MenuKey = "projects" | "about" | "fun";

export type Skill = {
    name: string,
    logo: string,
    level: "learning" | "comfortable" | "proficient" | "master";
}

export type MenuItem = {
  id: string;
  label: string;
  description: string;
  skills?: Skill[];
};

export const menuData: Record<MenuKey, MenuItem[]> = {
  projects: [
    {
      id: "personal-website",
      label: "Personal Website",
      description: "An interactive portfolio built with Next.js, TypeScript, and Tailwind.",
    },
    {
      id: "recomme",
      label: "RecomMe",
      description: "A music recommendation app focused on user control and consistency.",
    },
    {
      id: "algorithm-visualizer",
      label: "Algorithm Visualizer",
      description: "A visual learning tool for data structures and algorithms.",
    },
  ],

  about: [
    {
      id: "skills",
      label: "Skills",
      description: "TypeScript, Java, C, Python, React, Next.js, and systems programming.",
    },
    {
        id:"code",
        label:"Coding Languages",
        description:"",
    },
    {
      id: "music",
      label: "Music",
      description: "I play guitar and enjoy combining music, software, and interactive design.",
    },
  ],

  fun: [
    {
      id: "cats",
      label: "CATS!",
      description: "I am the proud father of 2 cats, Mishi (A 3 year old Gray Tabby) and Minnie (A 1 year old Tuxedo cat). ",
    },
  ],
};