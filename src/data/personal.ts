/**
 * Personal Information & Contact Details
 * Centralized source for all personal information used across the portfolio
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name from lucide-react (for reference)
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
}

export const personalInfo = {
  // Full name
  fullName: "JOROPALLI SHAURYA REDDY",
  displayName: "Shaurya Reddy",
  
  // Professional title/role
  title: "Full Stack Developer",
  subtitle: "Embedded Systems • Real-Time Architectures • Privacy-First",
  
  // Bio/Description
  bio: "Systems-oriented developer with deep expertise in low-level GPU computing, embedded systems, and real-time applications. I think in bottlenecks, not buzzwords.",
  
  // Tagline
  tagline: "Interested in revolutionary, not incremental ideas.",
  
  // Contact Information
  contact: {
    email: "jshauryareddy@gmail.com",
    phone: "+91 8977777995", // Add your phone if desired
    location: "Hyderabad , Telegnana , India", // Add your location if desired
  } as ContactInfo,
  
  // Social Media Links
  social: {
    github: {
      name: "GitHub",
      url: "https://github.com/Shaurya03072007",
      icon: "Github",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joropalli-shaurya-reddy-331ab8304",
      icon: "Linkedin",
    },
    // Add more social links as needed
    // twitter: {
    //   name: "Twitter",
    //   url: "https://twitter.com/yourhandle",
    //   icon: "Twitter",
    // },
  } as Record<string, SocialLink>,
  
  // Resume/CV
  resume: {
    url: "", // Add link to your resume PDF if you have one
    fileName: "Shaurya_Reddy_Resume.pdf",
  },
  
  // Professional focus areas
  focusAreas: [
    "Low-Level GPU Computing",
    "Embedded Systems",
    "Real-Time Applications",
    "Privacy-First Design",
  ],
} as const;

// Export individual fields for convenience
export const { fullName, displayName, title, subtitle, bio, tagline, contact, social, resume } = personalInfo;

