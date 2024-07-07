import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQs";

export default function Home() {
  return (
    <main className="font-giest">
      <Header />
      <div className="mt-24">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
