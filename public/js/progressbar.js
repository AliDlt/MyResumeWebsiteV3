document.addEventListener("DOMContentLoaded", function () {
  var controller = new ScrollMagic.Controller();

  document
    .querySelectorAll(".progressbar")
    .forEach(function (progressbar, index) {
      var widthStyle = progressbar.style.width;
      var scene = new ScrollMagic.Scene({
        triggerElement: progressbar,
        triggerHook: 0.8,
        reverse: false,
      })
        .setTween(
          gsap.fromTo(
            progressbar,
            { width: "0%", opacity: 0.5 },
            {
              width: widthStyle,
              duration: 1.2,
              opacity: 1,
              ease: "bounce.out",
            }
          )
        )
        .addTo(controller);
    });
});
