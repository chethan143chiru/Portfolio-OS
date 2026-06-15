export type ViewSection = 'Home' | 'Projects' | 'Certificates' | 'Resume' | 'Contact';

export interface ProjectType {
  id: string | number;
  name: string;
  description: string;
  starsCount: number;
  forksCount: number;
  language: string;
  updatedAt: string;
  url: string;
  readmeUrl?: string;
  imageUrl?: string;
  tags: string[];
}

export interface CertificationType {
  id: string;
  name: string;
  company: string;
  issuedDate: string;
  badgeUrl: string;
  credentialUrl: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
}

export interface ResumeDetails {
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    grade?: string;
    highlights: string[];
  }>;
  experience: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }>;
  skillsMatrix: {
    programming: string[];
    frameworks: string[];
    cloudAndDevOps: string[];
    mlAndData: string[];
  };
}
