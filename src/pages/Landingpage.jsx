import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeComponent from "../components/MarqueSection";
import TradeComponent from "../components/TradeComponent";
import TabComponent from "../components/TabSection";
import NFTStepsComponent from "../components/NFTStepsComponent";
import AccordionComponent from "../components/Accordion Component"
import Footer from "../components/Footer";

const Landingpage = () => {
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeComponent />
      <TradeComponent />
      <TabComponent />
      <NFTStepsComponent />
      <AccordionComponent />
      <Footer />
    </>
  );
};
export default Landingpage;
