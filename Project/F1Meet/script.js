$(function () {
  var progressbar = $("#progressbar");
  var documentHeight = $(document).height();
  var windowHeight = $(window).height();
  var scrollableHeight = documentHeight - windowHeight;

  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var progress = (scrollTop / scrollableHeight) * 100;
    progressbar.css("width", progress + "%");
  });
});

$(function () {
  var countdownDate = new Date("2023-06-04T14:59:59");

  $("#countdown").countdown(countdownDate, function (event) {
    $(this).html(
      event.strftime(
        '<div class="countdown-item"><span class="countdown-value">%D</span><span class="countdown-label">Days</span></div>' +
          '<div class="countdown-item"><span class="countdown-value">%H</span><span class="countdown-label">Hours</span></div>' +
          '<div class="countdown-item"><span class="countdown-value">%M</span><span class="countdown-label">Minutes</span></div>' +
          '<div class="countdown-item"><span class="countdown-value">%S</span><span class="countdown-label">Seconds</span></div>'
      )
    );
  });
});

$(function () {
  $("#dialog").dialog({
    modal: true,
    draggable: false,
    resizable: false,
    buttons: [
      {
        text: "Close",
        click: function () {
          $(this).dialog("close");
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// function openPopup() {
//   var popup = document.getElementById("myPopup");
//   popup.style.display = "block";
// }

function displayData(event) {
  event.preventDefault(); 

  // Inputs
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (email.includes("@")) {
    // Popup content
    var popupContent = "<p>Name: " + name + "</p>";
    popupContent += "<p>Surname: " + surname + "</p>";
    popupContent += "<p>Email: " + email + "</p>";
    popupContent += "<p>Message: " + message + "</p>";

    // Popup window open
    $("#dialog2").html(popupContent).dialog();
  }
  else{
    return;
  }
}
