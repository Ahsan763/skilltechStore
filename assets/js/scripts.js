$(document).ready(function () {
  $(".nav2-mob-btn").click(function () {
    $(".mobileside").addClass("active");
  });
  $("body").click(function () {
    $(".mobileside").removeClass("active");
  });
  $(".nav2-mob-btn").click(function (event) {
    event.stopPropagation();
  });
  $(".pcbuild-banner-box-label").click(function () {
    $(".pcbuild-banner-box-btn").addClass("d-flex");
  });
  //
  $(".sspi-box-input").click(function () {
    $(".sspi-crd-input").not(this).prop("checked", this.checked);
  });
  $("input.wishlistCrd-chkbx, .selectAllbtn-input").click(function () {
    if ($("input.wishlistCrd-chkbx").prop("checked")) {
      $(".ordrSmry1").addClass("d-none");
      $(".ordrSmry2").addClass("d-block");
    } else {
      $(".ordrSmry1").removeClass("d-none");
      $(".ordrSmry2").removeClass("d-block");
    }
  });
  // pc build end
  $(".passboxhol-eye1").click(function () {
    var paswd = $(".shipForm--pas1");
    if (paswd.attr("type") == "password") {
      paswd.attr("type", "text");
      $(this)
        .removeClass(" fa-regular fa-eye ")
        .addClass(" fa-regular fa-eye-slash ");
    } else {
      paswd.attr("type", "password");
      $(this)
        .removeClass("fa-regular fa-eye-slash")
        .addClass(" fa-regular fa-eye ");
    }
  });
  $(".passboxhol-eye2").click(function () {
    var paswd = $(".shipForm--pas2");
    if (paswd.attr("type") == "password") {
      paswd.attr("type", "text");
      $(this)
        .removeClass(" fa-regular fa-eye ")
        .addClass(" fa-regular fa-eye-slash ");
    } else {
      paswd.attr("type", "password");
      $(this)
        .removeClass("fa-regular fa-eye-slash")
        .addClass(" fa-regular fa-eye ");
    }
  });

  $(".passboxhol-eye3").click(function () {
    var paswd = $(".shipForm--pas3");
    if (paswd.attr("type") == "password") {
      paswd.attr("type", "text");
      $(this)
        .removeClass(" fa-regular fa-eye ")
        .addClass(" fa-regular fa-eye-slash ");
    } else {
      paswd.attr("type", "password");
      $(this)
        .removeClass("fa-regular fa-eye-slash")
        .addClass(" fa-regular fa-eye ");
    }
  });

  $(".passboxhol-eye4").click(function () {
    var paswd = $(".shipForm--pas4");
    if (paswd.attr("type") == "password") {
      paswd.attr("type", "text");
      $(this)
        .removeClass(" fa-regular fa-eye ")
        .addClass(" fa-regular fa-eye-slash ");
    } else {
      paswd.attr("type", "password");
      $(this)
        .removeClass("fa-regular fa-eye-slash")
        .addClass(" fa-regular fa-eye ");
    }
  });
  $(".shipForm--update-pass").click(function () {
    $(this).toggleClass("active");
    $(this).nextAll(".shipFormAb").eq(0).slideToggle(200);
  });
  // password show and hide
  $(".cards-list").click(function () {
    $(".chkoutBar-innerbox-holder").toggleClass("d-flex");
  });
  $(".chkoutBar-radio-label").click(function () {
    $(".ordrSmry-tp-btn2").removeClass("disabled");
  });
  // checkout bar payment radio button end
  $(".form-control").focus(function () {
    $(this).nextAll(".form-input-sm-name").eq(0).show();
  });
  $(".form-control").focusout(function () {
    $(this).nextAll(".form-input-sm-name").eq(0).hide();
  });
  // focus on input feild end
  var incrementPlus;
  var incrementMinus;
  var buttonPlus = $(".cart-qty-plus");
  var buttonMinus = $(".cart-qty-minus");
  var incrementPlus = buttonPlus.click(function () {
    var $n = $(this).prev(".cartCardTpB2-b1").find(".qty");
    $n.val(Number($n.val()) + 1);
  });
  var incrementMinus = buttonMinus.click(function () {
    var $n = $(this).next(".cartCardTpB2-b1").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
    }
  });
  // increment decrement end
  $(".selectAllbtn-input").click(function () {
    $(".wishlistCrd-chkbx").not(this).prop("checked", this.checked);
  });
  $("input.wishlistCrd-chkbx, .selectAllbtn-input").click(function () {
    if ($("input.wishlistCrd-chkbx").prop("checked")) {
      $(".ordrSmry1").addClass("d-none");
      $(".ordrSmry2").addClass("d-block");
    } else {
      $(".ordrSmry1").removeClass("d-none");
      $(".ordrSmry2").removeClass("d-block");
    }
  });

  $(".rating-label").click(function () {
    $(this).nextAll().addClass("active");
    $(this).addClass("active");
    $(this).prevAll().removeClass("active");
  });
  // $('#starRating').starRating()
  // rating stars
  $(".reviews-wrpr2-box").slice(0, 2).addClass("d-block");
  $(".reviews-wrpr2-btn").click(function () {
    $(this).toggleClass("active");
    $(".reviews-wrpr2-box").slice(2, 1000).toggleClass("d-block");
  });
  // product page cards list and grid view start
  $(".wishlist-btn1").click(function () {
    $(".wishlist-btn").removeClass("active");
    $(this).addClass("active");
    $(".prdcrd").addClass("active");
    localStorage.setItem("skillstore-prdcrd", "true");
  });
  $(".wishlist-btn2").click(function () {
    $(".wishlist-btn").removeClass("active");
    $(this).addClass("active");
    $(".prdcrd").removeClass("active");
    localStorage.removeItem("skillstore-prdcrd");
  });
  if (localStorage.getItem("skillstore-prdcrd")) {
    $(".wishlist-btn2").removeClass("active");
    $(".wishlist-btn1").addClass("active");
    $(".prdcrd").addClass("active");
  }
  // product page cards list and grid view end

  $(".fa-caret-up").click(function () {
    $(this).parent(".subcateInnerDrop-wrpr").toggleClass("active");
    $(this)
      .parent(".subcateInnerDrop-wrpr")
      .nextAll(".subcateInnerDrop-list")
      .eq(0)
      .slideToggle(200);
  });
  //
  $(".subcateDropdown-wrpr").click(function () {
    $(this).toggleClass("active");
    $(this).nextAll(".subcateDropdown-box").eq(0).slideToggle(200);
  });
  //
  $(".searchbox-input").focus(function () {
    $(this).nextAll(".searchbox-input-box").eq(0).addClass("active");
  });
  $(".searchbox-input").focusout(function () {
    $(this).nextAll(".searchbox-input-box").eq(0).removeClass("active");
  });
  $(".dark-btn").click(function () {
    $("body").addClass("dark");
    localStorage.setItem("darkClass", "true");
  });
  $(".light-btn").click(function () {
    $("body").removeClass("dark");
    localStorage.removeItem("darkClass");
  });
  if (localStorage.getItem("darkClass") === "true") {
    $("body").addClass("dark");
  }
  // language toggle
  if (document.dir == "ltr") {
    $(".language_toggle_en").addClass("d-none");
    $(".language_toggle_ar").addClass("d-flex");
  }
  if (document.dir == "rtl") {
    $(".language_toggle_ar").addClass("d-none");
    $(".language_toggle_en").addClass("d-flex");
  }
  $(".language_toggle_en").click(function () {
    $("html").attr("dir", "ltr");
    $("body").addClass("ltr");
    $("body").removeClass("rtl");
    $(".language_toggle_ar").removeClass("d-none");
    $(".language_toggle_en").addClass("d-none");
    localStorage.removeItem("rtl");
  });
  $(".language_toggle_ar").click(function () {
    $("html").attr("dir", "rtl");
    $("body").addClass("rtl");
    $("body").removeClass("ltr");
    $(".language_toggle_en").removeClass("d-none");
    $(".language_toggle_ar").addClass("d-none");
    localStorage.setItem("rtl", "true");
  });
  if (localStorage.getItem("rtl") === "true") {
    $(".language_toggle_ar").addClass("d-none");
    $(".language_toggle_en").removeClass("d-none");
    $("body").addClass("rtl");
    $("body").removeClass("ltr");
    $("html").attr("dir", "rtl");
  }
  // language toggle

  $("body").click(function () {
    $(".header-side").removeClass("active");
  });
  $(".header-side").click(function (event) {
    event.stopPropagation(); // prevents executing the above event
  });

  // banner slide start
  var swiper1 = new Swiper(".bannerCol2-slider2", {
    loop: true,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".bannerCol2-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper1,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  // banner slide end
  var swiper3 = new Swiper(".bestdeals-wrpr-slider", {
    slidesPerView: 4,
    autoplay: true,
    loop: true,
    centeredSlides: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });
  // deals slider end

  var swiper4 = new Swiper(".recomenCard-slider2", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  });
  var swiper5 = new Swiper(".recomenCard-slider1", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  });
  // recommended slider end
  var swiper6 = new Swiper(".newProd-slider", {
    slidesPerView: 3,
    autoplay: true,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
  // new product slider end
  var swiper7 = new Swiper(".netwrkBrndSlider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 1,
      },
    },
  });
  var swiper8 = new Swiper(".footerBox2-slider", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 0,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      40: {
        slidesPerView: 2,
      },
      540: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });
  var swiper9 = new Swiper(".salePerCate-slider", {
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
  });
  var swiper10 = new Swiper(".sbpage-banner", {
    slidesPerView: 1,
    autoplay: true,
    autoplay: true,
    loop: true,
    effect: "fade",
    spaceBetween: 0,
    centeredSlides: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper11 = new Swiper(".sbcate-banner", {
    slidesPerView: 1,
    autoplay: true,
    autoplay: true,
    loop: true,
    effect: "fade",
    spaceBetween: 0,
    centeredSlides: true,
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper12 = new Swiper(".savToday-slider", {
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    grabCursor: true,
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  });

  // product details slider start
  var swiper13 = new Swiper(".pdCol1-side1", {
    loop: true,
    slidesPerView: 4,
    direction: "vertical",
    freeMode: true,
  });
  var swiper14 = new Swiper(".pdCol1-side2-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper13,
    },
  });
  // product details slider end
  var swiper15 = new Swiper(".zoommdl-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper16 = new Swiper(".simiPro-slider", {
    slidesPerView: 5,
    spaceBetween: 0,
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  });
  var swiper17 = new Swiper(".reccWrpr-slider", {
    slidesPerView: 4,
    spaceBetween: 0,
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  var swiper18 = new Swiper(".reccmendedPro-slider", {
    slidesPerView: 4,
    spaceBetween: 0,
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1800: {
        slidesPerView: 5,
      },
    },
  });
  var swiper19 = new Swiper(".orders-page-col2-row-col2-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper20 = new Swiper(".profilePagInnR2-Box2-wrpr", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
    },
  });
  var swiper21 = new Swiper(".bestdealsSlider", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
