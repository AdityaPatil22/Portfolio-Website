import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Code2 } from "lucide-react";
import Heading from "../../components/heading/Heading";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:adityapatil7649@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "adityapatil7649@gmail.com",
      href: "mailto:adityapatil7649@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AdityaPatil22",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-patil-596413223/",
      icon: <Linkedin size={24} />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/aditya1592/",
      icon: <Code2 size={24} />,
    },
  ];

  return (
    <>
      <div id="contact">
        <Heading title="Get In Touch" />
      </div>

      <div className="contact-container">
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="contact-subtitle">Let's Connect</h2>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-info-text">
                    <span className="contact-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="contact-value link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h3 className="social-heading">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="send-another-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
