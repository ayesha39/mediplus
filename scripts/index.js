// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   var y = document.getElementById("topdiv");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//     if(y.className==="main-div")
//     {
//       y.className +=" maindiv-height";
//     }


//   }
//    else {
//     x.className = "topnav";
//     y.className="main-div";
//   }

// }
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
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

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
