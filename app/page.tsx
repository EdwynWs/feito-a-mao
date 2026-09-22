import Header from "../components/Header";
import Hero from "../components/Hero";
import Trabalhos from "../components/Trabalhos";
import Servicos from "../components/Servicos";
import Diferenciais from "../components/Diferenciais";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Trabalhos />
        <Servicos />
        <Diferenciais />
        <Sobre />
        <Contato />
      </main>
      <Footer />

      
    </>
  );
}