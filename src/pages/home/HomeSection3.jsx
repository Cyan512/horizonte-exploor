import { ArrowRight, Plane, ShieldCheck, Users } from "lucide-react";
import React from "react";

export default function HomeSection3() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                {/* --- LADO IZQUIERDO: COMPOSICIÓN DE IMÁGENES --- */}
                <div className="lg:w-1/2 relative">
                    {/* Círculo Principal Grande */}
                    <div className="relative w-80 h-80 md:w-112.5 md:h-112.5 rounded-full border-15 border-[#F0F9FB] overflow-hidden z-10">
                        <img
                            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800"
                            alt="Travelers"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Círculo Mediano Superpuesto (Arriba Izquierda) */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 md:w-56 md:h-56 rounded-full border-10 border-white overflow-hidden z-20 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400"
                            alt="Adventure"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Círculo Pequeño (Derecha) */}
                    <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 rounded-full border-8 border-white overflow-hidden z-20 shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=400"
                            alt="Explore"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Elementos Decorativos (Iconos flotantes como en la imagen) */}
                    <div className="absolute bottom-10 -left-5 bg-white p-4 rounded-2xl shadow-2xl z-30 animate-bounce">
                        <div className="bg-[#1EB3D7] p-2 rounded-lg text-white">
                            <Plane size={24} />
                        </div>
                    </div>
                </div>

                {/* --- LADO DERECHO: CONTENIDO TEXTUAL --- */}
                <div className="lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-serif text-[#1EB3D7] text-2xl italic">
                            Welcome To Tourm
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#123E46] leading-tight">
                            We are world reputeted travel agency
                        </h2>
                    </div>

                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        There are many variations of passages of available but the majority have
                        suffered alteration in some form, by injected hum randomised words.
                    </p>

                    {/* Lista de Beneficios */}
                    <div className="space-y-6 pt-4">
                        {/* Beneficio 1 */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-14 h-14 rounded-full bg-[#F0F9FB] flex items-center justify-center text-[#1EB3D7] group-hover:bg-[#1EB3D7] group-hover:text-white transition-all shrink-0">
                                <Plane size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#123E46]">Exclusive Trip</h3>
                                <p className="text-gray-400 text-sm">
                                    There are many variations of passages of available but the
                                    majority.
                                </p>
                            </div>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-14 h-14 rounded-full bg-[#F0F9FB] flex items-center justify-center text-[#1EB3D7] group-hover:bg-[#1EB3D7] group-hover:text-white transition-all shrink-0">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#123E46]">
                                    Safety First Always
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    There are many variations of passages of available but the
                                    majority.
                                </p>
                            </div>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-14 h-14 rounded-full bg-[#F0F9FB] flex items-center justify-center text-[#1EB3D7] group-hover:bg-[#1EB3D7] group-hover:text-white transition-all shrink-0">
                                <Users size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#123E46]">
                                    Professional Guide
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    There are many variations of passages of available but the
                                    majority.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botón de Acción */}
                    <div className="pt-6">
                        <button className="bg-[#123E46] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#1EB3D7] transition-all group">
                            Contact With Us
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
