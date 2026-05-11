---
title: "Test-Driven Development (TDD)"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "Materi praktikum Test-Driven Development (TDD) — belajar siklus Red-Green-Refactor dengan Python, pytest, dan GitHub Actions."
---

# 🧪 Test-Driven Development (TDD)

---

## 📑 Table of Contents

### Bagian 1: Pemahaman Konsep
1. [Apa itu Test-Driven Development?](#1-apa-itu-test-driven-development)
2. [Siklus Red-Green-Refactor](#2-siklus-red-green-refactor)
3. [Mengapa TDD?](#3-mengapa-tdd)
4. [Kapan Sebaiknya Pakai TDD?](#4-kapan-sebaiknya-pakai-tdd)

### Bagian 2: Tutorial
5. [Setup Environment](#5-setup-environment)
6. [Project: Grade Calculator](#6-project-grade-calculator)
7. [Siklus TDD 1: Grade A](#7-siklus-tdd-1-grade-a)
8. [Siklus TDD 2: Grade A-, B+, B, B-](#8-siklus-tdd-2-grade-a-b-b-b-)
9. [Siklus TDD 3: Grade C, D, E](#9-siklus-tdd-3-grade-c-d-e)
10. [Siklus TDD 4: Refactoring](#10-siklus-tdd-4-refactoring)
11. [Siklus TDD 5: Konversi ke Bobot GPA](#11-siklus-tdd-5-konversi-ke-bobot-gpa)
12. [Siklus TDD 6: Edge Cases & Validasi](#12-siklus-tdd-6-edge-cases--validasi)
13. [Siklus TDD 7: Multi-Course GPA Calculator](#13-siklus-tdd-7-multi-course-gpa-calculator)

### Bagian 3: GitHub Integration
14. [Setup Repository di GitHub](#14-setup-repository-di-github)
15. [Workflow TDD dengan Git](#15-workflow-tdd-dengan-git)
16. [GitHub Actions untuk Automated Testing](#16-github-actions-untuk-automated-testing)
17. [Code Coverage Badge](#17-code-coverage-badge)

### Bagian 4: Best Practices
18. [Anti-Patterns yang Harus Dihindari](#18-anti-patterns-yang-harus-dihindari)
19. [Tips untuk TDD yang Efektif](#19-tips-untuk-tdd-yang-efektif)
20. [Submission Checklist](#-submission-checklist)

---

# Bagian 1: Pemahaman Konsep

# 1. Apa itu Test-Driven Development?

**Test-Driven Development (TDD)** adalah praktik pengembangan software di mana kamu **menulis test SEBELUM menulis kode produksi**.

---

# 2. Siklus Red-Green-Refactor

TDD mengikuti siklus sederhana yang diulang terus-menerus:

```
   🔴 RED
      ↓
   🟢 GREEN
      ↓
   🔵 REFACTOR
      ↓
   (ulang)
```

### 🔴 RED — Tulis test yang FAIL

Tulis test untuk fitur yang belum ada. Jalankan test → **harus gagal** (karena kodenya belum ditulis).

Mengapa harus gagal dulu? Untuk **membuktikan bahwa test-mu valid** — test yang langsung pass tanpa kode bisa jadi test yang salah.

### 🟢 GREEN — Tulis kode minimal agar test PASS

Tulis **kode sesederhana mungkin** yang membuat test berhasil. Jangan over-engineer. Jangan tulis fitur yang belum diuji.

> 💡 **Prinsip kunci:** "Make it work first, make it right later."

### 🔵 REFACTOR — Perbaiki kode tanpa mengubah behavior

Setelah test pass, perbaiki kualitas kode: rename variable, ekstrak fungsi, hilangkan duplikasi. Test yang sudah ada menjadi **safety net** — jika ada yang rusak, test akan langsung memberi tahu.

---

# 3. Mengapa TDD?

Manfaat utama TDD:

**1. Confidence saat mengubah kode** — kamu berani refactor karena ada test yang akan memberi tahu kalau ada yang rusak.

**2. Desain yang lebih baik** — menulis test memaksamu memikirkan **bagaimana kode akan digunakan** sebelum menulisnya, menghasilkan API yang lebih bersih.

**3. Dokumentasi hidup** — test berfungsi sebagai contoh penggunaan yang selalu up-to-date.

**4. Lebih sedikit bug di production** — bug terdeteksi saat masih sangat murah diperbaiki.

**5. Fokus yang lebih tajam** — kamu mengerjakan **satu hal kecil pada satu waktu**, tidak terdistraksi.

---

# 4. Kapan Sebaiknya Pakai TDD?

**Cocok untuk:**
- Kode dengan logika bisnis kompleks
- Code yang akan dimaintain jangka panjang
- Library/framework yang dipakai banyak orang
- Refactoring kode legacy
- Belajar bahasa/framework baru

**Mungkin overkill untuk:**
- Prototype yang akan dibuang
- Eksperimen/spike untuk validasi konsep
- Throwaway scripts
- UI yang sangat visual dan sering berubah

---

# Bagian 2: Tutorial

# 5. Setup Environment

## 5.1 Install Python

Pastikan Python 3.8+ sudah terinstall:

```bash
python --version
# atau
python3 --version
```

Jika belum, download di [python.org](https://www.python.org/downloads/).

## 5.2 Install pytest

```bash
pip install pytest pytest-cov
```

`pytest` adalah testing framework Python yang paling populer. `pytest-cov` untuk mengukur code coverage.

## 5.3 Verifikasi Setup

```bash
pytest --version
# pytest 7.4.0 (atau versi lebih baru)
```

## 5.4 Setup Editor

Rekomendasi: **VS Code** dengan extension:
- Python (Microsoft)
- Python Test Explorer
- Pylance

---

# 6. Project: Grade Calculator

Kita akan membangun **Grade Calculator** untuk konversi nilai numerik ke huruf grade dan bobot GPA, mengikuti matriks penilaian BINUS:

### Matriks Penilaian

| Nilai | Rentang | Bobot |
|-------|---------|-------|
| A     | 90-100  | 4.0   |
| A-    | 85-89   | 3.67  |
| B+    | 80-84   | 3.33  |
| B     | 75-79   | 3.0   |
| B-    | 70-74   | 2.5   |
| C     | 65-69   | 2.0   |
| D     | 50-64   | 1.0   |
| E     | 0-49    | 0.0   |

### Yang Akan Dibangun

Fungsi-fungsi berikut akan kita bangun dengan TDD:

1. `score_to_grade(score)` — konversi nilai ke huruf grade
2. `grade_to_gpa(grade)` — konversi huruf ke bobot GPA
3. `score_to_gpa(score)` — kombinasi: nilai langsung ke GPA
4. `calculate_semester_gpa(courses)` — hitung GPA semester dari multiple mata kuliah

## 6.1 Struktur Project

Buat folder project:

```bash
mkdir grade-calculator
cd grade-calculator
```

Struktur file yang akan kita buat:

```
grade-calculator/
├── grade_calculator.py      # Kode produksi
├── test_grade_calculator.py # Test cases
├── README.md
└── .gitignore
```

Buat file kosong dulu:

```bash
touch grade_calculator.py test_grade_calculator.py README.md
```

---

# 7. Siklus TDD 1: Grade A

Sekarang masuk ke praktik TDD pertama. Kita mulai dengan kasus paling sederhana: nilai dalam range A (90-100).

## 🔴 RED — Tulis Test Pertama

Buka `test_grade_calculator.py` dan tulis:

```python
from grade_calculator import score_to_grade


def test_score_100_returns_A():
    assert score_to_grade(100) == "A"
```

**Jalankan test:**

```bash
pytest test_grade_calculator.py -v
```

**Output (ERROR):**
```
ImportError: cannot import name 'score_to_grade' from 'grade_calculator'
```

✅ **Bagus! Test FAIL** — karena fungsinya belum ada. Ini fase RED yang benar.

> 💡 **Insight:** Error import adalah tanda yang valid bahwa kita ada di fase RED. Kita belum boleh menulis kode sampai kita yakin test akan fail.

## 🟢 GREEN — Tulis Kode Minimal

Buka `grade_calculator.py` dan tulis kode **paling minimal** yang membuat test pass:

```python
def score_to_grade(score):
    return "A"
```

**"Hardcode return A"?!** Ya, betul! Ini adalah prinsip TDD: tulis kode **seminimal mungkin**. Kalau test cuma minta nilai 100 = "A", kita kasih "A" saja. Nanti test berikutnya akan memaksa kita generalisasi.

**Jalankan test:**

```bash
pytest test_grade_calculator.py -v
```

**Output:**
```
test_grade_calculator.py::test_score_100_returns_A PASSED ✅
```

🎉 GREEN tercapai!

> 💡 **Prinsip TDD:** "Fake it till you make it." Mulai dari hardcode, biarkan test mendorong kita ke generalisasi.

## ➕ Tambah Test untuk Range A

Sekarang kita pastikan **semua nilai di range A (90-100)** menghasilkan "A":

```python
def test_score_90_returns_A():
    assert score_to_grade(90) == "A"

def test_score_95_returns_A():
    assert score_to_grade(95) == "A"
```

**Jalankan test:**

```bash
pytest test_grade_calculator.py -v
```

Semua PASS karena kode kita masih hardcode "A". ✅

## 🔵 REFACTOR — Belum Perlu

Kode masih sangat sederhana, tidak ada yang perlu di-refactor. Lanjut ke siklus berikutnya.

---

# 8. Siklus TDD 2: Grade A-, B+, B, B-

Sekarang kita perkenalkan grade selain "A".

## 🔴 RED — Test untuk A-

```python
def test_score_89_returns_A_minus():
    assert score_to_grade(89) == "A-"
```

**Jalankan test:**

```bash
pytest test_grade_calculator.py -v
```

**Output (FAIL):**
```
AssertionError: assert 'A' == 'A-'
```

Test gagal karena kode kita masih hardcode "A". ✅ RED tercapai.

## 🟢 GREEN — Generalisasi

Sekarang kita tambah logika untuk A-:

```python
def score_to_grade(score):
    if score >= 90:
        return "A"
    if score >= 85:
        return "A-"
    return "A"  # default, akan kita perbaiki nanti
```

Test pass. ✅

## ➕ Lanjut: B+, B, B-

Tambah test bertahap:

```python
def test_score_84_returns_B_plus():
    assert score_to_grade(84) == "B+"

def test_score_79_returns_B():
    assert score_to_grade(79) == "B"

def test_score_74_returns_B_minus():
    assert score_to_grade(74) == "B-"
```

Implementasi:

```python
def score_to_grade(score):
    if score >= 90:
        return "A"
    if score >= 85:
        return "A-"
    if score >= 80:
        return "B+"
    if score >= 75:
        return "B"
    if score >= 70:
        return "B-"
    return "B-"  # default, akan diperbaiki
```

Semua test pass. ✅

> 💡 **Catatan:** Perhatikan urutan kondisi penting! Cek dari range tertinggi ke terendah. Kalau dibalik, semua nilai akan masuk kondisi pertama yang terpenuhi.

---

# 9. Siklus TDD 3: Grade C, D, E

## 🔴 RED — Tambah Test

```python
def test_score_69_returns_C():
    assert score_to_grade(69) == "C"

def test_score_64_returns_D():
    assert score_to_grade(64) == "D"

def test_score_49_returns_E():
    assert score_to_grade(49) == "E"

def test_score_0_returns_E():
    assert score_to_grade(0) == "E"
```

Jalankan test → **FAIL**.

## 🟢 GREEN — Lengkapi Implementasi

```python
def score_to_grade(score):
    if score >= 90:
        return "A"
    if score >= 85:
        return "A-"
    if score >= 80:
        return "B+"
    if score >= 75:
        return "B"
    if score >= 70:
        return "B-"
    if score >= 65:
        return "C"
    if score >= 50:
        return "D"
    return "E"
```

**Jalankan semua test:**

```bash
pytest test_grade_calculator.py -v
```

Semua PASS. ✅

## ✅ Tambah Test Boundary

Ini penting! Mari kita test nilai-nilai tepat di **batas (boundary)** setiap range, mengaplikasikan **Boundary Value Analysis** dari materi sebelumnya:

```python
def test_boundary_85_returns_A_minus():
    assert score_to_grade(85) == "A-"

def test_boundary_80_returns_B_plus():
    assert score_to_grade(80) == "B+"

def test_boundary_75_returns_B():
    assert score_to_grade(75) == "B"

def test_boundary_70_returns_B_minus():
    assert score_to_grade(70) == "B-"

def test_boundary_65_returns_C():
    assert score_to_grade(65) == "C"

def test_boundary_50_returns_D():
    assert score_to_grade(50) == "D"
```

Semua harus PASS. Kalau ada yang FAIL, ada bug logic di kode kita yang perlu diperbaiki.

> 💡 **Lesson:** Boundary value testing adalah teknik paling efektif untuk menemukan bug operator (`>=` vs `>`, atau `<=` vs `<`).

---

# 10. Siklus TDD 4: Refactoring

Sekarang kode kita berfungsi, tapi ada **code smell**: rantai if-statement yang panjang. Mari kita refactor!

## 🔵 REFACTOR — Pakai Lookup Table

```python
GRADE_THRESHOLDS = [
    (90, "A"),
    (85, "A-"),
    (80, "B+"),
    (75, "B"),
    (70, "B-"),
    (65, "C"),
    (50, "D"),
    (0,  "E"),
]


def score_to_grade(score):
    for threshold, grade in GRADE_THRESHOLDS:
        if score >= threshold:
            return grade
    return "E"  # safeguard, secara teori tidak akan tercapai
```

**Jalankan semua test:**

```bash
pytest test_grade_calculator.py -v
```

Semua masih PASS. ✅

Inilah kekuatan TDD — kita bisa **refactor dengan percaya diri** karena test akan langsung memberi tahu kalau ada yang rusak.

> 💡 **Tip:** Refactor selalu dilakukan **setelah semua test pass**, dan setiap perubahan dijalankan ulang testnya. Jangan refactor sambil menulis fitur baru!

---

# 11. Siklus TDD 5: Konversi ke Bobot GPA

Sekarang tambah fungsi kedua: `grade_to_gpa(grade)` yang konversi huruf grade ke bobot GPA.

## 🔴 RED — Test Pertama

```python
from grade_calculator import score_to_grade, grade_to_gpa


def test_grade_A_returns_4():
    assert grade_to_gpa("A") == 4.0
```

**Jalankan test:**

```bash
pytest test_grade_calculator.py -v
```

**Output (FAIL):**
```
ImportError: cannot import name 'grade_to_gpa' from 'grade_calculator'
```

✅ RED.

## 🟢 GREEN — Implementasi Minimal

```python
def grade_to_gpa(grade):
    return 4.0
```

Test pass. ✅

## ➕ Tambah Test untuk Grade Lain

```python
def test_grade_A_minus_returns_3_67():
    assert grade_to_gpa("A-") == 3.67

def test_grade_B_plus_returns_3_33():
    assert grade_to_gpa("B+") == 3.33

def test_grade_B_returns_3():
    assert grade_to_gpa("B") == 3.0

def test_grade_B_minus_returns_2_5():
    assert grade_to_gpa("B-") == 2.5

def test_grade_C_returns_2():
    assert grade_to_gpa("C") == 2.0

def test_grade_D_returns_1():
    assert grade_to_gpa("D") == 1.0

def test_grade_E_returns_0():
    assert grade_to_gpa("E") == 0.0
```

## 🟢 GREEN — Implementasi Lengkap

```python
GPA_WEIGHTS = {
    "A":  4.0,
    "A-": 3.67,
    "B+": 3.33,
    "B":  3.0,
    "B-": 2.5,
    "C":  2.0,
    "D":  1.0,
    "E":  0.0,
}


def grade_to_gpa(grade):
    return GPA_WEIGHTS[grade]
```

Semua test PASS. ✅

## ➕ Combine: `score_to_gpa`

Sekarang gabungkan kedua fungsi:

```python
def test_score_95_returns_gpa_4():
    assert score_to_gpa(95) == 4.0

def test_score_80_returns_gpa_3_33():
    assert score_to_gpa(80) == 3.33

def test_score_50_returns_gpa_1():
    assert score_to_gpa(50) == 1.0
```

Import dan implementasi:

```python
def score_to_gpa(score):
    grade = score_to_grade(score)
    return grade_to_gpa(grade)
```

Lihat betapa sederhananya fungsi ini — karena kita sudah punya building blocks-nya. **Inilah kekuatan TDD dan komposisi fungsi.**

Update import di test file:

```python
from grade_calculator import score_to_grade, grade_to_gpa, score_to_gpa
```

Semua test PASS. ✅

---

# 12. Siklus TDD 6: Edge Cases & Validasi

Sekarang kita perkuat fungsi dengan menangani input yang tidak valid. Ini adalah **error handling** yang sering dilupakan.

## 🔴 RED — Test untuk Input Negatif

```python
import pytest


def test_negative_score_raises_error():
    with pytest.raises(ValueError):
        score_to_grade(-1)


def test_score_above_100_raises_error():
    with pytest.raises(ValueError):
        score_to_grade(101)
```

**Jalankan test:**

**Output (FAIL):**
```
Failed: DID NOT RAISE <class 'ValueError'>
```

✅ RED — fungsi kita belum melempar error.

## 🟢 GREEN — Tambah Validasi

```python
def score_to_grade(score):
    if score < 0 or score > 100:
        raise ValueError(f"Score must be between 0 and 100, got {score}")

    for threshold, grade in GRADE_THRESHOLDS:
        if score >= threshold:
            return grade
    return "E"
```

Test PASS. ✅

## ➕ Test untuk Tipe Data Tidak Valid

```python
def test_non_numeric_score_raises_error():
    with pytest.raises(TypeError):
        score_to_grade("seratus")


def test_none_score_raises_error():
    with pytest.raises(TypeError):
        score_to_grade(None)
```

## 🟢 GREEN — Tambah Type Check

```python
def score_to_grade(score):
    if not isinstance(score, (int, float)):
        raise TypeError(f"Score must be a number, got {type(score).__name__}")
    if score < 0 or score > 100:
        raise ValueError(f"Score must be between 0 and 100, got {score}")

    for threshold, grade in GRADE_THRESHOLDS:
        if score >= threshold:
            return grade
    return "E"
```

## ➕ Test untuk Invalid Grade

```python
def test_invalid_grade_raises_error():
    with pytest.raises(KeyError):
        grade_to_gpa("Z")


def test_grade_to_gpa_with_lowercase_should_handle():
    # Decision: kita ingin case-insensitive?
    # Mari kita putuskan: ya, sistem harus accept "a" dan "A"
    assert grade_to_gpa("a") == 4.0
```

## 🟢 GREEN — Implementasi Case-Insensitive

```python
def grade_to_gpa(grade):
    if not isinstance(grade, str):
        raise TypeError(f"Grade must be a string, got {type(grade).__name__}")
    normalized = grade.upper()
    if normalized not in GPA_WEIGHTS:
        raise KeyError(f"Invalid grade: {grade}")
    return GPA_WEIGHTS[normalized]
```

> 💡 **Lesson:** TDD bagus untuk **memikirkan edge case** karena kita dipaksa menulis test sebelum implementasi. Banyak bug dihindari di tahap ini!

---

# 13. Siklus TDD 7: Multi-Course GPA Calculator

Fitur final — hitung GPA semester dari beberapa mata kuliah dengan SKS yang berbeda-beda.

## 🎯 Spesifikasi

Fungsi `calculate_semester_gpa(courses)` menerima list of tuples `(score, credits)` dan mengembalikan GPA tertimbang:

```
GPA = Σ(bobot × SKS) / Σ(SKS)
```

## 🔴 RED — Test Pertama (Satu Mata Kuliah)

```python
from grade_calculator import (
    score_to_grade,
    grade_to_gpa,
    score_to_gpa,
    calculate_semester_gpa,
)


def test_single_course_returns_its_gpa():
    courses = [(95, 3)]  # Nilai 95, 3 SKS
    assert calculate_semester_gpa(courses) == 4.0
```

## 🟢 GREEN — Implementasi Minimal

```python
def calculate_semester_gpa(courses):
    score, credits = courses[0]
    return score_to_gpa(score)
```

Test PASS. ✅

## ➕ Test untuk Multiple Courses

```python
def test_multiple_courses_with_equal_credits():
    courses = [
        (95, 3),  # A, GPA 4.0
        (80, 3),  # B+, GPA 3.33
    ]
    # Average: (4.0 + 3.33) / 2 = 3.665
    expected = (4.0 + 3.33) / 2
    assert calculate_semester_gpa(courses) == pytest.approx(expected)
```

> 💡 **Tip:** Gunakan `pytest.approx()` untuk membandingkan floating-point numbers karena ketidakakuratan komputasi desimal.

**Output (FAIL):**
```
AssertionError: assert 4.0 == 3.665
```

✅ RED.

## 🟢 GREEN — Generalisasi

```python
def calculate_semester_gpa(courses):
    total_weighted = 0
    total_credits = 0
    for score, credits in courses:
        total_weighted += score_to_gpa(score) * credits
        total_credits += credits
    return total_weighted / total_credits
```

Test PASS. ✅

## ➕ Test untuk SKS Berbeda

```python
def test_weighted_gpa_with_different_credits():
    courses = [
        (95, 4),  # A, 4 SKS → 4.0 × 4 = 16.0
        (70, 2),  # B-, 2 SKS → 2.5 × 2 = 5.0
        (80, 3),  # B+, 3 SKS → 3.33 × 3 = 9.99
    ]
    # Total weighted: 16.0 + 5.0 + 9.99 = 30.99
    # Total credits: 9
    # GPA: 30.99 / 9 ≈ 3.443
    expected = (4.0 * 4 + 2.5 * 2 + 3.33 * 3) / 9
    assert calculate_semester_gpa(courses) == pytest.approx(expected)
```

Test PASS karena implementasi kita sudah benar. ✅

## ➕ Edge Cases

```python
def test_empty_courses_raises_error():
    with pytest.raises(ValueError):
        calculate_semester_gpa([])


def test_zero_credits_raises_error():
    with pytest.raises(ValueError):
        calculate_semester_gpa([(85, 0)])
```

## 🟢 GREEN — Tambah Validasi

```python
def calculate_semester_gpa(courses):
    if not courses:
        raise ValueError("Course list cannot be empty")

    total_weighted = 0
    total_credits = 0
    for score, credits in courses:
        if credits <= 0:
            raise ValueError(f"Credits must be positive, got {credits}")
        total_weighted += score_to_gpa(score) * credits
        total_credits += credits
    return total_weighted / total_credits
```

Semua test PASS. ✅

## 🎉 Hasil Akhir

File `grade_calculator.py`:

```python
GRADE_THRESHOLDS = [
    (90, "A"),
    (85, "A-"),
    (80, "B+"),
    (75, "B"),
    (70, "B-"),
    (65, "C"),
    (50, "D"),
    (0,  "E"),
]

GPA_WEIGHTS = {
    "A":  4.0,
    "A-": 3.67,
    "B+": 3.33,
    "B":  3.0,
    "B-": 2.5,
    "C":  2.0,
    "D":  1.0,
    "E":  0.0,
}


def score_to_grade(score):
    if not isinstance(score, (int, float)):
        raise TypeError(f"Score must be a number, got {type(score).__name__}")
    if score < 0 or score > 100:
        raise ValueError(f"Score must be between 0 and 100, got {score}")

    for threshold, grade in GRADE_THRESHOLDS:
        if score >= threshold:
            return grade
    return "E"


def grade_to_gpa(grade):
    if not isinstance(grade, str):
        raise TypeError(f"Grade must be a string, got {type(grade).__name__}")
    normalized = grade.upper()
    if normalized not in GPA_WEIGHTS:
        raise KeyError(f"Invalid grade: {grade}")
    return GPA_WEIGHTS[normalized]


def score_to_gpa(score):
    grade = score_to_grade(score)
    return grade_to_gpa(grade)


def calculate_semester_gpa(courses):
    if not courses:
        raise ValueError("Course list cannot be empty")

    total_weighted = 0
    total_credits = 0
    for score, credits in courses:
        if credits <= 0:
            raise ValueError(f"Credits must be positive, got {credits}")
        total_weighted += score_to_gpa(score) * credits
        total_credits += credits
    return total_weighted / total_credits
```

## 📊 Check Code Coverage

```bash
pytest --cov=grade_calculator --cov-report=term-missing
```

Output:
```
Name                   Stmts   Miss  Cover   Missing
----------------------------------------------------
grade_calculator.py       28      0   100%
----------------------------------------------------
TOTAL                     28      0   100%
```

🎉 **100% coverage** — semua baris kode kita sudah tertutup oleh test!

---

# Bagian 3: GitHub Integration

# 14. Setup Repository di GitHub

## 14.1 Buat Repository

1. Login ke [github.com](https://github.com)
2. Klik **+** → **New repository**
3. Repository name: `grade-calculator-tdd`
4. Description: "TDD practice with Grade Calculator"
5. Pilih **Public**
6. Centang **Add a README file**
7. Add `.gitignore`: pilih **Python**
8. Klik **Create repository**

## 14.2 Clone Repository

```bash
git clone https://github.com/USERNAME/grade-calculator-tdd.git
cd grade-calculator-tdd
```

## 14.3 Setup README

Edit `README.md`:

```markdown
# Grade Calculator (TDD Practice)

Latihan Test-Driven Development dengan Python.

## Setup
\`\`\`bash
pip install pytest pytest-cov
\`\`\`

## Run Tests
\`\`\`bash
pytest -v
\`\`\`

## Run Coverage
\`\`\`bash
pytest --cov=grade_calculator --cov-report=term-missing
\`\`\`
```

## 14.4 Copy Files

Pindahkan `grade_calculator.py` dan `test_grade_calculator.py` ke folder repository.

---

# 15. Workflow TDD dengan Git

## 15.1 Filosofi: Commit per Siklus TDD

Best practice: **setiap siklus TDD (Red-Green) = satu commit**. Ini membuat history-mu menjadi "story" pengembangan.

## 15.2 Workflow Detail

Untuk setiap fitur baru:

```bash
# 1. Buat branch baru
git checkout -b feature/score-to-grade-A

# 2. RED phase
# Tulis test yang fail
git add test_grade_calculator.py
git commit -m "test: add test for score 100 returns A (RED)"

# 3. GREEN phase
# Tulis kode minimal
git add grade_calculator.py
git commit -m "feat: implement score_to_grade for A (GREEN)"

# 4. REFACTOR (jika perlu)
git add grade_calculator.py
git commit -m "refactor: extract grade thresholds to constant"

# 5. Push ke GitHub
git push origin feature/score-to-grade-A

# 6. Create Pull Request di GitHub
# 7. Merge setelah review
```

## 15.3 Conventional Commits

Format commit message yang direkomendasikan:

- `test:` untuk menambah/mengubah test
- `feat:` untuk fitur baru
- `fix:` untuk bug fix
- `refactor:` untuk refactoring
- `docs:` untuk dokumentasi
- `chore:` untuk maintenance

Contoh:
```
test: add boundary tests for grade thresholds
feat: implement grade_to_gpa conversion
refactor: replace if-chain with lookup table
fix: handle negative score with proper error message
```

## 15.4 Pull Request Workflow

Saat membuat PR di GitHub:

**Judul PR:**
```
feat: implement grade_to_gpa function
```

**Body PR:**
```markdown
## Apa yang ditambahkan?
- Fungsi `grade_to_gpa(grade)` untuk konversi grade ke bobot GPA
- Support untuk semua grade (A, A-, B+, B, B-, C, D, E)
- Case-insensitive (menerima "a" dan "A")
- Error handling untuk grade tidak valid

## Test Coverage
- 8 test cases ditambahkan
- Coverage tetap 100%

## TDD Cycles
1. RED-GREEN untuk grade A
2. RED-GREEN untuk grade A-
3. ... (semua grade)
4. RED-GREEN untuk case-insensitivity
5. REFACTOR: extract GPA_WEIGHTS dictionary

## Screenshot
![pytest output](url-to-screenshot)
```

---

# 16. GitHub Actions untuk Automated Testing

GitHub Actions akan otomatis menjalankan test setiap kali ada push atau PR.

## 16.1 Buat Workflow File

Buat folder `.github/workflows/` dan file `tests.yml`:

```bash
mkdir -p .github/workflows
touch .github/workflows/tests.yml
```

## 16.2 Workflow Configuration

Isi `tests.yml`:

```yaml
name: Run Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: ["3.9", "3.10", "3.11", "3.12"]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install pytest pytest-cov

      - name: Run tests with coverage
        run: |
          pytest --cov=grade_calculator --cov-report=term-missing --cov-report=xml

      - name: Upload coverage report
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report-${{ matrix.python-version }}
          path: coverage.xml
```

## 16.3 Penjelasan Workflow

**Apa yang terjadi:**
1. Setiap push ke `main` atau setiap PR → workflow trigger
2. Workflow run di Ubuntu dengan 4 versi Python (matrix testing)
3. Install dependencies → run pytest dengan coverage
4. Upload coverage report sebagai artifact

**Hasilnya:** PR akan menampilkan ✅ atau ❌ berdasarkan hasil test. Tidak ada lagi "tapi di laptop saya jalan" — semua harus pass di environment standar!

## 16.4 Commit dan Push

```bash
git add .github/workflows/tests.yml
git commit -m "ci: add GitHub Actions for automated testing"
git push origin main
```

Buka tab **Actions** di GitHub repository untuk lihat workflow berjalan!

---

# 17. Code Coverage Badge

Tambahkan badge yang menunjukkan coverage di README.

## 17.1 Setup Codecov (Gratis)

1. Buka [codecov.io](https://codecov.io)
2. Sign in dengan GitHub
3. Authorize Codecov
4. Pilih repository `grade-calculator-tdd`

## 17.2 Update Workflow

Tambahkan step upload ke Codecov di `tests.yml`:

```yaml
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          file: ./coverage.xml
          fail_ci_if_error: true
```

## 17.3 Tambah Badge di README

Update `README.md`:

```markdown
# Grade Calculator (TDD Practice)

![Tests](https://github.com/USERNAME/grade-calculator-tdd/workflows/Run%20Tests/badge.svg)
[![codecov](https://codecov.io/gh/USERNAME/grade-calculator-tdd/branch/main/graph/badge.svg)](https://codecov.io/gh/USERNAME/grade-calculator-tdd)

Latihan Test-Driven Development dengan Python.
```

Ganti `USERNAME` dengan GitHub username-mu.

Hasil akhirnya, README-mu akan menampilkan badge cantik yang menunjukkan **status test pass** dan **persentase coverage**. Profesional!

---

# Bagian 4: Best Practices

# 18. Anti-Patterns yang Harus Dihindari

## ❌ Anti-Pattern 1: Skip RED Phase

**Salah:**
```python
# Langsung tulis kode
def score_to_grade(score):
    # ... implementasi lengkap

# Baru tulis test yang sudah pasti pass
def test_works():
    assert score_to_grade(95) == "A"
```

**Mengapa salah?** Test yang langsung pass tanpa fase RED bisa jadi test yang salah. Kita tidak punya bukti bahwa test-nya valid.

## ❌ Anti-Pattern 2: Over-Engineering di Fase GREEN

**Salah:**
```python
# Test: assert score_to_grade(100) == "A"

# Kode yang ditulis (terlalu jauh dari requirement):
def score_to_grade(score):
    # Implementasi lengkap untuk SEMUA grade
    if score >= 90: return "A"
    if score >= 85: return "A-"
    # ... dst
```

**Yang benar:**
```python
def score_to_grade(score):
    return "A"  # cukup ini dulu!
```

Biarkan test berikutnya mendorong generalisasi.

## ❌ Anti-Pattern 3: Test yang Bergantung pada Test Lain

**Salah:**
```python
def test_1():
    global result
    result = score_to_grade(95)

def test_2():
    assert result == "A"  # bergantung pada test_1!
```

Test harus **independent** — bisa dijalankan dalam urutan apa pun.

## ❌ Anti-Pattern 4: Mengubah Test untuk Pass

**Salah:**
```python
# Test gagal:
def test_score_90_returns_A():
    assert score_to_grade(90) == "A"

# AssertionError: 'A-' != 'A'

# Solusi yang SALAH:
def test_score_90_returns_A():
    assert score_to_grade(90) == "A-"  # ubah test agar pass
```

Test gagal artinya **kode yang harus diperbaiki**, bukan test. Test adalah spesifikasi.

## ❌ Anti-Pattern 5: Commit dengan Test Fail

Jangan pernah commit kode dengan test yang fail (kecuali sengaja untuk fase RED dan langsung dilanjutkan ke GREEN).

```bash
# Selalu cek sebelum commit:
pytest
git add .
git commit -m "..."
```

---

# 19. Tips untuk TDD yang Efektif

## ✅ Tip 1: Mulai dari Test Paling Sederhana

Selalu mulai dari kasus paling mudah. Untuk grade calculator, mulai dari `score = 100 → "A"`, bukan dari edge case yang kompleks.

## ✅ Tip 2: Satu Test pada Satu Waktu

Jangan tulis 10 test sekaligus. Tulis 1, jalankan (RED), implement (GREEN), refactor jika perlu, baru lanjut test berikutnya.

## ✅ Tip 3: Test Harus Cepat

Jika test memerlukan database, file system, atau network, pertimbangkan untuk menggunakan **mock**. Test yang lambat akan membuat developer malas menjalankannya.

## ✅ Tip 4: Test Names Harus Deskriptif

**Buruk:** `def test_1()`, `def test_grade()`
**Bagus:** `def test_score_90_returns_grade_A()`

## ✅ Tip 5: Gunakan AAA Pattern

Struktur test yang baik:

```python
def test_calculate_semester_gpa():
    # Arrange — siapkan data
    courses = [(95, 3), (80, 3)]

    # Act — jalankan fungsi
    result = calculate_semester_gpa(courses)

    # Assert — verifikasi hasil
    expected = (4.0 + 3.33) / 2
    assert result == pytest.approx(expected)
```

## ✅ Tip 6: Refactor Test Juga!

Test code adalah code juga. Kalau ada duplikasi atau pattern yang berulang, refactor!

```python
# Sebelum (banyak duplikasi):
def test_score_100_returns_A():
    assert score_to_grade(100) == "A"

def test_score_95_returns_A():
    assert score_to_grade(95) == "A"

def test_score_90_returns_A():
    assert score_to_grade(90) == "A"

# Sesudah (parametrize):
import pytest

@pytest.mark.parametrize("score,expected_grade", [
    (100, "A"),
    (95, "A"),
    (90, "A"),
    (89, "A-"),
    (85, "A-"),
    (80, "B+"),
])
def test_score_to_grade(score, expected_grade):
    assert score_to_grade(score) == expected_grade
```

Jauh lebih bersih!

## ✅ Tip 7: Coverage Bukan Tujuan, Tapi Indikator

100% coverage **bukan jaminan** bebas bug. Tapi coverage rendah (< 70%) hampir pasti tanda kode tidak teruji dengan baik. Fokus pada test yang bermakna.

---

# 📋 Submission Checklist

Sebelum submit project, pastikan:

**🧪 Testing**
- [ ] Semua test pass (`pytest` → 0 failed)
- [ ] Code coverage minimal 90% (`pytest --cov`)
- [ ] Test mencakup happy path dan edge cases
- [ ] Tidak ada test yang di-skip atau di-comment

**📝 Code Quality**
- [ ] Kode bersih, tidak ada commented-out code
- [ ] Penamaan jelas (fungsi, variabel, test)
- [ ] Tidak ada hardcoded magic number tanpa penjelasan
- [ ] Error handling untuk input tidak valid

**🐙 Git & GitHub**
- [ ] Commit history menunjukkan TDD workflow (red-green-refactor)
- [ ] Commit messages mengikuti convention
- [ ] Setidaknya 1 Pull Request dibuat dan di-merge
- [ ] GitHub Actions workflow setup dan running
- [ ] Test pass di CI (badge hijau)

**📄 Dokumentasi**
- [ ] README lengkap dengan setup instruction
- [ ] Badge tests dan coverage tampil di README
- [ ] Penjelasan fungsi-fungsi utama

---

# 🎓 Penutup

Selamat! Kamu telah membangun aplikasi **Grade Calculator** lengkap dengan TDD, dari konsep hingga deployment dengan CI/CD.

## Yang Sudah Kamu Pelajari

✅ Filosofi dan siklus TDD (Red-Green-Refactor)
✅ Menulis test sebelum kode produksi
✅ Membangun fungsi bertahap dengan TDD
✅ Refactoring dengan percaya diri
✅ Error handling dan edge cases
✅ Git workflow yang baik untuk TDD
✅ GitHub Actions untuk automated testing
✅ Code coverage dan badge

> 💡 **Pesan Akhir:** TDD bukan tentang menulis lebih banyak test — ini tentang **mengubah cara berpikir** tentang software development. Dengan TDD, kamu tidak hanya menulis kode yang **berfungsi**, tapi kode yang **bisa dipercaya**, **bisa diubah dengan aman**, dan **terdokumentasi dengan baik** secara otomatis.

---

*Software Engineering — D7123*
