// import StaticAboutSection from "./componants/aboutPage/StaticAboutSection";
// import ContactUs from "./componants/contact/ContactUs";
// import Footer from "./componants/footer/Footer";
// import HeroSection from "./componants/homePage/HeroSection";
// import ProductsSection from "./componants/homePage/ProductsSection";
// import Header from "./componants/layout/Header";
// import CloudServicesSection from "./componants/services/CloudServicesSection";
// import DigitalMarketingSection from "./componants/services/DigitalMarketingSection";
// import FullStackDevelopmentSection from "./componants/services/FullStackDevelopmentSection";
// import MobileAppDevelopmentSection from "./componants/services/MobileAppDevelopmentSection";
// import ProcessSection from "./componants/services/ProcessSection";
// import ServicesByIndustry from "./componants/services/ServicesByIndustry";
// import TestingServicesSection from "./componants/services/TestingServicesSection";
// import WebInfoSection from "./componants/services/WebInfoSection";
// import WhyChooseUs from "./componants/services/WhyChooseUs";
// import ClientTestimonials from "./componants/testomonial/ClientTestimonials";

// function App() {
//   return (
//     <>
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0)`,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>
//        <Header />

//        <HeroSection />
//       <StaticAboutSection />
//       <ServicesByIndustry />
//       <WhyChooseUs />
//       <ClientTestimonials />
//       <ContactUs />
//       <Footer />
//       <WebInfoSection/>
//       <MobileAppDevelopmentSection/>
//       <DigitalMarketingSection/>
//       <CloudServicesSection/>
//       <TestingServicesSection/>
//       <FullStackDevelopmentSection/>
//       <ProcessSection/>
//     </>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "./componants/homePage/Home.jsx";
import Header from "./componants/layout/Header.jsx";
import Footer from "./componants/footer/Footer.jsx";
import StaticAboutSection from "./componants/aboutPage/StaticAboutSection.jsx";
import WebInfoSection from "./componants/services/WebInfoSection.jsx";
import MobileAppDevelopmentSection from "./componants/services/MobileAppDevelopmentSection.jsx";
import DigitalMarketingSection from "./componants/services/DigitalMarketingSection.jsx";
import CloudServicesSection from "./componants/services/CloudServicesSection.jsx";
import TestingServicesSection from "./componants/services/TestingServicesSection.jsx";
import FullStackDevelopmentSection from "./componants/services/FullStackDevelopmentSection.jsx";
import ProcessSection from "./componants/services/ProcessSection.jsx";
import ContactUs from "./componants/contact/ContactUs.jsx";
import ScrollToTop from "./componants/layout/ScrollToTop.jsx";
import EnterpriseSolutions from "./componants/solution/EnterpriseSolutions.jsx";
import EdTechSolutions from "./componants/solution/EdTechSolutions.jsx";
import HealthTechSolutions from "./componants/solution/HealthTechSolutions.jsx";
import ECommerceSolutions from "./componants/solution/EcommerceSolutions.jsx";
import PortfolioPage from "./componants/homePage/PortfolioPage.jsx";
import Portfolio from "./componants/portfolio/Portfolio.jsx";
import ProjectDetail from "./componants/portfolio/ProjectDetail.jsx";
import DedicatedTeam from "./componants/why-choose-us/DedicatedTeam.jsx";
import ScalableArchitecture from "./componants/why-choose-us/ScalableArchitecture.jsx";
import PremiumUIUXDesign from "./componants/why-choose-us/PremiumUIUXDesign.jsx";
import LightningFastDelivery from "./componants/why-choose-us/LightningFastDelivery.jsx";
import GoalOrientedApproach from "./componants/why-choose-us/GoalOrientedApproach.jsx";
import EnterpriseSecurity from "./componants/why-choose-us/EnterpriseSecurity.jsx";
function App() {
  return (
    <>
      {/* Global Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<StaticAboutSection />} />

        <Route path="/services/web" element={<WebInfoSection />} />
        <Route path="/services/app" element={<MobileAppDevelopmentSection />} />
        <Route path="/services/dg" element={<DigitalMarketingSection />} />
        <Route path="/services/cloud" element={<CloudServicesSection />} />
        <Route path="/services/testing" element={<TestingServicesSection />} />
        <Route path="/services/fullstack" element={<FullStackDevelopmentSection />} />

        <Route path="/solution/ec" element={<ECommerceSolutions />} />
        <Route path="/solution/hk" element={<HealthTechSolutions />} />
        <Route path="/solution/ed" element={<EdTechSolutions />} />
        <Route path="/solution/et" element={<EnterpriseSolutions />} />

        <Route path="/whyChooseUs/dedicatedTeam" element={<DedicatedTeam />} />
        <Route path="/whyChooseUs/enterpriseSecurity" element={<EnterpriseSecurity />} />
        <Route path="/whyChooseUs/goalOrientedApproach" element={<GoalOrientedApproach />} />
        <Route path="/whyChooseUs/lightningFastDelivery" element={<LightningFastDelivery />} />
        <Route path="/whyChooseUs/premiumUIUXDesign" element={<PremiumUIUXDesign />} />
        <Route path="/whyChooseUs/scalableArchitecture" element={<ScalableArchitecture />} />


        {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />

        <Route path="/process" element={<ProcessSection />} />

        <Route path="/contact" element={<ContactUs />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
