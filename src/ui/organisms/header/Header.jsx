import React, { useState } from 'react';
import { ChevronDown, Phone, MessageCircle, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: 'salkantay',
      label: 'SALKANTAY TREK',
      submenu: [
        'Salkantay Trek 5 Days',
        'Salkantay Trek 4 Days',
        'Salkantay Trek to Machu Picchu',
        'Short Salkantay Trek'
      ]
    },
    {
      id: 'inca',
      label: 'INCA TRAIL',
      submenu: [
        'Classic Inca Trail 4 Days',
        'Short Inca Trail 2 Days',
        'Inca Trail 5 Days',
        'Private Inca Trail'
      ]
    },
    {
      id: 'machu-picchu',
      label: 'MACHU PICCHU TOURS',
      submenu: [
        'Machu Picchu Day Tour',
        'Machu Picchu by Train',
        'Machu Picchu + Huayna Picchu',
        'Machu Picchu Private Tour'
      ]
    },
    {
      id: 'rainbow',
      label: 'RAINBOW MOUNTAIN',
      submenu: [
        'Rainbow Mountain Day Trip',
        'Rainbow Mountain 2 Days',
        'Alternative Route',
        'Private Tour'
      ]
    },
    {
      id: 'ausangate',
      label: 'AUSANGATE TREK',
      submenu: [
        'Ausangate Trek 5 Days',
        'Ausangate Trek 4 Days',
        'Ausangate + Rainbow Mountain',
        'Ausangate Circuit'
      ]
    },
    {
      id: 'alternative',
      label: 'ALTERNATIVE PERU TREKS',
      submenu: [
        'Lares Trek',
        'Choquequirao Trek',
        'Ancascocha Trek',
        'Inca Jungle Trek'
      ]
    },
    {
      id: 'cusco',
      label: 'CUSCO DAY TRIPS',
      submenu: [
        'Sacred Valley Tour',
        'City Tour Cusco',
        'South Valley Tour',
        'Maras Moray Tour'
      ]
    },
    {
      id: 'about',
      label: 'ABOUT US',
      submenu: [
        'Our Company',
        'Our Team',
        'Sustainability',
        'Testimonials'
      ]
    }
  ];

  const handleMouseEnter = (id) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-gray-800 text-white py-2 px-4 text-center text-sm">
        <p>
          Secure your adventure on the{' '}
          <span className="text-orange-500 font-semibold">Inca Trail 2026</span> with Salkantay Trekking. Book today and choose the perfect date for you.{' '}
          <span className="text-orange-500 font-semibold underline cursor-pointer">Don't miss this opportunity!</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-orange-500">
                <svg className="w-12 h-12" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M25 5 L30 15 L40 15 L32 22 L35 32 L25 25 L15 32 L18 22 L10 15 L20 15 Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Salkantay</h1>
                <p className="text-xs text-gray-600">TREKKING</p>
                <p className="text-xs text-gray-500">Treks & Expeditions Specialists</p>
              </div>
            </div>
            <div className="text-orange-500 text-3xl font-serif italic border-l-2 border-gray-300 pl-4">
              Peru
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-gray-600">USA/Canada Toll Free: 1 (800) 986-4304</p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Travel Blog</a>
                <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Client Reviews</a>
                <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Social Projects</a>
                <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Contact Us</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">🇫🇷</span>
                <span className="text-gray-700">Español</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">🇧🇷</span>
                <span className="text-gray-700">Português</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Contact Bar */}
        <div className="hidden lg:flex items-center justify-end gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <div className="bg-orange-100 p-2 rounded-full">
              <span className="text-lg">🕐</span>
            </div>
            <span>Mon-Sun 9am-7pm (Peru Time PET)</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <div className="bg-orange-100 p-2 rounded-full">
              <Phone size={16} className="text-orange-500" />
            </div>
            <span>+51 958 191 179</span>
          </div>

          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </button>

          <button className="relative p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition">
            <ShoppingCart size={20} className="text-orange-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
            Enquire Now
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-black">
        <div className="container mx-auto px-4">
          <ul className="hidden lg:flex items-center justify-between">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-white py-4 px-3 text-sm font-medium hover:bg-gray-900 transition">
                  {item.label}
                  <ChevronDown size={16} className={`transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === item.id && (
                  <div className="absolute left-0 top-full bg-white shadow-lg py-2 min-w-64 z-50">
                    {item.submenu.map((subitem, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                      >
                        {subitem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4">
              {navigationItems.map((item) => (
                <div key={item.id} className="border-b border-gray-700">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between text-white py-3 text-sm font-medium"
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.id && (
                    <div className="bg-gray-900 py-2">
                      {item.submenu.map((subitem, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-6 py-2 text-sm text-gray-300 hover:text-orange-500"
                        >
                          {subitem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;