import StaticAboutSection from "./componants/aboutPage/StaticAboutSection";
import ContactUs from "./componants/contact/ContactUs";
import Footer from "./componants/footer/Footer";
import HeroSection from "./componants/homePage/HeroSection";
import ProductsSection from "./componants/homePage/ProductsSection";
import Header from "./componants/layout/Header";
import ServicesByIndustry from "./componants/services/ServicesByIndustry";
import WhyChooseUs from "./componants/services/WhyChooseUs";
import ClientTestimonials from "./componants/testomonial/ClientTestimonials";

function App() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <Header />
      <HeroSection />
      {/* <ProductsSection/> */}
      <StaticAboutSection />
      <ServicesByIndustry />
      <WhyChooseUs />
      <ClientTestimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
