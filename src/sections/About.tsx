"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-center">I&apos;m a developer<span className="text-primary">Sanket Patel</span>, an IT Engineering Student</h3>
            
            <p className="text-foreground/80">
              I am passionate about web development and building interactive, user-friendly websites and applications. 
              Currently pursuing my degree in IT Engineering, I balance my academic studies with practical projects 
              to enhance my skills and knowledge in the tech field.
            </p>
            
            <p className="text-foreground/80">
              My journey in web development has led me to work on various projects, including 
              <a href="https://theprasang.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">The Prasang</a>
              and
              <a href="https://nexidepharma.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">Nexide Pharma</a>.
              These experiences have significantly contributed to my growth as a developer.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-bold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>B.Tech in IT Engineering</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Higher Secondary School Certificate</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Interests</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Web Development</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Problem Solving</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 