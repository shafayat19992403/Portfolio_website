export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "NextJS",
    "HTML",
    "CSS",
  ];
  const backendSkills = [
    "NodeJs",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "ExpressJS",
  ];
  const LanguageSkills = [
    "C",
    "C++",
    "Python",
    "Java",
    "Javascript",
    "Assembly",
    "Bash",
  ];
  const MLSKills = [
    "Pytorch",
    "Scikit-Learn",
    "Pandas",
    "Numpy",
    "OpenCV",
    "Flower",
  ];
  const OtherSkills = [
    "Matplotlib",
    "Seaborn",
    "Git",
    "Github",
    "Postman",
    "Latex",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
      </div>
      <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6">
          I am mostly interested in Artificial Intelligence research, Federated
          Learning research and fullstack web development. I also love crafting
          clean, scalable web applications. My goal is to build solutions that
          offer both exceptional perfromacnce and a delightful user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Language Skills</h3>
            <div className="flex flex-wrap gap-2">
              {LanguageSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              {MLSKills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Others</h3>
            <div className="flex flex-wrap gap-2">
              {OtherSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>B.Sc in Computer Science and Engineering</strong> -
              Bangladesh University of Engineering and Technology (2020-2025)
            </li>
            <li>
              <strong>Higher Secondary Certificate</strong> - Notre Dame
              College, Dhaka (2017-2019)
            </li>
            <li>
              <strong>Secondary School Certificate</strong> - Mymensingh Zilla
              School, Mymensingh (2015-2017)
            </li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">Relevent Courses</h3>
        </div>
      </div>
    </section>
  );
};
