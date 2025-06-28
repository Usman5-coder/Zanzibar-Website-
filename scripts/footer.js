gsap.utils.toArray('.footer-section').forEach((section, index) => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: section,
        start: 'top 90%'
      }
    });
  });
