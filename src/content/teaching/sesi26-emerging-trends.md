---
title: "Sesi 26 - Emerging Trends in Software Engineering"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "This article introduces emerging trends in software engineering."
---

# Sesi 26: Emerging Trends in Software Engineering

---

## 1. Memahami Evolusi Teknologi

### 1.1 S-Curve of Technology Adoption

Setiap teknologi besar mengikuti pola adopsi berbentuk S:

```
Adoption
  |                              ___________
  |                         ___/
  |                    ____/
  |               ____/
  |          ____/
  |_________/
  +---------------------------------------------------> Time
  Breakthrough → Replicator → Empiricism → Theory → Automation → Maturity
```

- **Breakthrough**: penemuan dasar, hanya diketahui peneliti
- **Replicator**: orang mulai copy dan eksperimen
- **Empiricism**: trial and error masif, belum ada best practice
- **Theory**: best practice mulai terbentuk, framework established
- **Automation**: tools yang automate adoption tersedia
- **Maturity**: teknologi jadi invisible infrastructure

**Contoh AI generatif pada S-Curve:**
- 2017 — Transformer paper (Breakthrough)
- 2020 — GPT-3 eksperimen (Replicator)
- 2022 — ChatGPT viral (Empiricism)
- 2023-2024 — RAG, prompt engineering, fine-tuning jadi established (Theory)
- 2024-2025 — Copilot, Cursor, AI-native IDE (Automation)

### 1.2 Gartner Hype Cycle

Framework untuk membaca posisi teknologi di industri:

```
Visibility
    |        Peak of Inflated
    |           Expectations
    |               /\
    |              /  \
    |             /    \        Plateau of
    |            /      \      Productivity
    |           /        \    Slope of   /‾‾‾‾‾
    |          /          \  Enlighten- /
    |         /            \/ment      /
    |        /      Trough of         /
    |       /       Disillusionment  /
    |______/________________________________> Time
    Technology
    Trigger
```

**Pemetaan teknologi Indonesia:**

| Fase | Teknologi |
|---|---|
| Plateau of Productivity | E-commerce, mobile banking, cloud |
| Slope of Enlightenment | Cloud enterprise, low-code/no-code |
| Peak of Inflated Expectations | AI generatif, AI startup lokal |
| Trough of Disillusionment | Metaverse, NFT, blockchain "untuk semua" |
| Breakthrough/Replicator | Quantum computing, AGI |

**Takeaway:** Slope of Enlightenment adalah sweet spot untuk investasi skill — teknologi sudah terbukti works, tapi supply talent masih rendah sementara demand mulai naik.

---

## 2. Soft Trends: Perubahan Cara Kerja

### 2.1 Remote & Distributed Teams

Remote dan hybrid work sudah jadi standar permanen di industri tech global. Dampak langsung ke SE:

- Tim tidak perlu di kota yang sama — akses talenta lebih luas
- Tools kolaborasi jadi backbone: GitHub (code), Slack/Discord (komunikasi async), Figma (design), Notion (dokumentasi)
- **Skill yang makin penting:** kemampuan menulis dengan jelas — PR description, code review comments, dokumentasi teknis
- Developer Indonesia bisa bekerja untuk perusahaan Singapura, AS, atau Eropa tanpa pindah negara

### 2.2 Globalization & Diverse Workforce

Tim internasional berarti perbedaan lebih dari sekadar bahasa:
- Pola komunikasi berbeda: engineer Jepang cenderung tidak langsung disagree; engineer AS lebih direct
- Management philosophy yang berbeda
- Expectation soal feedback dan hierarchy yang berbeda

---

## 3. Managing Complexity: Past, Present, Future

### 3.1 Evolusi Pengelolaan Kompleksitas

| Era | Pendekatan |
|---|---|
| Early days | Ad-hoc — tidak ada metodologi, tidak ada version control |
| Sekarang | Process & tools — Agile, Git, CI/CD, automated testing |
| Masa depan | AI-assisted — tools yang bantu engineer manage complexity |

### 3.2 AI untuk Software Engineering (Sekarang)

