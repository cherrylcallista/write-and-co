import {
  Briefcase,
  Sparkles,
  Zap,
  Shield,
  Users,
  ShoppingCart,
  BookOpen,
  ClipboardList,
  TrendingUp,
  Handshake,
  CheckCircle,
  Clock,
  ThumbsUp,
} from 'lucide-react';

export const COLOR_PRIMARY = 'purple';
export const COLOR_SECONDARY = 'gray';

// Path Logo (menggunakan placeholder karena gambar fisik tidak dapat dimuat langsung di sini, 
// namun di lingkungan nyata, ini akan merujuk ke file 'full-logo.png')
export const LOGO_PATH = {
    logoOnly: "/logo-only.png",
    logoTypo: "/full-logo.png",
    heroLogo: "/hero-logo.png"
} 

export const COMPANY_DATA = {
  name: "PT. WRITE & CO",
  tagline: "One Stop Office Supply",
  foundedYear: 2025,
  logoText: "W&C",
  // 1. Cover / Halaman Depan - Gambar/Latar merepresentasikan ATK
  cover: {
    title: "PT. WRITE & CO",
    tagline: "One Stop Office Supply",
    description: "Perdagangan di Bidang Alat tulis Kantor (ATK)",
    year: "Berdiri Sejak 2025",
  },
  
  // 2. Kata Pengantar / Sambutan
  greeting: {
    body: `Dengan penuh rasa syukur, kami memperkenalkan PT. WRITE & CO, perusahaan yang berdiri pada tahun 2025 dengan tekad untuk menjadi mitra terpercaya dalam penyediaan alat tulis kantor (ATK) yang berkualitas dan lengkap.
Kami percaya bahwa kerapian, efisiensi, dan produktivitas kerja dimulai dari perlengkapan yang tepat. Karena itu, PT. WRITE & CO hadir untuk memberikan solusi terbaik bagi kebutuhan perkantoran, pendidikan, dan bisnis dengan pelayanan cepat, ramah, serta profesional.
Didukung oleh tim yang berpengalaman dan berkomitmen tinggi, kami senantiasa menjaga kepercayaan pelanggan melalui kualitas produk, ketepatan waktu, dan hubungan kerja yang berkelanjutan. Inovasi dan keandalan menjadi dasar kami dalam menghadapi dinamika kebutuhan pasar yang terus berkembang.
Kami berharap kehadiran PT. WRITE & CO dapat memberikan kemudahan dan manfaat nyata bagi seluruh pelanggan, mitra, serta masyarakat luas. Bersama, mari wujudkan lingkungan kerja yang lebih efisien, produktif, dan inspiratif.`,
    signature: "CEO PT. WRITE & CO",
  },

  // 3. Tentang Kami (About Us)
  about: {
    establishment: `PT. WRITE & CO didirikan pada 22 Juli 2025 sebagai perusahaan dagang yang bergerak di bidang penjualan alat tulis kantor (ATK) dengan konsep modern, efisien, dan terintegrasi. Berdirinya perusahaan ini berawal dari kesadaran akan meningkatnya kebutuhan ATK di tengah pesatnya aktivitas administrasi di berbagai sektor seperti perkantoran, sekolah, universitas, UMKM, dan instansi pemerintahan.`,
    problem: `Di sisi lain, banyak konsumen masih menghadapi kesulitan dalam memperoleh produk ATK yang lengkap, berkualitas, dan mudah diakses. Permasalahan umum seperti keterbatasan stok, kualitas produk yang tidak konsisten, layanan yang lambat, serta kurangnya penyedia profesional menjadi latar belakang lahirnya PT. WRITE & CO.`,
    solution: `Melihat peluang tersebut, perusahaan kami hadir dengan konsep “One Stop Office Supply”, yang menyediakan segala kebutuhan alat tulis kantor secara terpadu, baik melalui toko fisik maupun platform digital. Kami berkomitmen untuk memberikan solusi yang cepat, mudah, dan terpercaya bagi seluruh pelanggan di berbagai daerah.`,
    productsAndService: `Produk yang kami tawarkan mencakup beragam kategori, mulai dari perlengkapan tulis, arsip, alat presentasi, hingga produk penunjang kegiatan kantor. Kualitas produk yang terjamin, harga yang kompetitif, serta pelayanan yang ramah dan responsif menjadi nilai utama dalam setiap transaksi. Selain itu, kami menyediakan sistem pemesanan online dan offline, dengan layanan antar ke kantor dan sekolah untuk memberikan pengalaman belanja yang praktis dan efisien.`,
    impacts: [
      "Membuka lapangan kerja baru di bidang logistik dan penjualan.",
      "Mempermudah akses terhadap produk ATK berkualitas.",
      "Meningkatkan efisiensi dan kerapihan kerja pelanggan melalui pengadaan yang tepat waktu dan terpercaya.",
      "Mendukung mitra usaha kecil melalui program kemitraan reseller.",
      "Mendorong modernisasi sektor perdagangan alat tulis melalui layanan digital dan sistem kerja profesional.",
    ],
    history: `Perjalanan kami dimulai dari visi untuk membangun rantai distribusi ATK yang kuat dan berkelanjutan di Indonesia. Sejak awal berdiri, PT. WRITE & CO telah berfokus pada pembentukan sistem pengadaan yang profesional, memperluas jaringan pemasok terpercaya, serta membangun kepercayaan pelanggan melalui layanan cepat dan berkualitas.`,
    coreValuesSummary: [
      { name: "Integrity", desc: "Menjunjung tinggi kejujuran dan tanggung jawab dalam setiap transaksi." },
      { name: "Efficiency", desc: "Mengutamakan kecepatan dan ketepatan dalam pelayanan." },
      { name: "Innovation", desc: "Beradaptasi dengan teknologi dan tren pasar untuk memberikan solusi modern." },
      { name: "Customer Commitment", desc: "Menempatkan kepuasan pelanggan sebagai prioritas utama." },
      { name: "Teamwork", desc: "Membangun kerja sama solid di antara tim untuk mencapai tujuan bersama." },
    ]
  },

  // 4. Visi dan Misi
  vision: "Menjadi perusahaan alat tulis kantor terpercaya dengan produk berkualitas dan layanan profesional di Indonesia.",
  mission: [
    "Menyediakan berbagai kebutuhan alat tulis kantor yang lengkap dengan kualitas terbaik dan harga yang bersaing.",
    "Membangun hubungan yang baik dan berkelanjutan dengan pelanggan, supplier, dan mitra bisnis.",
    "Menjaga ketersediaan stok agar pelanggan selalu mendapatkan barang yang dibutuhkan tepat waktu.",
    "Memberikan harga yang kompetitif dengan menjaga efisiensi operasional dan rantai pasok.",
    "Mengikuti tren dan kebutuhan pasar, agar selalu relevan dengan perkembangan dunia pendidikan, bisnis, dan pemerintahan.",
    "Memberikan pelayanan yang cepat, ramah, dan profesional, baik secara offline di toko maupun online melalui platform digital.",
  ],

  // 5. Nilai-Nilai Perusahaan (Core Values) - Detailed
  coreValues: [
    { title: "Integrity", icon: Shield, detail: "Menjunjung tinggi kejujuran, tanggung jawab, dan transparansi dalam setiap kegiatan bisnis. Kami percaya kepercayaan pelanggan hanya dapat dibangun melalui konsistensi antara ucapan dan tindakan, serta komitmen untuk selalu memberikan yang terbaik." },
    { title: "Professionalism", icon: Briefcase, detail: "Bekerja dengan standar tinggi, disiplin, dan beretika dalam setiap aspek pelayanan — mulai dari pengadaan produk, pengelolaan stok, hingga interaksi dengan pelanggan dan mitra." },
    { title: "Quality Commitment", icon: CheckCircle, detail: "Setiap produk dan layanan yang kami berikan harus memenuhi standar kualitas terbaik. Kami memastikan ketersediaan alat tulis kantor yang awet, fungsional, dan sesuai kebutuhan pelanggan." },
    { title: "Efficiency", icon: Zap, detail: "Mengutamakan kecepatan, ketepatan, dan keteraturan dalam proses kerja. Kami terus menyederhanakan sistem pelayanan agar pelanggan dapat berbelanja dengan mudah, cepat, dan nyaman." },
    { title: "Customer Focus", icon: ThumbsUp, detail: "Kepuasan pelanggan adalah prioritas utama. Kami berupaya memahami kebutuhan mereka secara mendalam dan memberikan solusi yang tepat, ramah, serta responsif." },
    { title: "Innovation", icon: Sparkles, detail: "Beradaptasi dengan perkembangan zaman melalui penerapan teknologi dan layanan digital. Kami terus memperbarui sistem penjualan dan distribusi agar lebih efisien serta relevan dengan tren modern." },
    { title: "Collaboration", icon: Handshake, detail: "Membangun kerja sama yang harmonis dengan tim internal, pelanggan, supplier, dan mitra bisnis untuk menciptakan jaringan perdagangan yang saling menguntungkan dan berkelanjutan." },
    { title: "Teamwork", icon: Users, detail: "Kami percaya kesuksesan perusahaan berasal dari kerja sama yang solid antaranggota tim. Setiap individu berperan penting dalam mencapai tujuan bersama melalui komunikasi terbuka dan saling menghargai." },
    { title: "Excellence", icon: CheckCircle, detail: "Selalu berusaha memberikan hasil terbaik dalam setiap aspek — mulai dari pelayanan, kualitas produk, hingga pengalaman pelanggan. Kami berkomitmen menjadi perusahaan dagang ATK yang unggul dan terpercaya di pasar nasional." },
    { title: "Growth & Sustainability", icon: TrendingUp, detail: "Berkomitmen untuk tumbuh bersama pelanggan dan mitra bisnis, menciptakan dampak positif terhadap lingkungan kerja, masyarakat, dan sektor perdagangan alat tulis di Indonesia." },
  ],

  // 7. Bidang Usaha / Layanan Utama
  services: [
    { title: "Distribusi & Penjualan Alat Tulis Kantor (ATK)", icon: ShoppingCart, description: "Menyediakan berbagai perlengkapan tulis seperti pulpen, pensil, kertas, map, binder, stapler, gunting, cutter, serta perlengkapan administrasi lainnya untuk mendukung aktivitas kerja yang produktif dan terorganisir." },
    { title: "Perlengkapan Arsip dan Administrasi Perkantoran", icon: ClipboardList, description: "Menawarkan produk arsip seperti ordner, box file, label, amplop, dan rak dokumen untuk membantu menjaga kerapihan dan efisiensi pengelolaan data di kantor maupun sekolah." },
    { title: "Peralatan Kantor dan Elektronik Pendukung", icon: Zap, description: "Menyediakan berbagai peralatan penunjang seperti printer, tinta, toner, kalkulator, papan tulis, dan perlengkapan presentasi, yang mendukung operasional bisnis dan pendidikan." },
    { title: "Perlengkapan Sekolah & Edukasi", icon: BookOpen, description: "Menyediakan kebutuhan belajar bagi pelajar dan tenaga pendidik — mulai dari alat tulis, buku catatan, hingga perlengkapan ujian dan kegiatan akademik." },
    { title: "Layanan Pengadaan & Supply Korporat", icon: Briefcase, description: "Memberikan layanan pengadaan ATK bagi perusahaan, lembaga pendidikan, dan instansi pemerintahan melalui sistem pemesanan terjadwal dan pengiriman tepat waktu." },
    { title: "Penjualan Online & Layanan Pengantaran Cepat", icon: Clock, description: "Pelanggan dapat memesan melalui platform digital kami untuk kemudahan transaksi. Sistem pengantaran kami menjamin produk tiba dengan cepat, aman, dan sesuai pesanan." },
    { title: "Program Kemitraan & Reseller", icon: Users, description: "Mendukung pengembangan ekonomi lokal dengan membuka peluang kerja sama bagi toko, pelaku usaha, dan distributor untuk menjadi mitra penjualan produk PT. WRITE & CO." },
  ],

  // 8. Portofolio / Produk dan Jasa
  productsList: [
    { "namaProduk": "Alat Staples Kenko", "fotoProduk": "/alat_staples_kenko.jpg" },
    { "namaProduk": "Alat Staples Max", "fotoProduk": "/alat_staples_max.jpg" },
    { "namaProduk": "Alteco", "fotoProduk": "/lem_alteco.webp" },
    { "namaProduk": "Amplop Merpati Kecil", "fotoProduk": "/amplop_merpati_kecil.webp" },
    { "namaProduk": "Amplop Merpati Panjang", "fotoProduk": "/amplop_merpati_panjang.jpeg" },
    { "namaProduk": "Ballpoint Greebel", "fotoProduk": "/ballpoint_greebel.jpg" },
    { "namaProduk": "Ballpoint Standard AE-7", "fotoProduk": "/ballpoint_standard_ae-7.jpg" },
    { "namaProduk": "Block Note Garis Kecil", "fotoProduk": "/block_note_garis_kecil.jpg" },
    { "namaProduk": "Block Note Polos Kecil", "fotoProduk": "/block_note_polos_kecil.jpg" },
    { "namaProduk": "Buku Ekspedisi 100", "fotoProduk": "/buku_ekspedisi_100.jpg" },
    { "namaProduk": "Buku Batik Folio 100", "fotoProduk": "/buku_batik_folio_100.jpg" },
    { "namaProduk": "Buku Batik Kwarto 100", "fotoProduk": "/buku_batik_kwarto_100.jpg" },
    { "namaProduk": "Buku Gambar A3", "fotoProduk": "/buku_gambar_a3.jpg" },
    { "namaProduk": "Buku Gambar A4", "fotoProduk": "/buku_gambar_a4.jpg" },
    { "namaProduk": "Buku Notes Pramuka", "fotoProduk": "/buku_notes_pramuka.webp" },
    { "namaProduk": "Buku Oktavo isi 100", "fotoProduk": "/buku_oktavo_isi_100.jpg" },
    { "namaProduk": "Buku Tulis Big Boss", "fotoProduk": "/buku_tulis_big_boss.jpeg" },
    { "namaProduk": "Buku Tulis Sinar Dunia 32", "fotoProduk": "/buku_tulis_sinar_dunia_32.jpg" },
    { "namaProduk": "Buku Tulis Sinar Dunia 38", "fotoProduk": "/buku_tulis_sinar_dunia_38.jpg" },
    { "namaProduk": "Buku Tulis Sinar Dunia 58", "fotoProduk": "/buku_tulis_sinar_dunia_58.jpg" },
    { "namaProduk": "Cutter Besar", "fotoProduk": "/cutter_besar.jpg" },
    { "namaProduk": "Cutter Kecil", "fotoProduk": "/cutter_kecil.jpg" },
    { "namaProduk": "Double Folio", "fotoProduk": "/double_folio.jpg" },
    { "namaProduk": "Gunting Besar", "fotoProduk": "/gunting_besar.png" },
    { "namaProduk": "Gunting Kecil", "fotoProduk": "/gunting_kecil.jpg" },
    { "namaProduk": "Gunting Tanggung", "fotoProduk": "/gunting_tanggung.jpg" },
    { "namaProduk": "Gunting Kuku 777", "fotoProduk": "/gunting_kuku_777.jpg" },
    { "namaProduk": "Gunting Kuku Baicang", "fotoProduk": "/gunting_kuku_baicang.jpg" },
    { "namaProduk": "Gunting Kuku Superdoll", "fotoProduk": "/gunting_kuku_superdoll.jpg" },
    { "namaProduk": "HVS Sidu A4 70 gr", "fotoProduk": "/hvs_sidu_a4_70_gr.jpg" },
    { "namaProduk": "HVS Sidu F4 70 gr", "fotoProduk": "/hvs_sidu_f4_70_gr.jpg" },
    { "namaProduk": "Isi Cutter Besar Kenko", "fotoProduk": "/isi_cutter_besar_kenko.jpeg" },
    { "namaProduk": "Kwitansi Kecil", "fotoProduk": "/kwitansi_kecil.webp" },
    { "namaProduk": "Kwitansi Tanggung Gelatik", "fotoProduk": "/kwitansi_tanggung_gelatik.jpg" },
    { "namaProduk": "Lakban Tanggung Nachi", "fotoProduk": "/lakban_tanggung_nachi.jpg" },
    { "namaProduk": "Lakban Hitam Tebal", "fotoProduk": "/lakban_hitam_tebal.jpg" },
    { "namaProduk": "Lem Cair Povinal", "fotoProduk": "/lem_cair_povinal.jpg" },
    { "namaProduk": "Lem Castol Kecil", "fotoProduk": "/lem_castol_kecil.jpg" },
    { "namaProduk": "Lem Castol Tanggung", "fotoProduk": "/lem_castol_tanggung.jpg" },
    { "namaProduk": "Lem Kertas Glukol Kecil", "fotoProduk": "/lem_kertas_glukol_kecil.jpg" },
    { "namaProduk": "Lem Uhu", "fotoProduk": "/lem_uhu.webp" },
    { "namaProduk": "Nota 1 Ply", "fotoProduk": "/nota_1_ply.webp" },
    { "namaProduk": "Nota NCR Kecil 2 Ply", "fotoProduk": "/nota_ncr_kecil_2_ply.jpeg" },
    { "namaProduk": "Nota NCR Kecil 2 Ply 2", "fotoProduk": "/nota_ncr_kecil_2_ply2.webp" },
    { "namaProduk": "Pemes", "fotoProduk": "/pemes.jpeg" },
    { "namaProduk": "Penggaris 30 cm", "fotoProduk": "/penggaris_30cm.jpg" },
    { "namaProduk": "Pensil 2B Faber Castell", "fotoProduk": "/pensil_2b_faber_castell.png" },
    { "namaProduk": "Pines", "fotoProduk": "/pines.jpg" },
    { "namaProduk": "Rautan Pensil", "fotoProduk": "/rautan_pensil.jpg" },
    { "namaProduk": "Setip Faber Castell", "fotoProduk": "/setip_faber_castell.jpeg" },
    { "namaProduk": "Spidol Snowman Kecil", "fotoProduk": "/spidol_snowman_kecil.jpeg" },
    { "namaProduk": "Spidol Snowman Kecil 12 Warna", "fotoProduk": "/spidol_snowman_kecil_12_warna.webp" },
    { "namaProduk": "Spidol Snowman Marker Besar", "fotoProduk": "/spidol_snowman_marker_besar.webp" },
    { "namaProduk": "Spidol Snowman White Board", "fotoProduk": "/spidol_snowman_white_board.jpeg" },
    { "namaProduk": "Stop Map", "fotoProduk": "/stop_map.jpeg" },
    { "namaProduk": "Tip Ex Kenko", "fotoProduk": "/tip_ex_kenko.jpeg" },
    { "namaProduk": "Tip Ex Kertas", "fotoProduk": "/tip_ex_kertas.webp" },
    { "namaProduk": "Trigonal Clip", "fotoProduk": "/trigonal_clip.jpeg" },
    { "namaProduk": "Undangan", "fotoProduk": "/undangan.jpg" }
],
  portfolioLink: "https://drive.google.com/drive/folders/10FweGKuwMMUZkNiZpet-yPuTb8zbXjsx?usp=drive_link",

  // 9. Klien / Mitra / Kerja Sama
  clients: [
    'Toko ATK Timur Sejahtera', 'Toko ATK Deliastationery', 'Toko Angkasa', 'CV. SARANA SUKSES ATK',
    'Toko Sinar Mega', 'Toko ATK Empat Sekawan', 'Artha Raya Stationery', 'Toko Alta',
    'Surya Jaya', 'Surya Indah Stationery', 'ATK Qita', 'PrimaJaya Stationery',
    'Kharisma Stationery Makassar', 'Topsprint Stationery / ATK', 'CV. Multi Asa Success'
  ],
  partners: [
    'PT. HALIYA GROUP', 'PT Bangkit Perkasa Sukses', 'META ATK PALEM', 'BINA MANDIRI STATIONERY',
    'PT. ERMICH KARYA ABADI', 'MITRA GLOBAL BUANA', 'TOKO JADI', 'SIGMA STATIONERY',
    'PT. Gading Murni', 'PT. Perdana Maju Melangkah', 'Stationery Bandung', 'PT. Sinar Dunia Makmur'
  ],
  collaborations: [
    'PT. Sora & Co.', 'PT. Electa Home', 'PT. Sportune Center', 'PT. ConstreId', 'PT. CoreVisual', 'PT. Desainih Space'
  ],

  // 10. Fasilitas/Infrastruktur
  facilities: [
    "Kantor operasional modern dengan ruang kerja nyaman, sistem komputerisasi terintegrasi, dan jaringan internet berkecepatan tinggi.",
    "Gudang penyimpanan luas dengan sistem rak bertingkat (racking system) dan Warehouse Management System (WMS) untuk stok real-time.",
    "Armada pengiriman sendiri dan mitra logistik terpercaya, dilengkapi sistem pelacakan (tracking system).",
    "Ruang display/showroom produk untuk melihat langsung berbagai koleksi ATK.",
    "Platform digital dan e-commerce untuk pemesanan online dengan sistem pembayaran aman.",
    "Pusat layanan pelanggan (Customer Service Center) yang siap melayani pertanyaan dan kebutuhan pembelian.",
    "Sistem administrasi dan keuangan digital terintegrasi untuk pencatatan transaksi yang akurat.",
    "Keamanan 24 jam (CCTV, sistem alarm, petugas keamanan) dan lingkungan kerja yang higienis.",
    "Ruang rapat dan pelatihan (meeting & training room) untuk koordinasi internal dan pengembangan karyawan.",
    "Fasilitas pendukung operasional lainnya: area parkir luas, ruang istirahat, peralatan pengemasan modern, printer industri.",
  ],

  // 11. Kontak Kami
  contact: {
    address: "Jalan Keutamaan Dalam No 24 RT 6 RW 3 Krukut, Taman Sari",
    email: "ud.writecorporation@gmail.com",
    website: "writeandco.vercel.app",
    instagram: "@write.co__",
    tiktok: "@write_co",
  },
  
  // 12. Penutup
  closing: `PT. Write & Co hadir sebagai mitra terpercaya dalam memenuhi kebutuhan alat tulis kantor dengan layanan yang profesional, produk yang berkualitas, serta sistem yang efisien dan modern. Kami percaya bahwa keberhasilan perusahaan tidak hanya diukur dari besarnya penjualan, tetapi juga dari kepercayaan dan kepuasan pelanggan yang terus kami jaga.
Dengan dukungan tim yang solid, fasilitas yang memadai, dan komitmen terhadap inovasi berkelanjutan, PT. Write & Co bertekad untuk terus tumbuh dan memberikan kontribusi positif bagi dunia pendidikan, bisnis, serta masyarakat luas.
Kami mengundang Anda untuk menjadi bagian dari perjalanan kami — bersama PT. Write & Co, wujudkan kemudahan dan efisiensi dalam setiap kebutuhan kantor Anda.
“One Stop Office Supply – Solusi Lengkap untuk Segala Kebutuhan Kantor.”`
};
