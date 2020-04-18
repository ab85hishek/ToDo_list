/*
var button=document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter",function(){
	console.log("CLICK!!!!!");
}
)
*/

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");


function setGradient(){
	body.style.background=
	"linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input",function(){
	setGradient();
}
)

color2.addEventListener("input",function(){
	setGradient();
}
)

let d = new Date();
document.getElementById('date').innerHTML = d.toLocaleString();

//
var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var listItems= document.getElementsByTagName("li");

function createListElements(){
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);	
		input.value="";

		var btn=document.createElement("button");
		btn.setAttribute("id", "del");
		btn.appendChild(document.createTextNode("-"));
		li.appendChild(btn);
		btn.onclick =removeParent;

}


function addAfterClick(){
	if(input.value.length > 0){
		createListElements();
	}
}

function addAftrKeyPress(event){
	if(input.value.length > 0 && event.keyCode===13){
		createListElements();
	}
}



button.addEventListener("click",addAfterClick);

input.addEventListener("keypress",addAftrKeyPress);

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function delButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("-"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

for (var i=0;i<listLength();i++)
{
	delButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}


