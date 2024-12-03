import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Footer from "./Footer";
import Contact from "./Contact";
// import Timeline from "./Timeline";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <HeroSection />
        <About />
        {/* <Timeline /> */}
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
