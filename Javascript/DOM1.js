 let book = document.getElementsByClassName("book");
 book[0].style.color = "blue";
 book[1].style.color = "green";
 book[2].style.color = "yellow";



 document.querySelector(".hello").style.color = "hotpink";
 let depts = document.querySelectorAll(".hello1");
 depts[0].style.color = "violet";
 depts[1].style.color = "grey";
 depts[2].style.color = "orange";



    function changeBackground() {
    document.body.style.backgroundColor = "aquamarine";
    alert("Background color changed to aquamarine");
 } 

 function changeBackground () {
    if (document.body.style.backgroundColor === "aquamarine") {
        document.body.style.backgroundColor = "blue"; }
        else {
            document.body.style.backgroundColor="pink";
        }
    } 

  function changeBackground() {
    document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "green" ? "red" : "aquamarine";
  }

function changetext() {
   document.getElementById("clg").innerHTML = "MRCET - CSE: DS";
   document.getElementById("clg").style.backgroundColor ="coral";
    document.getElementById("clg").style.color ="navy";
    document.getElementById("clg").style.fontFamily = "serif";
    document.getElementById("clg").style.fontSize = "70px";
    document.getElementById("clg").style.fontStyle = "italic";
}