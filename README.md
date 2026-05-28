# 🚀 SPMB 2026 - Sistem Antrian & Verifikasi Berkas Sekolah (Google Apps Script)

Sistem ini adalah aplikasi web sederhana berbasis **Google Apps Script + Google Spreadsheet + GitHub Pages** untuk:

* Antrian Verifikasi SPMB/PPDB
* Cetak Form Verifikasi Berkas
* Multi Operator/Loket
* Kuota Harian
* Dashboard Admin
* Hosting Gratis
* Custom Domain

Cocok digunakan untuk:

* SMA / SMK
* PPDB Sekolah
* Verifikasi Berkas
* Registrasi Event Sekolah
* Antrian Pelayanan Sekolah

---

# ✨ Fitur Utama

✅ Form Antrian Online
✅ Multi Operator (Round Robin)
✅ Kuota Harian Otomatis
✅ Generate Form Verifikasi
✅ Print Layout F4 Resmi
✅ Admin Panel Setting
✅ Google Spreadsheet Database
✅ Hosting Gratis via GitHub Pages
✅ Bisa Pakai Domain Sendiri

---

# 🧩 Arsitektur Sistem

```text
User Browser
     ↓
GitHub Pages (iframe)
     ↓
Google Apps Script Web App
     ↓
Google Spreadsheet Database
```

---

# 📁 Struktur File

```text
📦 project
 ┣ 📄 Code.gs
 ┣ 📄 Index.html
 ┣ 📄 Admin.html
 ┣ 📄 Spreadsheet
 ┗ 📄 README.md
```

---

# ⚙️ STEP 1 — Membuat Spreadsheet

## 1. Buat Google Spreadsheet Baru

Contoh nama:

```text
SPMB-2026
```

---

## 2. Buat Sheet Berikut

### Sheet 1 → `Settings`

Isi:

| A              | B                                  |
| -------------- | ---------------------------------- |
| tanggalMulai   | 2026-06-01                         |
| kuotaHarian    | 100                                |
| jumlahOperator | 4                                  |
| namaSekolah    | SMK Negeri 2 Purwodadi             |
| footerTeks     | SPMB 2026 - SMK Negeri 2 Purwodadi |

---

### Sheet 2 → `DataAntrian`

Header:

| Timestamp | NISN | NoHP | Nama | Asal | Tanggal | Nomor | KeyDate | Loket |

---

# ⚙️ STEP 2 — Membuat Google Apps Script

## 1. Buka:

```text
Extensions → Apps Script
```

---

## 2. Upload 3 File

### File:

* `Code.gs`
* `Index.html`
* `Admin.html`

---

## 3. Paste Kode

Paste semua source code ke file masing-masing.

---

# ⚙️ STEP 3 — Ganti Spreadsheet ID

Cari bagian ini:

```javascript
SpreadsheetApp.openById("SPREADSHEET_ID")
```

Ganti dengan ID spreadsheet Anda.

---

## Cara Ambil Spreadsheet ID

Contoh URL:

```text
https://docs.google.com/spreadsheets/d/1ABCDEF123456789/edit
```

Ambil bagian:

```text
1ABCDEF123456789
```

---

# ⚙️ STEP 4 — Deploy Web App

Klik:

```text
Deploy → New Deployment
```

---

## Pilih:

```text
Type → Web App
```

---

## Setting:

| Setting        | Value  |
| -------------- | ------ |
| Execute As     | Me     |
| Who Has Access | Anyone |

---

## Klik:

```text
Deploy
```

---

## Copy URL Web App

Contoh:

```text
https://script.google.com/macros/s/AKfycbxxxx/exec
```

---

# ⚙️ STEP 5 — Membuat GitHub Repository

## 1. Buka GitHub

Buat repository baru.

Contoh:

```text
spmb-2026
```

---

## 2. Upload File `index.html`

Isi:

```html
<!DOCTYPE html>
<html>
<head>
  <title>SPMB 2026</title>

  <style>
    html,body{
      margin:0;
      padding:0;
      width:100%;
      height:100%;
      overflow:hidden;
    }

    iframe{
      width:100%;
      height:100vh;
      border:none;
    }
  </style>
</head>

<body>

<iframe
src="URL_WEB_APP_GOOGLE_SCRIPT">
</iframe>

</body>
</html>
```

---

## 3. Ganti:

```html
URL_WEB_APP_GOOGLE_SCRIPT
```

dengan URL deploy Apps Script Anda.

---

# ⚙️ STEP 6 — Aktifkan GitHub Pages

Masuk:

```text
Settings → Pages
```

---

## Source:

```text
Deploy from Branch
```

---

## Branch:

```text
main
```

---

## Folder:

```text
/ root
```

---

## Save

---

# 🌐 STEP 7 — Website Online

GitHub akan memberikan URL:

```text
https://username.github.io/spmb-2026
```

---

# 🌐 STEP 8 — Custom Domain (Opsional)

## Contoh:

```text
spmb.sekolah.sch.id
```

---

## Tambahkan di GitHub Pages:

```text
Custom Domain
```

---

## Tambahkan DNS:

### Untuk Subdomain:

```dns
CNAME → username.github.io
```

---

# 🔒 KEAMANAN YANG DIREKOMENDASIKAN

## 1. Tambahkan LockService

Agar nomor antrian tidak double.

---

## 2. Tambahkan Admin Authentication

Minimal whitelist email:

```javascript
Session.getActiveUser().getEmail()
```

---

## 3. Tambahkan Validasi Duplicate NISN

---

## 4. Gunakan HTTPS

GitHub Pages otomatis HTTPS.

---

# 🖨️ FITUR CETAK

Sistem sudah support:

✅ Kertas F4/Folio
✅ Print Browser
✅ Form Verifikasi
✅ Checklist Berkas
✅ Multi Tanda Tangan

---

# 📱 RESPONSIVE

Sistem dapat dibuka melalui:

* HP Android
* iPhone
* Laptop
* Tablet

---

# 🚀 FITUR YANG BISA DITAMBAHKAN

* QR Code Tiket
* WhatsApp Gateway
* Dashboard Statistik
* Upload Dokumen
* AI Chatbot Sekolah
* OCR KK / Akta
* Export PDF
* Sistem Login Admin
* Scan Barcode

---

# 📌 URL Admin Panel

Tambahkan:

```text
?page=admin
```

Contoh:

```text
https://script.google.com/macros/s/AKfycbxxxx/exec?page=admin
```

---

# 📌 Teknologi Yang Digunakan

| Teknologi          | Fungsi           |
| ------------------ | ---------------- |
| Google Apps Script | Backend          |
| Google Spreadsheet | Database         |
| GitHub Pages       | Hosting Frontend |
| HTML CSS JS        | Frontend         |
| Google Web App     | API Server       |

---

# ❤️ Credits

Developed for:

* Sistem SPMB / PPDB Sekolah
* Open Source Education Project
* Indonesia School Digitalization

---

# 📜 License

Free to use for educational purposes.
