"use client"
import { COLOR_PRIMARY, LOGO_PATH } from "@/company_data"
import { usePathname, useRouter } from "next/navigation";

function Navigation() {
    const path = usePathname()
    const router = useRouter()

    function NavOptions() {
        const navOptions = [
            { label: "Beranda", href: "/beranda" },
            { label: "Tentang Kami", href: "/tentang" },
            { label: "Produk", href: "/produk" },
            { label: "Kerjasama", href: "/kerjasama" },
            { label: "Kontak", href: "/kontak" },
        ];
        
        return (
            <div className="flex lg:space-x-8 justify-center py-2">
                {navOptions.map(nav => (
                    <button
                        key={nav.label}
                        onClick={() => router.push(nav.href)}
                        className={`shrink-0 text-xs lg:text-sm px-3 py-1.5 rounded-full transition duration-200 cursor-pointer font-bold ${
                            path === nav.href ? `bg-${COLOR_PRIMARY}-600 text-white` : ""
                        }`}
                    >
                        {nav.label}
                    </button>
                ))}
            </div>
        )
    }

    return (
        <nav className={`sticky top-0 z-50 bg-white shadow-md rounded-b-xl border-t border-${COLOR_PRIMARY}-500`}>
            <div className="container flex items-center justify-between mx-auto px-4 max-w-6xl h-16">
                <a className={`flex items-center text-xl font-bold text-${COLOR_PRIMARY}-700`}>
                    <img 
                        src={LOGO_PATH.logoTypo} 
                        alt="Logo W&C" 
                        className="mr-2 w-auto h-10"
                    />
                </a>

                <div className="hidden lg:block">
                    <NavOptions />
                </div>

                <button 
                    onClick={() => router.push("/kontak")} 
                    className={`px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-${COLOR_PRIMARY}-700 transition duration-300 shadow-md cursor-pointer hover:brightness-80`}
                >
                    Hubungi Kami
                </button>
            </div>

            <div className="block lg:hidden">
                <NavOptions />
            </div>
        </nav>
    )
}

export default Navigation
