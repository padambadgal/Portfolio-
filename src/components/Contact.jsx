import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { siteConfig } from '../data/siteConfig';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form sending (ready for backend / EmailJS integration)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Get In Touch"
          title="Have a project in mind?"
          subtitle="Let's build something great together. Send me a message and I'll get back to you promptly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                Whether you need a new web application built from scratch, full-stack MERN features, or freelance consultations, feel free to reach out directly.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4">

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.socialLinks.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {siteConfig.socialLinks.email}
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    GitHub Profile
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {siteConfig.socialLinks.github.replace('https://', '')}
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-sky-600/10 dark:bg-sky-600/20 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    LinkedIn Network
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate max-w-[220px] sm:max-w-[280px]">
                    {siteConfig.socialLinks.linkedin.replace('https://', '').replace('www.', '')}
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.name
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500/40'
                          }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.email
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500/40'
                          }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="MERN Web App Project / Freelance Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500/40'
                        }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project details, timeline, and goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500/40'
                        }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={Send}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
