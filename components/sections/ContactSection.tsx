import { COLOR_PRIMARY, COMPANY_DATA } from "@/company_data";
import { Globe, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";

function ContactSection() {
    return (
        <section id="kontak" className="py-20 bg-gray-900 text-white h-[85vh]">
            <div className="container mx-auto px-4 max-w-6xl">
                <SectionTitle><span className="text-white">Kontak Kami</span></SectionTitle>
                <div className="flex justify-between items-center mt-6">
                    {/* Alamat dan Detail Kontak */}
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPin className={`w-6 h-6 text-${COLOR_PRIMARY}-400 mt-1 shrink-0`} />
                            <div className="ml-4">
                                <h4 className="text-xl font-semibold mb-1">Kantor Pusat</h4>
                                <p className="text-gray-300">{COMPANY_DATA.contact.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Mail className={`w-6 h-6 text-${COLOR_PRIMARY}-400 mt-1 shrink-0`} />
                            <div className="ml-4">
                                <h4 className="text-xl font-semibold mb-1">Email Resmi</h4>
                                <p className="text-gray-300">{COMPANY_DATA.contact.email}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <Globe className={`w-6 h-6 text-${COLOR_PRIMARY}-400 mt-1 shrink-0`} />
                            <div className="ml-4">
                                <h4 className="text-xl font-semibold mb-1">Website</h4>
                                <p className="text-gray-300">{COMPANY_DATA.contact.website}</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-700">
                            <h4 className="text-xl font-semibold mb-3">Media Sosial</h4>
                            <div className="flex space-x-6">
                                <a href={`https://instagram.com/${COMPANY_DATA.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className={`flex items-center text-gray-300 hover:text-${COLOR_PRIMARY}-400 transition`}>
                                    <Instagram className="w-6 h-6 mr-2" /> Instagram
                                </a>
                                <a href={`https://tiktok.com/@${COMPANY_DATA.contact.tiktok.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className={`flex items-center text-gray-300 hover:text-${COLOR_PRIMARY}-400 transition gap-2`}>
                                    <Music2 />
                                    TikTok
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <img src="/hero-supplies.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection