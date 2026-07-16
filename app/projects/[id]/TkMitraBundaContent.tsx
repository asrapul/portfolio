import React from "react";
import { useLang } from "../../context/LangContext";
import Image from "next/image";

const MEDIUM_ARTICLE_URL =
  "https://medium.com/@AndiAsyraful/tk-mitra-bunda-sistem-absensi-digital-db44c9fa600f?sharedUserId=AndiAsyraful";

export default function TkMitraBundaContent() {
  const { lang } = useLang();
  const isId = lang === "id";

  /* ─── Style helpers ──────────────────────────────────────────────── */
  const headingStyle: React.CSSProperties = {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    marginBottom: "1rem",
    paddingBottom: "0.75rem",
    borderBottom: "1px solid var(--border)",
  };
  const textStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    lineHeight: 1.8,
    marginBottom: "1rem",
  };
  const listStyle: React.CSSProperties = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    fontSize: "1rem",
    color: "var(--text-secondary)",
    lineHeight: 1.8,
    marginBottom: "1rem",
  };
  const subHeadingStyle: React.CSSProperties = {
    fontWeight: 700,
    color: "var(--text-primary)",
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
    fontSize: "1.05rem",
  };
  const stepBadgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "var(--bg-primary)",
    fontSize: "0.78rem",
    fontWeight: 700,
    flexShrink: 0,
    marginRight: "0.65rem",
  };

  const captionStyle: React.CSSProperties = {
    fontSize: "0.82rem",
    color: "var(--text-muted)",
    marginTop: "0.5rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const infoBoxStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginBottom: "1.25rem",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

      {/* ── Medium CTA Banner ───────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(39,201,63,0.12) 0%, rgba(0,0,0,0) 100%)",
          border: "1px solid rgba(39,201,63,0.3)",
          borderRadius: "16px",
          padding: "1.75rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Medium "M" icon */}
          <svg width="28" height="28" viewBox="0 0 1043.63 592.71" fill="var(--text-primary)" style={{ flexShrink: 0 }}>
            <g>
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" />
              <path d="M911.56 296.36c0 154.06-65.89 278.92-147.17 278.92s-147.17-124.86-147.17-278.92S683.1 17.44 764.39 17.44s147.17 124.85 147.17 278.92" />
              <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
            </g>
          </svg>
          <div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.2rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {isId ? "Tertarik dengan cara saya membangun ini?" : "Curious how I built this?"}
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {isId
                ? "Baca studi kasus lengkap & detail teknis di Medium →"
                : "Read the full case study & technical deep-dive on Medium →"}
            </p>
          </div>
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {isId
            ? "Artikel lengkap mencakup latar belakang masalah, arsitektur teknis, lesson learned, dan dampak bisnis dari sistem absensi digital ini — ideal untuk HR dan Recruiter IT yang ingin memahami cara kerja dan kedalaman teknis proyek ini."
            : "The full article covers the problem background, technical architecture, lessons learned, and business impact of this digital attendance system — ideal for HR and IT Recruiters who want to understand the how and the technical depth of this project."}
        </p>
        <a
          href={MEDIUM_ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            alignSelf: "flex-start",
            padding: "0.65rem 1.5rem",
            fontSize: "0.875rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 1043.63 592.71" fill="currentColor">
            <g>
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" />
              <path d="M911.56 296.36c0 154.06-65.89 278.92-147.17 278.92s-147.17-124.86-147.17-278.92S683.1 17.44 764.39 17.44s147.17 124.85 147.17 278.92" />
              <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
            </g>
          </svg>
          {isId ? "Baca di Medium" : "Read on Medium"}
        </a>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0 }}>
          {isId ? "Panduan Penggunaan Website" : "Website User Guide"}
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      {/* ── Intro ───────────────────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Panduan Menggunakan Sistem Absensi TK Mitra Bunda" : "TK Mitra Bunda Attendance System — User Guide"}
        </h2>
        <p style={textStyle}>
          {isId
            ? "Panduan ini menjelaskan setiap halaman dan cara menggunakan seluruh fitur yang tersedia pada website Sistem Absensi Digital TK Mitra Bunda. Ikuti langkah-langkah di bawah ini untuk mengoperasikan sistem secara terarah dan efisien."
            : "This guide explains every page and how to use all available features on the TK Mitra Bunda Digital Attendance System website. Follow the steps below to operate the system in an organized and efficient manner."}
        </p>
        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            <strong style={{ color: "var(--text-primary)" }}>
              {isId ? "🌐 Akses Website: " : "🌐 Website Access: "}
            </strong>
            <a
              href="https://web-absensi-test.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-light)", textDecoration: "underline" }}
            >
              web-absensi-test.vercel.app
            </a>
          </p>
        </div>
      </div>

      {/* ── HALAMAN 1: LOGIN ─────────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Halaman 1 — Login (Masuk ke Sistem)" : "Page 1 — Login (Sign In)"}
        </h2>
        <p style={textStyle}>
          {isId
            ? "Halaman pertama yang Anda temui adalah halaman Login. Hanya pengguna yang terdaftar (Admin/Guru) yang dapat mengakses sistem."
            : "The first page you encounter is the Login page. Only registered users (Admin/Teacher) can access the system."}
        </p>
        <h3 style={subHeadingStyle}>{isId ? "Cara Masuk:" : "How to Login:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Buka browser dan kunjungi URL website absensi." : "Open your browser and visit the attendance website URL."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Masukkan Email dan Password yang telah diberikan oleh Super Admin." : "Enter the Email and Password provided by the Super Admin."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Klik tombol \"Masuk\" — sistem akan langsung mengarahkan Anda ke Dashboard." : "Click the \"Sign In\" button — the system will redirect you to the Dashboard."}</span>
          </li>
        </ol>
        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            💡 <strong style={{ color: "var(--text-primary)" }}>{isId ? "Catatan:" : "Note:"}</strong>{" "}
            {isId
              ? "Jika Anda lupa password, hubungi Super Admin untuk mereset akun Anda."
              : "If you forget your password, contact the Super Admin to reset your account."}
          </p>
        </div>
      </div>

      {/* ── HALAMAN 2: DASHBOARD / PEMANTAUAN ───────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Halaman 2 — Dashboard Pemantauan" : "Page 2 — Monitoring Dashboard"}
        </h2>
        <div style={{ marginBottom: "0.5rem", marginTop: "1rem", overflow: "hidden", borderRadius: "8px", border: "1px solid var(--border)" }}>
          <Image
            src="/tk-MitraBunda/pantau_page.png"
            alt="Dashboard Pemantauan"
            width={800}
            height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Tampilan Dashboard Pemantauan — pusat kendali untuk melihat kehadiran harian dan melakukan tindakan manual."
            : "Monitoring Dashboard view — the control center for viewing daily attendance and performing manual actions."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Dashboard adalah pusat kendali utama sistem. Di sini Anda dapat melihat rekap kehadiran hari ini secara real-time dan mengelola absensi secara manual."
            : "The Dashboard is the main control center. Here you can view today's attendance recap in real-time and manage attendance manually."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Fitur-fitur di Dashboard:" : "Dashboard Features:"}</h3>
        <ul style={listStyle}>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Ringkasan Statistik Harian:" : "Daily Statistics Summary:"}</strong>{" "}
            {isId
              ? "Menampilkan jumlah siswa Hadir, Belum Hadir, Sakit, Izin, dan Alpa hari ini dalam bentuk kartu visual yang mudah dibaca."
              : "Shows the number of students who are Present, Absent, Sick, Excused, and Unexcused today in easy-to-read visual cards."}
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Tabel Data Kehadiran:" : "Attendance Data Table:"}</strong>{" "}
            {isId
              ? "Menampilkan daftar seluruh siswa beserta status kehadiran mereka (termasuk waktu hadir dan waktu pulang)."
              : "Displays a list of all students and their attendance status (including arrival time and dismissal time)."}
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Override Manual:" : "Manual Override:"}</strong>{" "}
            {isId
              ? "Ubah status kehadiran siswa secara manual (Hadir, Sakit, Izin, Alpa) dengan mengetuk ikon aksi di samping nama siswa."
              : "Manually change a student's attendance status (Present, Sick, Excused, Absent) by tapping the action icon next to the student's name."}
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Tambah Catatan:" : "Add Notes:"}</strong>{" "}
            {isId
              ? "Saat mengubah status, Anda bisa menambahkan catatan (contoh: \"Demam\", \"Keperluan keluarga\") sebagai keterangan tambahan."
              : "When changing status, you can add a note (e.g., \"Fever\", \"Family matters\") as an additional remark."}
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Filter & Pencarian:" : "Filter & Search:"}</strong>{" "}
            {isId
              ? "Cari nama siswa tertentu atau filter berdasarkan status kehadiran menggunakan kolom pencarian di atas tabel."
              : "Search for a specific student's name or filter by attendance status using the search field above the table."}
          </li>
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Cara Melakukan Override Manual:" : "How to Perform Manual Override:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Cari nama siswa di tabel." : "Search for the student's name in the table."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Klik ikon aksi (pensil/edit) di baris siswa tersebut." : "Click the action icon (pencil/edit) on that student's row."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Pilih status baru: Hadir / Sakit / Izin / Alpa." : "Select the new status: Present / Sick / Excused / Absent."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>4</span>
            <span>{isId ? "(Opsional) Tambahkan catatan keterangan." : "(Optional) Add a descriptive note."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>5</span>
            <span>{isId ? "Klik \"Simpan\" — perubahan akan tersimpan secara otomatis ke database." : "Click \"Save\" — changes will be automatically saved to the database."}</span>
          </li>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Cara Mengunduh Laporan Excel:" : "How to Download Excel Report:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Di halaman Dashboard, cari tombol \"Download Excel\" atau \"Export\"." : "On the Dashboard page, find the \"Download Excel\" or \"Export\" button."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Pilih rentang tanggal atau bulan yang ingin diunduh." : "Select the date range or month you want to download."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Klik tombol unduh — file Excel akan langsung ter-download ke perangkat Anda." : "Click the download button — the Excel file will download directly to your device."}</span>
          </li>
        </ol>
      </div>

      {/* ── HALAMAN 3: PEMINDAI QR ──────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Halaman 3 — Pemindai QR (Scanner)" : "Page 3 — QR Scanner"}
        </h2>
        <div style={{ marginBottom: "0.5rem", marginTop: "1rem", overflow: "hidden", borderRadius: "8px", border: "1px solid var(--border)" }}>
          <Image
            src="/tk-MitraBunda/scanner_page.png"
            alt="Halaman Scanner QR"
            width={800}
            height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Tampilan Halaman Scanner QR — antarmuka pemindaian utama yang dioperasikan di gerbang sekolah."
            : "QR Scanner Page view — the main scanning interface operated at the school gate."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Halaman Scanner adalah inti dari sistem absensi ini. Halaman ini diakses setiap pagi di perangkat (tablet/laptop) yang ditempatkan di gerbang sekolah untuk mencatat kedatangan dan kepulangan siswa."
            : "The Scanner page is the heart of this attendance system. This page is accessed every morning on the device (tablet/laptop) placed at the school gate to record student arrivals and dismissals."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Cara Menggunakan Scanner:" : "How to Use the Scanner:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Login ke sistem, lalu navigasi ke menu \"Scanner\" atau buka URL /scan." : "Log in to the system, then navigate to the \"Scanner\" menu or open the /scan URL."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Klik tombol \"Mulai Kamera\" — browser akan meminta izin akses kamera. Klik \"Izinkan\"." : "Click the \"Start Camera\" button — the browser will ask for camera access permission. Click \"Allow\"."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Tampilan kamera akan muncul di layar. Sistem siap memindai." : "The camera view will appear on screen. The system is ready to scan."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>4</span>
            <span>{isId ? "Minta siswa mendekatkan Kartu QR mereka ke area pemindai kamera." : "Ask the student to hold their QR Card up to the camera scanning area."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>5</span>
            <span>{isId ? "Sistem akan berbunyi Beep dan suara (Text-to-Speech) akan mengumumkan nama siswa beserta statusnya (contoh: \"Aisyah, Hadir!\")." : "The system will Beep and a voice (Text-to-Speech) will announce the student's name and status (e.g., \"Aisyah, Hadir!\")."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>6</span>
            <span>{isId ? "Riwayat pindaian akan muncul di sisi kanan layar secara real-time." : "The scan history will appear on the right side of the screen in real-time."}</span>
          </li>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Mode Kehadiran vs Mode Kepulangan:" : "Arrival Mode vs Dismissal Mode:"}</h3>
        <ul style={listStyle}>
          <li>
            <strong style={{ color: "#27c93f" }}>{isId ? "Mode Kehadiran (Hijau):" : "Arrival Mode (Green):"}</strong>{" "}
            {isId
              ? "Aktif secara default di pagi hari. Setiap pindaian akan mencatat waktu kedatangan siswa."
              : "Active by default in the morning. Each scan records the student's arrival time."}
          </li>
          <li>
            <strong style={{ color: "#7c3aed" }}>{isId ? "Mode Kepulangan (Ungu):" : "Dismissal Mode (Purple):"}</strong>{" "}
            {isId
              ? "Otomatis aktif pada waktu yang telah dikonfigurasi (misalnya jam 12:00 siang). UI akan berubah warna menjadi ungu sebagai tanda bahwa sistem berada di Mode Kepulangan. Setiap pindaian akan mencatat waktu pulang siswa."
              : "Automatically activates at a pre-configured time (e.g., 12:00 PM). The UI will change color to purple as a sign that the system is in Dismissal Mode. Each scan records the student's departure time."}
          </li>
        </ul>
        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            💡 <strong style={{ color: "var(--text-primary)" }}>{isId ? "Tips Penggunaan:" : "Usage Tip:"}</strong>{" "}
            {isId
              ? "Anda tidak perlu melakukan tindakan apa pun untuk beralih antar mode. Sistem beralih secara otomatis. Pastikan perangkat yang digunakan memiliki jam yang akurat (terhubung ke internet)."
              : "You don't need to do anything to switch between modes. The system switches automatically. Make sure the device being used has an accurate clock (connected to the internet)."}
          </p>
        </div>
      </div>

      {/* ── HALAMAN 4: DATA SISWA (CRUD) ────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Halaman 4 — Kelola Data Siswa" : "Page 4 — Manage Student Data"}
        </h2>
        <div style={{ marginBottom: "0.5rem", marginTop: "1rem", overflow: "hidden", borderRadius: "8px", border: "1px solid var(--border)" }}>
          <Image
            src="/tk-MitraBunda/DataSiswa_page.png"
            alt="Halaman Data Siswa"
            width={800}
            height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Tampilan Halaman Data Siswa — kelola data siswa lengkap dengan fitur Tambah, Edit, dan Hapus beserta pembuatan kode QR otomatis."
            : "Student Data Page view — manage student data with Add, Edit, and Delete features along with automatic QR code generation."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Halaman ini digunakan untuk mengelola seluruh data siswa yang terdaftar di sistem. Setiap perubahan data di sini akan langsung berdampak pada sistem absensi."
            : "This page is used to manage all student data registered in the system. Any data changes here will directly affect the attendance system."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Menambah Siswa Baru:" : "Adding a New Student:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Klik tombol \"Tambah Siswa\" atau \"+\" di halaman Data Siswa." : "Click the \"Add Student\" or \"+\" button on the Student Data page."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Isi form dengan data siswa: Nama Lengkap, Kelas, dan informasi lainnya." : "Fill in the form with student data: Full Name, Class, and other information."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Klik \"Simpan\" — sistem akan otomatis membuat Kode QR unik untuk siswa tersebut." : "Click \"Save\" — the system will automatically generate a unique QR Code for that student."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>4</span>
            <span>{isId ? "Unduh atau cetak Kode QR untuk diberikan kepada siswa (biasanya dalam bentuk kartu ID atau lanyard)." : "Download or print the QR Code to give to the student (usually in the form of an ID card or lanyard)."}</span>
          </li>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Mengedit Data Siswa:" : "Editing Student Data:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Cari nama siswa di tabel menggunakan kolom pencarian." : "Search for the student's name in the table using the search field."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Klik ikon \"Edit\" (pensil) di baris data siswa tersebut." : "Click the \"Edit\" icon (pencil) on that student's data row."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Ubah data yang diperlukan, lalu klik \"Simpan\"." : "Change the necessary data, then click \"Save\"."}</span>
          </li>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Menghapus Data Siswa:" : "Deleting Student Data:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Klik ikon \"Hapus\" (tempat sampah) di baris data siswa." : "Click the \"Delete\" icon (trash) on the student's data row."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "Konfirmasi penghapusan pada dialog yang muncul." : "Confirm the deletion on the dialog that appears."}</span>
          </li>
        </ol>
        <div style={{ ...infoBoxStyle, borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)" }}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            ⚠️ <strong style={{ color: "var(--text-primary)" }}>{isId ? "Peringatan:" : "Warning:"}</strong>{" "}
            {isId
              ? "Menghapus data siswa bersifat permanen dan akan menghapus seluruh riwayat absensi siswa tersebut. Pastikan Anda sudah mengunduh laporan sebelum menghapus."
              : "Deleting student data is permanent and will remove all attendance history for that student. Make sure you've downloaded the report before deleting."}
          </p>
        </div>

        <h3 style={subHeadingStyle}>{isId ? "Mencetak / Mengunduh Kode QR:" : "Printing / Downloading QR Codes:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>1</span>
            <span>{isId ? "Cari siswa di tabel, lalu klik ikon \"QR\" atau \"Download QR\"." : "Find the student in the table, then click the \"QR\" or \"Download QR\" icon."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>2</span>
            <span>{isId ? "File PDF/PNG berisi kode QR akan ter-download otomatis." : "A PDF/PNG file containing the QR code will automatically download."}</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
            <span style={stepBadgeStyle}>3</span>
            <span>{isId ? "Cetak file tersebut dan tempelkan pada kartu ID atau lanyard siswa." : "Print the file and attach it to the student's ID card or lanyard."}</span>
          </li>
        </ol>
      </div>

      {/* ── FAQ / PANDUAN CEPAT ──────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Pertanyaan Umum (FAQ)" : "Frequently Asked Questions (FAQ)"}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              q: isId ? "Apa yang terjadi jika siswa lupa membawa kartu QR?" : "What if a student forgets their QR card?",
              a: isId
                ? "Guru dapat melakukan Override Manual di Dashboard. Cari nama siswa, lalu tandai statusnya secara manual (Hadir, Sakit, Izin, atau Alpa)."
                : "The teacher can perform a Manual Override on the Dashboard. Search for the student's name and manually mark their status (Present, Sick, Excused, or Absent).",
            },
            {
              q: isId ? "Bagaimana sistem tahu kapan harus beralih ke Mode Kepulangan?" : "How does the system know when to switch to Dismissal Mode?",
              a: isId
                ? "Super Admin mengonfigurasi jam kepulangan di pengaturan sistem. Pada waktu tersebut, sistem otomatis beralih mode tanpa perlu tindakan dari guru."
                : "The Super Admin configures the dismissal time in the system settings. At that time, the system automatically switches modes without requiring any action from the teacher.",
            },
            {
              q: isId ? "Bisakah satu siswa dipindai dua kali di hari yang sama?" : "Can a student be scanned twice on the same day?",
              a: isId
                ? "Ya. Pindaian pertama mencatat waktu Kedatangan (Hadir), dan pindaian kedua (setelah Mode Kepulangan aktif) mencatat waktu Pulang. Sistem menangani kedua pindaian ini secara terpisah."
                : "Yes. The first scan records Arrival time (Present), and the second scan (after Dismissal Mode activates) records Departure time. The system handles both scans separately.",
            },
            {
              q: isId ? "Bagaimana cara mengekspor laporan bulanan?" : "How do I export the monthly report?",
              a: isId
                ? "Buka Dashboard → Klik \"Download Excel\" → Pilih bulan → File Excel akan ter-download otomatis dengan rekapitulasi harian dan total kehadiran."
                : "Open Dashboard → Click \"Download Excel\" → Select month → Excel file will automatically download with daily recap and total attendance.",
            },
          ].map((item, idx) => (
            <div key={idx} style={infoBoxStyle}>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                ❓ {item.q}
              </p>
              <p style={{ ...textStyle, marginBottom: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Medium CTA ────────────────────────────────────────────── */}
      <div
        style={{
          textAlign: "center",
          padding: "2rem 1.5rem",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {isId ? "Untuk Recruiter / HRD IT" : "For IT Recruiter / HR"}
        </p>
        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          {isId
            ? "Ingin melihat bagaimana sistem ini dirancang & dibangun dari nol?"
            : "Want to see how this system was designed & built from scratch?"}
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "480px", margin: "0 auto 1.5rem" }}>
          {isId
            ? "Studi kasus lengkap tersedia di Medium, mencakup arsitektur sistem, keputusan teknis, dan dampak nyata yang dihasilkan."
            : "Full case study available on Medium, covering system architecture, technical decisions, and real-world impact delivered."}
        </p>
        <a
          href={MEDIUM_ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.65rem 1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 1043.63 592.71" fill="currentColor">
            <g>
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" />
              <path d="M911.56 296.36c0 154.06-65.89 278.92-147.17 278.92s-147.17-124.86-147.17-278.92S683.1 17.44 764.39 17.44s147.17 124.85 147.17 278.92" />
              <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
            </g>
          </svg>
          {isId ? "Baca Studi Kasus di Medium" : "Read Case Study on Medium"}
        </a>
      </div>

    </div>
  );
}
