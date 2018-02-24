$(document).ready(function() {
  //Start of Loading Overlay
  $(document).ready(function() {
    setTimeout(function() {
      $("#loadingOverlay").fadeOut();
    }, 3000);
  });
  // ./ of Loading Overlay

  // Start of Testimonials Carousel
  $("#carousel").carouFredSel({
    circular: true,
    infinite: false,
    responsive: true,
    scroll: {
      items: 1,
      fx: "fade",
      duration: 1000,
      pauseOnHover: true
    },
    pagination: {
      container: "#carousel_indicator",
      anchorBuilder: function(nr) {
        return '<a href="#' + nr + '"></a>';
      }
    }
  });
  // ./Testimonials Carousel

  // Start of Offset for Site Navigation
  $("#siteNav").affix({
    offset: {
      top: 100
    }
  });
  // ./Offset for Site Navigation

  // Start of Return to Top Function
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      $("#return_to_top").fadeIn(100);
    } else {
      $("#return_to_top").fadeOut(100);
    }
  });
  $("#return_to_top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      100
    );
  });
  // ./Return to Top Function

  //return customer to home page
  $("#confirmation_btn").on("click", function() {
    window.location.assign("http://localhost:3000/");
  });
});
