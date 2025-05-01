"use client";

import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, 
  FaDatabase, FaGitAlt, FaFigma, FaBootstrap, FaGithub 
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26", level: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: 85 },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 80 },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 85 },
  { name: "Git", icon: FaGitAlt, color: "#F05032", level: 75 },
  { name: "GitHub", icon: FaGithub, color: "#c9d1d9", level: 78 },
  { name: "Database", icon: FaDatabase, color: "#4479A1", level: 65 },
  { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Here are some of the technologies and tools I am proficient in. I continuously learn and improve my skills to stay updated with the latest trends.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  
  return (
    <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-colors group">
      <div className="flex items-center mb-4">
        <Icon className="text-4xl" style={{ color: skill.color }} />
        <h3 className="ml-3 font-medium">{skill.name}</h3>
      </div>
      
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
      <div className="mt-2 text-right text-sm text-foreground/70">{skill.level}%</div>
    </div>
  );
};

export default Skills; 