import { motion } from "motion/react";
import { skillGroups, tools, type SkillColor } from "../../data/skills";

// Full class names are needed so Tailwind keeps them in the build
const colors: Record<SkillColor, { icon: string; bar: string; chip: string }> = {
  blue:    { icon: "bg-blue-600 shadow-blue-200",       bar: "bg-blue-600",    chip: "text-blue-600" },
  purple:  { icon: "bg-purple-500 shadow-purple-200",   bar: "bg-purple-500",  chip: "text-purple-600" },
  emerald: { icon: "bg-emerald-500 shadow-emerald-200", bar: "bg-emerald-500", chip: "text-emerald-600" },
  amber:   { icon: "bg-amber-500 shadow-amber-200",     bar: "bg-amber-500",   chip: "text-amber-600" },
};

const levelLabel = ["", "Learning", "Familiar", "Proficient", "Advanced", "Expert"];

function LevelBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex gap-1" title={levelLabel[level]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          className={`h-2 w-5 md:w-6 rounded-full ${i < level ? color : "bg-gray-200"}`}
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
        />
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills</h2>
          <p className="text-gray-500 mt-3">Tools and expertise I use every day.</p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => {
            const c = colors[group.color];
            const Icon = group.icon;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl ${c.icon} shadow-lg text-white flex items-center justify-center`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                </div>

                {/* Skills */}
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <div className="flex items-center gap-3">
                        <LevelBar level={skill.level} color={c.bar} />
                        <span className="hidden sm:block w-16 text-xs text-gray-400 text-right">
                          {levelLabel[skill.level]}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Toolbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Toolbox
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;