"use client"
import { 
    HeroSection, 
    SectionTitle, 
    MessageSection, 
    AboutSection, 
    VisionMissionSection, 
    CoreValuesSection,
    BusinessSection,
    PortfolioSection,
    FacilitiesSection,
    ContactSection,
    FooterSection
} from "./exportComponents"

function App () {
  
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <main>
        <HeroSection />        

        {/* 2. Kata Pengantar / Sambutan */}
        <MessageSection />

        {/* 3. Tentang Kami (About Us) */}
        <AboutSection />

        {/* 4. Visi dan Misi */}
        <VisionMissionSection />

        {/* 5. Nilai-Nilai Perusahaan (Core Values) */}
        <CoreValuesSection />

        {/* 6. Struktur Organisasi - Placeholder karena data tidak disediakan */}
        <section id="struktur-organisasi" className="py-16 bg-gray-200">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <SectionTitle>Struktur Organisasi</SectionTitle>
                <p className="text-lg text-gray-600 mt-4">
                    <span className="font-bold text-red-500">Catatan:</span> Data detail Struktur Organisasi tidak disediakan. Bagian ini berfungsi sebagai placeholder.
                </p>
            </div>
        </section>

        {/* 7. Bidang Usaha / Layanan Utama */}
        <BusinessSection />

        {/* 8. Portofolio / Produk dan Jasa & 9. Klien / Mitra / Kerja Sama */}
        <PortfolioSection />
        
        {/* 10. Fasilitas/Infrastruktur */}
        <FacilitiesSection />

        {/* 11. Kontak Kami */}
        <ContactSection />
      </main>

      {/* 12. Penutup */}
      <FooterSection />
    </div>
  );
};

export default App;