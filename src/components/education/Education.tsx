import { useState, useEffect } from "react";
import { education } from "../../data/education";
import { MapPin, Calendar, GraduationCap, Award, BookOpen, Lightbulb, FileText, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function InstitutionLogo({ src, name }: { src?: string; name: string }) {
  const [error, setError] = useState(false);

  const initials = name
    .replace(/[()]/g, "")
    .split(" ")
    .filter((w) => w && w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white flex items-center justify-center overflow-hidden shadow-sm">
      {src && !error ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-2"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : initials ? (
        <span className="text-base font-bold text-blue-600">{initials}</span>
      ) : (
        <GraduationCap className="text-blue-600" size={28} />
      )}
    </div>
  );
}

function Education() {
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  useEffect(() => {
    if (!activePdf) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActivePdf(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activePdf]);

  return (
    <section id="education" className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Education</h2>
          <p className="text-gray-500 mt-3">
            The foundation behind my engineering career.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-linear-to-b from-blue-600 to-blue-400" />

              <div className="p-6 md:p-8 pl-8 md:pl-10">

                {/* Top row */}
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <InstitutionLogo src={item.logo} name={item.institution} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.degree}
                      </h3>
                      <p className="text-gray-700 font-medium">{item.field}</p>
                      <p className="text-blue-600 font-semibold mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 space-y-2 md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar size={16} />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                  </div>
                </div>

                {/* GPA / Honors badges */}
                {(item.gpa || item.honors) && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {item.gpa && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold bg-blue-50 text-blue-700 rounded-lg">
                        <GraduationCap size={16} />
                        GPA {item.gpa}
                      </span>
                    )}
                    {item.honors && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold bg-amber-50 text-amber-700 rounded-lg">
                        <Award size={16} />
                        {item.honors}
                      </span>
                    )}
                  </div>
                )}

                {item.description && (
                  <p className="text-gray-600 mt-5 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Senior project highlight */}
                {item.project && (
                  <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <Lightbulb size={16} className="text-blue-600" />
                        Senior Project
                      </div>
                      {item.project.projectPdf && (
                        <button
                          onClick={() => {
                            setActivePdf(item.project!.projectPdf!);
                            setActiveTitle(item.project!.title);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <FileText size={14} />
                          View Paper (PDF)
                        </button>
                      )}
                    </div>
                    <p className="font-semibold text-gray-900 mt-2">
                      {item.project.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {item.project.description}
                    </p>
                  </div>
                )}

                {/* Activities */}
                {item.activities && item.activities.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-blue-600">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Coursework */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                      <BookOpen size={16} className="text-blue-600" />
                      Relevant Coursework
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-600 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePdf(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-5xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {activeTitle}
                  </h3>
                  <p className="text-xs text-gray-500">Project Documentation</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-blue-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Open in Tab
                    <ExternalLink size={14} />
                  </a>
                  <button
                    onClick={() => setActivePdf(null)}
                    className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Iframe Viewer */}
              <div className="flex-1 bg-gray-100 w-full h-full">
                <iframe
                  src={`${activePdf}#view=FitH`}
                  title={activeTitle}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Education;