- **Code completion**: GitHub Copilot, Cursor, Tabnine — suggest seluruh fungsi berdasarkan konteks
- **Bug detection**: Snyk Code, SonarQube — scan kode dan flag vulnerability sebelum production
- **Test generation**: AI yang auto-generate unit test berdasarkan kode yang ditulis
- **Project analytics**: LinearB, Jellyfish — prediksi apakah sprint akan selesai tepat waktu, identifikasi bottleneck tim
- **Repository mining**: pattern dari miliaran baris kode publik jadi basis knowledge Copilot

### 3.3 Open-World Software

Software modern tidak lagi berjalan di device terisolasi — ia menyatu dengan lingkungan dan beradaptasi sendiri:

- **Ambient Intelligence**: sistem yang merespons konteks tanpa dikonfigurasi manual (Google Maps yang auto-alert kemacetan)
- **Context-aware apps**: perilaku berubah tergantung waktu, lokasi, aktivitas user (Spotify auto-switch playlist workout)
- **Ubiquitous Computing**: software di semua benda — smartwatch, kulkas, lampu, kendaraan
- **Self-organizing systems**: algoritma rekomendasi yang tidak di-hardcode, tapi belajar dan reorganize sendiri (TikTok)

---

## 4. Open Source

### 4.1 Mengapa Open Source Penting

Hampir seluruh infrastruktur internet modern berjalan di atas open source:
- Linux: ada di hampir semua server, Android berbasis Linux
- Python, PostgreSQL, React, Kubernetes, TensorFlow — semua open source
- Netflix, TikTok, Instagram menggunakan open source di bawahnya

**Vendor lock-in risk:** Perusahaan yang build di atas platform proprietary tertutup tidak punya kontrol jika vendor naikkan harga atau tutup. Open source memberikan kontrol penuh dan portabilitas.

### 4.2 Risiko Open Source yang Sering Diabaikan

**Kasus Heartbleed (2014):** OpenSSL — library enkripsi yang dipakai hampir seluruh internet — di-maintain oleh dua orang dengan budget tahunan di bawah $2000. Bug Heartbleed mengancam keamanan seluruh internet.

**Kasus XZ Utils Backdoor (2024):** Maintainer yang sabar membangun reputasi selama dua tahun di komunitas, lalu menyisipkan backdoor yang hampir masuk ke distribusi Linux utama. Ini adalah supply chain attack yang hampir sempurna.

**Implikasi:** Setiap `npm install` atau `pip install` adalah tindakan kepercayaan kepada maintainer yang tidak lo kenal. Developer perlu:
- Cek siapa maintainer-nya dan apakah masih aktif
- Perhatikan jumlah dependency dan reputasinya
- Monitor `dependabot` atau tools serupa untuk vulnerability alerts
- Pertimbangkan software composition analysis (SCA) di pipeline CI/CD

---

## 5. Cloud Computing & Serverless

### 5.1 Tiga Model Cloud Service

| Model | Lo Kelola | Provider Kelola | Contoh |
|---|---|---|---|
| **IaaS** | App, data, runtime, OS | Virtualization, server, storage, network | AWS EC2, GCP Compute Engine |
| **PaaS** | App, data | Runtime, OS, virtualization, server | Heroku, Render.com, Google App Engine |
| **SaaS** | Hanya konfigurasi | Segalanya | Google Workspace, Office 365, Salesforce |

**Prinsip pemilihan:** Makin ke kanan (IaaS → SaaS), makin sedikit kontrol tapi makin cepat time-to-market. Startup early-stage → PaaS dulu untuk speed; scale → pertimbangkan IaaS untuk kontrol dan cost efficiency.

### 5.2 Deployment Models

- **Public Cloud**: shared infrastructure, paling murah, paling fleksibel (AWS, GCP, Azure)
- **Private Cloud**: infrastructure sendiri, lebih kontrol, lebih mahal
- **Hybrid Cloud**: kombinasi public dan private — banyak dipakai enterprise dan instansi pemerintah
- **Community Cloud**: shared infrastructure untuk komunitas tertentu

**Konteks Indonesia:** Pemerintah Indonesia sedang bangun **GovCloud** — cloud khusus data pemerintah setelah insiden PDN 2024. Ini adalah bentuk community/private cloud untuk meningkatkan keamanan data negara.

