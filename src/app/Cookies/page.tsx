import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiesPolicy from "@/components/Cookies";

export default function Home() {
  return (
    <main className="font-giest">
      <Header />
      <div className="mt-24">
        <CookiesPolicy />
      </div>

      <Footer />
    </main>
  );
}
