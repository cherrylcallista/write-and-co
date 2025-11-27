import { COMPANY_DATA } from "@/company_data"
import { SectionTitle, ValueCard } from "../exportComponents"

function CoreValuesSection() {
  return (
    <section id="nilai-perusahaan" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle>Nilai-Nilai Perusahaan</SectionTitle>
      <p className="text-xl text-gray-600 mb-12 mt-6">
        Fondasi yang kami pegang teguh dalam setiap langkah bisnis PT. WRITE & CO.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COMPANY_DATA.coreValues.map((value, index) => (
          <ValueCard key={index} title={value.title} detail={value.detail} Icon={value.icon} />
        ))}
      </div>
    </div>
  </section>
  )
};

export default CoreValuesSection