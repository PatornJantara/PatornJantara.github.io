import type { LucideIcon } from "lucide-react";
import { Code2, ScanEye, Cpu, Wrench } from "lucide-react";

export type SkillColor = "blue" | "emerald" | "amber" | "purple";

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillGroup {
  id: number;
  title: string;
  icon: LucideIcon;
  color: SkillColor;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Programming",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "C / C++", level: 4 },
      { name: "Visual C++ (MFC)", level: 4 },
      { name: "Python", level: 2 }, // TODO: edit or remove
    ],
  },
  {
    id: 2,
    title: "Machine Vision",
    icon: ScanEye,
    color: "purple",
    skills: [
      { name: "MVTec HALCON", level: 4 },
      { name: "OpenCV", level: 4 },
      { name: "Image Processing", level: 4 },
    ],
  },
  {
    id: 3,
    title: "Hardware & Electronics",
    icon: Cpu,
    color: "emerald",
    skills: [
      { name: "Test Equipment", level: 3 },
      { name: "PLC", level: 2 },
      { name: "PCB Design", level: 3 },
    ],
  },
  {
    id: 4,
    title: "Engineering",
    icon: Wrench,
    color: "amber",
    skills: [
      { name: "Troubleshooting", level: 4 },
      { name: "Root Cause Analysis", level: 3 },
      { name: "Data Visualization", level: 3 },
    ],
  },
];

// Tools shown as chips at the bottom (TODO: edit to match yours)
export const tools: string[] = [
  "Visual Studio",
  "HALCON HDevelop",
  "OpenCV",
  "Altium Designer",
  "Arduino",
  "Excel",
];