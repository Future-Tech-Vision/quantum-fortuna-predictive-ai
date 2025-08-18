# Quantum Fortuna™ Deployment Guide

## 🚀 Automated CI/CD Setup

Your Quantum Fortuna™ repository now includes automated CI/CD pipelines for seamless deployment and quality assurance.

### 📋 Prerequisites

Before the automation works, you need to configure these secrets in your GitHub repository:

1. **Go to your GitHub repository**
2. **Navigate to Settings → Secrets and variables → Actions**
3. **Add the following repository secrets:**

#### Required Secrets:

```
NETLIFY_AUTH_TOKEN=your_netlify_personal_access_token
NETLIFY_SITE_ID=your_netlify_site_id
```

### 🔧 Getting Netlify Credentials

#### 1. Netlify Auth Token:
- Go to [Netlify Dashboard](https://app.netlify.com/)
- Click on your profile → User settings
- Go to Applications → Personal access tokens
- Generate new token → Copy the token
- Add as `NETLIFY_AUTH_TOKEN` in GitHub secrets

#### 2. Netlify Site ID:
- Go to your Netlify site dashboard
- Navigate to Site settings → General
- Copy the Site ID (under Site details)
- Add as `NETLIFY_SITE_ID` in GitHub secrets

### 🔄 Automated Workflows

#### 1. **Main Deployment** (`.github/workflows/deploy.yml`)
- **Triggers**: Push to main/master branch
- **Actions**: Build, test, and deploy to production
- **Features**: Automatic Netlify deployment with commit messages

#### 2. **Quality Assurance** (`.github/workflows/quality-check.yml`)
- **Triggers**: All pushes and pull requests
- **Actions**: TypeScript check, linting, security audit, build verification
- **Features**: Bundle size analysis and performance monitoring

#### 3. **Daily Predictions Update** (`.github/workflows/update-predictions.yml`)
- **Triggers**: Daily at 9:15 AM IST (scheduled) + manual trigger
- **Actions**: Updates prediction algorithms and data
- **Features**: Automated commits with timestamp

### 🎯 Deployment Process

1. **Push to GitHub**: Any push to main branch triggers deployment
2. **Automatic Build**: GitHub Actions builds the application
3. **Quality Checks**: Runs linting, type checking, and security audits
4. **Deploy to Netlify**: Automatically deploys to your live site
5. **Preview Deployments**: Pull requests get preview URLs

### 📊 Monitoring

- **Build Status**: Visible in GitHub Actions tab
- **Deploy Status**: Check Netlify dashboard
- **Performance**: Bundle size tracking in workflow logs
- **Security**: Automated vulnerability scanning

### 🔧 Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy using Netlify CLI (optional)
npx netlify deploy --prod --dir=dist
```

### 🎨 Branch Protection (Recommended)

Set up branch protection rules in GitHub:
1. Go to Settings → Branches
2. Add rule for main/master branch
3. Enable "Require status checks to pass"
4. Select the quality-check workflow

### 🚀 Next Steps

1. **Add the secrets** to your GitHub repository
2. **Push any change** to trigger the first automated deployment
3. **Monitor the Actions tab** to see the workflows in action
4. **Check your Netlify dashboard** for deployment status

Your Quantum Fortuna™ repository is now equipped with enterprise-grade CI/CD automation!