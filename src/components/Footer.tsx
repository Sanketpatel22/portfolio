"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#home" className="text-xl font-bold gradient-text">
              Sanket Patel
            </Link>
            <p className="mt-4 text-foreground/70 max-w-md">
              IT Engineering student and web developer specializing in creating responsive 
              and interactive websites and applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://theprasang.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  The Prasang
                </a>
              </li>
              <li>
                <a 
                  href="https://nexidepharma.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Nexide Pharma
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} Sanket Patel. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-foreground/60 text-sm">
              Designed & Built with ❤️ by <span className="text-primary">Sanket Patel</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 