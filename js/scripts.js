function leaveTrace(event){
	console.log("Left a trace behind!");
	var trace = document.createElement('div');
	document.body.appendChild(trace);
	trace.id = "trace_circle";
	trace.style.position = "absolute";
	trace.style.left = this.style.left;
	trace.style.top = this.style.top;
	var r = this.style.borderColor.r;
	var g = this.style.borderColor.g;
	var b = this.style.borderColor.b;
	trace.background = this.style.borderColor;
	trace.opacity = 1;
	trace.style.width = 1;
	trace.style.height = 1;

}

function printMousePos(event){
	var x = event.clientX;
	var y = event.clientY;
	document.getElementById('coordinate').textContent = "X: " + x + " Y: " + y;
	
	var circle = document.createElement('div');
	document.body.appendChild(circle);
	circle.id = 'circle';
	circle.style.position = 'absolute';
	circle.style.left = x+'px';
	circle.style.top = y+'px';

	var central_color = 'rgb('+Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255)+')';
	circle.style.borderColor = '' + central_color + '';
	circle.style.background = 'radial-gradient(circle,rgba(255,255,255,0),rgba(255,255,255,0),'+central_color+')';
	
	circle.addEventListener("animationstart", leaveTrace);

	/*
	circle.addEventListener('animationend',function(event) { circle.parentElement.removeChild(circle); }, false);
*/
}

document.addEventListener("click", printMousePos);

