import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:sohaib.cs@outlook.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/iamsohaib52",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-sohaib-5b6a30248",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">
            Muhammad Sohaib
          </h3>
          <p className="text-gray-400 mb-6" data-testid="footer-tagline">
            Building the future with code, one project at a time.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid={`footer-social-${link.name.toLowerCase()}`}
                >
                  <IconComponent size={32} />
                </motion.a>
              );
            })}
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400" data-testid="footer-copyright">
              &copy; 2025 Muhammad Sohaib. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
