import { About } from "../components/Portfolio/About";
import Contact from "../components/Portfolio/Contact";
import Dashboard from "../components/Portfolio/Dashboard";
import Experience from "../components/Portfolio/Experience";
import Footer from "../components/Portfolio/Footer";
import Navbar from "../components/Portfolio/Navbar";
import { Projects } from "../components/Portfolio/Projects";
import Skills from "../components/Portfolio/Skills";
import { Toaster } from "../components/ui/toaster";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}
