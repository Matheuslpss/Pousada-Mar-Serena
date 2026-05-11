import { AboutSection } from "@/components/AboutSection";
import { BookingModal } from "@/components/BookingModal";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RoomsSection } from "@/components/RoomsSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <RoomsSection />
        <BenefitsSection />
        <TestimonialSection />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
