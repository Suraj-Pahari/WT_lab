
function wr(x){
var y=document.getElementById("answer").innerHTML;
document.getElementById("answer").innerHTML=y+x;
}
function clr(){
document.getElementById("answer").innerHTML="";
}
function ans(){
	var z=document.getElementById("answer").innerHTML;
	document.getElementById("answer").innerHTML=eval(z);
}
function back(){
	var z=document.getElementById("answer").innerHTML;
	document.getElementById("answer").innerHTML=z.slice(0,-1)
}