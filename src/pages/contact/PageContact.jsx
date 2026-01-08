import { Send, Phone, Mail, MapPin, User, ChevronDown, MessageSquare, Play } from "lucide-react";
import { assets } from "@/assets/img/index.js";

export default function PageContact() {
    return (
        <>
            <section className="bg-gray-300 py-40 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl font-bold">Contact</h1>
                </div>
            </section>
            <main>
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h4 className="text-primary text-2xl mb-2">Get In Touch</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-title uppercase tracking-tight">
                                Our Contact Informatión
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Address */}
                            <div className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                <div className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div className="text-center sm:text-left flex-1">
                                    <h4 className="text-lg font-bold text-title mb-1">
                                        Our Address
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        2690 Hiltona Street Victoria Road, New York, Canada
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                <div className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                    <Phone size={28} />
                                </div>
                                <div className="text-center sm:text-left flex-1">
                                    <h4 className="text-lg font-bold text-title mb-1">
                                        Phone Number
                                    </h4>
                                    <p className="text-gray-500 text-sm font-medium">
                                        +01 234 567 890
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">
                                        +09 876 543 210
                                    </p>
                                </div>
                            </div>

                            {/* Email — centrada cuando queda sola en md */}
                            <div
                                className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-100
                    flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6
                    md:col-span-2 md:justify-self-center lg:col-span-1"
                            >
                                <div className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                    <Mail size={28} />
                                </div>
                                <div className="text-center sm:text-left flex-1">
                                    <h4 className="text-lg font-bold text-title mb-1">
                                        Email Address
                                    </h4>
                                    <p className="text-gray-500 text-sm font-medium">
                                        mailinfo00@tourm.com
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">
                                        support24@tourm.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="relative w-full min-h-150 flex items-center py-20 overflow-hidden"
                    style={{ backgroundImage: `url(${assets.hero_bg_1_1})` }}
                >
                    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg">
                            <h2 className="text-3xl font-bold text-title mb-8">Book A Tour</h2>
                            <form className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full border border-gray-200 rounded-lg py-4 px-5 pr-12 outline-none focus:border-primary transition-colors text-sm text-gray-500"
                                    />
                                    <User
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                        size={20}
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Your Mail"
                                        className="w-full border border-gray-200 rounded-lg py-4 px-5 pr-12 outline-none focus:border-primary transition-colors text-sm text-gray-500"
                                    />
                                    <Mail
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                        size={20}
                                    />
                                </div>
                                <div className="relative">
                                    <select className="w-full border border-gray-200 rounded-lg py-4 px-5 pr-12 outline-none focus:border-primary transition-colors text-sm text-gray-500 appearance-none bg-white cursor-pointer">
                                        <option>Select Tour Type</option>
                                        <option>Adventure</option>
                                        <option>Wildlife</option>
                                        <option>Cruises</option>
                                    </select>
                                    <ChevronDown
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                        size={20}
                                    />
                                </div>
                                <div className="relative">
                                    <textarea
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full border border-gray-200 rounded-lg py-4 px-5 pr-12 outline-none focus:border-primary transition-colors text-sm text-gray-500 resize-none"
                                    ></textarea>
                                    <MessageSquare
                                        className="absolute right-4 top-6 text-gray-500"
                                        size={20}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-title hover:bg-title/90 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all mt-4 group"
                                >
                                    Send Message
                                    <Send
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </form>
                        </div>
                        <div className="grow hidden md:flex justify-center items-center ">
                            <button className="relative group">
                                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping scale-150 duration-2000"></div>
                                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping scale-125 duration-1500"></div>
                                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                    <Play size={40} fill="white" className="ml-1" />
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="w-full h-112.5 relative overflow-hidden">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.137812833132!2d89.2319246!3d24.0121708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84e4f8a3d5f1%3A0x6b772c7a0e365824!2sPabna%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-20"
                    ></iframe>
                </section>
            </main>
        </>
    );
}
