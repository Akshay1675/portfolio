import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Redux Toolkit", icon: "https://skillicons.dev/icons?i=redux" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:akshaydesai1675@gmail.com';
};

const openPDF = () => {
  window.open('/Akshay2.pdf', '_blank');
};
    return (
      <section id="about" className="py-16 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 font-semibold text-center">
            I'm a React Developer. I specialize in creating beautiful, responsive, and interactive websites.
          </p>
          <h2 className="text-3xl font-bold text-center mb-10 mt-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 md:w-16 md:h-16 object-contain"
              />
              <span className="mt-4 text-sm md:text-base font-medium text-gray-800 group-hover:text-blue-500">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
          
        </div>
        
        <div className="flex justify-center font-bold space-x-4 text-sm md:text-lg  mt-20">
        <a href="https://www.linkedin.com/in/ak1675/" target="_blank" rel="noopener noreferrer"> <LinkedinIcon /></a>
          <a href="https://github.com/Akshay1675" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
          <Mail className="cursor-pointer" onClick={handleEmailClick}/>
          <button className="px-4 py-2 -mt-3 ml-2 bg-black text-white rounded-lg cursor-pointer" onClick={openPDF}>Resume</button>


        </div>
        
      </section>
    );
  };
  
  export default About;
  