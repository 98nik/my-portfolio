import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Cloud, Database, Terminal, Briefcase, GraduationCap, Code, Brain, Award, Globe, Mail, Phone } from 'lucide-react';

const Timeline = ({ year, title, description, icon: Icon, extras = [] }: { 
  year: string; 
  title: string; 
  description: string; 
  icon: any;
  extras?: { label: string; value: string }[];
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex gap-6 mb-12"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
          transition={{ duration: 0.4 }}
          className="w-0.5 flex-grow bg-gradient-to-b from-blue-500 to-transparent mt-4"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1"
      >
        <span className="text-blue-500 font-semibold text-lg">{year}</span>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">{description}</p>
        {extras.length > 0 && (
          <div className="space-y-2">
            {extras.map((extra, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <span className="font-semibold">{extra.label}:</span>
                <span>{extra.value}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an enthusiastic DevOps Engineer and Backend Web Developer, I excel in both collaborative team settings and as an 
            independent contributor, possessing a strong drive for innovation, problem-solving, and experience in automation 
            and troubleshooting.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <a href="mailto:Parmarnikunj266@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>Parmarnikunj266@gmail.com</span>
            </a>
            <a href="mailto:Nikunj.pict21@sot.pdpu.ac.in" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>Nikunj.pict21@sot.pdpu.ac.in</span>
            </a>
            <a href="tel:+919328585276" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Phone className="w-5 h-5" />
              <span>+91-9328585276</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Timeline
            year="Jan 2024 - Present"
            title="Backend Engineer at TechnoCruitX, Ahmedabad"
            description="Leading backend development initiatives and implementing scalable solutions. Working with modern technologies and best practices in software development."
            icon={Server}
          />
          
          <Timeline
            year="Sept 2024 - Present"
            title="Computer Networks Research Project"
            description="Leading a team of three members on an innovative project focused on Computer and Communication Networks. Developing a system to connect over five trucks with sequential communication protocols directed by the lead truck."
            icon={Cloud}
          />

          <Timeline
            year="May - June 2024"
            title="Full Stack Web Developer Intern"
            description="Developed 'QuizIO' - An online quiz web application using Node.js, React.js, and Google Firebase Firestore. Integrated ChatGPT API for quiz question generation. Responsible for design, frontend development, testing, and cloud deployment."
            icon={Code}
          />

          <Timeline
            year="2021 - 2025"
            title="B.Tech in Information and Communication Technology"
            description="Currently pursuing with excellent academic performance and practical project experience."
            icon={GraduationCap}
            extras={[
              { label: "CGPA", value: "8.93/10" },
              { label: "University", value: "School of Technology, PDPU" }
            ]}
          />

          <Timeline
            year="2020 - 2021"
            title="HSC (12th), GSHSEB"
            description="Completed Higher Secondary Education with strong academic performance."
            icon={Brain}
            extras={[
              { label: "Percentage", value: "80.5%" }
            ]}
          />

          <Timeline
            year="2019"
            title="SSC (10th), GSHSEB"
            description="Achieved excellent results in Secondary School Certificate."
            icon={Briefcase}
            extras={[
              { label: "Percentage", value: "89.7%" }
            ]}
          />

          <Timeline
            year="Dec 2023"
            title="Professional Certifications"
            description="Continuously expanding knowledge and skills through professional certifications."
            icon={Award}
            extras={[
              { label: "NPTEL", value: "Understanding Incubation and Entrepreneurship" },
              { label: "Coursera", value: "Monitoring and Observability for Development and DevOps" }
            ]}
          />

          <Timeline
            year=""
            title="Languages"
            description="Proficient in multiple languages enabling effective communication across diverse teams."
            icon={Globe}
            extras={[
              { label: "Languages", value: "English, Hindi, and Gujarati" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default About;