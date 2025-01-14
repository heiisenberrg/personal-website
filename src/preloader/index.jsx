import { useEffect } from "react";
import "./index.css";
import anime from "animejs";

const Preloader = () => {
  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 400,
      autoplay: false,
    }).add({
      targets: '#loader',
      opacity: 0,
      duration: 1000,
      begin: function () {
        window.scrollTo(0, 0);
      }
    }).add({
      targets: '#preloader',
      opacity: 0,
      complete: function () {
        document.querySelector("#preloader").style.visibility = "hidden";
        document.querySelector("#preloader").style.display = "none";
      }
    }).add({
      targets: '.s-header',
      translateY: [-100, 0],
      opacity: [0, 1]
    }, '-=200')
      .add({
        targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400)
      })
      .add({
        targets: '.circles span',
        keyframes: [
          { opacity: [0, .3] },
          { opacity: [.3, .1], delay: anime.stagger(100, { direction: 'reverse' }) }
        ],
        delay: anime.stagger(100, { direction: 'reverse' })
      })
      .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { direction: 'reverse' })
      }).add({
        targets: '.intro-scrolldown',
        translateY: [100, 0],
        opacity: [0, 1]
      }, '-=800');

      if (tl) tl.play();
  }, []);

  return (
    <div id="preloader">
      <div id="loader">
      </div>
    </div>
  )
}

export default Preloader;
