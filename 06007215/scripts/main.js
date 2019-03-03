var myImage=document.querySelector("img");
myImage.onclick=function(){
  var mySrc=myImage.getAttribute("src");
  if(mySrc==="images/akash.jpg.jpg" )
  myImage.setAttribute('src',"images/1.jpg.jpg");
else if(mySrc==="images/1.jpg.jpg" )
    myImage.setAttribute('src',"images/2.jpg.jpg");
  else if(mySrc==="images/2.jpg.jpg" )
    myImage.setAttribute('src',"images/3.jpg.jpg");
  else
  myImage.setAttribute('src',"images/akash.jpg.jpg");
}
var myButton = document.getElementById("change");
var myHeading = document.querySelector("h2");
if(localStorage.getItem('name')){
    setUserName();
}
else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Welcome " +storedName;
}
function setUserName(){
     var myName = prompt('Please enter your name:');
     localStorage.setItem('name',myName);
     myHeading.textContent = "Welcome " +myName;
}

myButton.onclick =function() {
  setUserName();
}






