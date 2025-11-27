import { COMPANY_DATA } from "@/company_data"
import { Handshake, Users } from "lucide-react"
import SectionTitle from "./SectionTitle"

function PortfolioSection() {
  return (
    <section id="portofolio" className="py-20">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle>Mitra Kerjasama Kami</SectionTitle>

      <div className="mt-12 space-y-8">
        {/* Klien */}
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Users className="w-6 h-6 text-green-600 mr-2" /> Klien Kami
          </h3>
          <div className="flex flex-wrap gap-3">
            {COMPANY_DATA.clients.map((client, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Mitra & Kerjasama */}
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Handshake className="w-6 h-6 text-purple-600 mr-2" /> Mitra dan Kerjasama
          </h3>
          <p className="text-lg font-semibold text-gray-700 mb-3">Mitra Pemasok:</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {COMPANY_DATA.partners.map((partner, index) => (
              <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full">
                {partner}
              </span>
            ))}
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-3">Kerjasama Bisnis:</p>
          <div className="flex flex-wrap gap-3">
            {COMPANY_DATA.collaborations.map((collab, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full">
                {collab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default PortfolioSection