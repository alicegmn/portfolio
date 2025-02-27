export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Alice 👋</h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
        I'm a full-stack developer passionate about building interactive,
        scalable, and user-friendly web applications.
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
