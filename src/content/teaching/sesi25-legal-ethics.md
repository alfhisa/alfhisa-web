---
title: "Legal Issues, Social Impact & Professional Ethics in Software Engineering"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "This article introduces legal issues, social impact and professional ethics in software engineering."
---

# Sesi 25: Legal Issues, Social Impact & Professional Ethics in Software Engineering

---

## 1. Overview: Mengapa Hukum Penting di SE?

Software engineer bukan hanya menulis kode — setiap keputusan teknis berpotensi menyentuh ranah hukum, sosial, dan etika. Tiga area utama yang saling tumpang tindih:

- **Intellectual Property** — siapa yang memiliki kode, algoritma, dan produk digital
- **Data Security & Privacy** — bagaimana data user dilindungi secara hukum
- **Compliance** — apakah produk mengikuti regulasi yang berlaku

Ketidakpatuhan terhadap hukum dapat berujung pada **lawsuit, denda besar, dan kerusakan reputasi**. Di Indonesia, kerangka hukumnya mencakup UU ITE No. 1/2024, UU PDP No. 27/2022, dan UU Hak Cipta No. 28/2014.

---

## 2. Intellectual Property Rights (IPR)

### 2.1 Copyright (Hak Cipta)

Melindungi **ekspresi kode** sebagai karya original. Berlaku otomatis sejak kode ditulis — tidak perlu didaftarkan.

- Yang dilindungi: source code, dokumentasi, struktur dan organisasi program
- Yang **tidak** dilindungi: ide, algoritma secara konsep, logika umum
- Di Indonesia: UU No. 28 Tahun 2014 tentang Hak Cipta
- Pelanggaran: copy-paste kode tanpa izin, distribusi ulang tanpa lisensi

**Poin penting:** Mengganti bahasa pemrograman tidak memutus klaim copyright. Jika struktur logika, urutan, dan organisasi kodenya sama — itu tetap dianggap *derivative work* yang butuh izin. Kasus Oracle vs Google (10 tahun di pengadilan AS) membuktikan ini.

### 2.2 Patents (Paten)

Melindungi **proses dan algoritma unik** yang baru dan non-obvious. Harus didaftarkan secara eksplisit.

- Yang bisa dipatenkan: metode bisnis unik, algoritma spesifik, proses teknis baru
- Di Indonesia: paten software masih abu-abu — tidak semua algoritma bisa dipatenkan
- Di AS lebih permisif; banyak perusahaan tech mematenkan fitur-fitur spesifik
- Contoh: Google's PageRank algorithm, kasus Gojek vs Grab soal algoritma matching penumpang

### 2.3 Trademarks (Merek Dagang)

Melindungi **identitas produk**: nama, logo, bahkan warna tertentu.

- Relevansi untuk SE: nama library, nama produk, atau nama service bisa melanggar trademark yang sudah ada
- Banyak startup Indonesia yang baru sadar nama produknya sudah dipakai orang lain setelah viral

---

## 3. Software Licenses

Lisensi mendefinisikan **hak dan kewajiban** pengguna terhadap software. "Gratis" ≠ "bebas dipakai sesuka hati."

### 3.1 Proprietary Licenses

- Source code tertutup; tidak boleh dimodifikasi, dilihat, atau didistribusikan ulang
- Contoh: Microsoft Windows, Adobe Suite, Oracle Database
- Risiko: penggunaan tanpa lisensi yang cukup = pelanggaran hukum
- Perusahaan bisa di-audit oleh BSA (Business Software Alliance) atas nama vendor seperti Microsoft dan Adobe

### 3.2 Open Source Licenses

Boleh akses dan modifikasi source code — **tapi dengan aturan berbeda-beda**:

| Lisensi | Boleh Komersial | Turunan Harus Open Source | Catatan |
|---|---|---|---|
| MIT | ✅ | ❌ | Paling permisif, cukup cantumkan credit |
| Apache 2.0 | ✅ | ❌ | Paten protection tambahan |
| GPL v3 | ✅ | ✅ Wajib | "Viral" — produk turunan harus GPL juga |
| AGPL | ✅ | ✅ Wajib | Bahkan jika di-deploy as cloud service |
| LGPL | ✅ | Sebagian | Boleh link ke produk proprietary |

**Jebakan umum:** Menggunakan library GPL di produk komersial tanpa meng-open-source-kan produknya — ini pelanggaran yang sering tidak disadari developer.

**Cara cek:** Selalu lihat file `LICENSE` di root repository. Jika tidak ada file LICENSE — secara default itu **all rights reserved**, bukan bebas dipakai.

### 3.3 Freeware & Shareware

- **Freeware**: gratis selamanya, tapi source code tetap tertutup
- **Shareware**: gratis untuk trial, harus bayar setelahnya
- Penting: "gratis" dan "open source" adalah dua hal berbeda

