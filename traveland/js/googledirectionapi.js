
var xmlrequestTony = new XMLHttpRequest();
var URLTony = "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyA4ffefqz2hpAaDJECnpiS3EbFLr0hF16g";
var routeTony;

xmlrequestTony.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        routeTony = JSON.parse(this.responseText);
        console.log(routeTony);
    }
};
xmlhttp.open("GET", URLTony, true);
xmlhttp.send();
