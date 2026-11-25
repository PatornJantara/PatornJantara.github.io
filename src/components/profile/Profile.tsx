
import {
  Mail,
  MapPin,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

import { motion } from "motion/react";

import { profile } from "../../data/profile";

export default function Profile() {
  return (
    <section
      id="profile"
      className="min-h-[80vh] flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Profile Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              Welcome to my webpage.
            </p>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Hello, I'm
                <span className="block text-blue-600 mt-2">
                  {profile.name}
                </span>
              </h1>

              <h2 className="text-xl font-semibold text-gray-600 mt-5">
                {profile.subtitle}
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              {profile.introduction}
            </p>

            {/* Contact */}
            <div className="flex flex-wrap gap-4 text-gray-500 text-sm">

              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {profile.location}
              </span>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Mail size={16} />
                Email
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-4">

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 border rounded-lg hover:bg-blue-50"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 border rounded-lg hover:bg-gray-100"
              >
                <FaGithub size={20} />
              </a>

                            <a
                href={profile.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="p-3 border rounded-lg hover:bg-gray-100"
              >
                <FaMedium size={20} />
              </a>

            </div>

            {/* Download Resume */}
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <img
              src={profile.photo}
              alt="Profile portrait"
              className="w-64 h-80 md:w-80 md:h-96
              object-cover rounded-2xl shadow-xl
              transition-transform duration-300 hover:scale-105"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
