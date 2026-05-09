---
title: "Fundamentals of Software Testing"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "Materi komprehensif tentang dasar-dasar software testing — dari konsep, prinsip, teknik, hingga praktik defect identification dan tracking."
---

# 📘 Fundamentals of Software Testing

> **Modul Ajar Software Engineering**
> Materi komprehensif tentang dasar-dasar software testing — dari konsep, prinsip, teknik, hingga praktik defect identification dan tracking.

---

## 📑 Table of Contents

1. [Software Quality](#1-software-quality)
2. [Objectives and Importance of Software Testing](#2-objectives-and-importance-of-software-testing)
3. [Levels of Testing](#3-levels-of-testing)
4. [Types of Testing](#4-types-of-testing)
5. [Testing Techniques](#5-testing-techniques)
6. [Test Planning and Design](#6-test-planning-and-design)
7. [Test Case Development and Execution](#7-test-case-development-and-execution)
8. [Defect Identification](#8-defect-identification)
9. [Defect Reporting and Tracking](#9-defect-reporting-and-tracking)
10. [Glossary](#-glossary)
11. [Referensi & Bacaan Lanjutan](#-referensi--bacaan-lanjutan)

---

# 1. Software Quality

Software quality bukan sekadar "tidak ada bug." Ia adalah konsep multidimensi yang mencakup berbagai aspek mulai dari kualitas kode di dalam hingga pengalaman pengguna di luar.

## 1.1 Internal vs External Quality

Software quality dibagi menjadi dua dimensi utama:

### 🔧 Internal Quality

Kualitas yang dilihat dari **perspektif developer** — sesuatu yang tidak langsung dirasakan oleh user, tapi sangat menentukan kesehatan jangka panjang software.

Pertanyaan kuncinya:
- Apakah kode terstruktur dengan baik?
- Apakah kode mudah dipahami developer lain?
- Apakah dokumentasinya memadai?

> 💡 **Analogi:** Internal quality seperti pondasi rumah. Penghuni mungkin tidak melihatnya, tapi pondasi yang buruk akan menjadi masalah besar di masa depan.

### 👤 External Quality

Kualitas yang **dirasakan langsung oleh user** saat menggunakan software.

Pertanyaan kuncinya:
- Apakah software stabil dan tidak crash?
- Apakah fitur yang ada sesuai kebutuhan user?
- Apakah antarmukanya nyaman digunakan?

### Perbandingan Singkat

Internal quality dilihat oleh developer dan fokus pada kode dan struktur. Dideteksi via code review dan static analysis.

External quality dilihat oleh end user dan fokus pada perilaku serta fungsi. Dideteksi via testing dan user feedback.

Keduanya **sama pentingnya** — software bisa terlihat bagus di luar tapi rapuh di dalam, atau sebaliknya.

## 1.2 Peran Testing

Testing utamanya berfungsi untuk **memastikan external quality** — memverifikasi bahwa software berperilaku benar dari sudut pandang pengguna. Tanpa testing yang proper, "fix" bisa saja hanya menyembunyikan masalah, bukan menyelesaikannya.

## 📋 Worksheet: Software Quality Assessment

Untuk software/aplikasi yang sedang kamu kembangkan atau yang familiar bagimu, isi assessment berikut:

**Nama Software:** _________________

**Internal Quality Assessment:**
- Code structure (1-5): ___ — Alasan: _________________
- Code readability (1-5): ___ — Alasan: _________________
- Documentation quality (1-5): ___ — Alasan: _________________

**External Quality Assessment:**
- Stability/no crashes (1-5): ___ — Alasan: _________________
- Meets user requirements (1-5): ___ — Alasan: _________________
- UI/UX quality (1-5): ___ — Alasan: _________________

**Refleksi:**
- Aspek mana yang paling perlu ditingkatkan? _________________
- Apa langkah konkret untuk meningkatkannya? _________________

---

# 2. Objectives and Importance of Software Testing

## 2.1 Terminologi Dasar

Tiga istilah ini sering tertukar di percakapan sehari-hari, tapi memiliki makna yang berbeda dalam konteks software engineering formal.

### ⚠️ Failure

Kondisi yang **terlihat dari luar** — ketika sistem tidak berperilaku sesuai ekspektasi.

> 💡 **Contoh:** Aplikasi banking menampilkan error saat user mencoba transfer.

### 🐛 Fault / Defect

**Penyebab di dalam kode** yang berpotensi menyebabkan failure. Belum tentu langsung terlihat — baru muncul ketika kondisi tertentu terpenuhi saat eksekusi.

> 💡 **Contoh:** Logika perhitungan bunga yang salah di dalam kode.

### 👤 Error / Mistake

**Tindakan manusia** yang menjadi akar masalah — yang pada akhirnya menciptakan fault.

> 💡 **Contoh:** Developer salah membaca spesifikasi dan menulis rumus yang keliru.

### Hubungan Ketiganya

```
Error (manusia salah)
    ↓ menghasilkan
Fault/Defect (cacat di kode)
    ↓ jika terpicu saat eksekusi
Failure (sistem gagal berfungsi)
```

Ketiganya dikelompokkan dalam istilah populer: **"Bug"**

### 🔍 Testing vs Debugging

**Testing** = aktivitas mencoba memicu failure. Dilakukan oleh tester/QA, menghasilkan laporan failure.

**Debugging** = aktivitas mencari penyebab (fault) dari failure. Dilakukan oleh developer, menghasilkan lokasi dan perbaikan fault.

> 💡 **Analogi:** Testing = mendeteksi ada asap. Debugging = mencari sumber apinya.

### Contoh Real: Error → Fault → Failure

**Kasus: Bug di Aplikasi Transfer Bank**

**Error:** Developer salah menginterpretasikan requirement "biaya admin = 1% dari nominal", dan menulis:
```python
admin_fee = transfer_amount // 100  # integer division — salah!
```

**Fault:** Baris kode dengan integer division salah tersimpan di sistem. Untuk transfer Rp 100.000, hasilnya benar (Rp 1.000), tapi untuk Rp 150.500 hasilnya Rp 1.500 (seharusnya Rp 1.505).

**Failure:** User transfer Rp 550.750. Sistem mendebit biaya admin Rp 5.507 — bank rugi Rp 0,5 per transaksi. Dikalikan jutaan transaksi per hari, ini kerugian besar.

## 2.2 Seven Principles of Testing

### Principle #1: Testing Shows Presence of Defects

Testing yang berhasil menemukan bug **membuktikan** ada masalah. Tapi testing yang **tidak menemukan bug TIDAK BERARTI** software bebas bug.

> *"Program testing can be used to show the presence of bugs, but never to show their absence."* — **Edsger W. Dijkstra**

Mengapa testing tidak bisa membuktikan bebas bug?
- Kombinasi input tak terbatas
- Kompleksitas sistem yang tinggi
- Keterbatasan waktu dan biaya
- Lingkungan eksekusi yang berbeda-beda

### Principle #2: Exhaustive Testing is Impossible

Menguji **semua kemungkinan input** secara matematis tidak feasible.

**Bukti matematis sederhana:**

Bayangkan fungsi sederhana dengan 1 input string maksimal 26 karakter lowercase + simbol. Jumlah kombinasi inputnya astronomis. Bahkan dengan komputer berkecepatan 1 zettaFLOPS (10²¹ operasi/detik), testing exhaustive butuh sekitar **8 miliar tahun** untuk selesai.

Sebagai pembanding, supercomputer tercepat saat ini (El Capitan) "hanya" mampu 1,8 ExaFLOPS (10¹⁸ operasi/detik) — masih 1.000x lebih lambat dari kecepatan yang diasumsikan di atas.

**Solusinya:** gunakan strategi cerdas seperti equivalence partitioning, boundary value analysis, dan risk-based testing.

### Principle #3: Start Testing Early

Testing **bukan tahap akhir** dalam SDLC, melainkan harus dimulai sedini mungkin.

Manfaatnya:
- Tests bisa memandu desain (Test-Driven Development)
- Feedback diperoleh secepat mungkin
- Bug ditemukan saat paling murah diperbaiki
- Bug ditemukan saat belum menyebabkan kerusakan luas

**Biaya memperbaiki bug meningkat eksponensial:**

Bug ditemukan saat requirements → biaya sangat murah, cukup ubah dokumen.
Bug ditemukan saat coding → perlu refactor kode.
Bug ditemukan saat testing → perlu fix + retest.
Bug ditemukan saat production → biaya paling mahal, melibatkan hotfix, reputasi, dan potensi kerugian bisnis.

### Principle #4: Defects Are Usually Clustered

Bug cenderung **mengelompok** di area-area tertentu — sekitar 80% bug datang dari 20% modul (Pareto Principle).

**"Hot" components yang rawan defect:**
- Modul yang sering diubah (frequent change)
- Modul dengan logika kompleks (tricky logic)
- Modul yang dikerjakan developer kurang berpengalaman
- Modul dengan requirement yang tidak jelas
- Modul besar (banyak baris kode)
- Fitur baru/inovatif

**Implikasinya:** alokasikan effort testing **lebih banyak** ke area "hot" tersebut.

> 💡 **Analogi:** Polisi menempatkan lebih banyak personel di area rawan kejahatan, bukan menyebar merata di seluruh kota.

### Principle #5: The Pesticide Paradox

> *"Every method you use to prevent or find bugs leaves a residue of subtler bugs against which those methods are ineffectual."* — **Boris Beizer**

Test suite yang **terus dijalankan tanpa diubah** akan kehilangan efektivitasnya. Bug-bug yang lolos dari testing rutin adalah bug yang sudah "resisten" terhadap metode tersebut.

**Solusi — Variation in Testing:**
- Update test cases secara berkala
- Gunakan teknik testing yang berbeda-beda
- Libatkan tester yang berbeda
- Tambahkan input data baru
- Lakukan exploratory testing
- Adopsi pendekatan baru (fuzzing, mutation testing, dll)

### Principle #6: Testing is Context-Dependent

**Strategi testing harus disesuaikan** dengan karakteristik aplikasi:

- **Aplikasi life-critical** (sistem medis, avionik) → testing sangat menyeluruh
- **Aplikasi e-commerce** → fokus performance dan usability
- **Game mobile** → device compatibility dan crash handling
- **Prototype/MVP** → testing dasar untuk validasi konsep

Faktor yang memengaruhi: jenis aplikasi, tingkat kekritisan, regulasi industri, target user, teknologi, anggaran, dan tahap proyek.

### Principle #7: Verification is Not Validation

**Verification** = "Are we building the software RIGHT?" — cek terhadap dokumen/spesifikasi.

**Validation** = "Are we building the RIGHT software?" — cek terhadap kebutuhan user.

> 💡 **Contoh:** Software yang lulus verification (sesuai dokumen) tapi gagal validation (tidak memenuhi kebutuhan user) = produk salah yang dibangun dengan cara benar. Sering terjadi karena requirement awalnya tidak menggambarkan kebutuhan sebenarnya.

## 2.3 Primary Objectives of Testing

Empat tujuan utama yang saling berkaitan:

1. **Defect Identification** — mendeteksi dan mengeliminasi error untuk reliability
2. **Quality Assurance** — memastikan software memenuhi requirements & ekspektasi
3. **Verification & Validation** — produk dibangun benar (verification) dan memenuhi kebutuhan user (validation)
4. **Risk Mitigation** — mengurangi risiko teknis, bisnis, reputasi, dan keselamatan

## 📋 Worksheet: 7 Principles Reflection

Untuk setiap prinsip, identifikasi bagaimana ia berlaku di proyekmu:

**Project:** _________________

1. **Testing shows presence of defects:**
   Bagaimana cara tim memastikan tidak terjebak fallacy "tidak ada bug ditemukan = software bebas bug"? _________________

2. **Exhaustive testing is impossible:**
   Strategi heuristic apa yang digunakan untuk memilih test case? _________________

3. **Start testing early:**
   Pada fase apa testing pertama kali dilakukan di proyekmu? _________________

4. **Defects are clustered:**
   Modul mana yang paling "hot" (rawan bug) di proyekmu? _________________

5. **Pesticide paradox:**
   Kapan terakhir kali test suite di-refresh atau ditambah? _________________

6. **Testing is context-dependent:**
   Apa konteks unik proyekmu yang mempengaruhi strategi testing? _________________

7. **Verification is not validation:**
   Bagaimana cara tim memvalidasi bahwa produk memenuhi kebutuhan user nyata? _________________

---

# 3. Levels of Testing

Software testing dilakukan di berbagai level — dari komponen terkecil hingga sistem secara utuh.

## 3.1 Unit Testing

**Fokus:** komponen individual (fungsi, method, kelas) dalam **isolasi**.

Yang diuji adalah unit terkecil dari kode. Dependensi (database, API eksternal, service lain) biasanya **di-mock** atau **di-stub**.

**Siapa yang melakukan:** developer sendiri.

**Tools populer:**
- Java → JUnit, TestNG
- JavaScript → Jest, Mocha, Vitest
- Python → pytest, unittest
- C# → NUnit, xUnit
- PHP → PHPUnit

**Contoh test case untuk fungsi `login(username, password)`:**

```python
def test_login_valid_credentials():
    result = login("user@test.com", "ValidPassword123")
    assert result.success == True
    assert result.token is not None

def test_login_wrong_password():
    result = login("user@test.com", "WrongPassword")
    assert result.success == False
    assert result.error == "Invalid credentials"
```

**Karakteristik unit test yang baik (F.I.R.S.T):**
- **Fast** — cepat (milidetik per test)
- **Independent** — tidak bergantung pada test lain
- **Repeatable** — hasilnya konsisten
- **Self-validating** — pass/fail jelas
- **Timely** — ditulis bersamaan kode produksi

> 💡 **Tip:** Unit testing tidak selalu wajib — untuk prototype yang akan dibuang, ini overkill. Tapi untuk produk production jangka panjang, ini investasi yang wajib.

## 3.2 Integration Testing

**Fokus:** interaksi antar komponen yang sudah terintegrasi.

Yang diuji bukan komponen individual, tapi bagaimana mereka **berkomunikasi dan bekerja sama**.

**Contoh masalah yang ditemukan integration testing:**
- Format data tidak cocok (komponen A kirim JSON, komponen B harapkan XML)
- Asumsi yang salah antar komponen
- Timing/concurrency issues
- Versi library yang berbeda
- Network/IO problems

**Pendekatan integration testing:**
- **Big Bang** — semua modul digabung sekaligus
- **Top-Down** — mulai dari level atas, modul bawah pakai stubs
- **Bottom-Up** — mulai dari level bawah, modul atas pakai drivers
- **Sandwich/Hybrid** — kombinasi top-down dan bottom-up
- **Incremental** — modul ditambahkan satu per satu

**Tools populer:**
- Postman/Insomnia (API testing)
- REST Assured (Java)
- Supertest (Node.js)
- TestContainers (spawn database/service di Docker)
- WireMock (simulate API eksternal)

## 3.3 System Testing

**Fokus:** seluruh sistem yang sudah terintegrasi penuh, diuji end-to-end.

**Contoh:** menguji seluruh alur e-commerce dari user buka aplikasi → search produk → add to cart → checkout → payment → konfirmasi.

System testing mencakup:
- **Functional testing** — apakah semua fitur bekerja sesuai requirement?
- **Performance testing** — apakah cukup cepat di bawah beban?
- **Security testing** — apakah aman dari serangan?
- **Usability testing** — apakah mudah digunakan?
- **Compatibility testing** — apakah berjalan di berbagai browser/device/OS?

**Siapa yang melakukan:** tim QA independen, bukan developer yang menulis kodenya, untuk menghindari bias.

## 3.4 Acceptance Testing

**Fokus:** validasi dari **perspektif end user** — apakah software layak diterima?

### Alpha Testing

Dilakukan **internal** oleh tim non-development (sales, operasional, stakeholder). Lingkungan masih controlled.

### Beta Testing

Dilakukan **eksternal** oleh sekelompok user nyata. Software sudah cukup stabil untuk production-like environment.

> 💡 **Contoh:** Google Chrome Beta, game "Open Beta" sebelum launch resmi.

**Jenis acceptance testing:**
- **User Acceptance Testing (UAT)** — paling umum
- **Business Acceptance Testing (BAT)** — fokus kebutuhan bisnis
- **Regulatory Acceptance Testing** — untuk industri yang diatur ketat
- **Contract Acceptance Testing** — berdasarkan kontrak

> 💡 **Analogi level testing:** Unit = chef cek setiap bahan. Integration = chef cek bahan-bahan dimasak bersama. System = chef cicipi hidangan jadi. Acceptance = **tamu yang menentukan apakah hidangan layak disajikan**.

## 📋 Worksheet: Map Test Levels to Your Project

Untuk satu fitur di proyekmu, identifikasi test di setiap level:

**Fitur:** _________________ (contoh: "Login dengan Google OAuth")

**Unit Test:**
- Komponen yang diuji: _________________
- Test case: _________________
- Tool yang digunakan: _________________

**Integration Test:**
- Komponen yang berinteraksi: _________________
- Skenario interaksi: _________________
- Tool yang digunakan: _________________

**System Test:**
- End-to-end scenario: _________________
- Aspek yang diuji (functional/performance/dll): _________________

**Acceptance Test:**
- Siapa yang melakukan testing: _________________
- Acceptance criteria: _________________

---

# 4. Types of Testing

Kalau levels of testing membahas **seberapa besar cakupan**, types of testing membahas **apa yang diuji** dan **bagaimana**.

## 4.1 Functional Testing

**Memvalidasi bahwa software berfungsi sesuai requirements.**

Fokusnya pada **output**:
- Output correctness — apakah hasilnya benar?
- Feature interactions — apakah fitur bekerja saat digunakan bersama?
- User workflows — apakah alur penggunaan benar?

**Contoh:** memastikan tombol "Submit" di form pendaftaran mengarahkan user ke halaman konfirmasi setelah validasi sukses.

> 💡 **Pertanyaan kunci:** "Apakah software melakukan apa yang seharusnya dilakukan?"

## 4.2 Non-Functional Testing

**Menguji atribut kualitas dari software** — bukan fitur, tapi karakteristik bagaimana sistem beroperasi.

Yang dinilai antara lain:
- Performance — seberapa cepat?
- Security — seberapa aman?
- Usability — seberapa mudah digunakan?
- Reliability — seberapa andal?
- Scalability — apakah bisa tumbuh?

**Contoh:** mengukur seberapa cepat halaman web dimuat saat traffic tinggi.

> 💡 **Pertanyaan kunci:** "Seberapa baik software melakukan apa yang seharusnya dilakukan?"

## 4.3 Regression Testing

**Memastikan perubahan kode baru tidak merusak fungsionalitas yang sudah ada.**

Dilakukan setiap kali ada perubahan: bug fix, fitur baru, refactoring, update dependency.

**Contoh:** setelah update fitur login (tambah login Google OAuth), semua workflow terkait login harus ditest ulang:
- Login biasa masih berfungsi
- Reset password masih berfungsi
- Remember me masih berfungsi
- Logout masih berfungsi

> 💡 **Tip:** Regression testing sangat ideal untuk **diotomasi** karena repetitif dan perlu dijalankan berulang kali.

## 4.4 Performance Testing

**Mengevaluasi kecepatan, stabilitas, dan responsivitas** sistem.

**Sub-jenis performance testing:**

- **Load testing** — sistem di bawah beban normal
- **Stress testing** — beban yang melebihi kapasitas normal, cari titik batas
- **Spike testing** — reaksi terhadap lonjakan traffic tiba-tiba
- **Soak/Endurance testing** — sistem dalam jangka panjang, deteksi memory leak

**Yang diukur:** response time, throughput, resource utilization, stability.

> 💡 **Hubungan:** Performance testing adalah **bagian dari** non-functional testing, bukan kategori terpisah. Non-functional adalah payungnya, performance adalah salah satu jenisnya.

## 4.5 Usability Testing

**Mengukur seberapa efektif, efisien, dan memuaskan** pengalaman user.

Satu-satunya jenis testing yang **wajib partisipasi user nyata**.

Yang dievaluasi:
- Navigasi — mudah ditemukan?
- Keterbacaan — teks dan layout mudah dipahami?
- Alur kerja — natural?
- Error handling — pesan error membantu?
- Aksesibilitas — bisa digunakan semua orang?

**Cara melakukan:**
- User nyata diminta menyelesaikan tugas tertentu
- Observasi dan rekam interaksi mereka
- Ukur waktu, jumlah klik, frekuensi error
- Tanyakan tingkat kepuasan

## 📋 Worksheet: Test Types Coverage Plan

Untuk proyek/fitur:

**Project:** _________________

**Functional Testing Plan:**
- Fitur yang akan ditest: _________________
- Acceptance criteria: _________________

**Non-Functional Testing Plan:**
- Aspek yang akan ditest (pilih yang relevan): _________________
  - Performance: target response time _________________
  - Security: ancaman yang dipertimbangkan _________________
  - Usability: target user _________________
  - Lainnya: _________________

**Regression Testing Plan:**
- Frekuensi: _________________
- Otomasi: ya/tidak
- Tools: _________________

**Performance Testing Plan:**
- Load test: berapa concurrent user? _________________
- Stress test: apa yang dicari? _________________

**Usability Testing Plan:**
- Jumlah user yang akan dilibatkan: _________________
- Skenario yang akan diuji: _________________

---

# 5. Testing Techniques

Teknik testing menjelaskan **bagaimana cara tester mendekati dan merancang test case**.

## 5.1 Black-Box Testing

**Tester tidak perlu tahu kode internal.** Sistem diperlakukan sebagai "kotak hitam" — hanya input dan output yang diperhatikan.

**Cocok untuk:**
- Functional testing
- Usability testing
- Acceptance testing

**Contoh:** menguji form validation tanpa melihat kode. Tester mencoba berbagai input (email tanpa @, password terlalu pendek, field kosong) dan melihat respons.

**Keunggulan:**
- Bisa dilakukan non-programmer
- Menguji dari sudut pandang user
- Tidak bias terhadap implementasi

**Kelemahan:**
- Tidak menjamin semua jalur kode ditest
- Sulit comprehensive tanpa tahu struktur internal

## 5.2 White-Box Testing

**Tester harus memahami kode** secara mendalam — struktur, logika, kondisi percabangan, alur data.

**Cocok untuk:**
- Unit testing
- Integration testing
- Security testing

**Contoh:** menguji fungsi login dengan memastikan setiap branch kondisi dieksekusi, semua edge case tertangani, tidak ada dead code.

**Keunggulan:**
- Coverage lebih mendalam
- Efektif untuk bug logika tersembunyi
- Mendeteksi dead code

**Kelemahan:**
- Butuh skill programming
- Time-consuming untuk sistem besar
- Tester bisa bias

## 5.3 Grey-Box Testing

**Pendekatan hybrid** — tester punya **pengetahuan parsial** tentang internal sistem.

**Cocok untuk:**
- Integration testing
- API testing
- Security testing

**Contoh:** menguji REST API — tester tahu endpoint dan struktur request/response, tapi tidak tahu detail implementasi server-side.

> 💡 **Analogi:**
> - **Black-box** = menilai rasa makanan tanpa masuk dapur
> - **White-box** = chef yang cek setiap langkah resep dan suhu masakan
> - **Grey-box** = food critic yang tahu cara memasak tapi tetap menilai dari posisi tamu restoran

## 📋 Worksheet: Choose the Right Technique

Untuk setiap skenario, pilih teknik yang paling cocok dan jelaskan alasannya:

**Skenario 1:** Tester non-developer akan menguji aplikasi mobile e-commerce baru
- Teknik: _________________
- Alasan: _________________

**Skenario 2:** Developer ingin memastikan setiap branch di fungsi pembayaran sudah ditest
- Teknik: _________________
- Alasan: _________________

**Skenario 3:** Tim QA menguji integrasi antara aplikasi mobile dan backend API
- Teknik: _________________
- Alasan: _________________

**Skenario 4:** Security tester akan melakukan penetration testing
- Teknik: _________________
- Alasan: _________________

---

# 6. Test Planning and Design

## 6.1 What is Test Planning?

**Test planning** adalah proses mendefinisikan secara terstruktur semua hal yang dibutuhkan sebelum testing dimulai — scope, tujuan, sumber daya, jadwal, deliverables.

Test planning menjawab:
- **Apa** yang akan ditest?
- **Bagaimana** cara mengetesnya?
- **Siapa** yang akan melakukan?
- **Kapan** testing dilakukan?
- **Berapa banyak** resource dibutuhkan?

### Steps in Test Planning

**1. Define testing scope and objectives**
- Fitur apa yang akan ditest?
- Apa yang out of scope dan mengapa?
- Apa tujuan utama testing?

**2. Develop test criteria for pass/fail conditions**
- **Entry criteria** — kondisi sebelum testing dimulai
- **Exit criteria** — kondisi yang menandakan testing selesai
- **Pass/fail criteria** — kapan test pass dan fail

**3. Allocate resources and schedule**
- Berapa tester yang dibutuhkan?
- Tools apa yang diperlukan?
- Environment apa yang dibutuhkan?
- Berapa lama waktu untuk tiap fase?

**4. Identify potential risks and mitigation strategies**
- Risiko umum: fitur belum selesai, environment tidak stabil, tester sakit, requirements berubah, deadline maju
- Setiap risiko harus punya mitigation strategy

## 6.2 Designing Effective Tests

**Use structured test cases** dengan komponen lengkap (akan dibahas di section 7).

**Incorporate edge cases** — tidak hanya happy path, tapi juga skenario tepi yang jarang terjadi.

## 6.3 Exhaustive Testing Issue

Mari lihat realita lewat contoh fungsi `bus_ticket_price`:

```python
def bus_ticket_price(age, ride_datetime, ride_duration, is_public_holiday):
    """
    Compute bus ride price:
    - Children under 2 ride for free
    - Children under 18 and seniors over 65 pay half fare
    - All others pay full fare of $3
    - Weekday peak (7-9am, 4-6pm): +$1.5 surcharge
    - Weekends: flat rate $2 (except children under 2)
    - Short trips < 5 min during off-peak weekday: free
    - Public holiday: +$2 surcharge (overrides other surcharges)
    """
```

**Untuk exhaustive testing:**
- age: 116 nilai (2-117)
- datetime: 1.440 menit/hari × 1.826 hari (5 tahun)
- ride_duration: 120 nilai
- is_public_holiday: 2 nilai

Total = **~72 miliar test cases**.

Bahkan dengan automasi 1.000 test/detik, butuh **2,3 tahun** hanya untuk satu fungsi ini.

**Kesimpulan:** Exhaustive testing tidak feasible. Kita butuh **heuristics** untuk memilih test case yang paling bernilai.

## 6.4 Test Design Techniques

### Opportunistic / Exploratory Testing

Tester **mengeksplorasi sistem secara bebas** mengikuti intuisi. Tidak ada script formal.

**Cocok untuk:**
- Fitur baru tanpa test case
- Waktu sangat terbatas
- Komplemen testing terstruktur

**Kelemahan:** tidak repeatable dan sulit diukur.

### Specification-Based ("Black-box")

#### A. Equivalence Partitioning

**Bagi semua input ke kelompok-kelompok yang diperlakukan sama**, lalu test satu nilai dari setiap partisi.

**Contoh untuk parameter `age` di bus ticket:**
- Partisi 1: age < 0 → invalid
- Partisi 2: 0 ≤ age < 2 → gratis
- Partisi 3: 2 ≤ age < 18 → setengah harga
- Partisi 4: 18 ≤ age ≤ 65 → harga penuh
- Partisi 5: age > 65 → setengah harga
- Partisi 6: age > 130 → invalid

#### B. Boundary Value Analysis (BVA)

**Test nilai-nilai di batas partisi** karena bug paling sering muncul di sana.

Untuk setiap range, test:
- minimum
- min+1
- medium
- max-1
- maximum
- min-1 (invalid)
- max+1 (invalid)

**Contoh untuk batas age=2 (gratis vs setengah harga):**
- age = 1 → gratis (max partisi gratis)
- age = 2 → setengah harga (min partisi anak)
- age = 3 → setengah harga (min+1)

> 💡 **Why it works:** Bug klasik = developer salah tulis `<=` saat seharusnya `<`. Bug ini hanya muncul tepat di nilai batas.

#### C. Category-Partition Method

**Formalisasi equivalence partitioning** dengan langkah terstruktur:

1. Identify parameters
2. Determine domains (from spec + not from spec)
3. Add constraints to minimize
4. Remove invalid combinations
5. Reduce exceptional behaviors
6. Generate combinations

**Contoh tabel untuk bus_ticket_price:**

```
age           : <2, [2,17], [18,65], >65
ride_datetime : weekdays peak, weekdays off-peak,
                weekends peak, weekends off-peak, ...
ride_duration : <5, >=5
is_public_holiday : F, T
```

#### D. Pairwise Testing

**Insight:** banyak bug muncul dari **interaksi 2 parameter**. Pairwise testing memastikan setiap pasangan nilai parameter sudah ditest minimal sekali.

**Klaim industri:** considering pairwise interactions menemukan **50%-90% defect**.

**Contoh interaksi yang menarik di bus_ticket_price:**
- Senior + weekend (2-way) — apakah lansia di weekend dapat flat rate atau setengah dari flat rate?
- Senior + weekend + peak hour (3-way)
- Adult + long trip + holiday + weekend (4-way)

**Tools:** PICT (Microsoft), AllPairs (Python), Hexawise.

**Penghematan:** 4×4×2×2 = 64 full combinations bisa direduksi jadi ~16-20 test cases dengan pairwise.

#### E. Decision Table Testing

**Cocok untuk logika bisnis kompleks** dengan banyak kondisi yang berinteraksi.

**Format:** kondisi di baris atas, aksi di baris bawah, setiap kolom = satu test case.

**Contoh untuk sistem diskon e-commerce:**

```
Conditions          | C1 | C2 | C3 | C4
Member Premium?     | Y  | Y  | N  | N
Pembelian > 500rb?  | Y  | N  | Y  | N
Punya Voucher?      | Y  | Y  | N  | Y
---
Actions
Diskon 30%          | ✓
Diskon 20%          |    | ✓  | ✓
Diskon 10%          |    |    |    | ✓
Tidak ada diskon    |
```

#### F. State Transition Testing

**Cocok untuk sistem berbasis state machine.**

**Contoh: Sistem akun bank**

```
States: Active → Suspended → Locked → Closed

Transitions:
- Active → Suspended: 3 kali gagal login
- Suspended → Active: Admin reset password
- Suspended → Locked: Tidak aktif 30 hari
- Locked → Closed: Request penutupan akun
- Locked → Active: Verifikasi identitas berhasil
```

Test case untuk: setiap state, setiap valid transition, invalid transitions, boundary triggers.

#### G. Use Case Testing

Test case **diturunkan langsung dari use case document**:
- Main flow (happy path)
- Alternative flows
- Exception flows

**Contoh: Use case "Transfer Dana"**
- Main: login → transfer → input rekening → input nominal → konfirmasi → sukses
- Alternative: pilih rekening favorit → transfer
- Exception: saldo kurang → tolak; koneksi terputus → rollback

#### H. Error Guessing

**Berbasis pengalaman tester** — menebak di mana bug paling mungkin bersembunyi.

Berbasis pengetahuan tentang:
- Common bugs (off-by-one, null pointer, division by zero)
- Historical bugs di area sama
- Developer habits
- Risky areas

**Contoh tebakan umum:**
- Input 0 di field kalkulasi → division by zero?
- Spasi di field username → diterima atau ditolak?
- Klik tombol berkali-kali cepat → duplicate transaction?
- Karakter spesial di nama file → crash?
- SQL injection di password → aman?

### Structural ("White-box")

#### A. Statement Coverage

**Pastikan setiap baris kode dieksekusi minimal sekali.**

Formula: `(Statement dieksekusi / Total statement) × 100%`

**Contoh:**
```python
def calculate_fare(age, is_holiday):
    fare = 3.0                # Statement 1

    if age < 2:               # Decision A
        return 0              # Statement C (jalur True)

    if age > 65:              # Decision B
        fare *= 0.5           # Statement D (jalur True)

    if is_holiday:            # Decision E
        fare += 2.0           # Statement F (jalur True)

    return fare               # Statement G
```

Untuk 100% statement coverage, butuh 2 test case:
- `age=1` (mengeksekusi statement 1, A, C)
- `age=70, is_holiday=True` (mengeksekusi statement 1, A, B, D, E, F, G)

**Kelemahan:** tidak menjamin semua branch ditest.

#### B. Branch Coverage

**Pastikan setiap branch (True/False) dari setiap decision dieksekusi.**

Untuk fungsi di atas: 3 decision × 2 branch = **6 branch** yang harus ditest.

Butuh 3 test case:
- `age=1` → True dari A
- `age=70, is_holiday=True` → False dari A, True dari B, True dari E
- `age=30, is_holiday=False` → False dari B, False dari E

> 💡 **Hierarki coverage:** 100% branch coverage **menjamin** 100% statement coverage, tapi tidak sebaliknya.

#### C. Condition Coverage (Predicate Coverage)

**Lebih dalam dari branch coverage** — memastikan setiap **sub-kondisi individual** dalam decision sudah pernah True dan False.

**Contoh:**
```python
if age >= 18 and has_license:
    print("Eligible")
```

Decision ini punya 2 sub-kondisi:
- `age >= 18`
- `has_license`

Untuk 100% condition coverage, butuh test agar masing-masing sub-kondisi pernah True dan False:
- `age=20, has_license=True` → keduanya True
- `age=17, has_license=True` → kondisi 1 False
- `age=20, has_license=False` → kondisi 2 False

**Kenapa ini lebih kuat?** Branch coverage bisa dicapai dengan 2 test case yang menutupi seluruh kondisi True/False, tapi tidak menjamin setiap sub-kondisi diuji secara independen.

#### D. Basis Path Testing & Cyclomatic Complexity

**Dikembangkan oleh Tom McCabe (1976).**

Steps:
1. Buat control flow graph
2. Hitung cyclomatic complexity
3. Identifikasi independent paths
4. Buat test case untuk setiap path

**Tiga formula cyclomatic complexity (semuanya menghasilkan nilai sama):**

- `V(G) = P + 1` di mana P = jumlah predicate nodes
- `V(G) = E - N + 2` di mana E = edges, N = nodes
- `V(G) = jumlah non-overlapping regions`

**Contoh untuk `calculate_fare` di atas:**

P = 3 (tiga if statements)
V(G) = 3 + 1 = **4 independent paths**

Independent paths:
1. age < 2 → return 0
2. age normal, is_holiday=False → return fare normal
3. age normal, is_holiday=True → return fare + holiday
4. age > 65, is_holiday=False → return fare * 0.5

**Interpretasi nilai cyclomatic complexity:**
- 1-10 → kode sederhana, risiko rendah
- 11-20 → cukup kompleks, perhatikan
- 21-50 → sangat kompleks, risiko tinggi
- > 50 → harus direfactor

> 💡 **Tip:** Banyak tim menetapkan cyclomatic complexity maksimum 10 sebagai coding standard.

## 📋 Worksheet: Apply Test Design Techniques

**Skenario:** Sistem pendaftaran mahasiswa baru dengan parameter:
- `age` (int)
- `is_local` (boolean) — domestik atau internasional
- `gpa` (float, 0.0-4.0)
- `program` (string: "S1", "S2", "S3")

**Equivalence Partitioning untuk `gpa`:**
- Partisi invalid bawah: _________________
- Partisi rendah: _________________
- Partisi sedang: _________________
- Partisi tinggi: _________________
- Partisi invalid atas: _________________

**Boundary Value Analysis untuk `gpa`:**
- min - 1: _________________
- min: _________________
- min + 1: _________________
- medium: _________________
- max - 1: _________________
- max: _________________
- max + 1: _________________

**Pairwise Testing — identifikasi 5 kombinasi paling kritis:**
1. _________________
2. _________________
3. _________________
4. _________________
5. _________________

**Cyclomatic Complexity Calculation:**
Tulis kode singkat yang memvalidasi pendaftaran (dengan if-else berdasarkan parameter di atas), lalu hitung cyclomatic complexity-nya.

```python
def validate_registration(age, is_local, gpa, program):
    # tulis kodemu di sini
    pass
```

- Jumlah predicate nodes (P): _________________
- V(G) = P + 1 = _________________
- Berapa minimum test case yang dibutuhkan: _________________

---

# 7. Test Case Development and Execution

## 7.1 Components of a Test Case

Test case yang baik harus memiliki komponen lengkap:

**Test ID** — identifikasi unik (contoh: `TC-LOGIN-001`)

**Description** — apa yang diuji dan mengapa

**Prerequisites** — kondisi awal yang harus terpenuhi

**Steps** — langkah-langkah detail dan berurutan

**Expected Results** — apa yang seharusnya terjadi (spesifik dan terukur)

**Actual Results** — diisi setelah eksekusi

**Status** — Pass / Fail / Blocked

## 7.2 Contoh Test Case Lengkap

**TC-LOGIN-001: Login dengan kredensial valid**

- **Test ID:** TC-LOGIN-001
- **Description:** Memverifikasi user dengan email dan password valid berhasil login dan diarahkan ke dashboard

**Prerequisites:**
- Akun dengan email "testuser@binus.ac.id" sudah terdaftar
- Akun dalam status aktif
- Halaman login sudah terbuka

**Steps:**
1. Pada field "Email", masukkan "testuser@binus.ac.id"
2. Pada field "Password", masukkan "Test@1234"
3. Klik tombol "Login"

**Expected Result:**
- User berhasil login
- Sistem menampilkan halaman dashboard
- Header menampilkan nama "Test User"
- URL berubah menjadi "/dashboard"

**Actual Result:** [diisi setelah testing]

**Status:** [PASS/FAIL/BLOCKED]

## 7.3 Karakteristik Test Case yang Baik

**Atomic** — menguji satu hal spesifik. Jangan gabung banyak skenario.

**Independent** — tidak bergantung pada test case lain. Bisa dijalankan mandiri.

**Repeatable** — hasilnya konsisten setiap kali dijalankan.

**Traceable** — bisa dilacak ke requirement/user story yang diuji.

**Clear and Concise** — bahasa jelas, tidak ambigu, bisa dipahami orang yang tidak familiar dengan sistem.

> 💡 **Analogi:** Test case yang baik seperti resep masakan yang detail — siapa pun yang ikuti akan menghasilkan masakan yang sama.

## 📋 Worksheet: Write Your Test Cases

Tulis 3 test case lengkap untuk fitur **"Reset Password"**:

**TC-RESETPWD-001: [Title]**
- Test ID: _________________
- Description: _________________
- Prerequisites: _________________
- Steps:
  1. _________________
  2. _________________
  3. _________________
- Expected Result: _________________

**TC-RESETPWD-002: [Title]**
- Test ID: _________________
- Description: _________________
- Prerequisites: _________________
- Steps:
  1. _________________
  2. _________________
  3. _________________
- Expected Result: _________________

**TC-RESETPWD-003: [Title — edge case]**
- Test ID: _________________
- Description: _________________
- Prerequisites: _________________
- Steps:
  1. _________________
  2. _________________
  3. _________________
- Expected Result: _________________

**Self-check:**
- Apakah setiap test case Atomic? _________________
- Apakah setiap test case Independent? _________________
- Apakah Expected Result spesifik dan terukur? _________________

---

# 8. Defect Identification

## 8.1 Studi Kasus: Twitter's Week Year Bug

Pada pergantian tahun 2014-2015, Twitter mengalami crash 5 jam karena bug **satu huruf di kode Java**.

### Kode Bermasalah

```java
DateTimeFormatter.ofPattern("dd MMM YYYY").format(zonedDateTime)
```

### Akar Masalah

Java DateTimeFormatter membedakan:
- `YYYY` → **Week-based Year** (ISO 8601 Week Year)
- `yyyy` → **Calendar Year**

**ISO 8601 rule:** "The first week of the year is the week containing the first Thursday."

Akibatnya: 29-31 Desember 2014 (Senin-Rabu) secara Week Year sudah dianggap "2015" karena minggu mereka mengandung Kamis pertama 2015.

Bug ini hanya muncul pada **kondisi yang sangat spesifik** (pergantian tahun tertentu), sehingga tidak terdeteksi sepanjang tahun.

### Pelajaran dari Twitter Bug

Menghubungkan ke konsep yang sudah dipelajari:

**Error → Fault → Failure:**
- Error: developer pakai `YYYY` (typo atau tidak tahu beda)
- Fault: format string salah tersimpan di kode
- Failure: aplikasi crash 5 jam

**Boundary Value Analysis:** tanggal akhir tahun adalah boundary kritis yang harus selalu ditest untuk aplikasi yang menangani tanggal.

**Defect Clustering:** bug ini hanya muncul di 1 kondisi sangat spesifik dari sejuta kondisi.

## 8.2 Studi Kasus: Linux Kernel Interrupt Bug

Bug yang sangat sulit ditemukan: sebuah driver function lupa mengaktifkan kembali interrupt setelah dinonaktifkan.

**Skala:**
- Bug ada di 1 fungsi
- Fungsi itu di file 2.000 LOC
- File itu di modul 60.000 LOC
- Modul itu di Linux Kernel (~27 juta LOC)

**Kondisi trigger:** sangat langka dan spesifik, hampir mustahil di-trigger dalam testing biasa.

> 💡 **Pelajaran:** Beberapa defect **sangat sulit ditemukan** via testing atau inspection. Testing yang baik tetap penting, tapi kita harus realistis bahwa tidak ada metode yang menjamin 100% bebas bug.

## 8.3 Apa itu Static Analysis?

**Systematic examination of an abstraction of program state space.**

**Karakteristik:**
- **Tidak menjalankan kode** (seperti code review tapi otomatis)
- Bekerja pada **abstraksi** program — representasi yang disederhanakan
- Bisa menganalisis **semua kemungkinan jalur** sekaligus

**Yang dicek (properti):**
- **Liveness** — "something good eventually happens" (misal: setiap request akhirnya dapat response)
- **Safety** — "this bad thing can't ever happen" (misal: interrupt tidak pernah tetap disabled)
- **Compliance** — coding standards dan best practices

## 8.4 What Static Analysis Can and Cannot Do

### ✅ Bisa dilakukan dengan baik

**Type checking** — mendeteksi tipe data yang salah. Java cegah saat kompilasi, Python pakai `mypy` untuk warning.

**Pattern matching** — mendeteksi pola kode bermasalah:
- Java string comparison pakai `==` (harusnya `.equals()`)
- Array access tanpa bounds check

### ⚠️ Bisa dilakukan tapi sering MAYBE

**Value range analysis:**
- Apakah pembagi bisa nol?
- Apakah index array bisa out of bounds?

Static analysis menjawab konservatif → sering false positive.

### ❌ Tidak bisa dilakukan

**Membuktikan apakah program pasti berhenti** = **Halting Problem** (Alan Turing, 1936). Secara matematis terbukti tidak ada algoritma yang bisa menjawab ini untuk semua program.

### 💔 Rice's Theorem (1953)

> *"Any nontrivial property about the language recognized by a Turing machine is undecidable."*

Setiap static analysis tool **pasti** punya satu atau lebih dari kelemahan ini:
- **Incomplete** → ada bug yang tidak dilaporkan (false negative)
- **Unsound** → melaporkan bug yang sebenarnya bukan (false positive)
- **Undecidable** → tidak bisa jawab pasti (MAYBE)

## 8.5 Static Analysis Cocok untuk Mendeteksi

**Security:** buffer overruns, improperly validated input

**Memory safety:** null dereference, uninitialized data

**Resource leaks:** memory leak, OS resource leak

**API protocols:** device drivers, real-time libraries, GUI frameworks

**Exceptions:** arithmetic, library, user-defined

**Encapsulation:** akses internal data, panggil private functions

**Data races:** dua thread akses data sama tanpa synchronization

## 8.6 Latihan: Analyze Python Statically

```python
def n2s(n: int, b: int):
    if n <= 0: return '0'
    r = ''
    while n > 0:
        u = n % b
        if u >= 10:
            u = chr(ord('A') + u - 10)
        n = n // b
        r = str(u) + r
    return r
```

Fungsi ini konversi bilangan dari basis 10 ke basis lain.

**Pertanyaan static (tanpa eksekusi):**

1. **Tipe data variabel `u`?** → int ATAU str (`u` bisa int dari modulo, atau str dari `chr()`)

2. **Bisakah `u` negatif?** → NO (Python: `n % b` ikut tanda b; b positif → u positif)

3. **Apakah selalu return value?** → YES (semua jalur berakhir return)

4. **Bisa division by zero?** → MAYBE (jika b=0 dipanggil, `n%b` dan `n//b` crash. Tidak ada validasi.)

5. **Return value mengandung '-'?** → NO (semua karakter yang masuk ke r adalah angka positif atau huruf kapital)

## 8.7 Apa itu Dynamic Analysis?

**Tells you properties of the program that were definitely observed.**

Berbeda dari static yang sering menjawab MAYBE, dynamic memberikan **fakta konkret** tentang apa yang **benar-benar terjadi** saat program dijalankan.

### Yang dihasilkan Dynamic Analysis

**Code Coverage** — baris/branch/path mana yang dieksekusi

**Performance Profiling** — berapa lama setiap bagian kode dieksekusi

**Type Profiling** — tipe data aktual yang digunakan saat runtime

**Testing** — verifikasi output sesuai ekspektasi

### Cara Kerja: Program Instrumentation

Kode tambahan (seperti "logging otomatis") disisipkan ke program. Sedikit memperlambat eksekusi tapi memberikan informasi sangat berharga.

## 8.8 Latihan: Analyze Python Dynamically

Untuk eksekusi `n2s(12, 10)`:

Trace eksekusi:
- Iterasi 1: u=2, n=12→1, r='2'
- Iterasi 2: u=1, n=1→0, r='12'
- Return '12'

**Pertanyaan dynamic:**

1. **Tipe data `u` selama eksekusi ini?** → int only (tidak pernah masuk branch chr)

2. **Apakah `u` pernah negatif?** → NO (selalu 2 lalu 1)

3. **Berapa iterasi loop?** → 2 iterasi

4. **Pernah division by zero?** → NO (b=10, tidak nol)

5. **Return value mengandung '-'?** → NO ('12' tidak ada minus)

## 8.9 Static vs Dynamic Analysis

### Static Analysis

- Hanya butuh source code
- Reasoning konservatif tentang **semua** input dan path
- Warnings bisa false positive
- Bisa report SEMUA warning untuk kelas masalah tertentu
- Advanced: formal verification (mahal, jarang di CI)

### Dynamic Analysis

- Butuh build sukses + test inputs
- Mengamati **eksekusi individual**
- Reported problems are **real** (witness input ada)
- Hanya bisa report yang terlihat — tergantung test input, ada false negative
- Advanced: symbolic execution (mahal, jarang di CI)

> 💡 **Analogi final:**
> - Static = X-ray (lihat struktur tanpa "menjalankan", kadang ada bayangan menyesatkan)
> - Dynamic = tes darah (hasil pasti dan konkret, tapi hanya untuk sampel yang diambil)

## 8.10 Tools for Static Analysis

**General purpose:**
- SonarQube (multi-language, sangat populer di enterprise)
- Coverity (powerful untuk C/C++)
- ESLint (JavaScript)
- Pylint, mypy (Python)
- SpotBugs/FindBugs (Java)

**Security focused:**
- Snyk
- Semgrep
- Checkmarx

**Formal verification:**
- Frama-C
- SPARK/Ada (untuk safety-critical)

## 8.11 Static Analysis is Key Part of CI

Static analysis berjalan **otomatis** di CI pipeline:

```
Code → Commit → Build → Unit Tests → Integration Tests → Static Analysis
```

**Tools CI:** Travis CI, GitHub Actions, Jenkins

**Best practice:**
- Diff-based analysis (analisis hanya kode yang berubah)
- Integrasi langsung di IDE untuk feedback instan

## 8.12 Static Analysis di IDE

Static analysis sudah tertanam di IDE modern:
- **IntelliJ IDEA** (Java)
- **PyCharm** (Python)
- **Xcode** (iOS/macOS)
- **Eclipse** (Java)
- **VS Code** (dengan extensions)

Developer dapat feedback dalam **hitungan detik** saat coding — implementasi ekstrem dari prinsip "Start Testing Early".

## 8.13 What Makes a Good Static Analysis Tool?

**Fast** — tidak boleh memperlambat development velocity. Semakin besar codebase, semakin penting kecepatan.

**Few false positives** — terlalu banyak false alarm → developer mulai mengabaikan semua warning ("alert fatigue").

**Continuous** — bagian dari CI pipeline. Diff-based analysis lebih efisien.

**Informative** — pesan jelas, lokasi pasti, idealnya **menyarankan atau otomatis menerapkan fix**.

## 8.14 Static Analysis Bisa Diaplikasikan ke Semua Atribut

- **Find bugs** — Reliability
- **Refactor code** — Maintainability
- **Keep code stylish** — Readability
- **Identify code smells** — Maintainability
- **Measure quality** — Quality metrics
- **Find usability & accessibility issues** — Usability
- **Identify bottlenecks** — Performance

## 📋 Worksheet: Defect Identification Strategy

Untuk proyek/aplikasi yang sedang dikembangkan:

**Project:** _________________

**Static Analysis Setup:**
- Tools yang akan digunakan: _________________
- Integrasi: IDE / CI / both? _________________
- False positive threshold yang acceptable: _________________

**Dynamic Analysis Setup:**
- Code coverage tool: _________________
- Performance profiler: _________________
- Target coverage minimal: ___% statement, ___% branch

**Risk Assessment — area kritis yang butuh perhatian khusus:**
1. _________________
2. _________________
3. _________________

**Bug Patterns yang perlu diwaspadai (berdasarkan jenis aplikasi):**
- Security: _________________
- Memory: _________________
- Concurrency: _________________
- Lainnya: _________________

---

# 9. Defect Reporting and Tracking

## 9.1 Purpose of Defect Tracking

Defect tracking menyediakan **transparansi dan komunikasi sistematis** antara tester, developer, dan manajemen tentang status setiap bug yang ditemukan.

Tanpa tracking yang baik:
- Bug bisa "hilang" atau terlupakan
- Tidak ada visibility tentang quality status
- Sulit memprioritaskan pekerjaan
- Komunikasi antar tim chaotic

## 9.2 Defect Lifecycle

Setiap bug melewati tiga tahap utama:

### 📌 Identification

- Tester menemukan defect
- Mendokumentasikannya dengan detail
- Memberi prioritas (Critical/High/Medium/Low)
- Submit ke tracking system

### 🔧 Resolution

- Developer mendapat assignment
- Menganalisis root cause
- Memperbaiki defect
- Melakukan retest internal
- Mark sebagai "Ready for QA"

### ✅ Closure

- Tester memverifikasi fix di environment yang sesuai
- Jika benar-benar fixed → close
- Jika masih ada masalah → reopen

## 9.3 Tools for Defect Tracking

**JIRA** — paling populer di industri, fitur lengkap, integrasi luas

**Bugzilla** — open source, sudah lama digunakan, banyak project open source

**GitHub Issues** — built-in di GitHub, simple dan tight integration dengan code

**Lainnya:** Trello, Asana, Linear, Azure DevOps

Semua tools ini membantu:
- Mengorganisir bug berdasarkan severity dan prioritas
- Tracking status (Open/In Progress/Resolved/Closed)
- Komunikasi via comments
- Linking ke commits/pull requests
- Reporting dan analytics

## 9.4 Sample Defect Report

Defect report yang baik harus mencakup:

**Defect ID:** DEF-2024-0142

**Title:** Tombol "Submit" pada form pendaftaran tidak responsif setelah 3 kali klik berturut-turut

**Description:**
Ketika user mengklik tombol "Submit" lebih dari 2 kali dalam interval kurang dari 1 detik, tombol menjadi tidak responsif dan tidak mengirim request ke server. Page perlu di-refresh untuk bisa submit lagi.

**Steps to Reproduce:**
1. Buka halaman pendaftaran di /register
2. Isi semua field dengan data valid
3. Klik tombol "Submit"
4. Sebelum response muncul, klik "Submit" 2 kali lagi dengan cepat (interval < 1 detik)
5. Tunggu 5 detik

**Expected Behavior:**
- Klik pertama: form ter-submit, loading indicator muncul
- Klik berikutnya: diabaikan atau menampilkan pesan "Sedang memproses..."
- Tombol tetap responsif setelah proses selesai

**Actual Behavior:**
- Klik pertama: form ter-submit
- Klik berikutnya: tombol jadi tidak responsif
- Loading indicator tidak muncul
- Page perlu di-refresh

**Environment:**
- Browser: Chrome 120.0.6099.130
- OS: Windows 11 Pro
- Resolution: 1920x1080
- Network: WiFi stabil

**Priority:** High

**Severity:** Medium

**Assigned to:** John Doe (Frontend Team)

**Status:** Open

**Attachments:** screenshot.png, console-log.txt

**Reported by:** Jane Smith

**Reported on:** 15 March 2024

## 📋 Worksheet: Write a Defect Report

Pikirkan satu bug yang pernah kamu temukan (di aplikasi apa saja), lalu buat defect report lengkap:

**Defect ID:** _________________

**Title:** _________________

**Description:**
_________________

**Steps to Reproduce:**
1. _________________
2. _________________
3. _________________
4. _________________

**Expected Behavior:**
_________________

**Actual Behavior:**
_________________

**Environment:**
- Browser/Device: _________________
- OS: _________________
- Other: _________________

**Priority:** _________________ (Critical/High/Medium/Low)

**Severity:** _________________ (Blocker/Major/Minor/Trivial)

**Self-check — apakah report ini:**
- ✓ Reproducible? Bisa diikuti steps-nya?
- ✓ Specific? Tidak ambigu?
- ✓ Complete? Semua info penting ada?
- ✓ Objective? Tidak emosional/blaming?

---

# 📚 Glossary

**Acceptance Testing** — testing untuk validasi software dari perspektif end user, sebelum release.

**Alpha Testing** — acceptance testing internal oleh tim non-development.

**Beta Testing** — acceptance testing eksternal oleh user nyata terbatas.

**Black-Box Testing** — testing tanpa pengetahuan internal kode.

**Boundary Value Analysis (BVA)** — teknik test design fokus pada nilai batas partisi.

**Branch Coverage** — metrik white-box, persentase branch (True/False) yang dieksekusi.

**Bug** — istilah umum untuk defect/fault/failure.

**Cyclomatic Complexity** — metrik kompleksitas kode berdasarkan jumlah independent paths.

**Decision Table Testing** — teknik test design untuk logika bisnis dengan banyak kondisi.

**Defect** — flaw dalam kode yang berpotensi menyebabkan failure.

**Dynamic Analysis** — analisis program dengan menjalankan kodenya.

**Equivalence Partitioning** — teknik test design dengan mengelompokkan input ke partisi yang diperlakukan sama.

**Error** — kesalahan manusia yang menjadi akar masalah bug.

**Exhaustive Testing** — menguji semua kemungkinan input — secara matematis tidak feasible.

**Failure** — deviasi sistem dari behavior yang diharapkan, terlihat dari luar.

**Fault** — sinonim dengan defect.

**Functional Testing** — testing fitur sesuai requirements.

**Grey-Box Testing** — testing dengan pengetahuan parsial tentang internal kode.

**Halting Problem** — masalah komputasi yang tidak bisa diselesaikan secara umum, dibuktikan Alan Turing 1936.

**Integration Testing** — testing interaksi antar komponen.

**Liveness Property** — "something good eventually happens."

**MAYBE** — jawaban static analysis untuk pertanyaan yang tidak bisa dijawab pasti.

**Non-Functional Testing** — testing atribut kualitas seperti performance, security, usability.

**Pairwise Testing** — teknik combinatorial testing yang menguji setiap pasangan parameter values.

**Performance Testing** — testing kecepatan, stabilitas, responsivitas.

**Pesticide Paradox** — fenomena test suite kehilangan efektivitas jika tidak diupdate.

**Regression Testing** — testing untuk memastikan perubahan tidak merusak fungsi yang ada.

**Rice's Theorem** — teorema yang membuktikan setiap static analysis pasti incomplete, unsound, atau undecidable.

**Risk Mitigation** — pengurangan risiko via testing dan praktik baik.

**Safety Property** — "this bad thing can't ever happen."

**State Transition Testing** — testing untuk sistem berbasis state machine.

**Static Analysis** — analisis program tanpa menjalankan kodenya.

**Statement Coverage** — metrik white-box, persentase statement yang dieksekusi.

**System Testing** — testing seluruh sistem terintegrasi.

**Unit Testing** — testing komponen individual dalam isolasi.

**Usability Testing** — testing pengalaman pengguna.

**Use Case Testing** — testing berdasarkan use case scenarios.

**Validation** — "Are we building the right software?" — verifikasi terhadap kebutuhan user.

**Verification** — "Are we building the software right?" — verifikasi terhadap spesifikasi.

**White-Box Testing** — testing dengan pengetahuan penuh tentang kode internal.

---

# 📖 Referensi & Bacaan Lanjutan

## Buku Klasik

- **"The Art of Software Testing"** — Glenford J. Myers (klasik dasar testing)
- **"Software Testing: A Craftsman's Approach"** — Paul C. Jorgensen
- **"Lessons Learned in Software Testing"** — Cem Kaner, James Bach, Bret Pettichord
- **"Test-Driven Development: By Example"** — Kent Beck

## Standar & Sertifikasi

- **ISTQB Foundation Level Syllabus** — silabus internasional untuk software tester
- **IEEE 829** — Standard for Software Test Documentation
- **ISO/IEC 25010** — Software Quality Standards

## Online Resources

- **Ministry of Testing** (https://www.ministryoftesting.com) — komunitas tester global
- **Google Testing Blog** (https://testing.googleblog.com) — best practices dari Google
- **Martin Fowler's articles on Testing** (https://martinfowler.com/testing/)
- **OWASP Testing Guide** — untuk security testing

## Tools yang Disebutkan dalam Materi

**Unit Testing Frameworks:**
- JUnit (Java) — https://junit.org
- pytest (Python) — https://pytest.org
- Jest (JavaScript) — https://jestjs.io

**Static Analysis:**
- SonarQube — https://www.sonarqube.org
- ESLint — https://eslint.org
- mypy — https://mypy.readthedocs.io
- Snyk — https://snyk.io

**CI/CD:**
- GitHub Actions — https://github.com/features/actions
- Jenkins — https://www.jenkins.io
- GitLab CI — https://docs.gitlab.com/ee/ci/

**Defect Tracking:**
- JIRA — https://www.atlassian.com/software/jira
- Bugzilla — https://www.bugzilla.org
- GitHub Issues — built-in di GitHub

**Performance Testing:**
- JMeter — https://jmeter.apache.org
- k6 — https://k6.io
- Gatling — https://gatling.io

## Paper & Theorem yang Direferensikan

- **Halting Problem** — Alan Turing (1936), "On Computable Numbers, with an Application to the Entscheidungsproblem"
- **Rice's Theorem** — Henry Gordon Rice (1953), "Classes of Recursively Enumerable Sets and Their Decision Problems"
- **Cyclomatic Complexity** — Thomas J. McCabe (1976), "A Complexity Measure"

## Studi Kasus Real

- **Twitter Week Year Bug (2014-2015)** — bug `YYYY` vs `yyyy` di Java DateTimeFormatter
- **Linux Kernel Driver Bugs** — contoh bug di sistem berskala besar
- **Therac-25** (untuk bacaan tambahan) — contoh klasik konsekuensi software bug di sistem kritis

---

> 📌 **Catatan Akhir:** Modul ini adalah pengantar ke dunia software testing. Praktik testing di industri terus berkembang dengan teknik baru seperti AI-driven testing, chaos engineering, mutation testing, dan property-based testing. Mahasiswa dianjurkan terus mengeksplorasi topik-topik lanjutan ini melalui referensi yang disediakan.

> 🎯 **Pesan Penutup:** Testing yang baik bukan tentang menjadi pesimis terhadap kode, tapi tentang **bersikap profesional terhadap kualitas**. Setiap engineer hebat adalah engineer yang memahami bahwa kode mereka **akan** punya bug — dan punya strategi sistematis untuk menemukan dan memperbaikinya sebelum sampai ke user.

---

*Software Engineering — D7123*
