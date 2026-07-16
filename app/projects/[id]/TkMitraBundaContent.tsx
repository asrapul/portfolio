"use client";
import React from "react";
import { useLang } from "../../context/LangContext";
import Image from "next/image";

const MEDIUM_ARTICLE_URL =
  "https://medium.com/@AndiAsyraful/tk-mitra-bunda-sistem-absensi-digital-db44c9fa600f?sharedUserId=AndiAsyraful";

const MediumIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 1043.63 592.71" fill="currentColor">
    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" />
    <path d="M911.56 296.36c0 154.06-65.89 278.92-147.17 278.92s-147.17-124.86-147.17-278.92S683.1 17.44 764.39 17.44s147.17 124.85 147.17 278.92" />
    <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
  </svg>
);

export default function TkMitraBundaContent() {
  const { lang } = useLang();
  const isId = lang === "id";

  /* ── Shared style helpers ─────────────────────────────────────────── */
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
    marginBottom: "0.75rem",
    fontSize: "1.05rem",
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
  const warningBoxStyle: React.CSSProperties = {
    background: "rgba(239,68,68,0.05)",
    border: "1px solid rgba(239,68,68,0.3)",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginBottom: "1.25rem",
  };
  const tipBoxStyle: React.CSSProperties = {
    background: "rgba(39,201,63,0.05)",
    border: "1px solid rgba(39,201,63,0.3)",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginBottom: "1.25rem",
  };
  const stepBadge = (n: number | string): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "26px",
    height: "26px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "var(--bg-primary)",
    fontSize: "0.78rem",
    fontWeight: 700,
    flexShrink: 0,
    marginRight: "0.65rem",
  });
  const imgWrap: React.CSSProperties = {
    marginBottom: "0.5rem",
    marginTop: "1rem",
    overflow: "hidden",
    borderRadius: "10px",
    border: "1px solid var(--border)",
  };
  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.9rem",
    marginBottom: "1.25rem",
  };
  const thStyle: React.CSSProperties = {
    textAlign: "left",
    padding: "0.5rem 0.75rem",
    background: "rgba(255,255,255,0.04)",
    color: "var(--text-primary)",
    fontWeight: 600,
    borderBottom: "1px solid var(--border)",
  };
  const tdStyle: React.CSSProperties = {
    padding: "0.5rem 0.75rem",
    color: "var(--text-secondary)",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    verticalAlign: "top",
  };

  const StepItem = ({ n, children }: { n: number; children: React.ReactNode }) => (
    <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem", listStyle: "none" }}>
      <span style={stepBadge(n)}>{n}</span>
      <span style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{children}</span>
    </li>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

      {/* ── Medium CTA Banner ─────────────────────────────────────────── */}
      <div style={{
        background: "linear-gradient(135deg, rgba(39,201,63,0.12) 0%, rgba(0,0,0,0) 100%)",
        border: "1px solid rgba(39,201,63,0.3)",
        borderRadius: "16px",
        padding: "1.75rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <MediumIcon size={28} />
          <div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.2rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {isId ? "Tertarik dengan cara saya membangun ini?" : "Curious how I built this?"}
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {isId ? "Baca studi kasus lengkap & detail teknis di Medium →" : "Read the full case study & technical deep-dive on Medium →"}
            </p>
          </div>
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {isId
            ? "Artikel lengkap mencakup latar belakang masalah, arsitektur teknis, lesson learned, dan dampak bisnis — ideal untuk HR dan Recruiter IT yang ingin memahami kedalaman teknis proyek ini."
            : "The full article covers the problem background, technical architecture, lessons learned, and business impact — ideal for HR and IT Recruiters who want to understand the technical depth of this project."}
        </p>
        <a href={MEDIUM_ARTICLE_URL} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ alignSelf: "flex-start", padding: "0.65rem 1.5rem", fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <MediumIcon size={16} />
          {isId ? "Baca di Medium" : "Read on Medium"}
        </a>
      </div>

      {/* ── Section divider ───────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0 }}>
          {isId ? "Panduan Penggunaan Website" : "Website User Guide"}
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      {/* ── Project description ───────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Tentang Proyek" : "About the Project"}
        </h2>
        <p style={textStyle}>
          {isId
            ? "Sistem Absensi TK Mitra Bunda adalah aplikasi web full-stack yang mendigitalkan seluruh proses absensi taman kanak-kanak — mulai dari pencatatan kedatangan siswa di pagi hari, kepulangan di siang hari, hingga ekspor laporan bulanan ke Excel. Dibangun sebagai proyek nyata untuk klien institusi pendidikan, sistem ini menggantikan pencatatan manual berbasis kertas yang memakan waktu dan rawan human error."
            : "The TK Mitra Bunda Attendance System is a full-stack web application that fully digitalizes the kindergarten attendance process — from recording student arrivals in the morning, departures at noon, to exporting monthly reports to Excel. Built as a real client project for an educational institution, this system replaces slow and error-prone manual paper-based attendance recording."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Dengan teknologi QR Code dan Text-to-Speech, guru cukup meletakkan tablet di gerbang sekolah — sistem bekerja secara otomatis tanpa perlu interaksi manual. Admin dapat memantau, mengelola, dan mengunduh laporan kapan saja dari perangkat apa pun."
            : "Using QR Code and Text-to-Speech technology, teachers simply place a tablet at the school gate — the system works automatically without manual interaction. Admins can monitor, manage, and download reports at any time from any device."}
        </p>
      </div>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Panduan Menggunakan Sistem Absensi TK Mitra Bunda" : "TK Mitra Bunda Attendance System — User Guide"}
        </h2>
        <p style={textStyle}>
          {isId
            ? "Panduan ini menjelaskan cara menggunakan aplikasi sistem absensi berbasis QR Code, mulai dari login hingga pemantauan kehadiran siswa secara real-time."
            : "This guide explains how to use the QR Code-based attendance system, from login to real-time student attendance monitoring."}
        </p>

        {/* Page map table */}
        <h3 style={subHeadingStyle}>{isId ? "Ringkasan Halaman" : "Page Overview"}</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>{isId ? "Halaman" : "Page"}</th>
                <th style={thStyle}>URL</th>
                <th style={thStyle}>{isId ? "Akses" : "Access"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { page: "Login", url: "/", access: isId ? "Publik" : "Public" },
                { page: "Dashboard", url: "/dashboard", access: isId ? "Admin (Login)" : "Admin (Login)" },
                { page: isId ? "Manajemen Siswa" : "Student Management", url: "/siswa", access: isId ? "Admin (Login)" : "Admin (Login)" },
                { page: isId ? "Scanner Absensi" : "Attendance Scanner", url: "/scan", access: isId ? "Admin (Login)" : "Admin (Login)" },
                { page: isId ? "Statistik Kehadiran" : "Attendance Statistics", url: "/dashboard/statistik", access: isId ? "Admin (Login)" : "Admin (Login)" },
                { page: isId ? "Pantau Kehadiran" : "Monitor Attendance", url: "/pantau", access: isId ? "Publik (Read-only)" : "Public (Read-only)" },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={tdStyle}><strong style={{ color: "var(--text-primary)" }}>{row.page}</strong></td>
                  <td style={tdStyle}><code style={{ fontSize: "0.85em", color: "var(--accent-light)" }}>{row.url}</code></td>
                  <td style={tdStyle}>{row.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── PAGE 1: LOGIN ─────────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "1. Halaman Login ( / )" : "1. Login Page ( / )"}
        </h2>
        <p style={textStyle}>
          {isId
            ? "Halaman pertama yang ditemui saat membuka aplikasi. Hanya akun yang terdaftar yang dapat mengakses halaman admin."
            : "The first page encountered when opening the application. Only registered accounts can access the admin pages."}
        </p>

        <div style={imgWrap}>
          <Image src="/tk-MitraBunda/login.png" alt="Halaman Login"
            width={800} height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Tampilan halaman Login — masukkan email dan password akun admin untuk mengakses sistem."
            : "Login page view — enter admin account email and password to access the system."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Cara Login:" : "How to Login:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <StepItem n={1}>{isId ? <>Masukkan <strong>Email</strong> dan <strong>Password</strong> akun admin pada form yang tersedia.</> : <>Enter your admin account <strong>Email</strong> and <strong>Password</strong> in the form.</>}</StepItem>
          <StepItem n={2}>{isId ? <>Klik tombol <strong>"Masuk"</strong>.</> : <>Click the <strong>"Masuk"</strong> (Sign In) button.</>}</StepItem>
          <StepItem n={3}>{isId ? "Jika berhasil, Anda akan diarahkan otomatis ke halaman Dashboard." : "If successful, you will be automatically redirected to the Dashboard."}</StepItem>
        </ol>

        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            💡 <strong style={{ color: "var(--text-primary)" }}>{isId ? "Catatan:" : "Note:"}</strong>{" "}
            {isId
              ? "Aplikasi ini menggunakan autentikasi Supabase. Jika lupa password, hubungi pengelola sistem untuk mereset akun Anda."
              : "This app uses Supabase authentication. If you forget your password, contact the system administrator to reset your account."}
          </p>
        </div>
      </div>

      {/* ── PAGE 2: DASHBOARD ─────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "2. Halaman Dashboard ( /dashboard )" : "2. Dashboard Page ( /dashboard )"}
        </h2>
        <div style={imgWrap}>
          <Image src="/tk-MitraBunda/Dashboard-Absensi.png" alt="Dashboard Absensi"
            width={1920} height={1080}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Tampilan Dashboard utama — pusat kendali untuk memantau absensi harian secara real-time."
            : "Main Dashboard view — the control center for monitoring daily attendance in real-time."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Pusat kendali utama untuk mengelola dan memantau absensi harian. Di bagian atas terdapat tanggal hari ini sebagai referensi, dan indikator 'Mode Lihat Historis' jika Anda sedang melihat data tanggal lampau."
            : "The main control center for managing and monitoring daily attendance. At the top is today's date as a reference, and a 'Historical View Mode' indicator if you are viewing past date data."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Kartu Statistik (6 Kartu Ringkasan):" : "Statistics Cards (6 Summary Cards):"}</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>{isId ? "Kartu" : "Card"}</th>
                <th style={thStyle}>{isId ? "Keterangan" : "Description"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { card: isId ? "Total Siswa" : "Total Students", desc: isId ? "Jumlah seluruh siswa yang terdaftar di sistem" : "Total number of students registered in the system" },
                { card: isId ? "Hadir" : "Present", desc: isId ? "Jumlah siswa yang sudah tercatat hadir hari ini" : "Number of students recorded as present today" },
                { card: "Pending", desc: isId ? "Jumlah siswa yang belum ada data kehadirannya" : "Students who don't have attendance data yet" },
                { card: isId ? "Sakit" : "Sick", desc: isId ? "Jumlah siswa yang tercatat sakit" : "Number of students recorded as sick" },
                { card: isId ? "Izin" : "Excused", desc: isId ? "Jumlah siswa yang tercatat izin" : "Number of students with excused absence" },
                { card: isId ? "Alpa" : "Absent", desc: isId ? "Jumlah siswa yang tidak hadir tanpa keterangan" : "Students absent without explanation" },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={tdStyle}><strong style={{ color: "var(--text-primary)" }}>{row.card}</strong></td>
                  <td style={tdStyle}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={subHeadingStyle}>{isId ? "Tombol Navigasi (Kanan Atas):" : "Navigation Buttons (Top Right):"}</h3>
        <ul style={listStyle}>
          <li><strong style={{ color: "#3b82f6" }}>🔵 {isId ? "Persentase Kehadiran" : "Attendance Percentage"}</strong> — {isId ? "Menuju halaman statistik dengan Pie Chart." : "Goes to the statistics page with a Pie Chart."}</li>
          <li><strong style={{ color: "#7c3aed" }}>🟣 {isId ? "Cetak QR Siswa" : "Print Student QR"}</strong> — {isId ? "Mengekspor semua QR Code siswa ke dalam PDF." : "Exports all student QR Codes into a PDF."}</li>
          <li><strong style={{ color: "#27c93f" }}>🟢 Download Excel</strong> — {isId ? "Mengunduh data absensi dalam format file .xlsx." : "Downloads attendance data as an .xlsx file."}</li>
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Mode Tampilan (2 Mode):" : "Display Modes (2 Modes):"}</h3>
        <ul style={listStyle}>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Mode Kehadiran (default):" : "Attendance Mode (default):"}</strong>{" "}
            {isId ? "Menampilkan status datang setiap siswa (Hadir, Sakit, Izin, Alpa, Pending)." : "Displays each student's arrival status (Present, Sick, Excused, Absent, Pending)."}
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)" }}>{isId ? "Mode Kepulangan:" : "Dismissal Mode:"}</strong>{" "}
            {isId ? "Menampilkan status pulang setiap siswa (Sudah Pulang / Belum Pulang)." : "Displays each student's departure status (Departed / Not Yet Departed)."}
          </li>
        </ul>

        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            ⏰ <strong style={{ color: "var(--text-primary)" }}>{isId ? "Pengaturan Jam Pulang:" : "Dismissal Time Setting:"}</strong>{" "}
            {isId
              ? "Di samping tab mode terdapat pengaturan Jam Pulang (format HH:MM). Waktu ini digunakan sebagai acuan sistem untuk beralih mode scan dari 'Kehadiran' ke 'Kepulangan' secara otomatis pada Scanner QR."
              : "Next to the mode tabs is the Dismissal Time setting (HH:MM format). This time is used by the system to automatically switch the QR Scanner from 'Attendance' to 'Dismissal' mode."}
          </p>
        </div>

        <h3 style={subHeadingStyle}>{isId ? "Fitur Tabel Data Siswa:" : "Student Data Table Features:"}</h3>
        <ul style={listStyle}>
          <li>{isId ? "Klik nama/baris untuk melihat detail." : "Click the name/row to view details."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Ubah Status:" : "Change Status:"}</strong>{" "}{isId ? "Klik tombol di kolom status untuk mengubah kehadiran (Hadir / Sakit / Izin / Alpa)." : "Click the button in the status column to change attendance (Present / Sick / Excused / Absent)."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Hapus Absensi Hari Ini:" : "Delete Today's Attendance:"}</strong>{" "}{isId ? "Menghapus catatan kehadiran siswa pada hari ini." : "Deletes the student's attendance record for today."}</li>
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Filter & Pencarian:" : "Filter & Search:"}</h3>
        <ul style={listStyle}>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Filter Status:" : "Status Filter:"}</strong>{" "}{isId ? "Tombol tab untuk menyaring tampilan berdasarkan status (Semua, Hadir, Pending, Sakit, Izin, Alpa)." : "Tab buttons to filter the view by status (All, Present, Pending, Sick, Excused, Absent)."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Kolom Tanggal:" : "Date Column:"}</strong>{" "}{isId ? "Input tanggal di pojok kanan untuk melihat data historis hari sebelumnya." : "Date input in the top right to view historical data from previous days."}</li>
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Download Excel (Harian & Bulanan):" : "Download Excel (Daily & Monthly):"}</h3>
        <p style={textStyle}>
          {isId
            ? "Saat tombol Download Excel diklik, modal akan muncul dengan 2 pilihan:"
            : "When the Download Excel button is clicked, a modal appears with 2 options:"}
        </p>
        <ul style={listStyle}>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Harian:" : "Daily:"}</strong>{" "}{isId ? "Mengunduh data absensi untuk satu tanggal tertentu." : "Downloads attendance data for a specific date."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Bulanan:" : "Monthly:"}</strong>{" "}{isId ? "Mengunduh rekap absensi untuk seluruh bulan yang dipilih." : "Downloads the attendance recap for an entire selected month."}</li>
        </ul>

        {/* Excel screenshots side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
          <div>
            <div style={imgWrap}>
              <Image src="/tk-MitraBunda/Rekap_KehadiranHarian.png" alt="Rekap Harian Excel"
                width={800} height={450}
                className="transition-transform duration-500 hover:scale-105"
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <p style={captionStyle}>
              {isId ? "Contoh file Excel rekap kehadiran Harian — berisi data absensi untuk satu tanggal tertentu." : "Sample Daily attendance Excel report — contains attendance data for a specific date."}
            </p>
          </div>
          <div>
            <div style={imgWrap}>
              <Image src="/tk-MitraBunda/Rekap_KehadiranBulan.png" alt="Rekap Bulanan Excel"
                width={800} height={450}
                className="transition-transform duration-500 hover:scale-105"
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <p style={captionStyle}>
              {isId ? "Contoh file Excel rekap kehadiran Bulanan — berisi rekapitulasi seluruh bulan dengan kolom harian." : "Sample Monthly attendance Excel report — contains the full month's recap with daily columns."}
            </p>
          </div>
        </div>
      </div>

      {/* ── PAGE 3: MANAJEMEN SISWA ───────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "3. Halaman Manajemen Siswa ( /siswa )" : "3. Student Management Page ( /siswa )"}
        </h2>
        <div style={imgWrap}>
          <Image src="/tk-MitraBunda/DataSiswa_page.png" alt="Halaman Manajemen Siswa"
            width={800} height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Halaman Manajemen Siswa — kelola data siswa lengkap dengan fitur Tambah, Edit, Hapus, dan unduh QR Code."
            : "Student Management page — manage student data with Add, Edit, Delete, and QR Code download features."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Halaman untuk mengelola data master seluruh siswa. Menampilkan tabel dengan kolom: No, NIS, Nama Siswa, Barcode/QR Data, dan Aksi."
            : "Page for managing all student master data. Displays a table with columns: No, NIS, Student Name, Barcode/QR Data, and Actions."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Tambah Siswa Baru:" : "Add a New Student:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <StepItem n={1}>{isId ? <>Klik tombol <strong>"+ Tambah Siswa"</strong> di kanan atas.</> : <>Click the <strong>"+ Tambah Siswa"</strong> button at the top right.</>}</StepItem>
          <StepItem n={2}>{isId ? <>Isi form: <strong>NIS</strong> (wajib), <strong>Nama Lengkap</strong>, dan <strong>Barcode / QR Data</strong> (diisi otomatis dengan format <code>QR-{"{NIS}"}</code>, dapat diubah).</> : <>Fill the form: <strong>NIS</strong> (required), <strong>Full Name</strong>, and <strong>Barcode / QR Data</strong> (auto-filled as <code>QR-{"{NIS}"}</code>, editable).</>}</StepItem>
          <StepItem n={3}>{isId ? "Preview QR Code akan muncul secara langsung saat QR Data diisi." : "A QR Code preview appears instantly as QR Data is typed."}</StepItem>
          <StepItem n={4}>{isId ? <>Klik <strong>"+ Tambah Siswa"</strong> untuk menyimpan.</> : <>Click <strong>"+ Tambah Siswa"</strong> to save.</>}</StepItem>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Edit Data Siswa:" : "Edit Student Data:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <StepItem n={1}>{isId ? "Klik ikon pensil (edit) berwarna kuning pada baris siswa yang ingin diedit." : "Click the yellow pencil (edit) icon on the student's row."}</StepItem>
          <StepItem n={2}>{isId ? "Ubah data yang diperlukan pada form." : "Edit the necessary data in the form."}</StepItem>
          <StepItem n={3}>{isId ? <>Klik <strong>"Simpan Perubahan"</strong>.</> : <>Click <strong>"Simpan Perubahan"</strong>.</>}</StepItem>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Lihat & Unduh QR Code:" : "View & Download QR Code:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <StepItem n={1}>{isId ? "Klik ikon QR berwarna ungu pada baris siswa." : "Click the purple QR icon on the student's row."}</StepItem>
          <StepItem n={2}>{isId ? "Modal akan menampilkan QR Code berukuran besar beserta nama dan NIS siswa." : "A modal displays the large QR Code with the student's name and NIS."}</StepItem>
          <StepItem n={3}>{isId ? <>Klik <strong>"Download PNG"</strong> untuk mengunduh QR Code sebagai gambar.</> : <>Click <strong>"Download PNG"</strong> to download the QR Code as an image.</>}</StepItem>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Hapus Siswa:" : "Delete Student:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <StepItem n={1}>{isId ? "Klik ikon tong sampah (hapus) berwarna merah." : "Click the red trash (delete) icon."}</StepItem>
          <StepItem n={2}>{isId ? "Konfirmasi penghapusan pada dialog yang muncul." : "Confirm the deletion in the dialog that appears."}</StepItem>
        </ol>
        <div style={warningBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            ⚠️ <strong style={{ color: "var(--text-primary)" }}>{isId ? "Peringatan:" : "Warning:"}</strong>{" "}
            {isId
              ? "Menghapus siswa juga akan menghapus seluruh data kehadiran siswa tersebut secara permanen dan tidak dapat dipulihkan."
              : "Deleting a student also permanently removes all their attendance history and cannot be undone."}
          </p>
        </div>
      </div>

      {/* ── PAGE 4: SCANNER ───────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "4. Halaman Scanner Absensi ( /scan )" : "4. Attendance Scanner Page ( /scan )"}
        </h2>
        <div style={imgWrap}>
          <Image src="/tk-MitraBunda/scanner_page.png" alt="Halaman Scanner QR"
            width={800} height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Halaman Scanner QR — antarmuka pemindaian utama yang dioperasikan di gerbang sekolah setiap hari."
            : "QR Scanner page — the main scanning interface operated at the school gate every day."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Inti dari sistem absensi. Diakses di perangkat (tablet/laptop) yang ditempatkan di gerbang sekolah untuk mencatat kedatangan dan kepulangan siswa."
            : "The heart of the attendance system. Accessed on a device (tablet/laptop) placed at the school gate to record student arrivals and departures."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Banner Mode Aktif:" : "Active Mode Banner:"}</h3>
        <ul style={listStyle}>
          <li><strong style={{ color: "#27c93f" }}>🟢 {isId ? "Hijau — Mode Kehadiran:" : "Green — Attendance Mode:"}</strong>{" "}{isId ? "Scan QR akan mencatat siswa sebagai Hadir." : "QR scan will record the student as Present."}</li>
          <li><strong style={{ color: "#7c3aed" }}>🟣 {isId ? "Ungu — Mode Kepulangan:" : "Purple — Dismissal Mode:"}</strong>{" "}{isId ? "Scan QR akan mencatat waktu pulang siswa." : "QR scan will record the student's departure time."}</li>
        </ul>
        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            {isId
              ? "Mode beralih otomatis berdasarkan jam pulang yang diatur di Dashboard. Anda juga dapat mengubahnya secara manual dengan tombol \"Ganti Mode\"."
              : "Mode switches automatically based on the dismissal time set in the Dashboard. You can also change it manually with the \"Ganti Mode\" button."}
          </p>
        </div>

        <h3 style={subHeadingStyle}>{isId ? "Cara Menggunakan Scanner:" : "How to Use the Scanner:"}</h3>
        <ol style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
          <StepItem n={1}>{isId ? <>Klik tombol <strong>"Mulai Kamera"</strong> di panel scanner.</> : <>Click the <strong>"Mulai Kamera"</strong> button on the scanner panel.</>}</StepItem>
          <StepItem n={2}>{isId ? "Izinkan akses kamera pada browser." : "Allow camera access in the browser."}</StepItem>
          <StepItem n={3}>{isId ? "Arahkan kamera ke QR Code pada kartu siswa." : "Point the camera at the QR Code on the student's card."}</StepItem>
          <StepItem n={4}>{isId ? "Sistem akan otomatis mengenali QR dan memproses absensi." : "The system will automatically recognize the QR and process the attendance."}</StepItem>
          <StepItem n={5}>{isId ? <>Suara konfirmasi akan terdengar: <em>"[Nama Siswa] hadir!"</em> atau <em>"[Nama Siswa] pulang!"</em></> : <>A confirmation voice will sound: <em>"[Student Name] hadir!"</em> or <em>"[Student Name] pulang!"</em></>}</StepItem>
          <StepItem n={6}>{isId ? "Notifikasi pop-up muncul sebagai konfirmasi keberhasilan." : "A pop-up notification appears as a success confirmation."}</StepItem>
        </ol>

        <h3 style={subHeadingStyle}>{isId ? "Status Scan:" : "Scan Status:"}</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>{isId ? "Kondisi" : "Condition"}</th>
                <th style={thStyle}>{isId ? "Respon Sistem" : "System Response"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cond: isId ? "QR dikenali, belum absen" : "QR recognized, not yet recorded", res: isId ? "Absensi berhasil dicatat ✅" : "Attendance successfully recorded ✅" },
                { cond: isId ? "QR dikenali, sudah absen" : "QR recognized, already recorded", res: isId ? "Peringatan: \"sudah absen\" ⚠️" : "Warning: \"already recorded\" ⚠️" },
                { cond: isId ? "QR sudah pulang (mode pulang)" : "QR already departed (dismissal mode)", res: isId ? "Peringatan: \"sudah pulang\" ⚠️" : "Warning: \"already departed\" ⚠️" },
                { cond: isId ? "QR tidak dikenali" : "QR not recognized", res: isId ? "Error: \"Barcode tidak dikenali\" ❌" : "Error: \"Barcode not recognized\" ❌" },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{row.cond}</td>
                  <td style={tdStyle}>{row.res}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={subHeadingStyle}>{isId ? "Log Scan (Panel Kanan):" : "Scan Log (Right Panel):"}</h3>
        <p style={textStyle}>
          {isId
            ? "Menampilkan daftar seluruh siswa yang sudah tercatat pada tanggal yang dipilih. Tersedia input tanggal untuk melihat log historis."
            : "Displays a list of all students recorded on the selected date. A date input is available to view historical logs."}
        </p>
      </div>

      {/* ── PAGE 5: STATISTIK ─────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "5. Halaman Statistik Kehadiran ( /dashboard/statistik )" : "5. Attendance Statistics Page ( /dashboard/statistik )"}
        </h2>
        <p style={textStyle}>
          {isId
            ? "Halaman analitik yang menampilkan distribusi kehadiran siswa dalam bentuk visual. Akses dengan mengklik tombol \"Persentase Kehadiran\" (biru) di Dashboard."
            : "An analytics page displaying student attendance distribution visually. Access it by clicking the \"Persentase Kehadiran\" (blue) button on the Dashboard."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Filter Waktu (3 Pilihan):" : "Time Filter (3 Options):"}</h3>
        <ul style={listStyle}>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Minggu Ini:" : "This Week:"}</strong>{" "}{isId ? "Data dari Senin s.d. Minggu minggu ini." : "Data from Monday to Sunday of this week."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Bulan Ini (default):" : "This Month (default):"}</strong>{" "}{isId ? "Data sepanjang bulan berjalan." : "Data throughout the current month."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Tahun Ini:" : "This Year:"}</strong>{" "}{isId ? "Rekap data sepanjang tahun." : "Year-long data recap."}</li>
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Kartu Detail Statistik:" : "Statistics Detail Cards:"}</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>{isId ? "Kategori" : "Category"}</th>
                <th style={thStyle}>{isId ? "Warna" : "Color"}</th>
                <th style={thStyle}>{isId ? "Keterangan" : "Description"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: isId ? "Hadir" : "Present", color: "🟢", desc: isId ? "Total catatan kehadiran" : "Total attendance records" },
                { cat: isId ? "Sakit" : "Sick", color: "🔴", desc: isId ? "Total siswa tercatat sakit" : "Total students recorded as sick" },
                { cat: isId ? "Izin" : "Excused", color: "🔵", desc: isId ? "Total siswa tercatat izin" : "Total students with excused absence" },
                { cat: isId ? "Alpa" : "Absent", color: "⚫", desc: isId ? "Total ketidakhadiran tanpa keterangan" : "Total unexcused absences" },
                { cat: "Pending", color: "⬜", desc: isId ? "Estimasi siswa yang belum ada data absensinya" : "Estimated students without attendance data" },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={tdStyle}><strong style={{ color: "var(--text-primary)" }}>{row.cat}</strong></td>
                  <td style={tdStyle}>{row.color}</td>
                  <td style={tdStyle}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={infoBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            💡 <strong style={{ color: "var(--text-primary)" }}>{isId ? "Catatan Pending:" : "Pending Note:"}</strong>{" "}
            {isId
              ? "Data 'Pending' dihitung berdasarkan estimasi: total siswa dikali jumlah hari sekolah dalam periode tersebut, dikurangi total catatan yang sudah ada."
              : "'Pending' data is estimated: total students multiplied by school days in the period, minus existing records."}
          </p>
        </div>
      </div>

      {/* ── PAGE 6: PANTAU ────────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "6. Halaman Pantau Kehadiran ( /pantau )" : "6. Attendance Monitor Page ( /pantau )"}
        </h2>
        <div style={imgWrap}>
          <Image src="/tk-MitraBunda/pantau_page.png" alt="Halaman Pantau Kehadiran"
            width={800} height={450}
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={captionStyle}>
          {isId
            ? "Halaman Pantau Kehadiran (read-only) — dapat diakses tanpa login, cocok ditampilkan di layar monitor sekolah."
            : "Attendance Monitor page (read-only) — accessible without login, ideal for displaying on school monitor screens."}
        </p>
        <p style={textStyle}>
          {isId
            ? "Halaman read-only yang dapat diakses tanpa login — cocok untuk ditampilkan di layar monitor/proyektor di sekolah."
            : "A read-only page accessible without login — ideal for displaying on monitor/projector screens at school."}
        </p>

        <h3 style={subHeadingStyle}>{isId ? "Fitur Utama:" : "Main Features:"}</h3>
        <ul style={listStyle}>
          <li>{isId ? "Menampilkan seluruh daftar siswa beserta status kehadiran hari ini." : "Displays all students with their attendance status for today."}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Auto-refresh otomatis setiap 5 detik" : "Auto-refresh every 5 seconds"}</strong> {isId ? "tanpa perlu reload manual." : "without manual reload."}</li>
          <li>{isId ? "Menampilkan ringkasan cepat: jumlah siswa Hadir dan Belum Hadir." : "Shows a quick summary: number of Present and Not Yet Present students."}</li>
          <li>{isId ? "Tampilan responsif: Tabel di desktop, Card di mobile dengan indikator warna di sisi kiri." : "Responsive layout: Table on desktop, Cards on mobile with color indicators on the left."}</li>
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Kolom yang Ditampilkan (Desktop):" : "Columns Displayed (Desktop):"}</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>{isId ? "Kolom" : "Column"}</th>
                <th style={thStyle}>{isId ? "Keterangan" : "Description"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { col: "No", desc: isId ? "Nomor urut" : "Row number" },
                { col: isId ? "Nama Siswa" : "Student Name", desc: isId ? "Nama lengkap dan NIS" : "Full name and NIS" },
                { col: "Status", desc: isId ? "Badge status (Hadir / Sakit / Izin / Alpa / Pending)" : "Status badge (Present / Sick / Excused / Absent / Pending)" },
                { col: isId ? "Waktu Datang" : "Arrival Time", desc: isId ? "Jam saat QR di-scan masuk" : "Time when QR was scanned in" },
                { col: isId ? "Waktu Pulang" : "Departure Time", desc: isId ? "Jam saat QR di-scan pulang" : "Time when QR was scanned out" },
                { col: isId ? "Keterangan" : "Notes", desc: isId ? "Catatan tambahan (jika ada)" : "Additional notes (if any)" },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={tdStyle}><strong style={{ color: "var(--text-primary)" }}>{row.col}</strong></td>
                  <td style={tdStyle}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={tipBoxStyle}>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            💡 <strong style={{ color: "var(--text-primary)" }}>{isId ? "Tips:" : "Tip:"}</strong>{" "}
            {isId
              ? "Halaman ini sangat cocok dibuka di tab terpisah pada browser layar besar untuk pemantauan real-time sepanjang hari tanpa perlu login ulang."
              : "This page is ideal to open in a separate browser tab on a large screen for real-time monitoring throughout the day without re-logging in."}
          </p>
        </div>
      </div>

      {/* ── DAILY WORKFLOW ────────────────────────────────────────────── */}
      <div>
        <h2 style={headingStyle}>
          {isId ? "Alur Penggunaan Harian yang Disarankan" : "Recommended Daily Workflow"}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { time: isId ? "PAGI" : "MORNING", step: isId ? "Buka /scan → Klik \"Mulai Kamera\"" : "Open /scan → Click \"Mulai Kamera\"" },
            { time: isId ? "PAGI (Scan)" : "MORNING (Scan)", step: isId ? "Siswa datang → Scan QR Card → Sistem catat Hadir + konfirmasi suara" : "Students arrive → Scan QR Card → System records Present + voice confirmation" },
            { time: isId ? "OPSIONAL" : "OPTIONAL", step: isId ? "Buka /pantau di layar lain untuk monitoring real-time" : "Open /pantau on another screen for real-time monitoring" },
            { time: isId ? "SIANG (Otomatis)" : "MIDDAY (Auto)", step: isId ? "Sistem otomatis beralih ke Mode Kepulangan setelah jam pulang" : "System automatically switches to Dismissal Mode after dismissal time" },
            { time: isId ? "SIANG (Scan)" : "MIDDAY (Scan)", step: isId ? "Siswa pulang → Scan QR Card → Sistem catat waktu pulang" : "Students depart → Scan QR Card → System records departure time" },
            { time: isId ? "AKHIR HARI" : "END OF DAY", step: isId ? "Buka /dashboard → Download Excel untuk rekap harian" : "Open /dashboard → Download Excel for daily recap" },
            { time: isId ? "KAPAN SAJA" : "ANYTIME", step: isId ? "Cek /dashboard/statistik untuk analitik periodik" : "Check /dashboard/statistik for periodic analytics" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <span style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)",
                borderRadius: "6px", padding: "0.2rem 0.5rem", fontSize: "0.72rem",
                fontWeight: 700, color: "var(--text-muted)", whiteSpace: "nowrap",
                letterSpacing: "0.04em", flexShrink: 0, marginTop: "0.15rem",
              }}>{item.time}</span>
              <p style={{ ...textStyle, marginBottom: 0 }}>{item.step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Medium CTA ─────────────────────────────────────────── */}
      <div style={{
        textAlign: "center",
        padding: "2rem 1.5rem",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
      }}>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {isId ? "Untuk Recruiter / HRD IT" : "For IT Recruiter / HR"}
        </p>
        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          {isId ? "Ingin melihat bagaimana sistem ini dirancang & dibangun dari nol?" : "Want to see how this system was designed & built from scratch?"}
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 1.5rem" }}>
          {isId
            ? "Studi kasus lengkap tersedia di Medium, mencakup arsitektur sistem, keputusan teknis, dan dampak nyata yang dihasilkan."
            : "Full case study available on Medium, covering system architecture, technical decisions, and real-world impact delivered."}
        </p>
        <a href={MEDIUM_ARTICLE_URL} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.65rem 1.5rem", fontSize: "0.875rem" }}>
          <MediumIcon size={16} />
          {isId ? "Baca Studi Kasus di Medium" : "Read Case Study on Medium"}
        </a>
      </div>

    </div>
  );
}
