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

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-6 py-3 font-medium text-black"
        >
          View Projects
        </a>

        <a
          href="#about"
          className="rounded-full border border-white/30 px-6 py-3 font-medium"
        >
          About Me
        </a>
        <a
        href="#fun"
        className="rounded-full bg-white px-6 py-3 font-medium text-black"
        >
          Fun
        </a>
      </div>
    </section>
  );
}