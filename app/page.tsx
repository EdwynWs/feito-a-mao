import Header from "../components/Header";
import Hero from "../components/Hero";
import Processo from "../components/Processo";
import Trabalhos from "../components/Trabalhos";
import Servicos from "../components/Servicos";
import Diferenciais from "../components/Diferenciais";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Processo />

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