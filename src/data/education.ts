import type { Education } from "../types/education";

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Electrical Engineering",
    institution: "Khon Kaen University",
    logo: "/images/university.png",
    period: "2015 – 2019",
    location: "Khon Kaen, Thailand",
    gpa: "2.71 / 4.00",
    description:
      "Specialized in Electrical Power Engineering (power systems, machines, PLC/automation), supported by hands-on power labs, an EGAT hydro plant internship, and a vision-robotics capstone.",
    project: {
      title: "Tic Tac Toe Playing Robot",
      description:
        "Developed a robot capable of playing Tic Tac Toe against a human opponent, utilizing computer vision for board state recognition and robotic arm control for making moves.",
      projectPdf: "/docs/B_Eng_project.pdf", // path to your PDF
      },
    coursework: [
      "Power Systems",
      "Electrical Machines",
      "Control Systems",
      "PLC Programming",
      "Automation Systems",
      "Electronics and Circuit Design",
    ],
    activities: [
      "Internship at EGAT Bhumibol Hydro Power Plant (2018)",
    ],
  },
    {
    id: 2,
    degree: "High School Diploma",
    field: "Math-Science",
    institution: "Kalasinpittayasan School",
    logo: "/images/school.png",
    period: "2012 – 2015",
    location: "Kalasin, Thailand",
    gpa: "3.16 / 4.00",
    description:
        "Focused on Math and Science subjects",

    activities: [
      "Top 1000 students in PAT3 (Engineering Aptitude Test) in Thailand (2015)",
    ],
  },
];