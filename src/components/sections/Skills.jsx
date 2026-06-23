"use client";
import React from 'react';

const Skills = () => {
  
  const skillCategories = [
    {
      title: "Languages",
      theme: "teal",
      skills: ["C++", "Python", "Java", "JavaScript", "SQL", "Bash/Shell"]
    },
    {
      title: "AI & Machine Learning",
      theme: "blue",
      skills: ["SR-GANs", "LLaMA 3", "Multi-Agent Orchestration", "RAG Pipelines", "Transformers", "Computer Vision"]
    },
    {
      title: "Frameworks & Libraries",
      theme: "yellow",
      skills: ["PyTorch", "TensorFlow", "LangChain", "React", "Node.js", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      title: "Cloud & Tools",
      theme: "green",
      skills: ["AWS Lambda", "AWS S3", "DynamoDB", "API Gateway", "Cognito", "CodePipeline", "Docker", "Git", "CI/CD", "Postman"]
    }
  ];

  const getThemeClasses = (theme) => {
    switch(theme) {
      case "teal":   return "text-[#e8c4a0] border-[#e8c4a0] bg-[#e8c4a0]/10";  // caramel
      case "blue":   return "text-[#c49a7a] border-[#c49a7a] bg-[#c49a7a]/10";  // mocha
      case "yellow": return "text-[#a87050] border-[#a87050] bg-[#a87050]/10";  // coffee
      case "green":  return "text-[#d4aa80] border-[#d4aa80] bg-[#d4aa80]/10";  // latte
      default:       return "text-[#e8c4a0] border-[#e8c4a0] bg-[#e8c4a0]/10";
    }
  };

  return (
    <section id="skills" className="max-w-[1000px] mx-auto py-[100px] px-6">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-[10px] mb-[50px] w-full whitespace-nowrap">
        <span 
          className="text-[clamp(20px,5vw,26px)] text-[#ffffff] font-semibold mr-[10px]"
          // Forced Font Match
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace" }}
        >
          06.
        </span>
        <h2 className="font-bold text-[clamp(26px,5vw,32px)] text-[#efefef] m-0">Skills & Technologies</h2>
        <div className="w-full max-w-[300px] h-[1px] bg-[#2a2a2a] ml-[20px]"></div>
      </div>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {skillCategories.map((category, i) => (
          <div 
            key={i} 
            className="h-full flex flex-col items-start py-4"
          >
            <h3 className="text-lg font-bold text-[#efefef] mb-8 font-mono flex items-center">
              <span className={`mr-2 ${
                category.theme === 'teal' ? 'text-[#e8c4a0]' : 
                category.theme === 'blue' ? 'text-[#c49a7a]' :
                category.theme === 'yellow' ? 'text-[#a87050]' : 'text-[#d4aa80]'
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