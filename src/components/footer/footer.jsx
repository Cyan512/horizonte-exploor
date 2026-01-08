import { Send, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { assets } from "@/assets/img/index.js";

export default function Footer() {
    const instagramPosts = [1, 2, 3, 4, 5, 6];
    return (
        <footer className="bg-title text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between pb-12 border-b border-gray-500 mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-md text-center lg:text-left">
                            Get Updated The Latest Newsletter
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center  gap-6 lg:w-auto lg:ml-auto">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="border px-8 py-3 rounded-full outline-none"
                        />
                        <button className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-full font-normal flex items-center gap-2 transition-colors justify-center">
                            Subscribe Now
                            <Send size={16} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div>
                            <a href="/" className="py-2">
                                <img src={assets.logo} alt="" className="h-14 w-auto" />
                            </a>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Rapidiously myocardinate cross-platform intellectual capital model.
                            Appropriately create interactive infrastructures.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href=""
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href=""
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href=""
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href=""
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
                                <a href="/" className="font-bold">
                                    Inicio
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
                                <a href="/about" className="font-bold">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
                                <a href="/destination" className="font-bold">
                                    Destinos
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
                                <a href="/contact" className="font-bold">
                                    Contactanos
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-primary">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p>+01 234 567 890</p>
                                    <p>+09 876 543 210</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-primary">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p>mailinfo00@tourm.com</p>
                                    <p>support24@tourm.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-primary">
                                    <MapPin size={18} />
                                </div>
                                <p>789 Inner Lane, Holy park, California, USA</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6">Instagram Post</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {instagramPosts.map((post) => (
                                <div
                                    key={post}
                                    className="aspect-square  rounded-md overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={`https://picsum.photos/id/${post + 20}/200/200`}
                                        alt="Instagram"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500 pt-8 text-center">
                <p className="text-sm">Copyright 2025 Tourm. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
