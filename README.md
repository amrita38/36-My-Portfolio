# My Portfolio

A React portfolio built with Vite, TypeScript, and Tailwind CSS.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect the Vite framework and use the `vercel.json` configuration
4. The build command is set to `npm run build`
5. The output directory is `dist`

### Manual Deployment Steps

If Vercel doesn't automatically detect the settings:

1. Go to your project settings in Vercel
2. Under "Build & Development":
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```
