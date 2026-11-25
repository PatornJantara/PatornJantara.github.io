export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  logo?: string;
  period: string;
  location: string;
  gpa?: string;
  honors?: string;
  description?: string;
  project?: {
    title: string;
    description: string;
    projectPdf?: string; // path to your PDF file in public/
  };
  coursework?: string[];
  activities?: string[];
}