### 5.3 Serverless Computing

Serverless bukan berarti tidak ada server — server ada, tapi lo tidak perlu tahu atau urus sama sekali.

**Cara kerja:**
1. Lo deploy **function** (bukan aplikasi utuh)
2. Function "tidur" sampai ada trigger
3. Trigger masuk → provider jalankan function → function mati
4. Lo bayar **per eksekusi**, bukan per jam server running

**Karakteristik utama:**
- **Event-driven**: hanya jalan saat ada trigger (HTTP request, file upload, jadwal)
- **Auto-scaling**: ribuan instance otomatis tanpa konfigurasi manual
- **Pay-per-execution**: sangat efisien untuk traffic tidak konsisten
- **No server management**: tidak ada urusan OS patch, capacity planning

**Trade-off:**
- **Cold start**: pemanggilan pertama setelah lama tidak aktif butuh waktu lebih lama
- **Stateless**: function tidak menyimpan state antar eksekusi; state harus disimpan di database atau cache external
- **Vendor lock-in**: logika bisnis bisa terikat ke spesifikasi provider tertentu

**Contoh provider:** AWS Lambda, Google Cloud Functions, Azure Functions, Vercel Functions, Cloudflare Workers

**Use case ideal di Indonesia:** Webhook dari payment gateway (Midtrans, Xendit) — function hanya aktif saat ada transaksi masuk, proses, lalu mati. Jauh lebih efisien dari server yang standby 24/7.

### 5.4 FaaS (Functions as a Service)

FaaS adalah implementasi konkret dari serverless — deploy individual functions yang dipicu oleh events spesifik. Ini adalah layer eksekusi di serverless architecture.

---

## 6. AI & Machine Learning dalam Software Development

### 6.1 Pergeseran Fundamental (2014 → 2024)

- **2014**: Task AI seperti image recognition membutuhkan tim riset dan 5 tahun
- **2024**: Task yang sama bisa diselesaikan dengan API call dalam satu sore

Perubahan terbesarnya: AI yang powerful sekarang **accessible via API**. Engineer tidak perlu PhD atau GPU cluster — cukup tahu cara memanggil endpoint.

**Implikasi**: Fitur yang dulu dianggap terlalu kompleks untuk tim kecil sekarang jadi ekspektasi standar. User expect aplikasi bisa kenali gambar, transcribe audio, generate teks, deteksi sentimen.

### 6.2 AI/ML dalam SDLC

**Development Phase:**
- GitHub Copilot, Cursor, Tabnine — code completion dan suggestion
- Claude, ChatGPT — explain code, generate boilerplate, refactoring suggestion
- AI-powered code review

**Testing Phase:**
- Auto-generate unit tests berdasarkan kode yang ada
- Intelligent test prioritization — test bagian yang paling berisiko dulu
- Visual regression testing dengan AI

**Bug Detection & Security:**
- Snyk Code, SonarQube — static analysis berbasis ML
- Deteksi security vulnerability secara otomatis
- Anomaly detection di production logs

**Project Management:**
- Predictive analytics untuk timeline dan resource
- Automatic estimation berdasarkan historical velocity
- Risk identification di early stage

### 6.3 Tools & Frameworks

**Untuk membangun model ML:**

| Framework | Dibuat oleh | Keunggulan | Use Case |
|---|---|---|---|
| TensorFlow | Google | Production-ready, deployment mature (TF Serving, TF Lite) | Enterprise, mobile deployment |
| PyTorch | Meta AI | Fleksibel, debugging mudah, dynamic computation graph | Research, prototyping, makin populer di production |
| Scikit-learn | Community | Simple API untuk classical ML | Tabular data, non-deep learning tasks |
| Hugging Face | Community | Pre-trained models, NLP ecosystem | NLP tasks, fine-tuning LLM |

**Untuk menggunakan AI via API (lebih relevan untuk SE generalist):**
- OpenAI API (GPT-4, DALL-E, Whisper)
- Anthropic API (Claude)
- Google AI (Gemini, Vision AI, Speech-to-Text)
- AWS AI Services (Rekognition, Comprehend, Polly)

