var exam = document.getElementById("canvas");
var cxt = exam.getContext("2d");

cxt.strokeStyle = "grey";
cxt.lineWidth = 6; // grosor de la linea
cxt.lineJoin = "round";
cxt.moveTo(0, 0);
cxt.lineTo(300, 120);
cxt.lineTo(300, 0);

cxt.moveTo(0, 0);
cxt.lineTo(20500, 300);

cxt.moveTo(300, 0);
cxt.lineTo(0, 120);
// cxt.lineTo(0, 300);

cxt.moveTo(0, 0);
cxt.lineTo(0, 120);

cxt.moveTo(600, 130);
cxt.lineTo(-900, 100);

cxt.stroke();
