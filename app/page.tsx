import { About } from "../components/Portfolio/About";
import AppShell from "../components/Portfolio/AppShell";
import Contact from "../components/Portfolio/Contact";
import Dashboard from "../components/Portfolio/Dashboard";
import Experience from "../components/Portfolio/Experience";
import Footer from "../components/Portfolio/Footer";
import { Projects } from "../components/Portfolio/Projects";
import Skills from "../components/Portfolio/Skills";
import { Toaster } from "../components/ui/toaster";

export default function Page() {
  return (
    <AppShell>
      <main>
        <Dashboard />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </AppShell>
  );
}
