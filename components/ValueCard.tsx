import { COLOR_PRIMARY } from "@/company_data"

type ValueCardType = {
  title: string;
  detail: string;
  Icon: React.ElementType;
}

function ValueCard({ title, detail, Icon }: ValueCardType) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <Icon className={`w-8 h-8 text-${COLOR_PRIMARY}-600 mr-3 p-1 bg-${COLOR_PRIMARY}-50 rounded-full`} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{detail}</p>
  </div>
  )
};

export default ValueCard


