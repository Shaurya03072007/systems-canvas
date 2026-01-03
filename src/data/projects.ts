/**
 * Projects Data
 * All project information including links, descriptions, and published applications
 */

import { Cpu, MessageSquare, Wrench, LucideIcon } from "lucide-react";

export interface ProjectLink {
  type: "github" | "demo" | "docs" | "video" | "article";
  label: string;
  url: string;
}

export interface PublishedApp {
  platform: string;
  name: string;
  url: string;
  description?: string;
}

export type SkillLevel = "beginner" | "intermediate" | "expert";
export type ImpactLevel = "low" | "medium" | "high";

export interface SkillLevelInfo {
  level: SkillLevel;
  impact: ImpactLevel;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  featured: boolean;
  highlights: string[];
  links: ProjectLink[];
  publishedApps?: PublishedApp[];
  skillLevel?: SkillLevelInfo; // Optional for featured projects on homepage
  // Optional: Add more project metadata
  startDate?: string;
  endDate?: string;
  status?: "completed" | "in-progress" | "archived";
}

export const projects: Project[] = [
  {
    id: "cuda-transformer",
    title: "CUDA Transformer",
    subtitle: "From Scratch",
    description: "Single-block Transformer architecture implemented directly in CUDA C/C++ using only basic libraries. Manual implementation of matrix multiplication, attention mechanisms, softmax, and linear projections with explicit GPU memory management.",
    tech: ["CUDA", "C/C++", "GPU Kernels", "Linear Algebra"],
    icon: Cpu,
    featured: true,
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
        url: "https://github.com/Shaurya03072007/cuda.git", // Replace with actual repo URL
      },
      {
        type: "docs",
        label: "Documentation",
        url: "https://github.com/Shaurya03072007/transformers.git", // Replace with actual docs URL
      },
      // Add more links as needed
      // {
      //   type: "video",
      //   label: "Demo Video",
      //   url: "https://youtube.com/...",
      // },
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
    featured: false,
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
        url: "https://github.com/Shaurya03072007/anonymous_chat.git", // Replace with actual repo URL
      },
      {
        type: "demo",
        label: "Live Demo",
        url: "https://anonymous-chat-7lsk.onrender.com/", // Replace with actual demo URL
      },
    ],
    publishedApps: [
      {
        platform: "Web",
        name: "Anonymous Chat",
        url: "https://anonymous-chat-7lsk.onrender.com/", // Replace with actual URL
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
    featured: false,
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
        url: "https://github.com/Shaurya03072007/firefighter_observer.git", // Replace with actual repo URL
      },
      {
        type: "docs",
        label: "Project Details",
        url: "https://github.com/Shaurya03072007/firefighter_observer.git", // Replace with actual docs URL
      },
    ],
    status: "in-progress",
  },
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get published apps across all projects
export const getAllPublishedApps = (): PublishedApp[] => {
  return projects
    .filter(project => project.publishedApps && project.publishedApps.length > 0)
    .flatMap(project => project.publishedApps || []);
};

// Export for easy access
export default projects;

