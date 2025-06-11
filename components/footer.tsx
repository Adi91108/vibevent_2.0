import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-milk border-t py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <a href="https://www.linkedin.com/in/aditya-sen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-orange font-semibold">Aditya Sen</a>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Adi91108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5 text-peach font-semibold" />
              <span className="text-orange" >GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-sen/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-peach font-semibold" />
              <span className="text-orange">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
