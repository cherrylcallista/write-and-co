import { COLOR_PRIMARY } from "@/company_data"

type SectionTitleType = {
    children: React.ReactNode
}

function SectionTitle({ children }: SectionTitleType) {
  return (
    <h2 className={`text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-${COLOR_PRIMARY}-500 inline-block pb-1`}>
        {children}
    </h2>
  )
};

export default SectionTitle