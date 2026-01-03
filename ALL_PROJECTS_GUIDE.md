# All Projects Guide

## 📁 File Structure

- **`src/data/allProjects.ts`** - Main file where you add/remove all your projects
- **`src/data/projects.ts`** - Type definitions (keep as is)
- **`src/pages/AllProjects.tsx`** - The "All Projects" page component

---

## 🎯 How It Works

1. **Homepage** shows only **featured projects** (projects with `featured: true`)
2. **All Projects page** shows **all projects** organized by skill level
3. Each project is labeled with:
   - **Skill Level**: `beginner`, `intermediate`, or `expert`
   - **Impact**: `low`, `medium`, or `high`

---

## ➕ Adding a New Project

Edit `src/data/allProjects.ts` and add a new project object:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  subtitle: "Project Subtitle",
  description: "Detailed description of what the project does...",
  tech: ["Tech1", "Tech2", "Tech3"],
  icon: Code2, // Choose from lucide-react icons
  featured: false, // Set to true to show on homepage
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
      url: "https://github.com/yourusername/repo",
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
      description: "Brief description",
    },
  ],
  status: "completed", // or "in-progress" or "archived"
},
```

---

## 🗑️ Removing a Project

Simply delete the project object from the `allProjects` array in `src/data/allProjects.ts`.

---

## 🏷️ Skill Level Guidelines

### Beginner Level
- Learning projects
- Simple implementations
- Tutorial-based work
- Personal practice projects

### Intermediate Level
- Moderate complexity
- Production-ready features
- Real-world applications
- Good problem-solving

### Expert Level
- Advanced implementations
- Complex algorithms
- System-level work
- Deep technical knowledge required

---

## 📊 Impact Level Guidelines

### Low Impact
- Personal projects
- Learning exercises
- Small-scale tools

### Medium Impact
- Useful tools
- Small-scale applications
- Practical solutions

### High Impact
- Production systems
- Significant problem-solving
- Complex architectures
- Real-world deployments

---

## 🎨 Available Icons

You can use any icon from `lucide-react`. Common ones:
- `Code2` - General coding
- `Cpu` - Hardware/low-level
- `Server` - Backend
- `Database` - Databases
- `Globe` - Web apps
- `Smartphone` - Mobile apps
- `Gamepad2` - Games
- `Brain` - AI/ML
- `Zap` - Performance/speed
- `MessageSquare` - Chat/messaging
- `Wrench` - Tools/utilities

---

## 🔗 Link Types

Available link types:
- `github` - GitHub repository
- `demo` - Live demo/preview
- `docs` - Documentation
- `video` - Video demo
- `article` - Blog post/article

---

## ✅ Best Practices

1. **Keep IDs unique**: Use descriptive, kebab-case IDs (e.g., `"my-awesome-project"`)

2. **Set featured wisely**: Only mark your absolute best 3-5 projects as `featured: true`

3. **Be honest with skill levels**: Accurate self-assessment shows growth and maturity

4. **Update regularly**: Add new projects as you complete them

5. **Remove old/irrelevant projects**: Keep your portfolio fresh and relevant

6. **Write clear descriptions**: Help visitors understand what you built and why

---

## 📍 Navigation

- **Homepage** → Shows featured projects only
- **"View All Projects" button** → Takes you to All Projects page
- **Navigation "All Projects" link** → Takes you to All Projects page
- **All Projects page** → Shows all projects grouped by skill level

---

## 🚀 Quick Example

```typescript
{
  id: "todo-app",
  title: "Todo App",
  subtitle: "React + TypeScript",
  description: "A modern todo application with local storage persistence and dark mode support.",
  tech: ["React", "TypeScript", "Tailwind CSS"],
  icon: Code2,
  featured: false,
  skillLevel: {
    level: "beginner",
    impact: "low"
  },
  highlights: [
    "Local storage",
    "Dark mode",
    "Responsive design"
  ],
  links: [
    {
      type: "github",
      label: "View Code",
      url: "https://github.com/username/todo-app",
    },
    {
      type: "demo",
      label: "Live Demo",
      url: "https://todo-app-demo.netlify.app",
    },
  ],
  status: "completed",
}
```

---

Happy coding! Add as many projects as you want - the All Projects page will organize them beautifully! 🎉

