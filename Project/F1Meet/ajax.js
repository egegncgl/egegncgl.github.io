var xhr = new XMLHttpRequest();
xhr.open('GET', 'Drivers.xml', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Handle the response from the XML file
      var xmlDoc = xhr.responseXML;
      var drivers = xmlDoc.getElementsByTagName('driver');

    //   for(var i=0;i<drivers.length;i++){
    //     console.log(drivers[i].getElementsByTagName('name')[0].textContent);
    //   }
      // Generate an HTML list with the driver names
      var list = '<ul>';
      for (var i = 0; i < drivers.length; i++) {
        var name = drivers[i].getElementsByTagName('name')[0].textContent;
        list += '<li>' + name + '</li>';
      }
      list += '</ul>';

      // Update the website with the generated list
      document.getElementById('text').innerHTML = list;
    } else {
      // Handle error
      console.log('Error: ' + xhr.status);
    }
  }
};

xhr.send();


var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://egegncgl.github.io/', true);

xhr2.onreadystatechange = function() {
  if (xhr2.readyState === XMLHttpRequest.DONE) {
    if (xhr2.status === 200) {
      var responseHTML = xhr2.responseText;
      var parser = new DOMParser();
      var doc = parser.parseFromString(responseHTML, 'text/html');

      var h2Elements = doc.getElementsByTagName('h2');
      var pElements = doc.getElementsByTagName('p');

      var text2Div = document.getElementById('text2');
      for (var i = 0; i < h2Elements.length; i++) {
        text2Div.innerHTML += h2Elements[i].textContent + '<br>';
      }
      for (var j = 0; j < pElements.length; j++) {
        text2Div.innerHTML += pElements[j].textContent + '<br>';
      }
    } else {
      console.log('Error: ' + xhr2.status);
    }
  }
};

xhr2.send();