---

## 4. Privacy Laws & Data Protection

### 4.1 GDPR (General Data Protection Regulation) — EU, 2018

Regulasi privasi paling ketat di dunia. **Berlaku extraterritorial** — jika aplikasi dipakai warga Eropa, wajib comply meski perusahaan di Indonesia.

**Hak user yang wajib difasilitasi secara teknis:**
- **Right to be forgotten**: user bisa minta semua datanya dihapus permanen — termasuk backup, log, dan third-party yang sudah menerima data
- **Right to data portability**: user bisa minta export data mereka
- **Explicit consent**: tidak boleh pre-check checkbox; consent harus aktif dan bisa ditarik kapan saja
- **Breach notification**: wajib lapor dalam 72 jam setelah breach diketahui

**Denda:** Maksimal €20 juta atau 4% dari global annual revenue. Meta kena denda €1.2 miliar di 2023.

### 4.2 CCPA (California Consumer Privacy Act) — AS, 2020

- Berlaku untuk perusahaan yang handle data penduduk California
- User berhak tahu data apa yang dikumpulkan
- User berhak minta datanya tidak dijual ke pihak ketiga

### 4.3 UU PDP No. 27/2022 — Indonesia

Indonesia baru memiliki payung hukum perlindungan data yang komprehensif sejak 2022. Prinsip-prinsipnya mengadopsi GDPR:

- **Data Minimization**: hanya kumpulkan data yang benar-benar dibutuhkan untuk fungsi layanan
- **Purpose Limitation**: data yang dikumpulkan untuk satu tujuan tidak boleh dipakai untuk tujuan lain tanpa consent
- **Data Security**: wajib enkripsi dan proteksi dari breach
- **Notifikasi breach**: wajib lapor dalam 14 hari
- Sanksi: belum sekuat GDPR, enforcement masih berkembang

**Kasus pelanggaran data minimization di Indonesia:** Aplikasi pinjol ilegal yang meminta akses ke seluruh kontak HP pengguna — jauh melampaui apa yang dibutuhkan untuk fungsi pinjam-meminjam. Data kontak kemudian digunakan untuk intimidasi saat penagihan.

### 4.4 Key Privacy Principles untuk Engineer

Setiap kali merancang sistem yang handle data user, tanyakan:

1. Apakah data ini benar-benar diperlukan? (Data Minimization)
2. Untuk tujuan apa data ini dikumpulkan? Apakah user tahu? (Purpose Limitation)
3. Siapa yang bisa akses data ini di dalam sistem? (Access Control)
4. Bagaimana data ini diproteksi saat transit dan at rest? (Data Security)
5. Apa prosedur jika terjadi breach? (Incident Response)

---

## 5. Software Compliance & Regulatory Standards

### 5.1 ISO 27001 — Information Security Management

Framework untuk mengelola keamanan informasi secara sistematis di seluruh organisasi. Yang diaudit bukan hanya kode, tapi seluruh proses:

- Siapa yang punya akses ke sistem
- Bagaimana credentials dikelola
- Apakah ada disaster recovery plan
- Bagaimana insiden keamanan ditangani

**Relevansi SE:** Di perusahaan ISO 27001 certified, ada aturan teknis yang harus diikuti — tidak boleh hardcode credentials, wajib enkripsi data sensitif, access control terdokumentasi.

### 5.2 PCI-DSS — Payment Card Industry Data Security Standard

Wajib dipatuhi oleh siapapun yang menyimpan, memproses, atau mentransmisikan data kartu kredit. Ada 12 requirement teknis spesifik:

- Enkripsi data kartu saat transit dan at rest
- **Tidak boleh menyimpan CVV** setelah transaksi selesai
- Wajib penetration testing berkala
- Network segmentation untuk sistem payment

**Praktik terbaik:** Jangan pernah handle data kartu sendiri. Gunakan payment gateway yang sudah PCI-DSS certified seperti Midtrans, Xendit, atau Stripe — mereka yang handle compliance-nya, kita cukup pakai tokenisasi.

---

## 6. Kasus Nyata: Legal Issues di Indonesia

### Kebocoran Data Skala Besar

| Kasus | Tahun | Data Bocor | Keterangan |
|---|---|---|---|
| Tokopedia | 2020 | 91 juta akun | Dijual di dark web seharga ~Rp 75 juta |
| Bukalapak | 2019 | 13 juta akun | Diretas hacker Pakistan, dijual online |
| BPJS Kesehatan | 2021 | 279 juta data | Termasuk data orang meninggal |
| PDN (Pusat Data Nasional) | 2024 | 50+ juta data | Ransomware Brain Cipher, tebusan $8 juta |
| NPWP | 2024 | Jutaan data pajak | Kementerian Keuangan lakukan evaluasi |

