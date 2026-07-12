import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Github, Linkedin, Instagram, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState('error');
      setErrorMsg('All fields are required. Please check and try again.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormState('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setFormState('sending');

    // Simulate standard server route/API proxy delay for client feedback
    setTimeout(() => {
      setFormState('success');
      // Clear fields
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#7C3AED]" size={20} />,
      label: "Location",
      value: "East Singhbhum, Jharkhand",
      href: "https://maps.google.com/?q=East+Singhbhum+Jharkhand"
    },
    {
      icon: <Mail className="text-[#7C3AED]" size={20} />,
      label: "Email",
      value: "amritashaw38@gmail.com",
      href: "mailto:amritashaw38@gmail.com"
    },
    {
      icon: <Phone className="text-[#2563EB]" size={20} />,
      label: "Phone",
      value: "+91 7250011238",
      href: "tel:+917250011238"
    }
  ];

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/amrita38", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/amrita-rani-149169409", label: "LinkedIn" },
    { icon: <Instagram size={18} />, url: "https://www.instagram.com", label: "Instagram" }
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase mb-2"
          >
            Connection
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-900 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mt-4 origin-left"
          />
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct Coordinate Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-left-details">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white light:text-zinc-800">
                Contact Information
              </h3>
              <p className="text-sm text-[#A1A1AA] light:text-zinc-600 font-medium leading-relaxed max-w-sm">
                Feel free to reach out for internship opportunities, project collaborations, or just to say hello! I will get back to you as soon as possible.
              </p>

              {/* Coordinates List */}
              <div className="space-y-4 pt-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#111111]/60 light:bg-zinc-50/50 hover:border-[#7C3AED]/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-900/80 light:bg-white border border-zinc-800 light:border-zinc-200 flex items-center justify-center transition-all group-hover:scale-105">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 light:text-zinc-400">
                        {info.label}
                      </div>
                      <div className="text-sm font-bold text-white light:text-zinc-800 group-hover:text-[#7C3AED] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links block */}
            <div className="pt-6 border-t border-[#262626]/50">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-600 mb-4">
                Social Coordinates
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#111111] light:bg-zinc-50 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#7C3AED] hover:shadow-[0_4px_12px_rgba(124,58,237,0.15)] transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-2xl border border-[#262626] light:border-zinc-200 bg-[#111111] light:bg-zinc-50/20 shadow-xl flex flex-col justify-between"
            id="contact-right-form"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4"
                  id="form-success-container"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white light:text-zinc-800 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#A1A1AA] light:text-zinc-600 text-sm max-w-sm leading-relaxed mb-8 font-medium">
                    Thank you for reaching out! I have received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form-el">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-bold text-zinc-400 light:text-zinc-600 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      disabled={formState === 'sending'}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#0A0A0A]/70 text-white placeholder-zinc-700 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all text-sm font-medium disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-zinc-400 light:text-zinc-600 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={formState === 'sending'}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#0A0A0A]/70 text-white placeholder-zinc-700 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all text-sm font-medium disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-zinc-400 light:text-zinc-600 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      disabled={formState === 'sending'}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#0A0A0A]/70 text-white placeholder-zinc-700 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all text-sm font-medium resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error Notification Block */}
                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs flex items-center gap-3"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all hover:translate-y-[-1px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
