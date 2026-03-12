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

# Example

# 1. Project Overview

**System Name:** Doctor Appointment Booking System

## Description

Sistem ini memungkinkan pasien untuk mencari dokter, melihat jadwal praktik, dan melakukan booking appointment secara online.  
Admin rumah sakit dapat mengelola jadwal dokter serta memonitor appointment yang dibuat oleh pasien.

---

# 2. Identify Use Cases

Kita identifikasi use case utama.

| No | Use Case | Actor | Complexity | Weight |
|----|----------|-------|------------|--------|
| 1 | Register Patient | Patient | Simple | 5 |
| 2 | Login | Patient | Simple | 5 |
| 3 | View Doctor Schedule | Patient | Average | 10 |
| 4 | Book Appointment | Patient | Complex | 15 |
| 5 | Cancel Appointment | Patient | Average | 10 |
| 6 | Manage Doctor Schedule | Admin | Complex | 15 |

Sekarang jumlahkan.

```
UUCW = 5 + 5 + 10 + 15 + 10 + 15
UUCW = 60
```

---

# 3. Actor Identification

Actor dalam sistem ini:

| No | Actor | Type | Weight |
|----|------|------|--------|
| 1 | Patient | Complex (GUI) | 3 |
| 2 | Admin | Complex (GUI) | 3 |
| 3 | Notification API (Email/SMS) | Simple | 1 |

```
UAW = 3 + 3 + 1
UAW = 7
```

---

# 4. Calculate UUCP

## Formula

```
UUCP = UUCW + UAW
```

## Calculation

```
UUCP = 60 + 7
UUCP = 67
```

---

# 5. Technical Complexity Factors

Kita beri skor realistis.

| Factor | Description | Score |
|------|-------------|------|
| Distributed System | System runs across servers | 1 |
| Performance Requirement | High performance needed | 2 |
| Security Requirement | Patient data security | 4 |
| Concurrency | Many simultaneous users | 3 |
| External Interfaces | Email/SMS API integration | 2 |

```
TF = 1 + 2 + 4 + 3 + 2
TF = 12
```

Hitung **TCF**

```
TCF = 0.6 + (0.01 × TF)
TCF = 0.6 + (0.01 × 12)
TCF = 0.6 + 0.12
TCF = 0.72
```

---

# 6. Adjusted Use Case Points

```
UCP = UUCP × TCF
UCP = 67 × 0.72
UCP ≈ 48
```

Jadi ukuran sistem ≈ **48 Use Case Points**

---

# 7. Effort Estimation

Asumsi:

```
1 UCP = 20 hours
```

Perhitungan:

```
Effort = UCP × 20
Effort = 48 × 20
Effort = 960 hours
```

Jadi estimasi effort ≈ **960 jam kerja**

---

# 8. Schedule Estimation

Asumsi:

```
1 developer = 120 hours / month
```

Misalnya tim berisi **4 mahasiswa**

```
Duration = Effort / (Team × 120)
Duration = 960 / (4 × 120)
Duration = 960 / 480
Duration = 2 months
```

---

# Final Interpretation

Hasil estimasi:

| Metric | Result |
|------|------|
| UUCP | 67 |
| UCP | 48 |
| Effort | 960 hours |
| Team Size | 4 developers |
| Estimated Duration | ~2 months |

## Interpretasi

Jika dikerjakan oleh **4 developer**, sistem ini diperkirakan selesai sekitar **2 bulan development**.