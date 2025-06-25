//DOM in javascript
document.title = "DOM in JavaScript"
 document.getElementById("header").innerHTML =
"Hello World!";
document.body.style.backgroundColor = "coral";
document.getElementById("para").style.color = "navy";
document.getElementById("para").style.fontSize = "30px";

document.getElementById("myclass").style.color= "cornsilk";
document.getElementById("myclass").style.fontsize = "20px";
document.getElementById("myclass").style.fontFamily = "Arial";

document.getElementById("new").style.textAlign = "center";
document.getElementById("new").style.fontStyle = "italic";

document.getElementById("cat").style.fontFamily ="serif";
document.getElementById("cat").style.color="yellow";

document.getElementsByClassName("hello")[0].style.color = "green";
document.getElementsByClassName("hello")[1].style.color = "white";

document.getElementById("hey").style.fontsize = "200px";
document.getElementById("hey").style.fontFamily = "sans-serif";
document.getElementById("hey").style.color = "navy"