import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { tourCategories } from '@/assets/data/tourCategories.js'
import { assets } from '@/assets/img'

export default function HomePage() {
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
                                className="relative bg-medium px-8 py-4 rounded-full overflow-hidden group cursor-pointer"
                            >
                                <span className='absolute inset-0 bg-darkest rounded-full transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0' />
                                <span className='relative text-base z-10'>
                                    Explore Tours
                                </span>
                            </Link>
                            <Link to='about'
                                className="relative border  px-8 py-4 rounded-full overflow-hidden group cursor-pointer"
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
                    <div>
                        <div>
                            <span>
                                Top Destination
                            </span>
                            <h2>
                                Our Featured Destination
                            </h2>
                        </div>
                        <div>
                            {tourCategories.map((cardCategory) => {
                                return <CategoryCard key={cardCategory.id} category={cardCategory} />
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <div>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <span>
                                Let’s Go Together
                            </span>
                            <h2>
                                Plan Your Trip With Us
                            </h2>
                            <p>
                                There are many variations of passages available, but the majority have
                                suffered alteration in some form, by injected humour or randomised
                                words which don't look even slightly.
                            </p>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
