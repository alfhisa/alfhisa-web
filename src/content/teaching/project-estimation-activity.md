---
title: "Project Estimation Activity"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "This is an activity for project estimation."
---

# Project Estimation Activity
**Software Engineering – Project Estimation Techniques**

## Objective
In this activity, each project group will estimate the **size, effort, and schedule**
of the software system you are developing for your semester project.

This activity helps you understand:

- how large your system is
- how much development effort is required
- whether your project timeline is realistic

---

# Instructions

Work with your **project group**.

Follow these steps:

1. Identify your system's **use cases**
2. Identify **actors**
3. Calculate **Use Case Points**
4. Estimate **development effort**
5. Estimate **project schedule**

Submit **one completed worksheet per group**.

---

# Group Information

Group Name: ______________________________

Project Name: _____________________________

Team Members:

1. __________________________  
2. __________________________  
3. __________________________  
4. __________________________  

---

# 1. Project Overview

Describe the software system your group is developing.

What problem does the system solve?  
What are the main features?

Description:

.......................................................................

.......................................................................

.......................................................................

---

# 2. Identify Use Cases

List the main use cases of your system.

| No | Use Case | Actor | Complexity | Weight |
|----|----------|-------|-----------|--------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

### Use Case Complexity Rules

| Complexity | Transactions | Weight |
|------------|-------------|--------|
| Simple | ≤3 | 5 |
| Average | 4–7 | 10 |
| Complex | >7 | 15 |

Total **UUCW (Unadjusted Use Case Weight)**

```
UUCW = __________
```

---

# 3. Actor Identification

Identify actors interacting with your system.

| No | Actor | Type | Weight |
|----|------|------|--------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

### Actor Types

| Actor Type | Description | Weight |
|------------|-------------|--------|
| Simple | External system / API | 1 |
| Average | Command line interface | 2 |
| Complex | Human user with GUI | 3 |

Total **UAW (Unadjusted Actor Weight)**

```
UAW = __________
```

---

# 4. Calculate UUCP

Formula:

```
UUCP = UUCW + UAW
```

Calculation:

```
UUCP = __________
```

---

# 5. Technical Complexity Factors

Rate each factor from **0 to 5**.

| Factor | Description | Score |
|------|-------------|------|
| Distributed System | System runs across multiple servers | |
| Performance Requirement | High performance needed | |
| Security Requirement | System must be highly secure | |
| Concurrency | Many simultaneous users | |
| External Interfaces | Integration with other systems | |

Total **TF (Technical Factors)**

```
TF = __________
```

Calculate:

```
TCF = 0.6 + (0.01 × TF)
```

```
TCF = __________
```

---

# 6. Adjusted Use Case Points

Formula:

```
UCP = UUCP × TCF
```

Calculation:

```
UCP = __________
```

---

# 7. Effort Estimation

Assumption:

**1 Use Case Point ≈ 20 person-hours**

Formula:

```
Effort = UCP × 20
```

```
Effort = __________ hours
```

---

# 8. Schedule Estimation

Assumption:

**1 developer ≈ 120 working hours per month**

Formula:

```
Duration = Effort / (Team Size × 120)
```

```
Team Size = __________
```

```
Estimated Project Duration = __________ months
```