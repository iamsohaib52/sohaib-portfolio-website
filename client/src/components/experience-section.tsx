import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, CheckCircle } from "lucide-react";

export function ExperienceSection() {
  const courses = [
    "Design and Analysis of Algorithms",
    "Theory of Automata",
    "Parallel & Distributed Computing",
    "Machine Learning",
    "Digital Image Processing",
    "Information Security",
    "Compiler Construction",
  ];

  const experiences = [
    "Web Development Intern at Codedeskstudio Solutions (June–August 2024)",
    "Led blockchain-based document verification research project", 
    "Developed AI-driven applications for medical image analysis",
    "Contributed to distributed computing research initiatives",
  ];

  const focusAreas = [
    "Blockchain-based Document Verification",
    "Distributed Computing Systems",
    "AI-driven Applications",
    "Machine Learning Research",
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg h-full">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-blue-600 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-xl font-semibold mb-2" data-testid="education-degree">
                      BS Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      In Progress
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 dark:text-blue-200" data-testid="education-cgpa">
                        CGPA: 3.94/4.0
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400" data-testid="education-achievement">
                        Highest Academic Achiever
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Key Courses
                    </h5>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      {courses.map((course, index) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-gray-700 dark:text-gray-300"
                          data-testid={`course-${index}`}
                        >
                          • {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg h-full">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Briefcase className="text-emerald-600 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="space-y-6">
                  {/* Professional Experience */}
                  <div className="border-l-4 border-emerald-600 pl-6">
                    <h4 className="text-xl font-semibold mb-2" data-testid="experience-title">
                      Professional Experience
                    </h4>
                    <div className="mb-4">
                      <h5 className="font-semibold text-emerald-800 dark:text-emerald-200">
                        Web Development Intern
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Codedeskstudio Solutions | June–August 2024
                      </p>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="text-emerald-600 mt-1 mr-2 h-3 w-3 flex-shrink-0" />
                          <span>Assisted in front-end development projects</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-emerald-600 mt-1 mr-2 h-3 w-3 flex-shrink-0" />
                          <span>Contributed to responsive design and UI optimizations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-emerald-600 mt-1 mr-2 h-3 w-3 flex-shrink-0" />
                          <span>Collaborated on enhancing company web applications</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Academic Research */}
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Academic Research & Projects
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Research Contributions & Academic Projects
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {experiences.slice(1).map((experience, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                          data-testid={`research-item-${index}`}
                        >
                          <CheckCircle className="text-blue-600 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                          <span>{experience}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-emerald-800 dark:text-emerald-200">
                      Areas of Focus
                    </h5>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      {focusAreas.map((area, index) => (
                        <motion.span
                          key={area}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-emerald-700 dark:text-emerald-300"
                          data-testid={`focus-area-${index}`}
                        >
                          • {area}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
