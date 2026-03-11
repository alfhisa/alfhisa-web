---
title: "Software Architecture Patterns"
type: "Workshop"
courseCode: ""
academicYear: "2025/2026"
semester: "Even 2025/2026"
active: false
location: "Jakarta, Indonesia"
venue: "BINUS University"
description: "This article introduces software architecture patterns."
---

# Software Architecture Patterns – Study Guide

Berikut rangkuman **software architecture patterns** yang umum digunakan dalam pengembangan perangkat lunak.

---

## 1. Monolithic Architecture

### Definisi
Monolithic Architecture adalah pola di mana seluruh aplikasi dibangun sebagai **satu unit aplikasi tunggal**. Semua modul seperti UI, business logic, dan data access berada dalam satu codebase dan biasanya di-deploy sebagai satu aplikasi.

### Ciri Utama
- Satu codebase utama
- Satu proses deployment
- Semua modul berada dalam satu aplikasi
- Biasanya menggunakan satu database utama

### Kelebihan
- Mudah dibuat pada tahap awal
- Deployment sederhana
- Cocok untuk proyek kecil atau MVP
- Debugging relatif lebih mudah di awal

### Kekurangan
- Sulit dipelihara saat aplikasi membesar
- Perubahan kecil bisa mengharuskan redeploy seluruh aplikasi
- Sulit diskalakan per modul
- Coupling antar bagian cenderung tinggi

### Use Case yang Cocok
- Sistem internal sederhana
- Aplikasi startup tahap awal
- Sistem akademik kecil
- Company profile dengan fitur tambahan ringan

### Contoh Case
**E-Commerce sederhana** dengan fitur login, katalog produk, checkout, dan pembayaran dalam satu aplikasi.

### Diagram ASCII
```text
                +----------------------+
                |     Web Browser      |
                |      (Client)        |
                +----------+-----------+
                           |
                           | HTTP Request
                           v
                +-----------------------------+
                |      MONOLITHIC APP         |
                |-----------------------------|
                |  Web UI                     |
                |  User Management            |
                |  Product Catalog            |
                |  Order Processing           |
                |  Payment Processing         |
                |  Notification               |
                |  Data Access                |
                +-------------+---------------+
                               |
                               v
                       +---------------+
                       |   Database    |
                       |   Single DB   |
                       +---------------+
```

---

## 2. Layered Architecture

### Definisi
Layered Architecture membagi sistem ke dalam beberapa **lapisan (layers)**, di mana setiap layer memiliki tanggung jawab tertentu. Layer atas menggunakan layanan dari layer di bawahnya.

### Layer Umum
- Presentation Layer
- Application / Service Layer
- Business Logic Layer
- Data Access Layer
- Database Layer

### Kelebihan
- Separation of concerns jelas
- Mudah dipahami mahasiswa dan developer baru
- Mudah diuji per layer
- Cocok untuk sistem bisnis tradisional

### Kekurangan
- Bisa menjadi terlalu kaku
- Performa bisa terpengaruh karena request melewati banyak layer
- Kadang muncul layer yang hanya meneruskan data tanpa nilai tambah

### Use Case yang Cocok
- Sistem informasi akademik
- ERP sederhana
- Inventory management
- Aplikasi CRUD enterprise

### Contoh Case
**Sistem e-commerce** dengan alur: UI → controller → service → business rule → repository → database.

### Diagram ASCII
```text
                +---------------------------+
                |        Client App         |
                |     (Web / Mobile UI)     |
                +-------------+-------------+
                               |
                               v
                +---------------------------+
                |    Presentation Layer     |
                | Controllers / Endpoints   |
                +-------------+-------------+
                               |
                               v
                +---------------------------+
                |    Application Layer      |
                | Order / User / Product    |
                +-------------+-------------+
                               |
                               v
                +---------------------------+
                |   Business Logic Layer    |
                | Validation / Rules / Calc |
                +-------------+-------------+
                               |
                               v
                +---------------------------+
                |     Data Access Layer     |
                | Repository / DAO          |
                +-------------+-------------+
                               |
                               v
                       +----------------+
                       |    Database    |
                       +----------------+
```

---

## 3. Client-Server Architecture

### Definisi
Client-Server Architecture membagi sistem menjadi dua pihak utama: **client** yang meminta layanan, dan **server** yang menyediakan layanan.

### Ciri Utama
- Client mengirim request
- Server memproses request
- Server mengembalikan response
- Umum pada aplikasi web dan mobile

### Kelebihan
- Struktur sederhana dan jelas
- Mudah diterapkan
- Data dan logic terpusat di server
- Mudah dikontrol dari sisi backend
- Mudah diskala di sisi server

### Kekurangan
- Server bisa menjadi bottleneck
- Jika server gagal, layanan terganggu
- Skalabilitas perlu direncanakan dengan baik

### Use Case yang Cocok
- Web application
- Mobile app backend
- Database system
- Sistem absensi online

