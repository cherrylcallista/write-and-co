import { LayoutGrid } from "lucide-react"
import SectionTitle from "./SectionTitle"
import { COLOR_PRIMARY, COLOR_SECONDARY, COMPANY_DATA } from "@/company_data"

function ProductsSection() {
    return (
        <div className="py-20 mx-auto px-4 lg:max-w-6xl">
            <SectionTitle>Produk Unggulan Kami</SectionTitle>
            <p className="mb-8 text-xl text-gray-600">
                Kami menyediakan beragam kategori produk ATK, arsip, dan perlengkapan kantor.
            </p>

            <h3 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                <LayoutGrid className={`w-6 h-6 text-${COLOR_PRIMARY}-600 mr-2`} /> Daftar Produk Utama
            </h3>
            
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {
                COMPANY_DATA.productsList.map(p => (
                    <div key={p.namaProduk} className="p-4 rounded-xl shadow-xl">
                        <div>
                            <img src={`/products/${p.fotoProduk}`} alt={p.namaProduk} className="aspect-square"/>
                        </div>
                        <p className={`text-${COLOR_PRIMARY}-600 font-bold mt-4`}>{p.namaProduk }</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ProductsSection
