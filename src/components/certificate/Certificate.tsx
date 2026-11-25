import { useState } from "react";
import { certificates } from "../../data/certificates";
import type { Certificate as CertificateType } from "../../data/certificates";
import { Award, Calendar, Eye, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function CertificateIcon({ src, name }: { src?: string; name: string }) {
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
    <div className="w-12 h-12 shrink-0 rounded-xl border border-gray-100 bg-white flex items-center justify-center overflow-hidden shadow-sm">
      {src && !error ? (
        <img
          src={src}
          alt={`${name} icon`}
          className="w-full h-full object-contain p-1.5"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : initials ? (
        <span className="text-xs font-bold text-blue-600">{initials}</span>
      ) : (
        <Award className="text-blue-600" size={24} />
      )}
    </div>
  );
}

function Certificate() {
  const [selectedCert, setSelectedCert] = useState<CertificateType | null>(null);

  return (
    <section id="certificates" className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Credentials & Training
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Certificates
          </h2>
          <p className="text-gray-500 mt-3">
            Professional licenses, certifications, and specialized training.
          </p>
        </div>

        {/* Grid of certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <CertificateIcon src={cert.icon} name={cert.issuer} />
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  {cert.title}
                </h3>

                <p className="text-blue-600 font-medium text-sm mt-1">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <ShieldCheck size={14} />
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {cert.credentialImage && (
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    <Eye size={14} />
                    View Certificate
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup for Certificate Image */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl p-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mt-0.5">
                    {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div className="mt-4 flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden max-h-[70vh]">
                <img
                  src={selectedCert.credentialImage}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Footer info */}
              {selectedCert.credentialId && (
                <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                  <ShieldCheck size={14} className="text-blue-600" />
                  Credential ID: {selectedCert.credentialId}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificate;