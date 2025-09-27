# 🚀 Egovia CMS Deployment Guide

## Step 1: Install Node.js (Required)

### Option A: Download from Website
1. Go to https://nodejs.org/
2. Download **Node.js 20.x LTS** (Long Term Support)
3. Run the installer with default settings
4. **Restart PowerShell/Terminal** after installation
5. Verify: `node --version` should show v20.x.x

### Option B: Using Package Manager
```powershell
# Windows Package Manager
winget install OpenJS.NodeJS.LTS

# OR Chocolatey (if installed)
choco install nodejs-lts

# Then restart terminal and verify
node --version
npm --version
```

## Step 2: Local Development Setup

### Install Dependencies
```bash
cd C:\Users\Barok\OneDrive\Documents\Egovia
npm install
```

### Start Development Server
```bash
npm run dev
```
**Expected**: Server starts at http://localhost:3000

### Test Build
```bash
npm run build
```
**Expected**: Clean build with no errors

## Step 3: Verify All Routes Work

### Test These URLs:
- **Home**: http://localhost:3000/
- **Services**: http://localhost:3000/overview
- **Energy Detail**: http://localhost:3000/detail/municipal-energy
- **Transportation**: http://localhost:3000/detail/transportation
- **Housing**: http://localhost:3000/detail/housing
- **Login**: http://localhost:3000/login

### What to Check:
- [ ] All pages load without errors
- [ ] Navigation works between pages
- [ ] Responsive design (test mobile view)
- [ ] IBM Carbon components display correctly
- [ ] No console errors in browser dev tools

## Step 4: Deploy to Vercel (Required Deliverable)

### Option A: GitHub + Vercel (Recommended)
1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial Egovia CMS commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/egovia-cms.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your egovia-cms repository
   - Deploy with default settings

### Option B: Direct Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Step 5: Create Demo Materials

### Screenshots Needed:
- [ ] **Home page** - Hero section and service cards
- [ ] **Services overview** - Grid layout with search
- [ ] **Detail page** - Content blocks and navigation
- [ ] **Mobile view** - Responsive design
- [ ] **Login page** - Authentication interface

### Demo Video (2-3 minutes):
1. **Home page** - Professional government design
2. **Navigation** - Show smooth transitions
3. **Services overview** - Filtering and search UI
4. **Detail page** - Content management capabilities
5. **Responsive design** - Mobile/desktop views
6. **Login flow** - October integration preview

## Step 6: Client Deliverable Package

### Required Files:
- [ ] **Live Vercel URL** - Working demo
- [ ] **Source code** - ZIP or GitHub link
- [ ] **Screenshots** - All major pages
- [ ] **Demo video** - Walkthrough
- [ ] **README.md** - Setup instructions
- [ ] **Implementation notes** - Technical decisions

### Presentation Script:
```
"This is Egovia CMS - a government-grade content management system built with:
- Next.js 14 and TypeScript for modern web standards
- IBM Carbon Design System for accessibility compliance
- Responsive design that works on all devices
- Structured for easy Strapi CMS integration in October

Let me show you the key features..."
```

## Step 7: Performance Checklist

### Before Client Demo:
- [ ] All routes load under 2 seconds
- [ ] No console errors or warnings
- [ ] Mobile navigation works smoothly
- [ ] All buttons and links functional
- [ ] Professional appearance maintained
- [ ] Content displays correctly

### Lighthouse Scores (Target):
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 90+

## Troubleshooting

### Common Issues:
1. **Build Errors**: Check TypeScript types and imports
2. **Styling Issues**: Verify Carbon CSS imports
3. **Route Errors**: Check file structure in src/app/
4. **Deploy Errors**: Ensure all dependencies in package.json

### Quick Fixes:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run build

# Verify all files exist
node test-structure.js
```

## Success Criteria ✅

**Ready for client presentation when:**
- [ ] Live Vercel demo works perfectly
- [ ] All routes accessible and functional
- [ ] Professional government appearance
- [ ] Responsive design tested
- [ ] Demo materials prepared
- [ ] No technical issues during presentation

---

**Timeline**: Complete all steps by end of September 21, 2025
**Next Phase**: Strapi CMS integration in October 2025

