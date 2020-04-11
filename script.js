/*
var button=document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter",function(){
	console.log("CLICK!!!!!");
}
)
*/


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
		btn.appendChild(document.createTextNode("Remove"));
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
	btn.appendChild(document.createTextNode("Remove"));
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