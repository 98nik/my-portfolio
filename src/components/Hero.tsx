import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Github, Linkedin, Mail, MessageSquare, Server, Cloud, Database, Code } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });

    gsap.to('.floating-icon', {
      y: -20,
      duration: 2,
      ease: 'power1.inOut',
      stagger: {
        each: 0.3,
        yoyo: true,
        repeat: -1,
      },
    });
  }, []);

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-5">
        <Server className="floating-icon absolute w-16 h-16 top-1/4 left-1/4" />
        <Cloud className="floating-icon absolute w-16 h-16 top-1/3 right-1/4" />
        <Database className="floating-icon absolute w-16 h-16 bottom-1/4 left-1/3" />
        <Code className="floating-icon absolute w-16 h-16 bottom-1/3 right-1/3" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="hero-text text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-cyan-300 animate-gradient drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              Nikunj Parmar
            </h1>
            <div className="relative">
              <p className="hero-text text-2xl md:text-3xl text-blue-300 mb-4">
                DevOps & Backend Engineer
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-0.5 bg-blue-500/50 absolute bottom-0 left-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-text flex flex-wrap justify-center gap-4 text-lg mb-12"
          >
            {['Infrastructure as Code', 'CI/CD', 'Kubernetes', 'AWS', 'Backend Development', 'System Design'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <div className="hero-text flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/98nik", color: "from-gray-600 to-gray-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGdy6mpo_jfhAAAAZVrhzk4mDkKTeabLJu3TJZqwjqNqTWvw6nq-w0oXdiRGVBrqng9zjno6gDaUcrVE6DW_ljzPb_EKjYmU46r1QzpavLZ8ATpELwGge5uGRzcwrxYI_tWo0M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnikunj-parmar-145b65244%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app", color: "from-blue-600 to-blue-400" },
              { icon: Mail, href: "mailto:Parmarnikunj266@gmail.com", color: "from-red-600 to-red-400" },
              { icon: MessageSquare, href: "tel:+919328585276", color: "from-green-600 to-green-400" }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                variants={iconVariants}
                whileHover="hover"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-gradient-to-r ${color} hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/30"
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
