# Deployment Guide for GitHub Pages

This guide walks you through deploying your awesome-appmod website to GitHub Pages.

## Prerequisites

- [x] GitHub account
- [x] Git installed locally
- [x] Repository created on GitHub (backwind1233/awesome-appmod)

## Step-by-Step Deployment

### Step 1: Initialize Git Repository (if not done)

```bash
cd /home/kali/github.com/backwind1233/awesome-appmod

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: awesome-appmod website"
```

### Step 2: Connect to GitHub Repository

```bash
# Add remote repository
git remote add origin https://github.com/backwind1233/awesome-appmod.git

# Verify remote
git remote -v
```

### Step 3: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to https://github.com/backwind1233/awesome-appmod
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions** from the dropdown
5. Click **Save**

### Step 5: Verify Deployment

After pushing, GitHub Actions will automatically:
1. Detect the workflow file (`.github/workflows/deploy.yml`)
2. Build your website
3. Deploy to GitHub Pages

**Monitor the deployment:**
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run ("Deploy to GitHub Pages")
3. Watch the build and deploy process
4. Wait for the green checkmark ✅

**Typical deployment time:** 2-5 minutes

### Step 6: Access Your Website

Once deployed, your site will be live at:
```
https://backwind1233.github.io/awesome-appmod/
```

**Note:** It may take a few minutes for DNS to propagate.

## Troubleshooting

### Issue: Workflow Not Running

**Solution:**
- Ensure `.github/workflows/deploy.yml` exists
- Check that you pushed to the `main` branch
- Verify GitHub Actions is enabled in repository settings

### Issue: Build Fails

**Solution:**
1. Check the Actions tab for error messages
2. Common issues:
   - Node.js version mismatch
   - Missing dependencies
   - Syntax errors in config files

**Fix locally:**
```bash
cd website
npm install
npm run build
```

If it builds locally, the issue is with the workflow configuration.

### Issue: 404 Error on Deployed Site

**Solution:**
- Verify `baseUrl` in `docusaurus.config.js` matches `/awesome-appmod/`
- Check that GitHub Pages is enabled and set to "GitHub Actions"
- Wait a few minutes for deployment to complete
- Try accessing: https://backwind1233.github.io/awesome-appmod/ (with trailing slash)

### Issue: Assets Not Loading

**Solution:**
- Ensure assets are in `website/static/` folder
- Verify paths in code don't include hardcoded URLs
- Check browser console for 404 errors
- Clear browser cache

## Manual Deployment (Alternative)

If GitHub Actions doesn't work, you can deploy manually:

```bash
cd website

# Install dependencies
npm install

# Build the site
npm run build

# Deploy to gh-pages branch
GIT_USER=backwind1233 npm run deploy
```

This will:
1. Build the site
2. Push to `gh-pages` branch
3. GitHub Pages will serve from that branch

**Note:** You'll need to change the Pages source to "Deploy from a branch" > "gh-pages" in settings.

## Updating Your Site

After the initial deployment, updates are automatic:

```bash
# Make changes to your files
# ...

# Commit and push
git add .
git commit -m "Update tasks and documentation"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy! 🚀

## Environment Variables (Optional)

If you need to use secrets (API keys, etc.):

1. Go to repository **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Add your secrets
4. Reference in workflow: `${{ secrets.SECRET_NAME }}`

## Custom Domain (Optional)

To use a custom domain:

1. Buy a domain name
2. In GitHub Pages settings, enter your custom domain
3. Configure DNS with your domain provider:
   - Add CNAME record pointing to `backwind1233.github.io`
4. Update `url` in `docusaurus.config.js`:
   ```js
   url: "https://your-domain.com",
   baseUrl: "/",
   ```

## Monitoring

### Check Deployment Status

```bash
# View workflow runs
gh run list  # requires GitHub CLI

# Or visit:
# https://github.com/backwind1233/awesome-appmod/actions
```

### View Build Logs

1. Go to **Actions** tab
2. Click on a workflow run
3. Click on job name ("build" or "deploy")
4. Expand steps to see detailed logs

## Best Practices

✅ **Test locally before pushing** - Run `npm run build` to catch errors  
✅ **Use meaningful commit messages** - Helps track changes  
✅ **Deploy during off-peak hours** - For major updates  
✅ **Monitor the first deployment** - Ensure everything works  
✅ **Keep dependencies updated** - Run `npm update` periodically  

## Next Steps

After successful deployment:

1. ✅ Share your site URL
2. ✅ Add tasks to the gallery
3. ✅ Invite contributors
4. ✅ Set up analytics (optional)
5. ✅ Enable discussions on GitHub

## Support

Having issues?

- 📖 Check the [Docusaurus deployment docs](https://docusaurus.io/docs/deployment)
- 💬 [GitHub Discussions](https://github.com/backwind1233/awesome-appmod/discussions)
- 🐛 [Open an Issue](https://github.com/backwind1233/awesome-appmod/issues)

---

**Congratulations on deploying your site!** 🎉
