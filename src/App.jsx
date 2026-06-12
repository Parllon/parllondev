// src/App.jsx
import { ToastProvider } from "@/components/ui/Toast/Toast";
import Navigation from "@/components/sections/Navigation/Navigation";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Resume from "@/components/sections/Resume/Resume";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons/FloatingButtons";

export default function App() {
  return (
    <ToastProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </ToastProvider>
  );
}
