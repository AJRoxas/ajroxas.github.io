<p align='center'>🌐<b>Visit my personal site at: <a href="https://ajroxas.github.io/">ajroxas.github.io</a></b>🌐</p>

# Personal Site

Hi! This is the repository for my personal site!

The motivation for creating this site is to showcase my skills and accomplishments throughout both my academic and work career. 

This repository follows CI/CD practices by using Github Actions to:
- Deploy and build the Docker image to Github Container Registry
- Deploy page to GitHub Pages

## Built Width

- Docker
- Figma
- React
- Tailwind CSS
- TypeScript
- Vite

## 🌐 Live Site

https://ajroxas.github.io/

## ⚡ Vite

Make sure node version is at least `24.x`!

Run:
```
npx vite
```

## 🐳 Docker Image

### GHCR Docker Image

https://github.com/AJRoxas/ajroxas.github.io/pkgs/container/ajroxas.github.io

Install via CLI:
```
docker pull ghcr.io/ajroxas/ajroxas.github.io:main
```

Run:
```
docker run -p 8080:80 ghcr.io/USERNAME/REPO_NAME
```

### Local Docker Image

Build image of local Dockerfile
```
docker build -t ajroxas.github.io .
```

Run:
```
docker run -p 8080:80 ajroxas.github.io
```

