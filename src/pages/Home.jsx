import AboutSection from "../components/AboutSection"
import Hero from "../components/Hero"
import Offer from "../components/Offer"
import Opportunity from "../components/Opportunity"
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <div className="w-full h-full px-8 mt-24">
            <Hero />
            <Opportunity />
            <AboutSection />
            <Offer />
            <Testimonials />

        </div>
    )
}

export default Home