### Contoh Case
**Aplikasi perpustakaan online**: client web mengakses server untuk mencari buku, meminjam, dan melihat status pinjaman.

### Diagram ASCII
```text
+-------------------+         HTTP / API         +-------------------+
|      Client       |  ----------------------->  |      Server       |
|  Web / Mobile App |                            | App + Business    |
+-------------------+  <-----------------------  | Logic + API       |
                                                 +---------+---------+
                                                           |
                                                           v
                                                   +---------------+
                                                   |   Database    |
                                                   +---------------+
```

---

## 4. Model-View-Controller (MVC)

### Definisi
MVC membagi aplikasi menjadi tiga komponen utama:
- **Model**: data dan business logic
- **View**: tampilan ke user
- **Controller**: menerima input, memproses, dan menghubungkan View dengan Model

### Kelebihan
- Memisahkan UI dan logic
- Struktur aplikasi lebih rapi
- Cocok untuk aplikasi web tradisional
- Mempermudah maintenance

### Kekurangan
- Controller bisa menjadi terlalu besar
- Kadang membingungkan untuk pemula
- Tidak selalu ideal untuk UI yang sangat dinamis

### Use Case yang Cocok
- Web app tradisional
- CRUD application
- Framework seperti Laravel, ASP.NET MVC, Spring MVC

### Contoh Case
**Portal berita**: user membuka halaman artikel, controller mengambil data artikel dari model dan mengirimkannya ke view.

### Diagram ASCII
```text
               User Input
                   |
                   v
           +---------------+
           |  Controller   |
           +-------+-------+
                   |
          ---------------------
          |                   |
          v                   v
  +---------------+   +---------------+
  |     Model     |   |      View     |
  | Data + Logic  |   | UI / Display  |
  +-------+-------+   +-------+-------+
          |                   ^
          +-------------------+
             update / render
```

---

## 5. Model-View-ViewModel (MVVM)

### Definisi
MVVM adalah pola yang memisahkan:
- **Model**: data dan business logic
- **View**: tampilan
- **ViewModel**: penghubung antara Model and View, menyiapkan data agar siap ditampilkan

Pola ini populer pada aplikasi yang mendukung **data binding**.

### Kelebihan
- Cocok untuk UI modern yang dinamis
- Mempermudah testing UI logic
- Mendukung data binding dengan baik
- View menjadi lebih bersih

### Kekurangan
- Lebih abstrak untuk pemula
- Bisa terasa berlebihan untuk aplikasi sederhana
- Perlu framework yang mendukung binding agar optimal

### Use Case yang Cocok
- Aplikasi mobile Android
- Desktop app modern
- Frontend dengan reactive framework

### Contoh Case
**Aplikasi cuaca mobile**: ViewModel mengambil data cuaca dari Model lalu menyajikannya dalam bentuk yang siap ditampilkan ke View.

### Diagram ASCII
```text
+---------------+      bind / observe      +---------------+
|     View      | <----------------------> |   ViewModel   |
|   UI Screen   |                          | UI State/Logic|
+-------+-------+                          +-------+-------+
        ^                                          |
        |                                          v
        |                                  +---------------+
        +----------------------------------|     Model     |
                 display updated data      | Data + Logic  |
                                           +---------------+
```

---

## 6. Event-Driven Architecture

### Definisi
Event-Driven Architecture adalah pola di mana komponen sistem berkomunikasi melalui **event**. Saat suatu kejadian terjadi, sistem mempublikasikan event, lalu komponen lain dapat merespons event tersebut.

### Komponen Utama
- Event Producer
- Event Broker / Message Bus
- Event Consumer

### Kelebihan
- Loose coupling tinggi
- Cocok untuk sistem real-time
- Mudah menambah consumer baru
- Baik untuk asynchronous processing

### Kekurangan
- Debugging lebih sulit
- Monitoring alur sistem lebih kompleks
- Konsistensi data bisa menantang
- Sulit dipahami jika event terlalu banyak

### Use Case yang Cocok
- Notifikasi real-time
- Sistem IoT
- E-commerce dengan notifikasi order
- Sistem fraud detection

### Contoh Case
**E-commerce**: saat order berhasil dibuat, sistem mempublikasikan event `OrderCreated`, lalu payment, notification, dan analytics merespons event tersebut.

### Diagram ASCII
```text
+------------------+
|  Order Service   |
| Event Producer   |
+--------+---------+
         |
         | publish: OrderCreated
         v
   +-------------------+
   |  Message Broker   |
   | Kafka / RabbitMQ  |
   +----+---------+----+
        |         |
        |         |
        v         v
+---------------+ +----------------+
| Notification  | | Payment Service |
|   Consumer    | |    Consumer     |
+---------------+ +----------------+
        |
        v
+----------------+
| Analytics Cons.|
+----------------+
```

---

## 7. Service-Oriented Architecture (SOA)

### Definisi
SOA adalah arsitektur yang menyusun sistem dari beberapa **service bisnis** yang dapat digunakan kembali (reusable) dan saling berkomunikasi melalui protokol standar, sering kali melalui **Enterprise Service Bus (ESB)**.

