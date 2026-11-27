import PromoBar from "./components/PromoBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ProblemSolution from "./components/ProblemSolution";
import ValueStack from "./components/ValueStack";
import SamplePreview from "./components/SamplePreview";
import WhyParents from "./components/WhyParents";
import Testimonials from "./components/Testimonials";
import PricingCard from "./components/PricingCard";
import Guarantee from "./components/Guarantee";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import StickyMobileCta from "./components/StickyMobileCta";

export default function App() {
  return (
    <div className="pb-20 sm:pb-0">
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <ValueStack />
        <SamplePreview />
        <WhyParents />
        <Testimonials />
        <PricingCard />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
