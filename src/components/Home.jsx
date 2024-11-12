import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Footer from "./Footer";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <HeroSection />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