### Kasus PDN 2024 — Pelajaran Terpenting

- Serangan ransomware LockBit 3.0 "Brain Cipher" mulai 17 Juni 2024
- **Backup hanya ~2%** dari total data — ini akar masalah terbesar
- BSSN sudah kirim peringatan ke Kominfo sebelumnya, tapi tidak ditindaklanjuti
- Layanan publik lumpuh: imigrasi, e-KTP, BPJS
- **Pelajaran SE:** Backup bukan opsional. Disaster recovery plan bukan formalitas. Engineer yang tahu ada masalah tapi diam juga bertanggung jawab.

### Pelanggaran Hak Kekayaan Intelektual

- **Software bajakan di perusahaan**: BSA aktif melakukan audit di Indonesia; perusahaan yang ketahuan bisa kena denda ratusan juta plus harus beli lisensi retroaktif
- **Algoritma**: Kasus Gojek vs Grab soal sistem matching penumpang menunjukkan bahwa algoritma bisa dipatenkan dan disengketakan

---

## 7. Social Impact of Software Engineering

### 7.1 Dampak Positif

Inovasi software memberikan manfaat nyata: akses informasi yang demokratis, otomasi pekerjaan repetitif, konektivitas global, dan kemudahan layanan. Gojek/Grab menciptakan jutaan lapangan kerja baru di Indonesia.

### 7.2 Dampak Negatif yang Perlu Disadari Engineer

**Job Displacement:**
Di sisi lain, ride-hailing menghancurkan industri taksi konvensional. AI sekarang mulai automate pekerjaan coding itu sendiri. Engineer perlu sadar bahwa teknologi yang mereka bangun punya dampak ke ekosistem pekerjaan yang lebih luas.

**Digital Divide:**
Indonesia punya ~215 juta pengguna internet — tapi itu berarti puluhan juta lainnya tidak punya akses. Aplikasi layanan publik yang hanya bisa diakses via smartphone dengan koneksi bagus secara tidak sengaja mengeksklusi sebagian populasi.

**Mental Health & Algorithmic Design:**
Algoritma TikTok, Instagram, YouTube dirancang untuk memaksimalkan engagement, bukan wellbeing. Engineer yang membangun sistem rekomendasi tahu bahwa konten yang memicu emosi negatif lebih engaging. Ini adalah pilihan desain, bukan konsekuensi yang tidak bisa dihindari.

**Privacy & Surveillance:**
Sistem yang diklaim untuk "efisiensi" — tracking lokasi karyawan, monitoring aktivitas user — bisa dengan mudah bergeser ke surveillance. Engineer yang membangun sistem ini perlu memikirkan potensi penyalahgunaan.

---

## 8. Professional Ethics in Software Engineering

### 8.1 Mengapa Ethics Lebih dari Sekadar Hukum

Hukum adalah **minimum bar** — batas bawah yang tidak boleh dilanggar. Ethics adalah **aspirasi** — standar tentang apa yang *seharusnya* dilakukan, bukan sekadar apa yang *boleh* dilakukan.

