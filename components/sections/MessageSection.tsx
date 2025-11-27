import { COLOR_PRIMARY, COMPANY_DATA } from "@/company_data"
import SectionTitle from "./SectionTitle"

function MessageSection () {
  return (
    <section id="sambutan" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className={`bg-white p-10 md:p-16 rounded-xl shadow-2xl border-t-8 border-${COLOR_PRIMARY}-600`}>
        <SectionTitle>Kata Pengantar</SectionTitle>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
          {COMPANY_DATA.greeting.body}
        </p>
        <div className="text-right mt-10">
          <p className="text-xl font-semibold text-gray-800 border-t pt-4">
            {COMPANY_DATA.greeting.signature}
          </p>
        </div>
      </div>
    </div>
  </section>
  )
};

export default MessageSection