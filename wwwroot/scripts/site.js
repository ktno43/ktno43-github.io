$(function() {
  AOS.init();

  var typewriterDiv = document.getElementById("typewriter");

  var typewriter = new Typewriter(typewriterDiv, {
    loop: true
  });

  $("body").scrollspy({
    target: "#mainNav",
    offset: 500
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 600) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  typewriter
    .changeDelay(80)
    .typeString("I am a software developer.")
    .pauseFor(2500)
    .deleteChars(19)
    .typeString("problem solver.")
    .pauseFor(2500)
    .deleteChars(15)
    .typeString("creative innovator.")
    .pauseFor(2500)
    .start();

  $(".skill-section").click(function() {
    var expandable = $(this).find(".skill-section-expandable");

    if ($(this).hasClass("open")) {
      $(expandable).slideUp(200);
      $(this).removeClass("open");
      var arrowU = $(this).find(".fa-chevron-up");
      var expandU = $(this).find(".contract");
      arrowU.toggleClass("fa-chevron-up fa-chevron-down");
      expandU.toggleClass("expand contract");
    } else {
      $(expandable).slideDown(200);
      $(this).addClass("open");
      var arrowD = $(this).find(".fa-chevron-down");
      var expandD = $(this).find(".expand");
      arrowD.toggleClass("fa-chevron-up fa-chevron-down");
      expandD.toggleClass("expand contract");
    }
  });

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 90
          },
          "slow"
        );
        return false;
      }
    }
  });

  $(".head-item").click(function() {
    scrollTo("intro");
  });

  function scrollTo(id) {
    $("html,body").animate(
      {
        scrollTop: $("#" + id).offset().top - 90
      },
      "slow"
    );
  }
});