Banyak hal yang legal tapi tidak etis:
- Dark patterns yang manipulasi user
- Loot boxes yang dirancang adiktif (kasus EA "surprise mechanics")
- Algoritma yang sengaja memisahkan keluarga di pesawat demi upsell (kasus Ryanair)
- Website yang tidak accessible untuk penyandang disabilitas (kasus Domino's)

### 8.2 Human Flourishing sebagai Landasan Etika

Harvard Human Flourishing Program mendefinisikan lima domain kehidupan yang baik:

1. **Happiness & Life Satisfaction** — apakah produk yang lo bangun membuat user lebih bahagia, atau addictive by design?
2. **Mental & Physical Health** — apakah sistem lo berkontribusi pada kesehatan user?
3. **Meaning & Purpose** — apakah pekerjaan lo sebagai engineer punya makna?
4. **Character & Virtue** — apakah lo jujur tentang estimasi, berani speak up saat ada masalah?
5. **Close Social Relationships** — apakah platform yang lo bangun mempererat atau memecah belah?

### 8.3 Sumber Kompas Etis

Selain regulasi, engineer bisa mengacu pada:
- **Universal Declaration of Human Rights** (1948) — martabat manusia bersifat universal
- **IEEE/ACM Code of Ethics** — kode etik profesional untuk software engineer
- **Internal compass** — "Kalau ini dilakukan ke saya atau keluarga saya, apakah rasanya adil?"
- **Nilai dan keyakinan pribadi** — etika profesional konsisten dengan nilai agama dan budaya

### 8.4 Contoh Dilema Etis di SE

| Situasi | Dilema |
|---|---|
| Bug serius ditemukan, deadline besok | Patuh atasan vs lindungi user |
| PM minta implement dark pattern | Legal tapi sengaja manipulasi user |
| Data dari fitur A diminta untuk fitur B | Tidak ada yang melarang, tapi user tidak consent |
| Nemuin vulnerability di sistem lain | Responsible disclosure vs risiko personal |
| ML model bias tapi akurasi tinggi | Revenue vs fairness |
| Perusahaan simpan data ilegal, belum ketahuan | Diam vs whistleblowing |
| Diminta build sistem surveillance | Kontrak legal, tapi potensi penyalahgunaan |

### 8.5 Kasus Klasik: Therac-25

Mesin radioterapi (1985-1987) yang menyebabkan **minimal 6 kematian** akibat race condition dalam kode.

Empat akar masalah yang relevan hingga hari ini:
1. **Lack of reporting** — laporan masalah dari pasien tidak diambil serius
2. **Lack of due diligence** — hardware safety lock dihapus karena engineer terlalu percaya pada software
3. **Overconfidence** — "secara fisik tidak mungkin terjadi overdosis" — keyakinan yang mencegah investigasi
4. **Race condition** — bug yang hanya muncul pada timing keystroke spesifik, tidak terdeteksi di testing biasa

**Pelajaran:** Engineer yang paling berbahaya adalah yang terlalu yakin sistemnya tidak bisa salah. Safety-critical software membutuhkan formal verification, tidak cukup testing konvensional.

### 8.6 Algorithmic Bias

Penelitian pada platform Xing.com (LinkedIn-nya Eropa) menunjukkan algoritma search secara sistematis menempatkan kandidat laki-laki lebih tinggi meski perempuan punya pengalaman lebih banyak dan profile views lebih tinggi.

**Cara terjadi:** Algoritma ditraining dari data historis (recruiter lebih sering klik profil pria) → algoritma *belajar* bias tersebut → bias teramplifikasi dalam skala jutaan pengguna.

**Implikasi:** Tidak ada yang menulis `if gender == female: rank_lower`. Diskriminasi bisa terjadi tanpa niat jahat — hanya dari data training yang bias. Fairness testing harus jadi bagian dari development lifecycle, bukan afterthought.

### 8.7 Open Source Ethics

Kasus colors.js/faker.js (2022) dan XZ Utils backdoor (2024) menunjukkan dilema etis maintainer open source:

- **Hak maintainer**: berhenti maintain adalah hak pribadi
- **Batas etis**: secara aktif menyabotase atau menyisipkan backdoor ke software yang dipakai jutaan orang — dimensi yang berbeda
- **Masalah sistemik**: perusahaan besar mengambil nilai dari open source tanpa berkontribusi balik — ini juga masalah etika dari sisi industri

---

## 9. Tantangan: Ethics di Field yang Berubah Cepat

Hukum selalu tertinggal dari teknologi. ADA (Americans with Disabilities Act) ditulis tahun 1990 — sebelum website pertama ada. Tapi pengadilan memutuskan prinsip di baliknya tetap berlaku untuk teknologi web.

**Tiga pertanyaan yang bisa dipakai sebagai mental checklist:**

1. **Siapa yang bisa dirugikan** oleh sistem yang sedang dibangun?
2. **Apakah semua orang diperlakukan setara** — tidak ada kelompok yang didiskriminasi atau dieksklusi?
3. **Apakah ini berkontribusi pada human flourishing**, atau justru sebaliknya?

Pertanyaan-pertanyaan ini berguna justru karena tidak bergantung pada regulasi yang ada — mereka bisa diterapkan ke teknologi baru apapun, termasuk AI, deepfake, dan sistem otonom yang regulasinya belum lengkap.

---

## 10. Ringkasan: Tanggung Jawab Engineer

```
HUKUM (minimum bar)
├── Hormati hak cipta dan lisensi
├── Lindungi data user sesuai regulasi (UU PDP, GDPR)
├── Comply dengan standar industri (PCI-DSS, ISO 27001)
└── Laporkan breach sesuai prosedur

SOSIAL (dampak yang disadari)
├── Pertimbangkan siapa yang diuntungkan dan dirugikan
├── Perhatikan digital divide dan aksesibilitas
├── Waspadai dampak tidak langsung (mental health, job displacement)
└── Jangan build surveillance tools tanpa pertimbangan etis

ETIS (aspirasi profesional)
├── Internal compass: "apakah ini adil?"
├── Speak up ketika ada risiko — Therac-25 mengajarkan ini
├── Tolak atau eskalasi dark patterns dan exploitative design
└── Tanggung jawab atas kode yang ditulis, tidak hanya "mengikuti instruksi"
```
