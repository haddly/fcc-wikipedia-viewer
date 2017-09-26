"use strict";

$(document).ready(function () {

  $("#submit").on("click", function () {
    var completeURL = undefined,
        obj = undefined,
        content = undefined,
        encodedContent = undefined,
        endpoint = undefined,
        pageIdURL = undefined,
        id = undefined;
    content = document.getElementById("content").value;
    encodedContent = encodeURI(content);
    endpoint = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=";
    completeURL = endpoint + encodedContent;
    pageIdURL = "https://en.wikipedia.org/?curid=";
    $.getJSON(completeURL, function (json) {
      var string = JSON.stringify(json);
      var obj = JSON.parse(string);
      var exactObj = obj.query.search;
      var html = "";
      for (var i = 0, len = exactObj.length - 1; i <= len; i++) {

        html += "<div class='container-fluid'>";

        html += "<div class='well'><a href='";
        html += pageIdURL + exactObj[i].pageid + "' target='_blank'>";
        html += "<h3><strong>" + exactObj[i].title + "</strong></h3>";
        html += "<br>";
        html += "<h5>snippet: " + exactObj[i].snippet;+"</h5>";
        html += "</a></div></div>";
      }
      $("#html").html(html);
    });
  });
});

/** plain JS call instead of JQuery "$.getJSON"
 var request = new XMLHttpRequest();

request.onload = createElements;
request.open("get", completeURL, true);
request.send();  */