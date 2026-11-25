import { useState } from "react";
import { experiences } from "../../data/experience";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

function CompanyLogo({ src, name }: { src?: string; name: string }) {
  const [error, setError] = useState(false);

  // Initials fallback, e.g. "Nikon (Thailand) Co., Ltd." -> "NT"
  const initials = name
    .replace(/[()]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-14 h-14 shrink-0 rounded-lg border border-gray-100 bg-white flex items-center justify-center overflow-hidden shadow-sm">
      {src && !error ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-1.5"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-sm font-bold text-blue-600">{initials}</span>
      )}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Work Experience
          </h2>
          <p className="text-gray-500 mt-3">
            My professional experience and technical contributions.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative pl-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  {/* Logo + role/company */}
                  <div className="flex items-center gap-4">
                    <CompanyLogo src={item.logo} name={item.company} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.role}
                      </h3>
                      <p className="text-blue-600 font-semibold mt-1">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-blue-600">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;