import { COLOR_PRIMARY, COMPANY_DATA } from "@/company_data";
import SectionTitle from "./SectionTitle";
import { RefreshCcw } from "lucide-react";

function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle>Fasilitas & Infrastruktur</SectionTitle>
      <p className="text-lg text-gray-700 mb-10 mt-6">
        PT. Write & Co memiliki fasilitas dan infrastruktur yang lengkap untuk menunjang kegiatan operasional perdagangan alat tulis kantor secara efisien, aman, dan profesional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COMPANY_DATA.facilities.map((facility, index) => (
          <div key={index} className={`flex items-start p-5 bg-${COLOR_PRIMARY}-50 rounded-lg border-l-2 border-${COLOR_PRIMARY}-600 shadow-sm`}>
            <RefreshCcw className={`w-5 h-5 text-${COLOR_PRIMARY}-600 mt-1 shrink-0`} />
            <p className="ml-4 text-gray-700 text-sm">{facility}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
};

export default FacilitiesSection