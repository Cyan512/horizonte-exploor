import { Routes, Route } from 'react-router-dom'
import Home from '@/features/home/pages/HomePage'
import About from '@/features/about/pages/AboutPage'
import Contact from '@/features/contact/pages/ContactPage'
import Destinations from '@/features/destination/pages/DestinationDetailPage'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/destination" element={<Destinations />} />
            </Routes>
        </>

    )
}
