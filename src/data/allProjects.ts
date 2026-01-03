/**
 * All Projects Data
 * Complete list of all projects with skill levels and impact ratings
 * Easily add or remove projects here
 */

import { 
  Cpu, 
  MessageSquare, 
  Wrench, 
  Code2, 
  Database, 
  Server, 
  Brain,
  Zap,
  Smartphone,
  Globe,
  Gamepad2,
  LucideIcon 
} from "lucide-react";

// Re-export types from projects.ts
export type { ProjectLink, PublishedApp, SkillLevel, ImpactLevel, SkillLevelInfo } from "./projects";

import type { Project } from "./projects";

/**
 * All Projects Database
 * Add your projects here with skill level and impact rating
 * 
 * Skill Levels:
 * - beginner: Learning projects, simple implementations
 * - intermediate: Moderate complexity, production-ready features
 * - expert: Advanced implementations, complex algorithms, system-level work
 * 
 * Impact Levels:
 * - low: Personal projects, learning exercises
 * - medium: Useful tools, small-scale applications
 * - high: Production systems, significant impact, complex problem-solving
 */

export const allProjects: Project[] = [
  // Featured Projects (also shown on homepage)
  {
    id: "cuda-transformer",
    title: "CUDA Transformer",
    subtitle: "From Scratch",
    description: "Single-block Transformer architecture implemented directly in CUDA C/C++ using only basic libraries. Manual implementation of matrix multiplication, attention mechanisms, softmax, and linear projections with explicit GPU memory management.",
    tech: ["CUDA", "C/C++", "GPU Kernels", "Linear Algebra"],
    icon: Cpu,
    featured: true,
    skillLevel: {
      level: "expert",
      impact: "high"
    },
    highlights: [
      "No PyTorch/TensorFlow/cuDNN",
      "Manual memory allocation",
      "Thread/block optimization",
      "Attention mechanism from scratch"
    ],
    links: [
      {
        type: "github",
        label: "View Code",
        url: "https://github.com/Shaurya03072007/cuda.git",
      },
      {
        type: "docs",
        label: "Documentation",
        url: "https://github.com/Shaurya03072007/transformers.git",
      },
    ],
    status: "completed",
  },
  {
    id: "anonymous-chat",
    title: "Anonymous Real-Time Chat",
    subtitle: "Privacy-First Architecture",
    description: "Fully anonymous communication system with no phone, email, or identity requirements. Real-time messaging using WebSockets with broker-based session routing, designed and deployed on constrained free-tier infrastructure.",
    tech: ["React", "Node.js", "Socket.io", "Render"],
    icon: MessageSquare,
    featured: true,
    skillLevel: {
      level: "intermediate",
      impact: "high"
    },
    highlights: [
      "Zero identity leakage",
      "Broker-based routing",
      "Concurrent user handling",
      "Cold start optimization"
    ],
    links: [
      {
        type: "github",
        label: "Full Code",
        url: "https://github.com/Shaurya03072007/anonymous_chat.git",
      },
      {
        type: "demo",
        label: "Live Demo",
        url: "https://anonymous-chat-7lsk.onrender.com/",
      },
    ],
    publishedApps: [
      {
        platform: "Web",
        name: "Anonymous Chat",
        url: "https://anonymous-chat-7lsk.onrender.com/",
        description: "Live anonymous chat application",
      },
    ],
    status: "completed",
  },
  {
    id: "embedded-systems-lab",
    title: "Embedded Systems Lab",
    subtitle: "Hardware-Software Integration",
    description: "Collection of embedded projects spanning STM32 microcontroller programming, ESP32 IoT applications, LoRa communication testing, and Raspberry Pi integrations with various protocols.",
    tech: ["STM32", "ESP32", "LoRa", "C/C++", "Python", "SPI/I2C/UART"],
    icon: Wrench,
    featured: true,
    skillLevel: {
      level: "intermediate",
      impact: "medium"
    },
    highlights: [
      "Register-level MCU control",
      "RA-02 LoRa modules",
      "Real-time constraints",
      "Protocol debugging"
    ],
    links: [
      {
        type: "github",
        label: "View Code",
        url: "https://github.com/Shaurya03072007/firefighter_observer.git",
      },
      {
        type: "docs",
        label: "Project Details",
        url: "https://github.com/Shaurya03072007/firefighter_observer.git",
      },
    ],
    status: "in-progress",
  },

  // Add more projects below - Easy to add/remove!
  
  // Example template (uncomment and fill in):
  /*
  {
    id: "project-id",
    title: "Project Title",
    subtitle: "Project Subtitle",
    description: "Detailed description of what the project does and how it works.",
    tech: ["Tech1", "Tech2", "Tech3"],
    icon: Code2, // Choose icon from lucide-react
    featured: false,
    skillLevel: {
      level: "beginner", // or "intermediate" or "expert"
      impact: "low" // or "medium" or "high"
    },
    highlights: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3"
    ],
    links: [
      {
        type: "github",
        label: "View Code",
        url: "https://github.com/username/repo",
      },
      {
        type: "demo",
        label: "Live Demo",
        url: "https://demo-url.com",
      },
    ],
    publishedApps: [
      {
        platform: "Web",
        name: "App Name",
        url: "https://app-url.com",
        description: "App description",
      },
    ],
    status: "completed",
  },
  */
];

// Helper functions
export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter(project => project.featured);
};

export const getProjectsByLevel = (level: "beginner" | "intermediate" | "expert"): Project[] => {
  return allProjects.filter(project => project.skillLevel?.level === level);
};

export const getProjectsByImpact = (impact: "low" | "medium" | "high"): Project[] => {
  return allProjects.filter(project => project.skillLevel?.impact === impact);
};

export const getAllProjects = (): Project[] => {
  return allProjects;
};

// Export for easy access
export default allProjects;

