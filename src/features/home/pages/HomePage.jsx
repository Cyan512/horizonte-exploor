import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { tourCategories } from '@/assets/data/tourCategories.js'
import { assets } from '@/assets/img'
import { useState } from 'react';
import { MapPinCheckInside, Clock } from 'lucide-react';

export default function HomePage() {
    const [active, setActive] = useState(1);
    return (
        <>
            <section style={{ backgroundImage: `url(${assets.img_51})`, }} className='relative flex items-center justify-center h-screen bg-cover bg-center text-white'>
                <div className='absolute inset-0 bg-black/50' />
                <div className='z-50 max-w-7xl w-full px-4 flex items-center'>
                    <div className='flex-2 text-center md:text-left'>
                        <span className='font-style text-3xl md:text-4xl'>
                            Get unforgetable pleasure with us
                        </span>
                        <h1 className='text-5xl md:text-7xl leading-tight font-semibold'>
                            Let´s make your best trip with us
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-8">
                            <Link to='destination'
                                className="relative inline-block bg-medium px-8 py-4 rounded-full overflow-hidden group cursor-pointer"
                            >
                                <span className='absolute inset-0 bg-darkest rounded-full transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0' />
                                <span className='relative text-base z-10'>
                                    Explore Tours
                                </span>
                            </Link>
                            <Link to='about'
                                className="relative inline-block border px-8 py-4 rounded-full overflow-hidden group cursor-pointer"
                            >
                                <span className='absolute inset-0 bg-white rounded-full transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0' />
                                <span className='relative text-base  z-10 group-hover:text-black duration-700'>
                                    Our Services
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 hidden md:block' />
                </div>
            </section>
            <main>
                <section>
                    <div className='max-w-7xl w-full mx-auto px-4 flex flex-col justify-center'>
                        <div className='flex flex-col items-center mb-8'>
                            <span className='font-style text-3xl md:text-4xl'>
                                Top Destination
                            </span>
                            <h2 className='text-4xl md:text-5xl font-semibold leading-snug'>
                                Our Featured Destination
                            </h2>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 h-[80vh] md:h-160'>
                            {tourCategories.map((cardCategory) => {
                                const isActive = active === cardCategory.id;
                                return <CategoryCard key={cardCategory.id} category={cardCategory} isActive={isActive} onClick={() => setActive(cardCategory.id)} />
                            })}
                        </div>
                    </div>
                </section>
                <section className='flex justify-center py-16'>
                    <div className='max-w-7xl px-4 flex flex-col md:flex-row gap-8 items-center'>
                        <div className='flex-1 grid grid-cols-2 gap-4'>
                            <figure>
                                <img src={assets.img_44} className='w-full h-full object-cover rounded-full rounded-br-none' />
                            </figure>
                            <div className='flex flex-col gap-4'>
                                <figure>
                                    <img src={assets.img_45} className='w-full h-full object-cover rounded-full rounded-bl-none' />
                                </figure>
                                <figure>
                                    <img src={assets.img_46} className='w-full h-full object-cover rounded-full rounded-bl-none' />
                                </figure>
                            </div>
                        </div>
                        <div className='flex-1 text-center md:text-left'>
                            <span className='font-style text-3xl md:text-4xl'>
                                Let’s Go Together
                            </span>
                            <h2 className='text-4xl md:text-5xl font-semibold leading-snug'>
                                Plan Your Trip With Us
                            </h2>
                            <p className='text-base md:text-lg leading-snug mb-7'>
                                There are many variations of passages available, but the majority have
                                suffered alteration in some form, by injected humour or randomised
                                words which don't look even slightly.
                            </p>
                            <div className='flex flex-col gap-7 mb-7'>
                                <article className='flex flex-col sm:flex-row items-center gap-4'>
                                    <div className='border rounded-full w-16 h-16 flex items-center justify-center bg-white shadow-md'>
                                        <MapPinCheckInside size={24} />
                                    </div>
                                    <div className='pl-0 sm:pl-2 text-center sm:text-left'>
                                        <h3 className='text-xl md:text-2xl font-semibold'>Exclusive Trip</h3>
                                        <p className='text-base'>There are many variations of passages available.</p>
                                    </div>
                                </article>
                                <article className='flex flex-col sm:flex-row items-center gap-4'>
                                    <div className='border rounded-full w-16 h-16 flex items-center justify-center bg-white shadow-md'>
                                        <Clock size={24} />
                                    </div>
                                    <div className='pl-0 sm:pl-2 text-center sm:text-left'>
                                        <h3 className='text-xl md:text-2xl font-semibold'>Professional Guide</h3>
                                        <p className='text-base'>There are many variations of passages available.</p>
                                    </div>
                                </article>
                                <article className='flex flex-col sm:flex-row items-center gap-4'>
                                    <div className='border rounded-full w-16 h-16 flex items-center justify-center bg-white shadow-md'>
                                        <Clock size={24} />
                                    </div>
                                    <div className='pl-0 sm:pl-2 text-center sm:text-left'>
                                        <h3 className='text-xl md:text-2xl font-semibold'>Professional Guide</h3>
                                        <p className='text-base'>There are many variations of passages available.</p>
                                    </div>
                                </article>
                            </div>

                            <Link
                                className="relative inline-block bg-medium px-8 py-4 rounded-full overflow-hidden group cursor-pointer text-whie"
                            >
                                <span className='absolute inset-0 bg-darkest rounded-full transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0' />
                                <span className='relative text-base z-10'>
                                    Explore Tours
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
