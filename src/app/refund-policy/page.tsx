import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RefundPolicy from "@/components/Refund-policy";

export default function Home() {
  return (
    <main className="font-giest">
     
      <Header />
     <div className="mt-24">
     <RefundPolicy/>
     </div>
   
      <Footer/>
    </main>
  );
}
