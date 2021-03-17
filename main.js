var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



function formRest() {
  document.getElementById("myForm").reset();
}


function formsubmit(){
	var userName = document.forms["myForm"]["name"].value;

	if(userName == ""){
		alert("Name field is required !");
		return false;
	}

	if((myForm.rating[0].checked == false) && (myForm.rating[1].checked == false) && (myForm.rating[2].checked == false) && (myForm.rating[3].checked == false)){
		alert("Your rating is required !");
		return false;
	}

}
function increase() {
  var x = document.getElementsByTagName("BODY")[0];
  x.style.fontSize = "large"
}
function decrease() {
  var x = document.getElementsByTagName("BODY")[0];
  x.style.fontSize = "medium"
}
