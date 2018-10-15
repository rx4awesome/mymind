
const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");
const path = require('path');
const app = require('./app.js').app


const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  let fileContents = fs.readFileSync("./mainfiles/index.html", {encoding: "utf8"});
  response.write(fileContents);
  response.end();
})


router.post('/', (request, response) => {
  request.on("data", function(inputValue) {

    let query = inputValue.toString(); 
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
 
    let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    
    let fileContents = fs.readFileSync("./mainfiles/index.html", {encoding: "utf8"});
  
    fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);;
    response.setHeader('Content-Type', 'text/html');
 
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 