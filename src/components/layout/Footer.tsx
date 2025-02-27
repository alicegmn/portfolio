import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react"; // Importera ikoner

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          Made by Alice. Latest update was {new Date().getFullYear()}
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/alicegmn"
            target="_blank"
            className="hover:text-gray-300"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alice-eriksson-malmo/"
            target="_blank"
            className="hover:text-gray-300"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:alice.eriksson.561@gmail.com"
            className="hover:text-gray-300"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
