import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const skills = [
    { name: "C++", icon: "💻", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { name: "Python", icon: "🐍", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
    { name: "Java", icon: "☕", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
    { name: "JavaScript", icon: "🟨", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
    { name: "Smart Contracts", icon: "📄", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
    { name: "Solidity", icon: "🔷", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
    { name: "Web3.js", icon: "🌐", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    { name: "Tailwind CSS", icon: "🎨", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile picture */}
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/profile1.png" 
                alt="Muhammad Sohaib - Profile Picture" 
                className="w-full h-full object-cover"
                data-testid="profile-picture"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Muhammad Sohaib, a computer science student passionate about
              building impactful solutions. Currently working on my Final Year
              Project on{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                Student Degree Verification using Blockchain
              </strong>
              .
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[120px]"
                    data-testid={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <div className="text-2xl mb-3 block">{skill.icon}</div>
                    <Badge variant="secondary" className={`${skill.color} text-sm text-center px-3 py-1`}>
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
