import React from 'react'

export default function SocialCard() {
    return (
        <div  className="flex-shrink-0 w-80">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                {/* Sección con imagen de fondo y círculo del guía */}
                <div className="relative h-48 bg-gray-200">
                    {/* Imagen de fondo */}
                    <img
                        src={guide.backgroundImg}
                        alt={`${guide.name} background`}
                        className="w-full h-full object-cover"
                    />

                    {/* Círculo con foto del guía superpuesto */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src={guide.profileImg}
                                alt={guide.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Información del guía */}
                <div className="pt-16 pb-6 px-6">
                    <h3 className="text-xl font-bold text-color-darkest mb-2">
                        {guide.name}
                    </h3>
                    <p className="text-color-medium font-semibold mb-6">
                        Tourist Guide
                    </p>

                    {/* Redes sociales con React Icons */}
                    <div className="flex justify-center space-x-4">
                        <a
                            href={guide.social.facebook}
                            className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                        </a>
                        <a
                            href={guide.social.twitter}
                            className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                        </a>
                        <a
                            href={guide.social.instagram}
                            className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                        </a>
                        <a
                            href={guide.social.linkedin}
                            className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
