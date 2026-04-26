---
title: "Git & GitHub Fundamentals Part 1"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "A comprehensive guide for beginners to understand Git and GitHub essentials, from local repository initialization to remote collaboration."
---

Worksheet 1 — Git & GitHub Fundamentals | This guide is designed to help you understand the core concepts of version control using Git and how to collaborate using GitHub. You will learn how to track changes, manage branches, and sync your work between your local computer and a remote repository.

# 🛠 Worksheet 1 — Git & GitHub Fundamentals (Local → Remote)

## 🎯 Objective
By the end of this workshop, you will be able to:
- ✅ Initialize a Git repository
- ✅ Track changes using commit
- ✅ Connect local work to GitHub
- ✅ Push and pull changes effectively
- ✅ Work with branches for safe development
- ✅ Handle merges and simple conflicts

---

## 📋 Prerequisites
- **Git** installed on your machine
- **GitHub** account created
- **VS Code** (or your preferred text editor)
- Basic terminal/command line familiarity

---

## 🚀 Step-by-Step Guide

## Part 0 — Setup

### Check Git installation
```bash
git --version
```

### Configure identity
```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

---

## Part 1 — Create Local Repository

### Create project folder
```bash
mkdir latihan-github
cd latihan-github
```

### Initialize Git
```bash
git init
```

### Open project in VS Code
```bash
code .
```

---

## Part 2 — First Commit

### Create file in VS Code
Create:
```
README.md
```

Isi:
```markdown
# Latihan GitHub
Ini adalah repository latihan Git dan GitHub.
```

### Check status
```bash
git status
```

### Add and commit
```bash
git add .
git commit -m "Add initial README"
```

---

## Part 3 — Modify File

### Edit README.md di VS Code
Tambahkan:
```markdown
## Deskripsi
Repository ini digunakan untuk belajar Git.
```

### Check changes
```bash
git status
git diff
```

### Commit changes
```bash
git add .
git commit -m "Update README description"
```

---

## Part 4 — Connect to GitHub

### Create repository on GitHub
- Name: latihan-github
- Visibility: Public
- Do NOT initialize with README

### Connect local to GitHub
```bash
git remote add origin https://github.com/USERNAME/latihan-github.git
```

### Rename branch
```bash
git branch -M main
```

### Push
```bash
git push -u origin main
```

---

## Part 5 — Add New File

### Create file in VS Code
Create:
```
profile.txt
```

Isi:
```
Nama: (isi nama)
Kelas: (isi kelas)
Hobi: (isi hobi)
```

### Commit and push
```bash
git add .
git commit -m "Add student profile"
git push
```

---

## Part 6 — Branching

### Create new branch
```bash
git checkout -b feature/update-profile
```

### Edit file in VS Code
Tambahkan:
```
Skill: Git dasar
```

### Commit
```bash
git add .
git commit -m "Add skill to profile"
```

### Switch back to main
```bash
git checkout main
```

### Merge branch
```bash
git merge feature/update-profile
git push
```

---

## Part 7 — Pull from GitHub

### Edit file on GitHub (manual step)
- Open README.md
- Click edit
- Add:
```
Update from GitHub web
```

### Pull changes locally
```bash
git pull origin main
```

---

## Expected Output
- Repository exists on GitHub
- Multiple commits visible
- Branch created and merged
- Local repo synced with remote