
//drawCircles();

function drawCircles(hora, minuto, segundo){

	grhora=(hora+minuto/60)*30; //calculo posición de manecilla de las horas
    radhora=grhora*Math.PI/180; //pasar a radianes.

	grminuto=minuto*6;
    radminuto=grminuto*Math.PI/180;

	grsegundo=segundo*6;
    radsegundo=grsegundo*Math.PI/180;

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var radius = canvas.height / 2;
    ctx.arc(150, 150, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

	ctx.beginPath();

	ctx.translate(150,150);
	var radiusHour = canvas.height / 3;
    ctx.arc(0, 0,radiusHour, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();


	ctx.beginPath();

	var radiusMin = canvas.height / 5;
    ctx.arc(0, 0, radiusMin, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();


	ctx.beginPath();

	var radiusSec = 20;
    ctx.arc(0,0, radiusSec, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();	

	ctx.rotate(radsegundo)

}


function drawClock(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    second = (second*Math.PI/30);
	
    drawCircles(hour, minute, second);
}


setInterval(drawClock, 1000);