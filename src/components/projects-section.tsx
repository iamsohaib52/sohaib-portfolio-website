import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Link, TrendingUp, Scan, Bus } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  tags: Array<{ name: string; color: string }>;
  github: string;
  demo?: string;
  hasDemo?: boolean;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "blockchain-fyp",
      title: "Student Degree Verification using Blockchain",
      description:
        "Final Year Project implementing a decentralized system for academic credential verification using blockchain technology, ensuring tamper-proof degree authentication.",
      icon: Link,
      gradient: "from-blue-600 to-purple-600",
      tags: [
        { name: "Blockchain", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
        { name: "Solidity", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
        { name: "Web3", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      ],
      github: "https://github.com/iamsohaib52/student-degree-verification-using-blockchain",
      demo: "https://student-degree-verification-using-b.vercel.app/",
    },
    {
      id: "sentiment-analysis",
      title: "Stock Market Sentiment Analysis",
      description:
        "Machine learning application that analyzes market sentiment from news articles and social media to predict stock price movements with high accuracy.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      tags: [
        { name: "Python", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
        { name: "NLP", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
        { name: "Scikit-learn", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
      ],
      github: "https://github.com/iamsohaib52/stock-market-sentiment-analysis",
      demo: "https://huggingface.co/spaces/sohaib52/stock_sentiment_analysis",
    },
    {
      id: "fracture-detection",
      title: "Fracture Detection in X-ray Images",
      description:
        "Computer vision system using deep learning to automatically detect bone fractures in X-ray images, assisting medical professionals in diagnosis.",
      icon: Scan,
      gradient: "from-red-500 to-pink-600",
      tags: [
        { name: "OpenCV", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
        { name: "Deep Learning", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
        { name: "Medical AI", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      ],
      github: "#",
      hasDemo: false,
    },
    {
      id: "transport-system",
      title: "Transport Management System",
      description:
        "Comprehensive database system for managing public transportation including route optimization, scheduling, and real-time tracking capabilities.",
      icon: Bus,
      gradient: "from-indigo-500 to-blue-600",
      tags: [
        { name: "MS SQL", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
        { name: "C#", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
        { name: "Windows Forms", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
      ],
      github: "https://github.com/iamsohaib52/Transport-Management-System",
      hasDemo: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="project-card bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Project Icon Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <IconComponent className="text-white text-6xl" size={96} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4" data-testid={`project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag.name}
                          variant="secondary"
                          className={tag.color}
                          data-testid={`project-tag-${project.id}-${tag.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:underline p-0"
                        data-testid={`project-github-${project.id}`}
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      {project.hasDemo !== false && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 dark:text-blue-400 hover:underline p-0"
                          data-testid={`project-demo-${project.id}`}
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
