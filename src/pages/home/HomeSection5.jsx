import { blogs } from "@/data/blog";
import { ArrowRight, Calendar, User } from "lucide-react";
import React from "react";

export default function HomeSection5() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Encabezado de la sección */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h4 className="font-serif text-[#1EB3D7] text-2xl italic">
                            Our Newss & Blog
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#123E46]">
                            Latest News & Blog
                        </h2>
                    </div>
                    <button className="bg-[#123E46] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#1EB3D7] transition-all group">
                        View All Blog
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </button>
                </div>

                {/* Cuadrícula de artículos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            {/* Contenedor de Imagen con Fecha */}
                            <div className="relative rounded-3xl overflow-hidden h-72 mb-6">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Badge de Fecha */}
                                <div className="absolute top-4 left-4 bg-[#1EB3D7] text-white px-4 py-2 rounded-xl text-center shadow-lg">
                                    <span className="block text-lg font-bold leading-none">
                                        {blog.date.split(" ")[0]}
                                    </span>
                                    <span className="text-xs uppercase font-medium">
                                        {blog.date.split(" ")[1]}
                                    </span>
                                </div>
                                {/* Badge de Categoría */}
                                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-xs font-bold">
                                    {blog.category}
                                </div>
                            </div>

                            {/* Meta Información */}
                            <div className="flex items-center gap-6 text-gray-400 text-sm mb-4">
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#1EB3D7]" />
                                    <span>By {blog.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#1EB3D7]" />
                                    <span>{blog.date}, 2025</span>
                                </div>
                            </div>

                            {/* Título y Enlace */}
                            <h3 className="text-2xl font-bold text-[#123E46] mb-4 group-hover:text-[#1EB3D7] transition-colors line-clamp-2">
                                {blog.title}
                            </h3>

                            <button className="flex items-center gap-2 text-[#123E46] font-bold text-sm uppercase tracking-wider group/link">
                                Read More
                                <div className="w-8 h-8 rounded-full bg-[#F0F9FB] flex items-center justify-center group-hover/link:bg-[#1EB3D7] group-hover/link:text-white transition-all">
                                    <ArrowRight size={14} />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
