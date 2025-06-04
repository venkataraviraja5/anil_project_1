'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send");
      }
    } catch (err) {
      setStatus("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for questions or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  name='name'
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </motion.button>
              {status && <p className={`text-sm ${status === "Message sent!" ? 'text-green-400' : 'text-yellow-400'}`}>{status}</p>}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-500/10 p-3 rounded-lg">
                    <FiMail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-gray-300">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-lg">
                    <FiPhone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="mt-1 text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-500/10 p-3 rounded-lg">
                    <FiMapPin className="h-6 w-6 text-pink-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Office</h3>
                    <p className="mt-1 text-gray-300">123 Main St, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative h-64 rounded-2xl shadow-xl overflow-hidden bg-gray-800 border border-gray-700"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">Map would appear here</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}