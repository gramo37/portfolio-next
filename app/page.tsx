import { About } from "../components/Portfolio/About";
import Dashboard from "../components/Portfolio/Dashboard";
import Experience from "../components/Portfolio/Experience";
import Navbar from "../components/Portfolio/Navbar";

export default function Page() {
  return (
    <div>
        <Navbar />
        <Dashboard />
        <About />
        <Experience />
    </div>
  )
}
