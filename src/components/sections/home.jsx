import { RevealOnScroll } from "./RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Tonmay
          </h1>
          <p className="text-gray-400 text-lg mb-8 mx-w-lg mx-auto">
            This is Md. Shafayatul Haque, from Bangladesh University of
            Engineering and Technology (BUET). I am a Researcher and Developer
            with a Fresh BSc. Graduate degree in Computer Science and
            Engineering.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-indigo-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
            <a href=""></a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
