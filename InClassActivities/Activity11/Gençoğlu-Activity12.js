$(document).ready(function() {
    // Click event handler for sidebar links
    $('nav#nav_list a').click(function(e) {
      e.preventDefault();
      var speakerTitle = $(this).attr('title');
      var fileName =  'json_files/'+speakerTitle + '.json';
      $('main').empty();
      $.ajax({
        url: fileName,
        dataType: 'json',
        success: function(data) {
            var speakers = data.speakers; 
            var firstSpeaker = speakers[0];
            var month = firstSpeaker.month; 
            console.log(month);

          var speakerHtml = '<h1>' + firstSpeaker.title + '</h1>';
          speakerHtml += '<img src="' + firstSpeaker.image + '">';
          speakerHtml += '<h2>' + firstSpeaker.month + '<br>' + firstSpeaker.speaker + '</h2>';
          speakerHtml += '<p>' + firstSpeaker.text + '</p>';

          $('main').append(speakerHtml);
        },
        error: function(xhr, status, error) {
          console.log("An error occurred while retrieving JSON data: " + error);
        }
      });
    });
  });