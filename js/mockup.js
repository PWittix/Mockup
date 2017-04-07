// JavaScript Document
var checkIn = document.getElementById("CheckIn");
var checkOut = document.getElementById("CheckOut");



function notifyIn(){
	alert("Check In");
}
function notifyOut(){
	alert("Check Out");	
}

checkIn.addEventListener('click', notifyIn);
checkOut.addEventListener('click', notifyOut);