**Prinsip:** Selalu coba API dulu sebelum train model sendiri. Training model sendiri butuh data besar, expertise ML, dan infrastruktur mahal. Hampir selalu ada pre-trained model atau API yang cukup untuk use case umum.

### 6.4 Tantangan Etis AI dalam SE

- **Algorithmic bias**: model belajar dari data historis yang mungkin bias (kasus Xing search ranking)
- **Hallucination**: AI bisa generate kode yang terlihat benar tapi salah secara subtle — review tetap diperlukan
- **Over-reliance**: engineer yang terlalu bergantung pada AI tanpa memahami kode yang di-generate
- **Security**: kode yang di-generate AI bisa punya vulnerability yang tidak terdeteksi

---

## 7. Blockchain Technology

### 7.1 Konsep Inti

Blockchain adalah **distributed ledger** — database yang disimpan di ribuan node sekaligus, bukan di satu server terpusat.

**Tiga prinsip utama:**

| Prinsip | Artinya | Implikasi |
|---|---|---|
| **Decentralization** | Tidak ada single point of control | Tidak bisa dimatikan atau dimanipulasi oleh satu pihak |
| **Immutability** | Data yang masuk tidak bisa diubah | Audit trail permanen; kalau ada kesalahan, hanya bisa ditambah koreksi |
| **Transparency** | Semua transaksi bisa diaudit | Trust tanpa perlu intermediary; identitas bisa pseudonymous |

**Cara immutability bekerja:** Setiap block berisi hash dari block sebelumnya. Mengubah satu block berarti mengubah seluruh chain di semua node secara bersamaan — secara komputasi tidak feasible.

### 7.2 Use Cases yang Terbukti

**Smart Contracts:** Kontrak yang otomatis dieksekusi ketika kondisi terpenuhi, tanpa perlu pihak ketiga.
- Contoh: escrow otomatis — uang hanya dilepas ke seller setelah buyer konfirmasi
- Platform: Ethereum (public), Hyperledger Fabric (enterprise/private)

**Decentralized Applications (dApps):** Aplikasi yang backend-nya berjalan di blockchain, bukan di server perusahaan sentral.
- Tidak bisa di-shutdown oleh satu entitas
- Transparansi penuh pada business logic

**Cryptocurrency & DeFi:** Use case paling proven dan paling matang.

**Supply Chain Tracking:** Melacak produk dari origin ke konsumen dengan audit trail yang tidak bisa dimanipulasi — dipakai di industri makanan, farmasi, dan luxury goods.

### 7.3 Realita vs Hype

Blockchain sempat di puncak Hype Cycle — diklaim akan merevolusi semua industri. Faktanya:

- Banyak masalah yang diklaim bisa diselesaikan blockchain lebih efisien diselesaikan dengan **database biasa**
- Blockchain hanya relevan ketika: ada multiple parties yang tidak saling percaya, tidak ada trusted central authority, dan immutability benar-benar diperlukan
- **NFT dan metaverse Indonesia** sudah di Trough of Disillusionment
- Blockchain untuk supply chain dan DeFi masih di Slope of Enlightenment

**Pertanyaan filter sebelum pakai blockchain:** Apakah ada multiple pihak yang tidak saling percaya? Apakah immutability benar-benar dibutuhkan? Apakah decentralization memberikan value nyata? Kalau semua jawabannya tidak — database biasa lebih baik.

---

## 8. Quantum Computing

### 8.1 Konsep Dasar

**Classical bit vs Qubit:**
- Classical bit: hanya bisa 0 atau 1
- Qubit: bisa berada dalam **superposition** — kombinasi 0 dan 1 secara bersamaan sampai diukur
- Secara matematis: |ψ⟩ = α|0⟩ + β|1⟩

**Tiga prinsip quantum mechanics:**

**Superposition:** Qubit bisa merepresentasikan banyak state sekaligus → quantum computer bisa memproses banyak kemungkinan secara paralel → untuk problem tertentu, jauh lebih efisien dari komputasi klasik.

**Entanglement:** Dua qubit yang entangled saling terhubung secara instant meski terpisah jarak jauh — state satu mempengaruhi yang lain secara langsung. Ini yang memungkinkan quantum algorithms tertentu bekerja dengan cara yang tidak mungkin di komputasi klasik.

