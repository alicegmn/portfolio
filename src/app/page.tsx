// import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react"; // Importera ikoner

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-4">
        <section className="flex flex-col items-center justify-center text-center space-y-12">
          <h1 className="text-[#fe4629] animate-bounce text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Under konstruktion
          </h1>

          {/* Social Media Links */}
          <div className="flex space-x-8">
            <Link
              href="https://www.linkedin.com/in/alice-eriksson-malmo/"
              target="_blank"
              className="text-white hover:text-[#fe4629] transition-colors duration-300"
            >
              <Linkedin size={50} />
            </Link>
            <Link
              href="https://github.com/alicegmn"
              target="_blank"
              className="text-white hover:text-[#fe4629] transition-colors duration-300"
            >
              <Github size={50} />
            </Link>

            <Link
              href="mailto:alice.eriksson.561@gmail.com"
              className="text-white hover:text-[#fe4629] transition-colors duration-300"
            >
              <Mail size={50} />
            </Link>
          </div>
          {/* <div>
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
        </ul> */}
        </section>
      </main>
    </>
  );
}
