$(document).ready(function () {
  // preload images
  $("#image_list a").each(function () {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  // set up event handlers for links
  $("#image_list a").click(function (evt) {

	var timer=500;
    var clickedLink = $(this);
    $("#caption").fadeOut(timer);

    $("#image").fadeOut(timer, function () {
      var imageURL = clickedLink.attr("href");
      $("#image").attr("src", imageURL);
      var caption = clickedLink.attr("title");
      $("#caption").text(caption);
      $("#caption").fadeIn(timer);
      $("#image").fadeIn(timer);
    });

    //cancel the default action of the link
    evt.preventDefault();
  });
  // move focus to first thumbnail
  $("li:first-child a").focus();
  
}); // end ready
