import { COLOR_PRIMARY, COMPANY_DATA } from "@/company_data";
import SectionTitle from "./SectionTitle";

function BusinessSection() {
  return (
    <section id="bidang-usaha" className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle>Bidang Usaha & Layanan Utama</SectionTitle>
      <p className="text-lg text-gray-700 mb-10 border-b pb-4 mt-6">
        PT. WRITE & CO merupakan perusahaan dagang yang bergerak di bidang penjualan dan distribusi alat tulis kantor (ATK) serta perlengkapan administrasi dengan konsep “One Stop Office Supply.”
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COMPANY_DATA.services.map((service, index) => (
          <div key={index} className={`p-6 bg-white rounded-xl shadow-lg border-l-2 border-${COLOR_PRIMARY}-500 hover:shadow-xl transition duration-300`}>
            <div className="flex items-center mb-3">
              <service.icon className={`w-6 h-6 text-${COLOR_PRIMARY}-600 mr-3 shrink-0`} />
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
};

export default BusinessSection