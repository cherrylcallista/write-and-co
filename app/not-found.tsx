import { COLOR_PRIMARY } from '@/company_data'
import { OctagonAlert } from 'lucide-react'

function NotFound() {
    return (
        <div style={{ minHeight: "85vh" }} className="flex flex-col gap-4 justify-center items-center">
            <OctagonAlert color='#1e2939' size={64} />
            <h1 className="font-semibold text-[#1e2939]">Page Not Found</h1>
            <button className={`bg-${COLOR_PRIMARY}-600 font-bold text-white rounded-md px-4 py-2`}>Kembali ke Beranda</button>
        </div>
    )
}

export default NotFound
