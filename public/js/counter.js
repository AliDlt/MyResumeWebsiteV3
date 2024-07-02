document.addEventListener("DOMContentLoaded", function () {
  const controller = new ScrollMagic.Controller();
  const counters = document.querySelectorAll(".counter");
  const targetNumbers = [134, 134, 48];
  const options = {
    startVal: 0,
    duration: 5000,
  };

  function startCounter(target, element, options) {
    let currentNumber = options.startVal;
    const increment = target / (options.duration / 16); // 16 is the requestAnimationFrame interval
    function updateCounter() {
      currentNumber += increment;
      if (currentNumber >= target) {
        currentNumber = target;
        cancelAnimationFrame(counterAnimation);
      }

      element.textContent = Math.round(currentNumber);

      if (currentNumber < target) {
        requestAnimationFrame(updateCounter);
      }
    }

    const counterAnimation = requestAnimationFrame(updateCounter);
  }

  counters.forEach(function (counter, index) {
    const target = targetNumbers[index];
    new ScrollMagic.Scene({
      triggerElement: counter,
      triggerHook: 0.8,
      reverse: false,
    })
      .on("enter", () => {
        startCounter(target, counter, options);
      })
      .addTo(controller);
  });
});
