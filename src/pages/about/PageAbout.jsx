import { services } from "@/data/ServicesMock";
import { ArrowRight, ShieldCheck, Plane, Users } from "lucide-react";

export default function PageAbout() {
    return (
        <>
            <section className="bg-gray-300 py-40 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl font-bold">Sobre Nosotros</h1>
                </div>
            </section>
            <main>
                <section className="py-24 overflow-hidden">
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                        <div className="relative w-full lg:w-1/2 h-150">
                            <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-20">
                                <img
                                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800"
                                    alt="Mountain Lake"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute top-1/4 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-30 border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800"
                                    alt="Group Hiking"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-10 w-1/2 h-2/5 rounded-3xl overflow-hidden shadow-xl z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1544918877-460635b6d13e?q=80&w=800"
                                    alt="Luxury Cruise"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <h4 className="text-primary text-2xl mb-2">Welcome To Tourm</h4>
                                <h2 className="text-4xl md:text-5xl font-bold text-title leading-tight">
                                    We are world reputed travel agency
                                </h2>
                            </div>

                            <p className="text-gray-500 leading-relaxed">
                                There are many variations of passages of available but the majority
                                have suffered alteration in some form, by injected hum randomised
                                words. Leiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <ShieldCheck size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-title">
                                            Exclusive Trip
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            There are many variations of passages of available but
                                            the majority.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Plane size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-title">
                                            Safety First Always
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            There are many variations of passages of available but
                                            the majority.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Users size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-title">
                                            Professional Guide
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            There are many variations of passages of available but
                                            the majority.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="bg-title text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary transition-all group">
                                Contact With Us
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Encabezado de Sección */}
                        <div className="text-center mb-16">
                            <h4 className="font-serif text-[#1EB3D7] text-2xl mb-2 italic">
                                Services We Offer
                            </h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#123E46] uppercase tracking-tight">
                                Our Amazing Services
                            </h2>
                        </div>

                        {/* Cuadrícula de Servicios */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-[#F0F9FB] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1EB3D7]/20"
                                >
                                    {/* Imagen del Servicio */}
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Contenido de la Tarjeta */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-[#123E46] mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-6 font-medium">
                                            {service.listings} Listing
                                        </p>

                                        {/* Botón Book Now */}
                                        <button className="inline-flex items-center gap-2 border border-[#1EB3D7] text-[#1EB3D7] px-6 py-2 rounded-lg font-bold hover:bg-[#1EB3D7] hover:text-white transition-colors group/btn">
                                            Book Now
                                            <ArrowRight
                                                size={16}
                                                className="group-hover/btn:translate-x-1 transition-transform"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
