let aish=document.createElement("h1");
/* aish.textContent="I'm Chitti"; */
/* aish.innerHTML="Memory 1 Tera Byte";
aish.style.color = "blue" */
document.getElementById("vasi").appendChild(aish);
/* document.body.appendChild(aish); */
document.body.style.backgroundColor="coral"
aish.innerHTML="I'm Chitti";
aish.style.color="navy";
aish.style.fontStyle="italic";
aish.style.backgroundColor="violet";
aish.style.padding= "auto";

setTimeout(() => {
    let re = document.getElementsByClassName("list")[4];
    if (re) {
        re.remove();
    }
},2000);

 /* let sana=document.getElementsByClassName("list")[2];
 if (sana) {
    sana.remove();
 }  */


    let newHeading = document.createElement("h2");
    newHeading.innerHTML = "Chitti Robo";
    newHeading.style.color="brown";
    newHeading.style.fontSize="44px";
    document.body.appendChild(newHeading);

setTimeout(() => {
    let newText = document.createElement("h3");
    newText.textContent = "Display after 3 seconds";
    newText.style.color="crimson";
    document.body.appendChild(newText);
}, 4000);

let tagText = document.createElement("h4");
tagText.textContent="appended data";
tagText.style.color="yellow";
document.getElementById("vasi").appendChild(tagText);

let myList = document.createElement("ul");
for (let i=1;i<=3;i++) {
    let listitems = document.createElement("li");
     listitems.textContent=`Item ${i}`;
    listitems.style.color="blue";
    listitems.style.fontSize="18px";

    myList.appendChild(li);
    document.body.appendChild(myList);
    

}