import React from "react";

export default function DestinationCardV2({ dest }) {
    return (
        <div className="bg-white border border-slate-200 overflow-hidden transition-all duration-500 hover:border-slate-400 hover:shadow-2xl">
            {/* Imagen */}
            <div className="relative h-80 overflow-hidden bg-slate-100">
                <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                        transform: hoveredCard === dest.id ? "scale(1.08)" : "scale(1)",
                    }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Badge descuento */}
                <div className="absolute top-6 right-6">
                    <div className="bg-amber-500 text-white px-4 py-2 font-bold text-sm tracking-wider">
                        -{dest.discount}%
                    </div>
                </div>

                {/* Categoría */}
                <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-1.5 text-xs font-semibold tracking-widest">
                        {dest.category.toUpperCase()}
                    </div>
                </div>

                {/* Info sobre imagen */}
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-4xl font-serif text-white mb-2 font-light">{dest.name}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span className="tracking-wide">{dest.country}</span>
                    </div>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-8">
                {/* Duración */}
                <div className="flex items-center gap-2 text-slate-600 mb-6 pb-6 border-b border-slate-200">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-wide">{dest.duration}</span>
                </div>

                {/* Incluye */}
                <div className="mb-6">
                    <p className="text-xs text-slate-500 font-semibold tracking-widest mb-3">
                        INCLUYE:
                    </p>
                    <div className="space-y-2">
                        {dest.includes.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-slate-700"
                            >
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Precio */}
                <div className="mb-6 pt-6 border-t border-slate-200">
                    <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-sm text-slate-400 line-through font-light">
                            USD ${dest.originalPrice}
                        </span>
                        <span className="text-xs text-green-700 font-semibold bg-green-50 px-2 py-1 rounded">
                            AHORRA $
                            {parseInt(dest.originalPrice.replace(",", "")) -
                                parseInt(dest.price.replace(",", ""))}
                        </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-light text-slate-900">${dest.price}</span>
                        <span className="text-sm text-slate-500 font-light">USD</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Por persona en habitación doble</p>
                </div>

                {/* Botón */}
                <button className="w-full bg-slate-900 text-white py-4 text-sm font-semibold tracking-widest transition-all duration-300 hover:bg-amber-500 hover:tracking-wider">
                    SOLICITAR INFORMACIÓN
                </button>
            </div>
        </div>
    );
}
