import ChoiceCard from "./ChoiceCard";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-8">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
        Computer Science Undergrad at WPI
      </p>

      <h2 className="max-w-3xl text-5xl font-bold leading-tight">
        Aspiring Software Developer and UI/UX Designer!
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        Welcome to my little website. Hope you enjoy your stay! Feel free to look through all my projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ChoiceCard href="#projects">
          View Projects
        </ChoiceCard>
          
        <ChoiceCard
        href="#about"
        variant="main"
        >
          About Me
        </ChoiceCard>
        
        <ChoiceCard
        href="#fun"
        variant="main"
        >
          Fun
          </ChoiceCard>
</div>
    </section>
  );
}