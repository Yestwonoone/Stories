var storyDiv = document.getElementById("story");
var storyText = storyDiv.innerHTML;

var styleElement = storyDiv.querySelector("p");

var textContent = storyText.replace(styleElement.outerHTML, "");

textContent = textContent.replace(/\n/g, "<br>");

var paragraphs = textContent.split("\n\n");

var formattedParagraphs = [];

for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs[i].trim();
  if (paragraph !== "") {
    formattedParagraphs.push("<p>" + paragraph + "</p>");
  }
}

storyDiv.innerHTML = styleElement.outerHTML + formattedParagraphs.join("<br><br>");

