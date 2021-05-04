$(document).ready(function() {
  /* nav bar sticky */
  console.log("amine");
  $(window).scroll(function() {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("scroll");
    } else {
      $(".navbar").removeClass("scroll");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
});
