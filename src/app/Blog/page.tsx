import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blog from "@/components/BlockSection";

export default function Home() {
  return (
    <main className="font-giest">
     
      <Header />
     <div className="mt-24">
     <Blog/>
     </div>
   
      <Footer/>
    </main>
  );
}
