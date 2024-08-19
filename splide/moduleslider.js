function slidermodules() {
  let splides = $('[data-slider="home-united-modules__bottom"]');
  if (splides.length) {
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        perPage: 4,
        perMove: 1,
        focus: 0,
        type: 'loop',
        gap: '1rem',
        arrows: 'slider',
        pagination: 'slider',
        speed: 600,
        dragAngleThreshold: 30,
        autoWidth: false,
        rewind: false,
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false,
        breakpoints: {
          991: {
            perPage: 3
          },
          767: {
            perPage: 2
          },
          479: {
            perPage: 1,
            gap: '.5rem',
            pagination: false
          }
        }
      }).mount();
    }
  }
}

slidermodules();
