---
title: "EduTrack"
tagline: "Student Progress Dashboard"
description: "A full-stack application for tracking and visualizing student learning progress across courses. Built with real-time analytics and adaptive recommendations."
problem: "Lecturers need better tools to monitor student engagement and identify at-risk students early."
approach: "Built a dashboard with interactive charts, progress tracking, and automated alerts using modern web technologies."
tags: ["React", "Node.js", "PostgreSQL", "D3.js"]
featured: true
demoUrl: "https://edutrack-demo.example.com"
githubUrl: "https://github.com/example/edutrack"
---

## Overview

EduTrack was born out of a real problem I faced during my teaching: tracking student progress across large lecture halls is incredibly difficult. While learning management systems (LMS) provide raw data like quiz scores or login times, they fail to provide *actionable insights* in real-time.

### The Architecture

To build a scalable and responsive system, I chose a modern web stack:

- **Frontend**: React and D3.js. The goal was to make the data visual and interactive. D3.js powers the complex heatmaps and engagement trend lines.
- **Backend**: Node.js with Express provided a fast, asynchronous API layer.
- **Database**: PostgreSQL. Relational data modeling was critical here because students, courses, assignments, and grades are fundamentally relational.

### Key Features Developed

1. **Real-time Engagement Heatmap**: Visualizes which components of the course (e.g., specific video lectures, reading assignments) students are interacting with the most.
2. **Early Intervention Alerts**: A background chron job that analyzes login frequency, assignment drop-offs, and quiz scores to flag students who might need extra help before midterms.

### Challenges Encountered

The biggest challenge was efficiently aggregating data for the dashboard without overwhelming the database. Writing optimized SQL queries and implementing a Redis caching layer for the dashboard endpoints reduced load times from ~3 seconds to under 200ms.
