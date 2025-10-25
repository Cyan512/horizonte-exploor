import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function About() {
  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
          alt="About Tourm"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-semibold mb-2">About Tourm</h1>
          <p className="text-sm">Home → About Tourm</p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="src/assets/img/2c87164991b482124d00afe8c623c41f_upscayl_3x_upscayl-standard-4x.webp"
            alt="Travel 1"
            className="rounded-2xl shadow-md w-full h-56 object-cover"
          />
          <img
            src="src/assets/img/3eda36d1d9fedff59ed7a4c71a9ae7c3_upscayl_3x_upscayl-standard-4x.webp"
            alt="Travel 2"
            className="rounded-2xl shadow-md w-full h-56 object-cover"
          />
          <img
            src="src/assets/img/493d194e44c01beeae879b039417bb68_upscayl_3x_upscayl-standard-4x.webp"
            alt="Travel 3"
            className="rounded-2xl shadow-md w-full h-56 object-cover col-span-2"
          />
        </div>

        <div>
          <p className="font-style text-3xl text-color-medium mb-4">
            Welcome To Tourm
          </p>
          <h2 className="text-4xl font-bold text-[#113D48] mb-6">
            We are world reputed travel agency
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humour randomised
            words.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Leiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <i className="fas fa-check-circle text-color-medium text-lg mt-1 mr-3 flex-shrink-0"></i>
              <div>
                <h4 className="font-semibold text-color-darkest mb-1">
                  Exclusive Trip
                </h4>
                <p className="text-gray-600 text-sm">
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-shield-alt text-color-medium text-lg mt-1 mr-3 flex-shrink-0"></i>
              <div>
                <h4 className="font-semibold text-color-darkest mb-1">
                  Safety First Always
                </h4>
                <p className="text-gray-600 text-sm">
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-user-tie text-color-medium text-lg mt-1 mr-3 flex-shrink-0"></i>
              <div>
                <h4 className="font-semibold text-color-darkest mb-1">
                  Professional Guide
                </h4>
                <p className="text-gray-600 text-sm">
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#113D48] hover:bg-[#0a2a33] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Contact With Us <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
      {/* Services */}
      <div className="bg-color-lightest py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-style text-3xl text-color-medium mb-4">
              Services we Offer
            </h1>
            <h2 className="text-2xl md:text-3xl text-color-medium font-medium">
              Our Amazing services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Photo Shoot",
                listings: "20 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Tour Guide",
                listings: "22 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Cozy Event",
                listings: "23 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Interesting Rest",
                listings: "24 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Kayaking",
                listings: "25 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Safe Flight",
                listings: "26 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Entertainment",
                listings: "27 Lining",
              },
              {
                image:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                title: "Delicisious Food",
                listings: "28 Lining",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#E9F6F9] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-color-darkest mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.listings}</p>
                  <button className="border-2 border-[#36B2D1] text-[#36B2D1] hover:bg-[#36B2D1] hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                    Book Now <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tour Guides */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-style text-3xl text-color-medium mb-4">
              Meet with Guide
            </h1>
            <h2 className="text-2xl md:text-3xl text-color-medium font-medium">
              Meet with Tour Guide
            </h2>
          </div>

          {/* Guides - Centrados con imágenes de fondo y círculos */}
          <div className="flex justify-center items-center space-x-8">
            {[
              {
                name: "Michel Smith",
                role: "Tourist Guide",
                profileImg:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                backgroundImg:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                social: {
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Michel Smith",
                role: "Tourist Guide",
                profileImg:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                backgroundImg:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                social: {
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Michel Smith",
                role: "Tourist Guide",
                profileImg:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                backgroundImg:
                  "src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp",
                social: {
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
            ].map((guide, idx) => (
              <div key={idx} className="flex-shrink-0 w-80">
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
                        <CiFacebook className="text-gray-500 group-hover:text-white text-xl" />
                      </a>
                      <a
                        href={guide.social.twitter}
                        className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <CiTwitter className="text-gray-500 group-hover:text-white text-xl" />
                      </a>
                      <a
                        href={guide.social.instagram}
                        className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <CiInstagram className="text-gray-500 group-hover:text-white text-xl" />
                      </a>
                      <a
                        href={guide.social.linkedin}
                        className="w-10 h-10 bg-gray-100 hover:bg-[#36B2D1] rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <CiLinkedin className="text-gray-500 group-hover:text-white text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-color-lightest py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-style text-4xl text-color-darkest mb-4">
              Testimonials
            </h1>
            <h2 className="text-2xl text-color-medium">
              What Clients Say About Us
            </h2>
          </div>

          <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-8">
            {[
              {
                name: "Maria Doe",
                text: "A home that perfectly blends sustainability with luxury. The commitment to eco-friendly living is amazing.",
              },
              {
                name: "Alex Jordan",
                text: "Solar panels and high-performance insulation make this place energy efficient and comfortable.",
              },
              {
                name: "Andrew Simon",
                text: "The home boasts sleek, contemporary architecture with clean lines and expansive windows.",
              },
              {
                name: "Sarah Wilson",
                text: "Exceptional service and attention to detail. Can't wait to book our next adventure!",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 w-80">
                <div className="card-hover transition-smooth bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-color-light to-color-medium flex items-center justify-center text-white text-2xl font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-color-darkest">
                        {testimonial.name}
                      </h3>
                      <p className="text-color-medium">Traveler</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Photo Collage Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-color-darkest text-center mb-8">
              Our Travel Memories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2">
                <img
                  src="src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp"
                  alt="Travel Memory 1"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
              <div>
                <img
                  src="src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp"
                  alt="Travel Memory 2"
                  className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
              <div>
                <img
                  src="src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp"
                  alt="Travel Memory 3"
                  className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
              <div>
                <img
                  src="src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp"
                  alt="Travel Memory 4"
                  className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
              <div>
                <img
                  src="src/assets/img/1f008394f3aadd458ff475a04c470d9c_upscayl_3x_upscayl-standard-4x.webp"
                  alt="Travel Memory 5"
                  className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
