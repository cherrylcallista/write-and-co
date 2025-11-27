import { LOGO_PATH } from "@/company_data"

function HeroSection() {
  return (
        <header
            className="flex items-center justify-center h-[95vh] text-center overflow-hidden bg-gray-800 rounded-b-2xl relative"
        >
            {/* Content */}
            <div className="z-10 flex justify-between items-center p-8 gap-12">
                <div>
                    <img src="/hero-supplies.png" alt="Supplies from Write&Co" />    
                </div>        

                <div>
                    <img src={LOGO_PATH.heroLogo} alt="Write&Co Logo" />    
                </div>        
            </div>
        </header>
    )
}

export default HeroSection

