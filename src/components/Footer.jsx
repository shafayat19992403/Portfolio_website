import { Github, Linkedin, Mail, Phone, GraduationCap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-2">Find Me</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>mdshafayatulhaque@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+880 1640667059</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 text-white text-sm">
            <a
              href="https://github.com/shafayat19992403"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=EhqOwp8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <GraduationCap size={18} /> Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/md-shafayatul-haque-tonmay-26070625a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