**Quantum Interference:** Digunakan untuk amplify kemungkinan jawaban yang benar dan cancel kemungkinan yang salah.

### 8.2 Status Saat Ini (2024-2025)

- IBM, Google, IonQ sudah punya quantum computer operasional dengan ratusan qubit
- Google mengklaim "quantum supremacy" untuk task spesifik (2019, 2023)
- Masih sangat error-prone — "noisy" qubits membutuhkan error correction yang mahal
- Belum ada *practical quantum advantage* untuk real-world SE problems secara luas
- Di Hype Cycle: antara Breakthrough dan Replicator

### 8.3 Relevansi untuk Software Engineer

**Yang sudah relevan SEKARANG:**

**Ancaman terhadap kriptografi saat ini:**
- Shor's algorithm di quantum computer yang cukup powerful bisa memfaktorkan bilangan besar dengan sangat cepat
- Ini berarti enkripsi RSA dan ECDSA yang dipakai untuk HTTPS, banking, dan hampir semua keamanan digital **bisa dibobol**
- Ini disebut "harvest now, decrypt later" attack — aktor jahat sudah mengumpulkan data terenkripsi sekarang untuk didekripsi ketika quantum computer cukup powerful

**Post-Quantum Cryptography (PQC):**
- NIST sudah finalisasi standar PQC di 2024: CRYSTALS-Kyber (key exchange), CRYSTALS-Dilithium (signature)
- Engineer yang bekerja di security, banking, atau sistem yang perlu aman dalam 10-20 tahun ke depan perlu mulai familiar
- Migrasi ke algoritma quantum-resistant adalah investasi jangka panjang

**Yang relevan di masa depan (5-15 tahun):**
- Optimization problems: route optimization, portfolio optimization, logistics
- Scientific simulation: drug discovery, materials science
- ML training acceleration

### 8.4 Yang Perlu Dipersiapkan Engineer Sekarang

Bukan: belajar quantum programming (terlalu early)

Ya:
1. **Awareness** bahwa RSA/ECDSA punya expiry date dalam konteks quantum
2. **Mulai familiar** dengan post-quantum cryptography standards
3. **Desain sistem** dengan asumsi keamanan perlu di-upgrade — avoid hardcoding algoritma kriptografi
4. **Monitor perkembangan** — landscape berubah cepat

---

## 9. Low-Code / No-Code

### 9.1 Apa itu Low-Code/No-Code

- **No-code**: membangun aplikasi tanpa menulis kode sama sekali, melalui visual interface
- **Low-code**: minimal coding, terutama untuk logika bisnis kompleks
- Platform: Bubble, Webflow, AppSheet, Microsoft Power Apps, Retool, n8n

### 9.2 Posisi di Industri

Low-code/no-code berada di **Slope of Enlightenment** — sudah terbukti works untuk use case tertentu, adoption makin luas.

**Cocok untuk:**
- Internal tools (admin dashboard, form processing, workflow automation)
- Prototyping dan MVP
- Non-developer yang butuh automate workflow sederhana
- Startup yang butuh speed tinggi dengan resources terbatas

**Bukan pengganti:**
- Sistem kompleks dengan logika bisnis yang sangat custom
- High-performance applications
- Sistem dengan security requirements ketat

### 9.3 Implikasi untuk Engineer

Low-code/no-code **tidak menghilangkan** kebutuhan software engineer — justru menggeser fokus:
- Engineer tidak perlu lagi build boilerplate CRUD apps dari nol
- Lebih banyak waktu untuk problem yang benar-benar kompleks
- Engineer perlu tahu kapan low-code cukup vs kapan perlu custom development
- Integrasi antara low-code platform dan sistem lain masih butuh engineering skill

---

## 10. Process Trends dalam SE

### 10.1 Arah Perkembangan Software Process Improvement

Tren SPI bergerak dari "ikuti prosedur" ke "capai hasil":

