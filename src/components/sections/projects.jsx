export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      techStack: ["React", "Node", "AWS", "Docker"],
      link: "#",
    },
    {
      title: "ByteBooks",
      description:
        "An audiobook library platform with distinct user interfaces for admins, readers and creators. " +
        "The admin side features allow to manage users, creators, and books, handle user reports, and access insightful analytics with visual charts for better decision-making. " +
        "Book creators have an interactive editor to manage books. " +
        "Reader features include personalized book recommendations based on preferences, real-time progress tracking, notifications for new audiobook releases, a bookshelf to organize books, a highlight manager, and personal analytics to track reading habits and progress.",
      techStack: ["Next.js", "MongoDB", "Prisma", "Framer Motion"],
      link: "https://github.com/shafayat19992403/ByteBooks",
    },
    {
      title: "Portfolio Website",
      description: "A protfolio website mnade using react and TailwindCSS.",
      techStack: ["ReactJS", "TailwindCSS"],
    },
    {
      title: "Football Club Management",
      description:
        "A football club management system that maintains a database of players and supports operations like searching, adding, removing, and transferring players. It includes features to view player and club details, and simulate buying players. A graphical user interface (GUI) was developed using JavaFX.",
      techStack: ["Java", "JavaFX", "CSS"],
      link: "https://github.com/shafayat19992403/Football-Club-Management-JavaFX",
    },
    {
      title: "DX Ball",
      description:
        "A classic DX Ball game where players control a paddle to bounce a ball and break all the bricks on the screen, avoiding the ball from falling off the bottom edge. The game was built using the IGraphics framework in C.",
      techStack: ["C", "IGraphics"],
      link: "https://github.com/shafayat19992403/DX_BALL_iGraphics",
    },
    {
      title: "Poultry Disease Detection",
      description:
        "A web application that predicts poultry health by analyzing fecal images. Fine-tuned an EfficientNet model on a custom poultry feces dataset, achieving 99% test accuracy. The frontend allows users to upload images and receive predictions instantly.",
      techStack: [
        "Next JS",
        "TailwindCSS",
        "PyTorch",
        "TorchVision",
        "Scikit-Learn",
        "Pandas",
        "Flask",
      ],
      link: "https://github.com/shafayat19992403/PoultryDiseaseDetection",
    },
    {
      title: "Pancreatic Disease Detection",
      description:
        "Developed a CNN-based deep learning model for classifying pancreatic CT scan images into normal and tumor-affected categories. Used a publicly available Kaggle pancreatic CT dataset for training and evaluation. Applied image processing techniques such as resizing, normalization, and augmentation (horizontal flip, rotation) for better generalization. Achieved high accuracy with proper evaluation using confusion matrices and accuracy scores. Built a front-end using NextJS that allows users to upload CT scan images and receive predictions.",
      techStack: [
        "Python",
        "PyTorch",
        "TorchVision",
        "KaggleHub",
        "NumPy",
        "OpenCV",
        "Matplotlib",
      ],
      link: "https://github.com/shafayat19992403/Pancreatic-Disease-Detection",
    },
    {
      title: "Spam Email Detection",
      description:
        "Built a spam detection model using Natural Language Processing (NLP) techniques. Preprocessed text data using tokenization, stopword removal, and TF-IDF vectorization. Trained and evaluated multiple models (Naïve Bayes, SVM) to classify spam vs. non-spam messages and deployed the model as a web app using Flask API.",
      techStack: [
        "Scikit-Learn",
        "Pandas",
        "Flask",
        "NumPy",
        "nltk",
        "Seaborn",
      ],
      link: "https://github.com/shafayat19992403/Spam_Email_Detector",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Notable Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((pro, key) => (
            <div
              key={key}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{pro.title}</h3>
              <p className="text-gray-400 mb-4">{pro.description}</p>
              <div>
                {pro.techStack.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={pro.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-10 mx-2"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
