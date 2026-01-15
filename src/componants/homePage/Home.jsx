import HeroSection from "./HeroSection"
import StaticAboutSection from "../aboutPage/StaticAboutSection";
import ServicesByIndustry from "../services/ServicesByIndustry";
import WhyChooseUs from "../services/WhyChooseUs";
import ClientTestimonials from "../testomonial/ClientTestimonials";
import ContactUs from "../contact/ContactUs";
import Footer from "../footer/Footer";
import EdTechSolutions from "../solution/EdTechSolutions";
import HealthTechSolutions from "../solution/HealthTechSolutions";
import EnterpriseSolutions from "../solution/EnterpriseSolutions";
import EcommerceSolutions from "../solution/EcommerceSolutions";
const Home = () => {
    return (
        <>
            <HeroSection />
            <StaticAboutSection />
            <ServicesByIndustry />
            <WhyChooseUs />
            <ClientTestimonials />
            <ContactUs />
            <EdTechSolutions/>
            <HealthTechSolutions/>
            <EnterpriseSolutions/>
            <EcommerceSolutions/>
        </>
    )
}
export default Home;