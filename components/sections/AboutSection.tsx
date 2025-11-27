import { COLOR_PRIMARY, COMPANY_DATA } from "@/company_data"
import { CheckCircle, Sparkles } from "lucide-react"
import SectionTitle from "./SectionTitle"

function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle>Tentang Kami</SectionTitle>
      
      <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
        <p>
          <span className={`font-semibold text-${COLOR_PRIMARY}-600`}>Pendirian:</span> {COMPANY_DATA.about.establishment}
        </p>
        <p>
          <span className={`font-semibold text-${COLOR_PRIMARY}-600`}>Latar Belakang Masalah:</span> {COMPANY_DATA.about.problem}
        </p>
        <p>
          <span className={`font-semibold text-${COLOR_PRIMARY}-600`}>Solusi "One Stop Office Supply":</span> {COMPANY_DATA.about.solution}
        </p>
        <p>
          <span className={`font-semibold text-${COLOR_PRIMARY}-600`}>Penawaran Produk & Layanan:</span> {COMPANY_DATA.about.productsAndService}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Sparkles className="w-6 h-6 text-yellow-500 mr-2" /> Dampak Positif Kehadiran PT. WRITE & CO
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMPANY_DATA.about.impacts.map((impact, index) => (
            <div key={index} className={`flex items-start bg-${COLOR_PRIMARY}-50 p-4 rounded-lg shadow-sm`}>
              <CheckCircle className={`w-5 h-5 text-${COLOR_PRIMARY}-600 mt-1 shrink-0`} />
              <p className="ml-3 text-gray-700">{impact}</p>
            </div>
          ))}
        </div>
      </div>
      
      <p className={`mt-12 text-lg text-gray-700 leading-relaxed border-t border-gray-200 pt-8`}>
        <span className={`font-semibold text-${COLOR_PRIMARY}-600`}>Perjalanan Kami:</span> {COMPANY_DATA.about.history}
      </p>
    </div>
  </section>
  )
};

export default AboutSection