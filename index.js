// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// // email button functionality 
var email = document.getElementById("emailBtn");
email.addEventListener('click', function() {
   window.open("mailto:leahkrumholz73@gmail.com");

})
