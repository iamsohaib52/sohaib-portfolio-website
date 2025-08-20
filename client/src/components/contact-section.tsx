import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please enter a valid email address";
    }
    if (!formData.message.trim()) return "Message is required";
    if (formData.message.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      toast({
        title: "Validation Error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      name: "Email",
      href: "mailto:sohaib.cs@outlook.com",
      icon: Mail,
      description: "sohaib.cs@outlook.com",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    },
    {
      name: "GitHub",
      href: "https://github.com/iamsohaib52",
      icon: Github,
      description: "@iamsohaib52",
      color: "bg-gray-800 dark:bg-gray-600",
      hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-sohaib-5b6a30248",
      icon: Linkedin,
      description: "Muhammad Sohaib",
      color: "bg-blue-700",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-800",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a
            conversation about technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors"
                      data-testid="contact-name-input"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors"
                      data-testid="contact-email-input"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hi!"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors resize-none"
                      data-testid="contact-message-input"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    data-testid="contact-submit-button"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these platforms
              </p>
            </div>

            <div className="grid gap-6">
              {contactLinks.map((link, index) => {
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
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl ${link.hoverColor} transition-colors group`}
                    data-testid={`contact-link-${link.name.toLowerCase()}`}
                  >
                    <div
                      className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="text-white text-xl" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {link.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {link.description}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
