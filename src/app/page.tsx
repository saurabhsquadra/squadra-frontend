import ClientsSection from "./_components/_landingPageComponents/ClientsSection";
import PeoplesWhoGetThingsDone from "./_components/_landingPageComponents/PeoplesWoGetsThingsDone";
import CustomerJourneySection from "./_components/_landingPageComponents/CustomerJourneySection";
import ContactUs from "./_components/_landingPageComponents/ContactUs";
import HeroSection from "./_components/_landingPageComponents/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <PeoplesWhoGetThingsDone />
      <CustomerJourneySection />
      <ContactUs />
    </div>
  );
}