### Ciri Utama
- Service berorientasi fungsi bisnis
- Integrasi antar sistem enterprise
- Sering ada ESB sebagai pusat komunikasi
- Reuse antar aplikasi tinggi

### Kelebihan
- Mendukung integrasi sistem besar
- Service reusable
- Cocok untuk enterprise
- Dapat menghubungkan sistem lama dan baru

### Kekurangan
- ESB bisa menjadi bottleneck
- Kompleksitas governance tinggi
- Implementasi relatif berat
- Kadang lebih lambat dari pendekatan ringan modern

### Use Case yang Cocok
- Enterprise system
- Integrasi antar departemen
- Sistem perbankan besar
- Pemerintahan / organisasi besar

### Contoh Case
**Sistem rumah sakit enterprise** yang mengintegrasikan pendaftaran, billing, laboratorium, farmasi, dan rekam medis melalui ESB.

### Diagram ASCII
```text
                    +----------------------+
                    |   Enterprise Apps    |
                    | Web / Mobile / ERP   |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |   ESB / Service Bus  |
                    | Routing / Transform  |
                    +----+----+----+-------+
                         |    |    |
                         |    |    |
                         v    v    v
                +----------+ +----------+ +----------+
                | Patient  | | Billing  | | Lab      |
                | Service  | | Service  | | Service  |
                +----------+ +----------+ +----------+
                         |
                         v
                    +--------------+
                    | Pharmacy Svc |
                    +--------------+
```

---

## 8. Microservices Architecture

### Definisi
Microservices Architecture memecah aplikasi besar menjadi service-service kecil yang **independen**, fokus pada satu domain bisnis, dan dapat di-deploy secara terpisah.

### Ciri Utama
- Service kecil dan spesifik
- Deployment independen
- Biasanya tiap service punya database sendiri
- Komunikasi via API atau event

### Kelebihan
- Skalabilitas tinggi
- Tim bisa bekerja paralel
- Deployment per service
- Kegagalan satu service tidak selalu mematikan seluruh sistem

### Kekurangan
- Operasional lebih kompleks
- Monitoring dan tracing lebih sulit
- Konsistensi data lebih menantang
- Membutuhkan DevOps yang matang

### Use Case yang Cocok
- Marketplace besar
- Ride-hailing app
- Streaming platform
- Fintech modern

### Contoh Case
**Platform telemedicine** dengan service terpisah: user, appointment, payment, and notification.

### Diagram ASCII
```text
                    +----------------------+
                    |   Web / Mobile App   |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |      API Gateway     |
                    +----+----+----+-------+
                         |    |    |
                         |    |    |
                         v    v    v
                 +----------+ +----------+ +--------------+
                 | User Svc | | Appt Svc | | Payment Svc  |
                 +----+-----+ +----+-----+ +------+-------+
                      |            |              |
                      v            v              v
                 +--------+   +--------+     +--------+
                 |User DB |   |Appt DB |     |Pay DB  |
                 +--------+   +--------+     +--------+

                         +------------------+
                         | Notification Svc |
                         +--------+---------+
                                   |
                                   v
                             +----------+
                             | Msg/Push |
                             +----------+
```

---

# Ringkasan Singkat Perbandingan

| Pattern | Fokus Utama | Cocok Untuk |
|---|---|---|
| Monolithic | Satu aplikasi utuh | Sistem kecil / MVP |
| Layered | Pemisahan berdasarkan lapisan | Sistem bisnis tradisional |
| Client-Server | Pembagian client dan server | Web / mobile app umum |
| MVC | Pemisahan UI, logic, input | Web app tradisional |
| MVVM | UI reactive + binding | Mobile / frontend modern |
| Event-Driven | Komunikasi berbasis event | Real-time, async systems |
| SOA | Integrasi service enterprise | Organisasi besar / enterprise |
| Microservices | Service kecil independen | Sistem besar, scalable |

---

# Catatan Penting

1. **Satu aplikasi bisa menggunakan lebih dari satu pattern sekaligus.**  
   Misalnya sistem microservices di level arsitektur, tetapi setiap service di dalamnya menggunakan layered architecture.

2. **Tidak ada pattern yang selalu paling baik.**  
   Pattern harus dipilih berdasarkan kebutuhan sistem, ukuran tim, kompleksitas domain, dan kebutuhan scalability.

3. **Trade-off selalu ada.**  
   Arsitektur yang lebih fleksibel biasanya lebih kompleks. Arsitektur yang sederhana biasanya lebih mudah dibangun, tetapi mungkin kurang scalable.

---

# Penutup

Saat mempelajari software architecture, jangan hanya menghafal definisinya. Fokuslah pada tiga pertanyaan ini:

1. Masalah apa yang ingin diselesaikan pattern ini?
2. Kapan pattern ini cocok digunakan?
3. Apa trade-off atau konsekuensinya?