function slideNews() {
  let splides = $('[data-slider="splide-news"]');
  if (splides.length) {
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        perPage: 3,
        perMove: 1,
        focus: 0,
        type: 'loop',
        gap: '1.75rem',
        arrows: 'slider',
        pagination: false,
        speed: 600,
        dragAngleThreshold: 30,
        autoWidth: false,
        rewind: false,
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false,
        breakpoints: {
          991: {},
          767: {},
          479: {}
        }
      }).mount();
    }
  }
}

slideNews();
