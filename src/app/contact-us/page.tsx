import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUsSection";

export default function Home() {
  return (
    <main className="font-giest">
      <Header />
      <div className="mt-24">
        <ContactUsSection />
      </div>

      <Footer />
    </main>
  );
}
