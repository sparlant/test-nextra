# Example: Deploy a Nextra App to GitHub Pages

# Configure the theme
Configuration of the site theme must be done in the `theme.config.js` file

# Configure the Nextra App
Configuration of the site must be done in the `next.config.js` file

# Content
Content of the site must be written in the `/pages` folder

# Automation
Build & Deploy Automation can be found here `.github/workflows/deploy.yml`
- Build: build the application and create .nojekyll file to inform GitHub Pages that no Jekyll Build is necessary
- Deploy to pages-branch: deploy to GitHub Pages by pushing the static content from the `/out` folder to the `pages-branch`