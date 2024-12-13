let bar = document.querySelector(".bar");
let navMenu = document.querySelector(".nav-menu");
let cross = document.querySelector(".cross");

bar.addEventListener("click", () => {

  navMenu.classList.add("active");
})

cross.addEventListener("click", () => {
  navMenu.classList.remove("active")
})



let tl = gsap.timeline();

const mediaQuery = window.matchMedia('(max-width: 991.98px)');

if (!mediaQuery.matches) {

  gsap.from("#whatMakes span", {
    y: -30,
    opacity: 0,
    duration: 0.2,
    scrollTrigger: {
      trigger: "#whatMakes",
      start: "-40% 90%",
      end: "50% 50%",
      scrub: 0.2
    }
  });

  gsap.from("#whatMakes h2", {
    y: 50,
    opacity: 0,
    duration: 0.1,
    scrollTrigger: {
      trigger: "#whatMakes",
      start: "-40% 80%",
      end: "60% 100%",
      scrub: 1
    }
  });
}


if (window.innerWidth > 993) {

  tl.from(".what-makes-p p ", {
    x: -30,
    opacity: 0,
    duration: .5,
    stagger: .3,
    scrollTrigger: {
      trigger: "what-makes-heading",
      start: "6% 10%",
      end: "4% -90%",
      scrub: 1,
      // markers: true
    }
  });
}

if (window.innerWidth < 993) {


  tl.from(".what-makes-p p ", {
    x: 0,
    opacity: 1,
    duration: .5,
    stagger: .3,
    scrollTrigger: {
      trigger: "what-makes-heading",
      start: "-32% 10%",
      end: "4% -90%",
      scrub: 1,
      // markers: true
    }
  });


}

tl.from("#midImg ", {
  y: 70,
  opacity: 0,
  duration: .5,
  stagger: .3,
  scrollTrigger: {
    trigger: "#midImg",
    start: "-55% 10%",
    end: "55% 90%",
    scrub: 1,
    // markers: true
  }
});

gsap.to("#e", {
  duration: 1,
  rotate: 360,
  ease: "linear",
  repeat: -1,
  repeatDelay: 1,
  scrollTrigger: {
    trigger: "what-makes-heading",
    start: "60% 55%",
    end: "90% 90%",
    // markers: true
  }
});

tl.from(".node1 ", {
  y: -80,
  x: -80,
  opacity: 0,
  duration: 1.5,
  stagger: .3,
  scrollTrigger: {
    trigger: ".node1 ",
    start: "80% 75%",
    end: "70% 90%",
    scrub: 1,
    // markers: true
  }
});

tl.from(".node2 ", {
  y: -80,
  x: -80,
  opacity: 0,
  duration: 1.5,
  stagger: .3,
  scrollTrigger: {
    trigger: ".node2 ",
    start: "90% 80%",
    end: "70% 90%",
    scrub: 1,
    // markers: true
  }
});

tl.from(".node3 ", {
  y: -90,
  x: -100,
  opacity: 0,
  duration: 1.5,
  stagger: .3,
  scrollTrigger: {
    trigger: ".node2 ",
    start: "20% 70%",
    end: "50% 70%",
    scrub: 1,
    // markers: true
  }
});

tl.from(".node4 ", {
  y: -90,
  x: -100,
  opacity: 0,
  duration: 1.5,
  stagger: .3,
  scrollTrigger: {
    trigger: ".node2 ",
    start: "50% 60%",
    end: "50% 70%",
    scrub: 1,
    // markers: true
  }
});

tl.from(".node5 ", {
  y: -50,
  x: -80,
  opacity: 0,
  duration: 1.5,
  stagger: .3,
  scrollTrigger: {
    trigger: ".node2 ",
    start: "29% 50%",
    end: "50% 70%",
    scrub: 1,
    // markers: true
  }
});


tl.from(".modules-top, .module-bottom", {
  y: 70,
  duration: 1,
  opacity: 0,
})


// Channel Img 

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".channel-patner img");

  function showNextImage() {

    var currentImage = document.querySelector(".channel-patner img.active");

    currentImage.classList.remove("active");

    var nextImage = currentImage.nextElementSibling;
    if (!nextImage) {

      nextImage = images[0];
    }

    nextImage.classList.add("active");
  }

  setInterval(showNextImage, 2000);
});


// Swiper JS 

var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1000: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1270: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


// Counter 

document.addEventListener("DOMContentLoaded", function () {
  let valueDisplays = document.querySelectorAll(".counter-numbers");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
      startValue += Math.ceil(endValue / (interval / 10));
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(counter);
      }
      valueDisplay.textContent = startValue;
    }, duration);
  });
});

// Swiper JS 

var swiper = new Swiper(".card_slider2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1000: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1270: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});