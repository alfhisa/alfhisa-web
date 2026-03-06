---
title: "Git & GitHub Guide"
type: "Guide"
description: "A practical, step-by-step guide to version control for beginners. Covers everything from first commit to pull requests."
tags: ["Git", "Version Control", "Workflow"]
linkUrl: "https://docs.github.com/en/get-started"
---

### Why Version Control?

As a developer, losing code is a rite of passage. Version control systems like Git act as a safety net, allowing you to checkpoint your progress, collaborate seamlessly with others, and trace back mistakes to their exact origin.

### The Basic Workflow

Here is the absolute minimum you need to know to survive your first team project:

1. \`git clone [url]\` - Download the repository to your machine.
2. \`git checkout -b feature/my-cool-idea\` - Create an isolated branch to work on without breaking the main codebase.
3. \`git add .\` - Stage all your current changes for a commit.
4. \`git commit -m "Added a cool new feature"\` - Checkpoint your work.
5. \`git push origin feature/my-cool-idea\` - Upload your work back to the server.

### Dealing with Merge Conflicts

Don't panic! A merge conflict simply means you and a teammate edited the *exact same line* of a file, and Git doesn't know which version to keep.

Open the conflicting file in VS Code. You'll see highlights indicating the incoming changes vs your current changes. Click "Accept Current", "Accept Incoming", or "Accept Both". Then stage the file and commit again.
