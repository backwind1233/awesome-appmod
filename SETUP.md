# Setup Guide

This guide will help you set up and deploy the Awesome App Modernization website.

## Prerequisites

- Node.js 18 or higher
- npm
- Git
- GitHub account

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/backwind1233/awesome-appmod.git
cd awesome-appmod
```

### 2. Install Dependencies

```bash
cd website
npm install
```

### 3. Start Development Server

```bash
npm start
```

The site will open at `http://localhost:3000/awesome-appmod/`

### 4. Build for Production

```bash
npm run build
```

The built site will be in `website/build/`

## Deploying to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**

### Step 2: Configure Repository Settings

Make sure your repository settings match:
- **Repository name**: `awesome-appmod`
- **Branch**: `main` (or `master`)

### Step 3: Push Your Code

```bash
git add .
git commit -m "Initial commit: awesome-appmod website"
git push origin main
```

### Step 4: GitHub Actions Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
1. Build the website on every push to `main`
2. Deploy to GitHub Pages

You can monitor the deployment:
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Wait for it to complete

### Step 5: Access Your Site

Once deployed, your site will be available at:
```
https://backwind1233.github.io/awesome-appmod/
```

## Troubleshooting

### Build Fails

If the build fails, check:
- Node.js version (must be 18+)
- All dependencies are installed: `npm install`
- No syntax errors in configuration files

### GitHub Pages Not Working

If GitHub Pages isn't working:
1. Check that GitHub Pages is enabled in repository settings
2. Verify the source is set to "GitHub Actions"
3. Check the Actions tab for deployment errors
4. Ensure the `baseUrl` in `docusaurus.config.js` matches your repository name

### 404 Errors

If you get 404 errors:
- Verify `baseUrl` in `docusaurus.config.js` is `/awesome-appmod/`
- Check that assets are in the correct `static/` folder
- Ensure paths use the baseUrl prefix

## Adding New Tasks

To add a new task to the gallery:

1. Edit `website/static/data/tasks.json`
2. Add your task entry:
   ```json
   {
     "id": "my-new-task",
     "title": "My New Task",
     "description": "Description of the task",
     "author": "your-username",
     "repo": "https://github.com/your-username/task-repo",
     "tags": ["tag1", "tag2"],
     "language": "TypeScript",
     "featured": false,
     "createdAt": "2024-12-10"
   }
   ```
3. Commit and push your changes
4. The site will automatically rebuild and deploy

## Customization

### Changing Colors

Edit `website/src/css/custom.css` and modify the CSS variables:
```css
:root {
  --ifm-color-primary: #0078d4;
  /* ... other colors ... */
}
```

### Updating Logo

Replace these files in `website/static/img/`:
- `logo.png` (navbar logo)
- `logo.svg` (SVG version)
- `favicon.ico` (browser icon)

### Adding Documentation

Create new markdown files in `website/docs/` and they'll automatically appear in the documentation.

## Development Tips

### Hot Reload

Changes to most files will hot-reload automatically. If something doesn't update:
```bash
npm run clear
npm start
```

### Testing Production Build

To test the production build locally:
```bash
npm run build
npm run serve
```

### Checking for Broken Links

Docusaurus will warn about broken links during build. Fix them before deploying.

## Need Help?

- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Open an [issue](https://github.com/backwind1233/awesome-appmod/issues)
- Review the [awesome-azd](https://github.com/Azure/awesome-azd) repository for examples
