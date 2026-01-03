# Data Files Guide

This guide explains the new centralized data files and how to update them.

## 📁 File Structure

```
src/data/
├── personal.ts    # Your personal information, contact details, social links
└── projects.ts    # All project details, links, and published applications
```

---

## 📝 Personal Information (`src/data/personal.ts`)

This file contains all your personal information used across the portfolio.

### What's Included:

- **Name**: Full name displayed in navigation
- **Title & Subtitle**: Professional title and tagline
- **Bio**: Your introduction text
- **Contact**: Email, phone (optional), location (optional)
- **Social Links**: GitHub, LinkedIn, and other social media
- **Resume**: Link to your resume/CV PDF (if available)

### How to Update:

1. **Email**: 
   ```typescript
   contact: {
     email: "your-email@gmail.com", // ✅ Fixed: No more double .com!
   }
   ```

2. **Social Links**:
   ```typescript
   social: {
     github: {
       name: "GitHub",
       url: "https://github.com/yourusername",
       icon: "Github",
     },
     // Add more social links as needed
   }
   ```

3. **Resume Link**:
   ```typescript
   resume: {
     url: "https://your-domain.com/resume.pdf",
     fileName: "Your_Name_Resume.pdf",
   }
   ```

---

## 🚀 Projects Data (`src/data/projects.ts`)

This file contains all project information including links to GitHub repos and live demos.

### Project Structure:

Each project includes:
- **Basic Info**: Title, subtitle, description, tech stack
- **Links**: GitHub repos, demo URLs, documentation links
- **Published Apps**: Live applications with platform and URL
- **Status**: completed, in-progress, or archived
- **Metadata**: Featured flag, highlights, dates

### How to Update Project Links:

1. **GitHub Repository Links**:
   ```typescript
   links: [
     {
       type: "github",
       label: "View Code",
       url: "https://github.com/yourusername/project-name", // ⬅️ Add your repo URL
     }
   ]
   ```

2. **Live Demo Links**:
   ```typescript
   links: [
     {
       type: "demo",
       label: "Live Demo",
       url: "https://your-demo-url.com", // ⬅️ Add your demo URL
     }
   ]
   ```

3. **Published Applications**:
   ```typescript
   publishedApps: [
     {
       platform: "Web",
       name: "Your App Name",
       url: "https://your-app-url.com", // ⬅️ Add your published app URL
       description: "Brief description",
     }
   ]
   ```

### Link Types Available:

- `github` - GitHub repository links
- `demo` - Live demo/preview links
- `docs` - Documentation links
- `video` - Video demo links
- `article` - Blog post or article links

### Example Project Entry:

```typescript
{
  id: "cuda-transformer",
  title: "CUDA Transformer",
  subtitle: "From Scratch",
  description: "Your project description...",
  tech: ["CUDA", "C/C++", "GPU Kernels"],
  icon: Cpu,
  featured: true,
  highlights: ["Feature 1", "Feature 2"],
  links: [
    {
      type: "github",
      label: "View Code",
      url: "https://github.com/yourusername/cuda-transformer",
    },
    {
      type: "demo",
      label: "Live Demo",
      url: "https://your-demo.com",
    },
  ],
  publishedApps: [
    {
      platform: "Web",
      name: "CUDA Transformer Demo",
      url: "https://your-app.com",
    },
  ],
  status: "completed",
}
```

---

## ✅ What Was Fixed

1. **Email Typo**: Fixed `jshauryareddy@gmail.com.com` → `jshauryareddy@gmail.com`
2. **Centralized Data**: All personal info now in one place
3. **Project Links**: Projects now support multiple links (GitHub, demo, docs, etc.)
4. **Published Apps**: New section to showcase live applications
5. **Easy Updates**: Update data files instead of searching through components

---

## 🔄 Components Updated

All components now use the centralized data:

- ✅ **Navigation** → Uses `personalInfo.fullName`
- ✅ **Hero** → Uses `personalInfo.title`, `bio`, `social`, `contact`
- ✅ **Contact** → Uses `personalInfo.contact` and `social`
- ✅ **Projects** → Uses `projects` array with all links
- ✅ **About** → Imports personal data (can use tagline if needed)

---

## 🎯 Next Steps

1. **Update Project URLs**: 
   - Go to `src/data/projects.ts`
   - Replace placeholder URLs with your actual GitHub repos and demo links

2. **Add More Projects**:
   - Copy an existing project object
   - Update the details
   - Add to the `projects` array

3. **Add More Social Links**:
   - Edit `src/data/personal.ts`
   - Add entries to the `social` object

4. **Add Resume**:
   - Upload your resume PDF to your hosting/CDN
   - Add the URL to `personalInfo.resume.url`

---

## 💡 Tips

- **Keep URLs Updated**: Update links when you deploy new versions
- **Test Links**: Verify all links work before deploying
- **Add Descriptions**: Detailed descriptions help visitors understand your projects
- **Use Status**: Mark projects as `in-progress` or `archived` to show current state
- **Featured Projects**: Set `featured: true` for your best work

---

## 📊 Benefits

- ✨ **Single Source of Truth**: Update once, reflected everywhere
- 🎯 **Easy Maintenance**: No more searching through components
- 🔗 **Better Organization**: Clear separation of data and presentation
- 🚀 **Scalability**: Easy to add new projects or update existing ones
- 🐛 **Fewer Bugs**: Centralized data reduces typos and inconsistencies

---

Happy coding! 🎉

