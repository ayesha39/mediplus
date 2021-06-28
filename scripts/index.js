function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("topdiv");
  if (x.className === "topnav") {
    x.className += " responsive";
    if(y.className==="main-div")
    {
      y.className +=" maindiv-height";
    }


  }
   else {
    x.className = "topnav";
    y.className="main-div";
  }

}

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
