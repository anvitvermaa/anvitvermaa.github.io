"use client";
import React from 'react';

const Skills = () => {
  
  const skillCategories = [
    {
      title: "Languages",
      theme: "teal",
      skills: ["Python", "C++", "Java", "SQL", "MySQL", "JavaScript", "TypeScript", "Bash/Shell"]
    },
    {
      title: "AI & Machine Learning",
      theme: "blue",
      skills: ["LangChain", "LLaMA 3", "SR-GANs", "RAG Pipelines", "Transformers", "Multi-Agent Systems", "NLP", "Computer Vision"]
    },
    {
      title: "Frameworks & Libraries",
      theme: "yellow",
      skills: ["PyTorch", "TensorFlow", "React", "Next.js", "Node.js", "Pandas", "NumPy", "Scikit-learn", "OpenCV"]
    },
    {
      title: "Cloud & Tools",
      theme: "green",
      skills: ["AWS Lambda", "AWS S3", "DynamoDB", "Docker", "Kubernetes", "Git/GitHub", "Postman", "Linux", "CI/CD", "Jira"]
    }
  ];

  const getThemeClasses = (theme) => {
    switch(theme) {
      case "teal":   return "text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10";
      case "blue":   return "text-[#57cbff] border-[#57cbff] bg-[#57cbff]/10";
      case "yellow": return "text-[#ffd700] border-[#ffd700] bg-[#ffd700]/10";
      case "green":  return "text-[#4ade80] border-[#4ade80] bg-[#4ade80]/10";
      default:       return "text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10";
    }
  };

  return (
    <section id="skills" className="max-w-[1000px] mx-auto py-[100px] px-6">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[50px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(20px,5vw,26px)] text-[#64ffda] font-semibold mr-[10px]"
          // Forced Font Match
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          06.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#ccd6f6] m-0">Skills & Technologies</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#233554] ml-[20px]"></div>
      </div>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {skillCategories.map((category, i) => (
          <div 
            key={i} 
            className="h-full flex flex-col items-start py-4"
          >
            <h3 className="text-lg font-bold text-[#ccd6f6] mb-8 font-mono flex items-center">
              <span className={`mr-2 ${
                category.theme === 'teal' ? 'text-[#64ffda]' : 
                category.theme === 'blue' ? 'text-[#57cbff]' :
                category.theme === 'yellow' ? 'text-[#ffd700]' : 'text-[#4ade80]'
              }`}>//</span> 
              {category.title}
            </h3>

            {/* CONTAINER STYLES */}
            <div 
              className="w-full"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              {category.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className={`
                    rounded-full text-xs font-mono border 
                    ${getThemeClasses(category.theme)} 
                    whitespace-nowrap cursor-default hover:bg-opacity-20 transition-all
                  `}
                  style={{ padding: '5px 10px' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;