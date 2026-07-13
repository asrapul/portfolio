import React from "react";
import { useLang } from "../../context/LangContext";
import Image from "next/image";

export default function TkMitraBundaContent() {
  const { lang } = useLang();
  const isId = lang === "id";

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

  const c = {
    en: {
      s1: "1. Project Summary",
      s2: "2. Background",
      s3: "3. Business Problems",
      s4: "4. Project Goals",
      s5: "5. Proposed Solution",
      s6: "6. Target Users",
      s7: "7. Complete Feature Breakdown",
      s8: "8. User Journey",
      s9: "9. Technical Architecture",
      s10: "10. Lessons Learned",
      s11: "11. Business Impact",
      s12: "12. Why This Project Matters",
      s13: "13. Technical Highlights",
    },
    id: {
      s1: "1. Ringkasan Proyek",
      s2: "2. Latar Belakang",
      s3: "3. Masalah Bisnis",
      s4: "4. Tujuan Proyek",
      s5: "5. Solusi yang Diusulkan",
      s6: "6. Target Pengguna",
      s7: "7. Rincian Fitur Lengkap",
      s8: "8. Perjalanan Pengguna",
      s9: "9. Arsitektur Teknis",
      s10: "10. Pelajaran yang Dipetik",
      s11: "11. Dampak Bisnis",
      s12: "12. Mengapa Proyek Ini Penting",
      s13: "13. Sorotan Teknis",
    }
  };
  const title = c[isId ? "id" : "en"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* 1. Project Summary */}
      <div>
        <h2 style={headingStyle}>{title.s1}</h2>
        <ul style={listStyle}>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Nama Proyek:" : "Project Name:"}</strong> TK Mitra Bunda - {isId ? "Sistem Absensi Digital" : "Digital Attendance System"}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Tipe Proyek:" : "Project Type:"}</strong> Full-Stack Web Application / SaaS MVP</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Industri:" : "Industry:"}</strong> {isId ? "Pendidikan" : "Education"} / EdTech</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Tipe Klien:" : "Client Type:"}</strong> {isId ? "Institusi Taman Kanak-Kanak" : "Kindergarten Institution"} (TK Mitra Bunda)</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Status Pengembangan:" : "Development Status:"}</strong> MVP / {isId ? "Versi 1.0 (Selesai)" : "Version 1.0 (Completed)"}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Waktu Pengerjaan:" : "Timeline:"}</strong> 4 - 6 {isId ? "Minggu" : "Weeks"}</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Peran Saya:" : "My Role:"}</strong> Lead Full-Stack Developer, UI/UX Designer, Software Architect</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Ukuran Tim:" : "Team Size:"}</strong> 1 ({isId ? "Proyek Solo" : "Solo Project"})</li>
          <li><strong style={{ color: "var(--text-primary)" }}>{isId ? "Target Platform:" : "Target Platform:"}</strong> Web ({isId ? "Desktop untuk administrasi, Tablet/Mobile untuk pemindaian QR" : "Desktop optimized for administration, Tablet/Mobile optimized for QR scanning"})</li>
        </ul>
      </div>

      {/* 2. Background */}
      <div>
        <h2 style={headingStyle}>{title.s2}</h2>
        {isId ? (
          <>
            <p style={textStyle}>
              Di banyak institusi pendidikan tradisional, terutama taman kanak-kanak (TK), kehadiran siswa masih dicatat secara manual menggunakan buku absensi kertas. Guru menghabiskan 15 menit pertama setiap pagi memanggil nama dan menandai kehadiran. Saat waktu pulang tiba, kekacauan bertambah karena tidak ada pencatatan real-time yang akurat mengenai jam berapa tepatnya anak dijemput dan oleh siapa.
            </p>
            <p style={textStyle}>
              Bagi pihak administrasi sekolah, pada akhir setiap bulan, staf harus merekap catatan kehadiran secara manual untuk membuat laporan, proses yang sangat rentan terhadap kesalahan manusia (human error). Orang tua dan pengurus sekolah tidak memiliki jejak digital yang dapat diverifikasi kapan anak tiba atau meninggalkan area sekolah. Sekolah membutuhkan solusi digital tanpa sentuhan yang instan untuk melacak jam kehadiran dan kepulangan secara akurat, menghasilkan laporan instan, sekaligus memberikan kesan modern kepada orang tua.
            </p>
          </>
        ) : (
          <>
            <p style={textStyle}>
              In many traditional educational institutions, especially kindergartens (TK), student attendance is still recorded manually using paper-based ledger books. Teachers spend the first 15 minutes of every morning calling out names and marking attendance. When it comes to dismissal time, the chaos increases as there is no accurate, real-time logging of exactly what time a child was picked up and by whom.
            </p>
            <p style={textStyle}>
              For the school administration, at the end of every month, staff must manually tally the attendance records to generate reports, a process highly susceptible to human error. Parents and administrators have no verifiable digital trail of when a child arrived or left the premises. The school needed a digital, touchless, and instantaneous solution to track attendance and dismissal times accurately, generating instant reports while impressing parents with modern technology.
            </p>
          </>
        )}
      </div>

      {/* 3. Business Problems */}
      <div>
        <h2 style={headingStyle}>{title.s3}</h2>
        <ol style={{ ...listStyle, listStyleType: "decimal" }}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Rutinitas Pagi yang Tidak Efisien:</strong> Memanggil absensi secara manual memakan waktu mengajar yang berharga dan menunda dimulainya aktivitas pagi.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Kurangnya Pelacakan Kepulangan:</strong> Tidak ada catatan pasti kapan anak meninggalkan sekolah. Ini merupakan masalah keamanan dan operasional yang kritis di TK, di mana waktu penyerahan anak harus diawasi dengan ketat.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Pembuatan Laporan Bulanan yang Memakan Waktu:</strong> Staf menghabiskan berjam-jam menghitung jumlah "Hadir", "Sakit", "Izin", dan "Alpa" di berbagai buku fisik untuk membuat laporan Excel bulanan.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Ketidakakuratan dan Kehilangan Data:</strong> Buku fisik bisa hilang, rusak, atau salah diisi, yang menyebabkan hilangnya data riwayat kehadiran secara permanen.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Kurangnya Branding Modern:</strong> Sekolah ingin memposisikan dirinya sebagai institusi yang maju dan melek teknologi untuk menarik calon orang tua. Sistem kertas manual menghambat citra merek tersebut.</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Inefficient Morning Routines:</strong> Calling attendance manually consumes valuable teaching time and delays the start of morning activities.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Lack of Dismissal Tracking:</strong> There was no precise record of when a child left the school. This is a critical security and operational issue in kindergartens where child handover timing must be strictly monitored.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Time-Consuming Monthly Reporting:</strong> Staff spent hours manually counting "Hadir", "Sakit", "Izin", and "Alpa" tallies across multiple physical books to create monthly Excel reports.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Data Inaccuracy and Loss:</strong> Physical books can be lost, damaged, or filled out incorrectly, leading to permanent loss of historical attendance data.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Lack of Modern Branding:</strong> The school wanted to position itself as a forward-thinking, tech-enabled institution to attract prospective parents. A manual paper system hindered this brand image.</li>
            </>
          )}
        </ol>
      </div>

      {/* 4. Project Goals */}
      <div>
        <h2 style={headingStyle}>{title.s4}</h2>
        <h3 style={subHeadingStyle}>{isId ? "Tujuan Fungsional:" : "Functional Goals:"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li>Menyediakan pemindai kode QR berbasis web yang andal dan cepat, yang dapat berfungsi di perangkat apa pun dengan kamera.</li>
              <li>Memisahkan secara otomatis pemindaian "Kehadiran" dan "Kepulangan" berdasarkan konfigurasi waktu.</li>
              <li>Memungkinkan administrator untuk dengan mudah menambah, mengedit, dan menghapus data siswa, serta membuat kode QR otomatis.</li>
              <li>Menyediakan fitur ekspor 1-klik ke Excel untuk laporan harian dan bulanan.</li>
            </>
          ) : (
            <>
              <li>Provide a reliable, fast web-based QR code scanner that works on any device with a camera.</li>
              <li>Automatically separate "Arrival" (Kehadiran) and "Dismissal" (Kepulangan) scans based on time configurations.</li>
              <li>Allow administrators to easily add, edit, and delete student data, and auto-generate QR codes.</li>
              <li>Provide a 1-click export to Excel for daily and monthly reporting.</li>
            </>
          )}
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Tujuan Bisnis:" : "Business Goals:"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li>Mengeliminasi 100% pelacakan kehadiran berbasis kertas.</li>
              <li>Mengurangi waktu yang dibutuhkan untuk absensi pagi dari 15 menit menjadi di bawah 2 menit.</li>
              <li>Mengotomatisasi proses pelaporan akhir bulan, menghemat berjam-jam tenaga staf administrasi.</li>
            </>
          ) : (
            <>
              <li>Eliminate 100% of paper-based attendance tracking.</li>
              <li>Reduce the time taken for morning attendance from 15 minutes to under 2 minutes.</li>
              <li>Automate the end-of-month reporting process, saving administration staff hours of manual labor.</li>
            </>
          )}
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "Tujuan Operasional:" : "Operational Goals:"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li>Memastikan sistem cukup mudah digunakan oleh guru dengan literasi teknis minimal.</li>
              <li>Memberikan umpan balik visual dan audio yang jelas (Text-to-Speech) sehingga guru tidak perlu terus-menerus melihat layar saat memindai siswa.</li>
            </>
          ) : (
            <>
              <li>Ensure the system is easy enough to be used by teachers with minimal technical literacy.</li>
              <li>Provide clear visual and auditory feedback (Text-to-Speech) so teachers do not need to constantly look at the screen while scanning students.</li>
            </>
          )}
        </ul>
      </div>

      {/* 5. Proposed Solution */}
      <div>
        <h2 style={headingStyle}>{title.s5}</h2>
        <p style={textStyle}>
          {isId 
            ? "Solusi yang diusulkan adalah Aplikasi Web Absensi Digital berbasis QR yang dibangun dengan stack JavaScript modern."
            : "The proposed solution was a QR-based Digital Attendance Web Application built with a modern JavaScript stack."
          }
        </p>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Arsitektur:</strong> Saya memilih Next.js App Router yang terintegrasi dengan Supabase. Next.js Server Actions menangani logika bisnis dengan aman di server tanpa mengekspos endpoint API tradisional, sementara Supabase menyediakan penyimpanan PostgreSQL yang kuat dan Row Level Security (RLS).</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Teknologi:</strong> React 19 dan Tailwind CSS 4 dipilih untuk membangun antarmuka premium yang sangat responsif dengan cepat. <code>html5-qrcode</code> diimplementasikan untuk pemindaian di sisi klien guna mengurangi beban pemrosesan gambar dari server, memastikan pemindaian tanpa jeda (zero-latency).</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Alur Kerja:</strong> Setiap siswa menerima kode QR unik. Tablet atau laptop ditempatkan di gerbang sekolah. Saat siswa tiba, mereka memindai kode QR mereka. Sistem memverifikasi kode, mencatat waktu (timestamp), dan memicu konfirmasi audio Text-to-Speech (misalnya, "Aisyah, Hadir!"). Pada waktu yang telah dikonfigurasi (misalnya, jam 12:00 siang), pemindai otomatis beralih ke mode "Kepulangan".</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Pengalaman Pengguna:</strong> UI mengandalkan estetika glassmorphism, gradien yang kaya, dan tipografi yang besar dan jelas. Tabel data kompleks beradaptasi menjadi kartu bertumpuk pada perangkat seluler. Hal ini memastikan aplikasi terasa premium dan sangat mudah digunakan bahkan bagi pengguna awam.</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Architecture:</strong> I chose Next.js App Router integrated with Supabase. Next.js Server Actions handle business logic securely on the server without exposing traditional API endpoints, while Supabase provides robust PostgreSQL storage and Row Level Security (RLS).</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Technologies:</strong> React 19 and Tailwind CSS 4 were chosen to rapidly build a highly responsive, visually premium interface. <code>html5-qrcode</code> was implemented for client-side scanning to offload image processing from the server, ensuring zero-latency scans.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Workflows:</strong> Each student receives a unique QR code. A tablet or laptop is placed at the school gate. As students arrive, they scan their QR code. The system verifies the code, logs the timestamp, and triggers a Text-to-Speech audio confirmation (e.g., "Aisyah, Hadir!"). At a pre-configured time (e.g., 12:00 PM), the scanner automatically switches to "Dismissal" mode.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>User Experience:</strong> The UI relies on a glassmorphism aesthetic, rich gradients, and large, clear typography. Complex data tables adapt into stackable cards on mobile devices. This ensures the app feels premium and is foolproof for non-technical users.</li>
            </>
          )}
        </ul>
      </div>

      {/* 6. Target Users */}
      <div>
        <h2 style={headingStyle}>{title.s6}</h2>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Super Admin / Kepala Sekolah:</strong> Akses penuh untuk melihat statistik keseluruhan, mengelola pengaturan global sistem (seperti konfigurasi waktu pergantian otomatis untuk kepulangan), dan menghasilkan laporan riwayat lengkap.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Admin / Guru:</strong> Dapat menambah atau mengedit catatan siswa, melakukan override manual kehadiran (misalnya, menandai anak sebagai Sakit atau Izin dengan catatan), dan mengoperasikan antarmuka pemindai QR di gerbang sekolah.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Siswa (Pengguna Pasif):</strong> Membawa kode QR yang dihasilkan (dicetak pada kartu ID atau lanyard) untuk dipindai oleh sistem.</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Super Admin / Principal:</strong> Full access to view overall statistics, manage the system's global settings (like configuring the automatic dismissal time switch), and generate full historical reports.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Admin / Teacher:</strong> Can add or edit student records, manually override attendance (e.g., marking a child as Sick or Excused with a note), and operate the QR scanner interface at the school gate.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Student (Passive User):</strong> Carries the generated QR code (printed on an ID card or lanyard) to be scanned by the system.</li>
            </>
          )}
        </ul>
      </div>

      {/* 7. Complete Feature Breakdown */}
      <div>
        <h2 style={headingStyle}>{title.s7}</h2>
        
        <h3 style={subHeadingStyle}>{isId ? "1. Antarmuka Pemindaian QR Cerdas" : "1. Smart QR Scanning Interface"}</h3>
        <div style={{ marginBottom: "0.5rem", marginTop: "1rem", overflow: "hidden", borderRadius: "8px", border: "1px solid var(--border)" }}>
          <Image 
            src="/scanner_page.png" 
            alt="Scanner Interface" 
            width={800} height={450} 
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: '100%', height: 'auto', display: "block" }} 
          />
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
          {isId ? "Catatan: Tampilan antarmuka pemindai QR yang cepat dengan riwayat scan real-time di sisi layar." : "Note: Fast QR scanner interface with real-time scan history on the side."}
        </p>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong>Tujuan:</strong> Untuk mengidentifikasi siswa secara instan dan mencatat stempel waktu mereka.</li>
              <li><strong>Manfaat Bisnis:</strong> Mengeliminasi panggilan absen manual; memberikan bukti tak terbantahkan mengenai waktu kedatangan/kepulangan.</li>
              <li><strong>Implementasi Teknis:</strong> Menggunakan <code>html5-qrcode</code> untuk mengakses kamera perangkat. Klien mengirim payload hasil pindaian ke database Supabase. Web Speech API dipicu jika berhasil untuk memberikan umpan balik audio.</li>
              <li><strong>Alur Pengguna:</strong> Buka <code>/scan</code> → Izinkan Kamera → Arahkan QR ke kamera → Dengar konfirmasi audio → Lihat pembaruan log di sisi kanan layar.</li>
            </>
          ) : (
            <>
              <li><strong>Purpose:</strong> To instantly identify a student and record their timestamp.</li>
              <li><strong>Business Benefit:</strong> Eliminates manual roll calls; provides undeniable proof of arrival/dismissal times.</li>
              <li><strong>Technical Implementation:</strong> Uses <code>html5-qrcode</code> accessing the device camera. The client sends the decoded payload to a Supabase database. Web Speech API (<code>window.speechSynthesis</code>) is triggered on success for audio feedback.</li>
              <li><strong>User Flow:</strong> Open <code>/scan</code> → Grant Camera Permission → Hold QR up to camera → Hear audio confirmation → See log update on the right side of the screen.</li>
            </>
          )}
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "2. Mode Absensi Sadar Waktu" : "2. Time-Aware Attendance Modes"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong>Tujuan:</strong> Membedakan antara kedatangan pagi dan kepulangan siang.</li>
              <li><strong>Manfaat Bisnis:</strong> Menyelesaikan masalah krusial dalam melacak jam penjemputan pasti untuk anak usia dini.</li>
              <li><strong>Implementasi Teknis:</strong> Sistem mengecek waktu saat ini terhadap konfigurasi <code>jam_pulang</code> di Supabase. Sistem akan mengganti logika pemindaian dan status UI secara otomatis tanpa intervensi manual.</li>
              <li><strong>Alur Pengguna:</strong> Guru mengatur "Beralih ke Kepulangan" pada jam 12:00 siang → Sebelum jam 12:00, pindaian terdaftar sebagai 'Hadir' → Setelah jam 12:00, UI berubah menjadi Ungu Violet, dan pindaian terdaftar sebagai 'Pulang'.</li>
            </>
          ) : (
            <>
              <li><strong>Purpose:</strong> Differentiate between morning arrival and afternoon dismissal.</li>
              <li><strong>Business Benefit:</strong> Solves the critical issue of tracking exact pickup times for young children.</li>
              <li><strong>Technical Implementation:</strong> The system checks the current time against a <code>jam_pulang</code> configuration stored in Supabase. It automatically toggles the scanning logic and UI state without manual intervention.</li>
              <li><strong>User Flow:</strong> Teacher sets "Switch to Dismissal" at 12:00 PM → Before 12:00, scans register as 'Hadir' → After 12:00, the UI turns Violet, and scans register as 'Pulang'.</li>
            </>
          )}
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "3. Dashboard Komprehensif & Override Manual" : "3. Comprehensive Dashboard & Manual Override"}</h3>
        <div style={{ marginBottom: "0.5rem", marginTop: "1rem", overflow: "hidden", borderRadius: "8px", border: "1px solid var(--border)" }}>
          <Image 
            src="/pantau_page.png" 
            alt="Dashboard" 
            width={800} height={450} 
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: '100%', height: 'auto', display: "block" }} 
          />
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
          {isId ? "Catatan: Tampilan Dashboard pemantauan interaktif untuk melihat statistik kehadiran harian/bulanan serta melakukan tindakan manual." : "Note: Interactive monitoring Dashboard to view daily/monthly attendance statistics and perform manual overrides."}
        </p>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong>Tujuan:</strong> Memungkinkan guru melihat statistik harian dan memasukkan absensi manual untuk anak yang lupa membawa kartu QR atau tidak hadir.</li>
              <li><strong>Manfaat Bisnis:</strong> Memberikan fleksibilitas; sistem tetap dapat digunakan bahkan jika kartu QR fisik hilang.</li>
              <li><strong>Implementasi Teknis:</strong> Komponen React interaktif yang sangat responsif. Modal dan pengeditan sebaris memungkinkan pembaruan status siswa (Sakit, Izin, Alpa) beserta catatan tambahan.</li>
            </>
          ) : (
            <>
              <li><strong>Purpose:</strong> Allow teachers to view daily stats and manually input attendance for children who forgot their QR cards or are absent.</li>
              <li><strong>Business Benefit:</strong> Provides flexibility; the system remains usable even if physical QR cards are lost.</li>
              <li><strong>Technical Implementation:</strong> A highly interactive React component utilizing state to filter data. Modals and inline-editing allow updating a student's status (Sakit, Izin, Alpa) and adding textual notes.</li>
            </>
          )}
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "4. Ekspor Laporan Excel & PDF" : "4. Excel & PDF Report Generation"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong>Tujuan:</strong> Mengekspor data untuk pengarsipan dan pemrosesan offline.</li>
              <li><strong>Manfaat Bisnis:</strong> Menghemat berjam-jam waktu staf administrasi untuk merekapitulasi data di akhir bulan.</li>
              <li><strong>Implementasi Teknis:</strong> Menggunakan pustaka <code>xlsx</code> untuk memformat data JSON menjadi buku kerja Excel multi-sheet, dan logika khusus untuk membuat PDF kode QR yang siap cetak.</li>
            </>
          ) : (
            <>
              <li><strong>Purpose:</strong> Export data for archiving and offline processing.</li>
              <li><strong>Business Benefit:</strong> Saves administration staff hours of manual tallying at the end of the month.</li>
              <li><strong>Technical Implementation:</strong> Uses the <code>xlsx</code> library to format JSON data into multi-sheet Excel workbooks, and custom logic to generate printable PDFs for the QR codes.</li>
            </>
          )}
        </ul>

        <h3 style={subHeadingStyle}>{isId ? "5. Manajemen Data Siswa (CRUD)" : "5. Student Data Management (CRUD)"}</h3>
        <div style={{ marginBottom: "0.5rem", marginTop: "1rem", overflow: "hidden", borderRadius: "8px", border: "1px solid var(--border)" }}>
          <Image 
            src="/DataSiswa_page.png" 
            alt="Student Data Management" 
            width={800} height={450} 
            className="transition-transform duration-500 hover:scale-105"
            style={{ width: '100%', height: 'auto', display: "block" }} 
          />
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
          {isId ? "Catatan: Halaman kelola data siswa lengkap dengan fitur Create, Update, dan Delete, serta pembuatan kode QR." : "Note: Comprehensive student data management page with Create, Update, and Delete features, alongside QR code generation."}
        </p>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong>Tujuan:</strong> Mengelola basis data siswa secara terpusat dan efisien.</li>
              <li><strong>Manfaat Bisnis:</strong> Memudahkan admin dalam memperbarui data tanpa perlu mengelola file eksternal atau spreadsheet terpisah.</li>
              <li><strong>Implementasi Teknis:</strong> Operasi CRUD yang terintegrasi penuh dengan Supabase. Pembuatan QR Code otomatis terpicu secara instan ketika data baru ditambahkan.</li>
            </>
          ) : (
            <>
              <li><strong>Purpose:</strong> Manage the student database centrally and efficiently.</li>
              <li><strong>Business Benefit:</strong> Makes it easy for admins to update data without managing external files or separate spreadsheets.</li>
              <li><strong>Technical Implementation:</strong> Full CRUD operations integrated with Supabase. Automated QR Code generation triggered instantly upon new data creation.</li>
            </>
          )}
        </ul>
      </div>

      {/* 8. User Journey */}
      <div>
        <h2 style={headingStyle}>{title.s8}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {isId ? (
            <>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Persiapan Pagi:</strong>
                <p style={textStyle}>Admin masuk via <code>/</code> (Login) → Dialihkan ke <code>/dashboard</code> untuk melihat statistik kemarin → Menavigasi ke <code>/scan</code> → Klik "Mulai Kamera".</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Fase Kedatangan (Pagi):</strong>
                <p style={textStyle}>Siswa mengarahkan Kartu QR ke kamera → Sistem memindai dan Berbunyi Beep → Suara mengumumkan "Aisyah, Hadir!" → UI Log Pemindai diperbarui secara instan.</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Penanganan Pengecualian (Siang):</strong>
                <p style={textStyle}>Orang tua mengirim pesan teks ke guru mengabarkan siswa sakit → Guru membuka <code>/dashboard</code> di ponsel → Mencari nama siswa → Mengetuk "Sakit" → Memasukkan "Demam" sebagai catatan → Simpan.</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Fase Kepulangan (Sore):</strong>
                <p style={textStyle}>Jam menunjukkan pukul 12:00 Siang → Sistem otomatis beralih ke "Mode Kepulangan" (UI berubah warna violet) → Siswa mengarahkan Kartu QR → Suara mengumumkan "Aisyah, Pulang!" → Dashboard mencatat <code>waktu_pulang</code>.</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Akhir Bulan:</strong>
                <p style={textStyle}>Admin membuka <code>/dashboard</code> → Klik "Download Excel" → Memilih bulan berjalan → File Excel dibuat dengan kolom harian dan total ringkasan.</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Morning Setup:</strong>
                <p style={textStyle}>Admin logs in via <code>/</code> (Login) → Redirected to <code>/dashboard</code> to view yesterday's stats → Navigates to <code>/scan</code> → Clicks "Mulai Kamera".</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Arrival Phase (Morning):</strong>
                <p style={textStyle}>Student holds up QR Card → System scans and Beeps → Voice announces "Aisyah, Hadir!" → Scanner Log UI updates instantly.</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Exception Handling (Mid-day):</strong>
                <p style={textStyle}>Parent texts teacher saying student is sick → Teacher opens <code>/dashboard</code> on mobile → Searches student name → Taps "Sakit" → Enters "Demam" as a note → Saves.</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Dismissal Phase (Afternoon):</strong>
                <p style={textStyle}>Clock hits 12:00 PM → System auto-switches to "Mode Kepulangan" (UI turns violet) → Student holds up QR Card → Voice announces "Aisyah, Pulang!" → Dashboard logs <code>waktu_pulang</code>.</p>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>End of Month:</strong>
                <p style={textStyle}>Admin opens <code>/dashboard</code> → Clicks "Download Excel" → Selects current month → Excel file is generated with daily columns and total summaries.</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 9. Technical Architecture */}
      <div>
        <h2 style={headingStyle}>{title.s9}</h2>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Frontend:</strong> Next.js 16.2 App Router sebagai fondasi React. Client Components (<code>'use client'</code>) menangani UI stateful seperti modal dan pemindaian, sementara Server Components mengambil data awal.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Backend:</strong> Next.js Server Actions mengeksekusi logika Node.js sisi server dengan aman. Tidak ada perutean REST API tradisional, sehingga mengurangi boilerplate kode.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Database:</strong> Supabase (PostgreSQL) yang dihosting di cloud.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Autentikasi:</strong> Supabase Auth menerbitkan JWT yang disimpan dalam cookie aman, divalidasi oleh Middleware Next.js pada rute yang dilindungi.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Alur Data:</strong> Client memicu Action → Action melakukan query ke Supabase secara aman → Action mengembalikan hasil mutasi → Client memicu <code>router.refresh()</code> untuk memperbarui status Server Component.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Keamanan:</strong> Database dikunci melalui Row Level Security (RLS). Hanya permintaan terautentikasi dengan JWT valid yang dapat membaca/menulis data.</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Frontend:</strong> Next.js 16.2 App Router serving as the React foundation. Client Components (<code>'use client'</code>) handle stateful UI like modals and scanning, while Server Components fetch initial data.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Backend:</strong> Next.js Server Actions execute server-side Node.js logic securely. No traditional REST API routing is necessary, reducing boilerplate.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Database:</strong> Supabase (PostgreSQL) hosted in the cloud.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Authentication:</strong> Supabase Auth issues JWTs stored in secure cookies, validated by Next.js Middleware on protected routes.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Data Flow:</strong> Client triggers Action → Action securely queries Supabase → Action returns mutation result → Client triggers <code>router.refresh()</code> to fetch the new Server Component state.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Security:</strong> Database is locked down via Row Level Security (RLS). Only authenticated requests carrying a valid JWT can select/insert data.</li>
            </>
          )}
        </ul>
      </div>

      {/* 10. Lessons Learned */}
      <div>
        <h2 style={headingStyle}>{title.s10}</h2>
        <h3 style={subHeadingStyle}>{isId ? "Pengetahuan Rekayasa yang Ditunjukkan:" : "Demonstrated Engineering Knowledge:"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li>Pemahaman mendalam tentang paradigma Next.js App Router, pemisahan ketat batasan Server dan Client.</li>
              <li>Penguasaan CSS modern dan prinsip desain responsif, memprioritaskan UX Mobile-First.</li>
              <li>Kemahiran memanfaatkan BaaS (Backend-as-a-Service) seperti Supabase untuk mempercepat pengiriman MVP tanpa mengorbankan integritas data relasional.</li>
            </>
          ) : (
            <>
              <li>Deep understanding of the Next.js App Router paradigm, strictly separating Server and Client boundaries.</li>
              <li>Mastery of modern CSS and responsive design principles, prioritizing Mobile-First UX.</li>
              <li>Proficiency in leveraging BaaS (Backend-as-a-Service) like Supabase to accelerate MVP delivery without sacrificing relational data integrity.</li>
            </>
          )}
        </ul>
        <h3 style={subHeadingStyle}>{isId ? "Area Peningkatan:" : "Areas for Improvement:"}</h3>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Granularitas Komponen:</strong> Menyadari bahaya membiarkan Client Components menjadi terlalu besar. Proyek masa depan akan menerapkan modularitas komponen yang lebih ketat sejak hari pertama.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Kepercayaan Klien vs Server:</strong> Belajar bahwa logika bisnis (seperti pemberian stempel waktu absensi) harus secara eksklusif berada di server untuk mencegah gangguan data (tampering).</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Component Granularity:</strong> Realized the danger of letting Client Components grow too large. Future projects will enforce stricter component modularity from day one.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Client vs Server Trust:</strong> Learned that business logic (like timestamping attendance) must exclusively live on the server to prevent data tampering.</li>
            </>
          )}
        </ul>
      </div>

      {/* 11. Business Impact */}
      <div>
        <h2 style={headingStyle}>{title.s11}</h2>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Penghematan Waktu:</strong> Mengurangi rutinitas absensi pagi yang semula 15 menit menjadi di bawah 2 menit. Menghemat lebih dari 10 jam kompilasi spreadsheet manual bagi administrator pada akhir setiap bulan.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Efisiensi Operasional:</strong> Menyediakan catatan stempel waktu pasti yang tidak dapat dibantah kapan anak diserahkan untuk pulang, mengeliminasi perselisihan antara orang tua dan guru.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Pengurangan Biaya:</strong> Menghilangkan kebutuhan akan buku besar fisik dan perangkat keras sidik jari khusus.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Citra Merek:</strong> Meningkatkan reputasi sekolah sebagai institusi premium yang melek teknologi.</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Time Saved:</strong> Reduces a 15-minute morning attendance routine to under 2 minutes. Saves administrators over 10 hours of manual spreadsheet compilation at the end of every month.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Operational Efficiency:</strong> Provides undisputed, exact timestamp records of when a child is handed over for dismissal, eliminating parent-teacher disputes.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Cost Reduction:</strong> Eliminates the need for physical ledger books and dedicated fingerprint hardware.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Brand Image:</strong> Elevates the school's reputation as a premium, technology-forward institution.</li>
            </>
          )}
        </ul>
      </div>

      {/* 12. Why This Project Matters */}
      <div>
        <h2 style={headingStyle}>{title.s12}</h2>
        <p style={textStyle}>
          {isId 
            ? "Proyek ini menunjukkan kemampuan saya untuk merancang dan menghadirkan produk SaaS end-to-end secara independen. Ini menampilkan tidak hanya kemampuan menulis kode, tetapi juga manajemen produk dan kepekaan desain UX yang kuat. Dengan mengidentifikasi kebuntuan dunia nyata—kehadiran sekolah dan keamanan anak—dan merancang solusi digital yang disesuaikan dan sangat rapi, saya membuktikan kemampuan saya menjembatani kesenjangan antara rekayasa teknis dan nilai bisnis nyata. Integrasi fitur edge-case, seperti Web Speech API untuk umpan balik audio tanpa sentuhan, menyoroti empati mendalam terhadap pengguna akhir (guru) yang melampaui sekadar operasi CRUD dasar."
            : "This project demonstrates my ability to architect and deliver a complete, end-to-end SaaS product independently. It showcases not just code-writing abilities, but strong product management and UX design sensibilities. By identifying a real-world bottleneck—school attendance and child security—and crafting a tailored, highly polished digital solution, I proved my capability to bridge the gap between technical engineering and tangible business value. The integration of edge-case features, such as Web Speech API for hands-free audio feedback, highlights a deep empathy for the end-user (teachers) that goes beyond basic CRUD operations."
          }
        </p>
      </div>

      {/* 13. Technical Highlights */}
      <div>
        <h2 style={headingStyle}>{title.s13}</h2>
        <ul style={listStyle}>
          {isId ? (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>UI/UX Sadar Waktu:</strong> Pemindai secara otomatis beralih konteks (Kedatangan vs Kepulangan) berdasarkan jam yang disinkronkan dengan server, dengan mulus mengubah target mutasi database dan skema warna UI tanpa campur tangan pengguna.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Desain Responsif Adaptif:</strong> Mengubah tabel data desktop kompleks menjadi kartu seluler bertumpuk yang sangat mudah dibaca menggunakan CSS murni/Tailwind, memastikan tidak ada penurunan kualitas UX bagi pengguna seluler.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Integrasi Perangkat Keras Tanpa Hambatan:</strong> Memanfaatkan API WebRTC HTML5 untuk mengakses kamera perangkat guna pemindaian barcode langsung di browser, melewati kebutuhan untuk deployment aplikasi native (App Store/Play Store).</li>
            </>
          ) : (
            <>
              <li><strong style={{ color: "var(--text-primary)" }}>Time-Aware UI/UX:</strong> The scanner automatically switches context (Arrival vs Dismissal) based on a server-synced clock, seamlessly changing database mutation targets and UI color schemes without user intervention.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Adaptive Responsive Design:</strong> Transforming complex desktop data tables into highly readable, stacked mobile cards using pure CSS/Tailwind, ensuring zero degradation in UX for mobile users.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Zero-Friction Hardware Integration:</strong> Utilizing HTML5 WebRTC APIs to access device cameras for barcode scanning directly in the browser, bypassing the need for native App Store deployments.</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
