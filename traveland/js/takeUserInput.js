var usersub = document.getElementById("search");

var tripObj;

usersub.addEventListener("click", ()=>{
  tripObj = {
    startLoc: document.getElementById("startingP").value,
    endLoc: document.getElementById("dest").value
  };
  console.log(tripObj);
  document.getElementById("mapTony").style.display = "block";
  mapTony.setZoom(3);
})
