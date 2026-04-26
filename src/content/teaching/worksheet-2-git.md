---
title: "Git & GitHub Fundamentals Part 2"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "Master the collaborative workflow on GitHub by contributing to an open source project using Fork and Pull Request."
---

Worksheet 2 — Git & GitHub Collaborative Workflow | This workshop focuses on the social side of GitHub. You will learn how to contribute to projects you don't own by using the Fork and Pull Request workflow. This is the cornerstone of Open Source contribution and professional team development.

# 🤝 Worksheet 2 — Git & GitHub: Open Source Contribution

## 🎯 Objective
By the end of this workshop, you will be able to:
- ✅ **Fork** a public repository to your own account
- ✅ **Clone** a remote repository to your local machine
- ✅ Create and manage **Feature Branches**
- ✅ Sync changes with the **Original (Upstream)** repository
- ✅ Create a **Pull Request (PR)** to contribute your work

---

## 📋 Prerequisites
- Completed **Worksheet 1 — Part 1**
- **GitHub** account active
- **Git** configured on your local machine

---

## 🚀 The Challenge: "Git Gud Quotes"
We will be contributing to a shared repository of developer quotes called `gitgudquotes`. Your task is to add your favorite programming quote to the collection.

### Project Resources:
- **Github Repository:** [https://github.com/alfhisa/gitgudquotes](https://github.com/alfhisa/gitgudquotes)
- **Live Version:** [https://gitgudquotes.vercel.app/](https://gitgudquotes.vercel.app/)

---

## 🛠 Step-by-Step Guide

### Part 1 — Forking the Project
A **Fork** is a personal copy of someone else's project.

1. Open [https://github.com/alfhisa/gitgudquotes](https://github.com/alfhisa/gitgudquotes) in your browser.
2. Click the **Fork** button (top right).
3. Ensure the owner is your username and click **Create Fork**.

---

### Part 2 — Cloning Your Fork
Now you need a local copy of *your* fork.

1. On your fork's page, click **Code** and copy the HTTPS URL.
2. Open your terminal and run:
```bash
git clone https://github.com/YOUR_USERNAME/gitgudquotes.git
cd gitgudquotes
```

---

### Part 3 — Branching for Safety
Never work directly on the `main` branch when contributing.

1. Create a new branch named after your quote:
```bash
git checkout -b add-quote-yourname
```

---

### Part 4 — Making the Contribution
1. Open the project in VS Code:
```bash
code .
```
2. Open `quotes.json` or `README.md` (check the repo instructions).
3. Add a new quote following the existing format:
```json
{
  "quote": "Talk is cheap. Show me the code.",
  "author": "Linus Torvalds"
}
```

---

### Part 5 — Commit and Push
1. Stage and commit your changes:
```bash
git add .
git commit -m "feat: add Linus Torvalds quote"
```
2. Push your branch to GitHub:
```bash
git push origin add-quote-yourname
```

---

### Part 6 — The Pull Request (PR)
This is where the magic happens. You are asking the original owner to pull your changes.

1. Go back to the **original** repository: `https://github.com/alfhisa/gitgudquotes`.
2. You should see a yellow banner saying **"Compare & pull request"**. Click it.
3. Add a clear title (e.g., `Update: Add Linus Torvalds quote`) and a short description.
4. Click **Create pull request**.

---

## 🏆 Final Challenge Check
- [ ] Your fork exists on your GitHub profile.
- [ ] You have a new branch in your fork.
- [ ] You have submitted a Pull Request to the original repo.
- [ ] Wait for the maintainer to review and merge!

---

## 💡 Pro Tip: Syncing with Original
If the original repo changes while you are working, sync your fork:
```bash
git remote add upstream https://github.com/alfhisa/gitgudquotes.git
git fetch upstream
git merge upstream/main
```
