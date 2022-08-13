$(function(){
  $("#nav-placeholder").load("nav.html");
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("logo")
    if (x.className === "topnav") {
      x.className += " responsive";
      y.className += "responsive";      
    } else {
      x.className = "topnav";
      y.className = "active";
    }
  }
