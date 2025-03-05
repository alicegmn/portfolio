import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="flex flex-row items-center justify-around min-h-screen text-left px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Alice 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            I'm a full-stack developer passionate about building interactive,
            scalable, and user-friendly web applications.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              See what I've built
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/alice.jpg"
            alt="This is me."
            width={400}
            height={400}
            className="rounded-4xl"
          />
        </div>
      </section>
      <section>
        <h2>Tech stack & toolbox</h2>
        <ul className="list-disc list-inside">
          <li>HTML:5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>Redux & Redux Toolkit</li>
          <li>SQL</li>
          <li>Figma</li>
          <li>Adobe Creative Suite</li>
          <li>Trello</li>
        </ul>
      </section>
    </>
  );
}
