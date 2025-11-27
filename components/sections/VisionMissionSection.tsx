import { COLOR_PRIMARY, COMPANY_DATA } from "@/company_data";
import { Globe, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";

function VisionMissionSection() {
  return (
    <section id="visi-misi" className={`py-20 bg-${COLOR_PRIMARY}-600 text-white`}>
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle>Visi dan Misi</SectionTitle>
      
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl mb-12 mt-6">
        <h3 className={`text-3xl font-bold mb-4 flex items-center`}>
          <Globe className={`w-8 h-8 text-${COLOR_PRIMARY}-600 mr-3`} /> Visi
        </h3>
        <p className="text-xl font-medium italic">
          "{COMPANY_DATA.vision}"
        </p>
      </div>

      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
        <h3 className={`text-3xl font-bold mb-6 flex items-center`}>
          <TrendingUp className={`w-8 h-8 text-${COLOR_PRIMARY}-600 mr-3`} /> Misi
        </h3>
        <ul className="space-y-4">
          {COMPANY_DATA.mission.map((m, index) => (
            <li key={index} className="flex items-start text-lg">
              <span className={`text-${COLOR_PRIMARY}-600 font-bold mr-3 mt-1`}>✓</span>
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  )
};

export default VisionMissionSection