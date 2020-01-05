$(function() {
  AOS.init();

  var typewriterDiv = document.getElementById("typewriter");

  var typewriter = new Typewriter(typewriterDiv, {
    loop: true
  });

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
      arrowU.toggleClass("fa-chevron-up fa-chevron-down");
    } else {
      $(expandable).slideDown(200);
      $(this).addClass("open");
      var arrowD = $(this).find(".fa-chevron-down");
      arrowD.toggleClass("fa-chevron-up fa-chevron-down");
    }
  });

  $(".head-item").click(function() {
    scrollTo("intro");
  });

  $(".nav-item").click(function() {
    var id = $(this).attr("id");

    switch (id) {
      case "techStackItem":
        scrollTo("techStack");
        break;

      case "aboutItem":
        scrollTo("aboutMe");
        break;

      case "contactItem":
        scrollTo("contactMe");
        break;

      case "portfolioItem":
        scrollTo("portfolio");
        break;
    }
  });

  $("#contact-form").bootstrapValidator({
    //        live: 'disabled',
    message: "This value is not valid",
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    fields: {
      Name: {
        validators: {
          notEmpty: {
            message: "The Name is required and cannot be empty"
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: "The email address is required"
          },
          emailAddress: {
            message: "The email address is not valid"
          }
        }
      },
      Message: {
        validators: {
          notEmpty: {
            message: "The Message is required and cannot be empty"
          }
        }
      }
    }
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
