import { useEffect } from "react";
import Header from "./header";
import Intro from "./Intro";
import Preloader from "./preloader";
import About from "./about";
import Expertise from "./expertise";
import Work from "./works";
import Recommendation from "./recommendation";
import Contact from "./contact";
import Footer from "./footer";
import "./index.css";

import anime from "animejs";

function App() {
  useEffect(() => {
    const blocks = document.querySelectorAll("[data-animate-block]");

    const viewportAnimation = () => {
      const scrollY = window.pageYOffset;

      blocks.forEach((block) => {
        const viewportHeight = window.innerHeight;
        const triggerTop = block.offsetTop + viewportHeight * 0.2 - viewportHeight;
        const blockHeight = block.offsetHeight;
        const blockSpace = triggerTop + blockHeight;
        const inView = scrollY > triggerTop && scrollY <= blockSpace;
        const isAnimated = block.classList.contains("ss-animated");

        if (inView && !isAnimated) {
          anime({
            targets: block.querySelectorAll("[data-animate-el]"),
            opacity: [0, 1],
            translateY: [100, 0],
            delay: anime.stagger(400, { start: 200 }),
            duration: 800,
            easing: "easeInOutCubic",
            begin: () => {
              block.classList.add("ss-animated");
            },
          });
        }
      });
    };

    // Attach scroll listener
    window.addEventListener("scroll", viewportAnimation);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", viewportAnimation);
    };
  }, []);
  return (
    <>
      <Preloader />
      <div id="home" className="s-pagewrap">
        <Header />

        <main className="s-content">
          <Intro />

          <section id="about" className="s-about target-section" data-animate-block>
            <About data-animate-el />
            <Expertise data-animate-el />
          </section>

          <section id="works" className="s-works target-section" data-animate-block>
              <Work data-animate-el />
              <Recommendation data-animate-el />
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