1. **Bottom-up driven**: engineer yang tahu prosesnya lemah di mana — perubahan harus datang dari mereka, bukan dipaksakan manajemen
2. **Selective automation**: automate bagian yang paling benefit (testing, deployment) — tidak semua bisa atau perlu di-automate
3. **ROI-focused**: setiap improvement harus bisa diukur hasilnya (deployment frequency, bug rate, cycle time)
4. **Human-centered**: soft skills (komunikasi, empati, manajemen perubahan) sama pentingnya dengan technical skills
5. **New modes of learning**: AI tools, komunitas online, peer learning sudah jadi bagian dari cara engineer berkembang

### 10.2 Grand Challenges dalam SE Modern

Sistem software modern harus menangani tujuh karakteristik sekaligus:

1. **Multifunctionality** — satu sistem, puluhan fitur yang jalan bersamaan
2. **Reactivity & Timeliness** — response real-time, tidak boleh ada lag yang terasa
3. **New Modes of Interaction** — voice, gesture, AR, AI-mediated — terus berubah
4. **Complex Architectures** — microservices, event-driven, distributed systems
5. **Heterogeneous Distributed Systems** — berbagai bahasa, platform, cloud region
6. **Criticality** — downtime punya konsekuensi finansial atau bahkan nyawa
7. **Maintenance Variability** — sebagian sistem update setiap hari, sebagian legacy yang tidak berani disentuh

---

## 11. Technology Direction: Prinsip Akhir

### 11.1 SE adalah tentang Manusia, Bukan Teknologi

Survei Standish Group (CHAOS Report) konsisten menunjukkan: mayoritas project software yang gagal bukan karena masalah teknis, tapi karena masalah manusia — komunikasi buruk, requirement tidak jelas, ekspektasi tidak realistis.

Teknologi adalah medium. Yang menentukan keberhasilan adalah kemampuan engineer untuk:
- Memahami kebutuhan nyata user dan stakeholder
- Berkomunikasi secara efektif dengan tim yang beragam
- Navigate ambiguity dan perubahan
- Membuat keputusan teknis yang berdampak pada manusia

### 11.2 Perubahan Terjadi Melalui Tipping Points

Adopsi teknologi tidak linear — ada fase lambat panjang, lalu tipping point di mana perubahan terjadi sangat cepat:

- Git ada sejak 2005, tapi enterprise adoption masif baru ~2015
- Docker ada sejak 2013, tapi widespread use baru ~2018-2019
- ChatGPT: 100 juta user dalam 2 bulan — tipping point paling cepat dalam sejarah tech

**Implikasi:** Teknologi yang terlihat niche hari ini bisa jadi standar industri dalam 3-5 tahun. Menunggu terlalu lama untuk belajar = tertinggal. Belajar terlalu awal = investasi di teknologi yang mati di Trough.

---

## 12. Ringkasan: Menjadi Engineer yang Relevan

```
TECHNICAL CORE
├── Kuasai fundamental yang tidak berubah: data structures, algorithms, system design
├── Pahami cloud & serverless — ini sudah infrastructure standar
├── Bisa integrate AI/ML via API — ini sudah ekspektasi, bukan differentiator
└── Familiar dengan security fundamentals — termasuk post-quantum awareness

ADAPTABILITY
├── Monitor Hype Cycle — investasi skill pada Slope of Enlightenment
├── Blockchain, quantum: awareness > expertise (untuk saat ini)
├── Low-code/no-code: tahu kapan pakai, bukan musuh engineer
└── Selalu tanya "ini di fase mana?" sebelum all-in ke teknologi baru

HUMAN SKILLS
├── Komunikasi async yang jelas — menulis PR, docs, RFC yang bisa dibaca siapa saja
├── Kolaborasi di tim distributed dan diverse
├── Belajar mandiri — komunitas, open source, AI tools
└── Kemampuan framing masalah, bukan hanya solving

PROFESSIONAL ETHICS
└── Semua trend teknis ini membawa tanggung jawab etis baru:
    ├── AI bias dan fairness
    ├── Data sovereignty di cloud
    ├── Open source maintainability
    └── Security di era post-quantum
```

> **"Software engineering bukan hanya soal menulis kode yang jalan. Ini soal membangun sistem yang berdampak ke manusia, menggunakan teknologi yang terus berubah, dalam lingkungan yang makin kompleks — dengan tanggung jawab penuh atas konsekuensinya."**
