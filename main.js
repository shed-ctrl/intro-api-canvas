var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 100, 100);

// 1) Trazo Rectangulo
//ctx.fillRect(25, 25, 100, 100);
//ctx.clearRect(45, 45, 60, 60);
//ctx.strokeRect(50, 50, 50, 50);

//2) Trazo Triangulo
//ctx.beginPath();
//ctx.moveTo(75, 50);
//ctx.lineTo(100, 75);
//ctx.lineTo(100, 25);
//ctx.fill();

// 3) Trazo Pluma
//ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
//ctx.moveTo(110, 75);
//ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
//ctx.moveTo(65, 65);
//ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
//ctx.moveTo(95, 65);
//ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
//ctx.stroke();

// 4) Trazo Lineas
//ctx.beginPath();
//ctx.moveTo(25, 25);
//ctx.lineTo(105, 25);
//ctx.lineTo(25, 105);
//ctx.fill();
 // Triángulo contorneado
//ctx.beginPath();
//ctx.moveTo(125, 125);
//ctx.lineTo(125, 45);
//ctx.lineTo(45, 125);
//ctx.closePath();
//ctx.stroke();

// 5) Trazo Arcos
//for (let i = 0; i < 4; i++) {
    //for (let j = 0; j < 3; j++) {
      //ctx.beginPath();
      //const x = 25 + j * 50; // Coordenada x
      //const y = 25 + i * 50; // Coordenada y
      //const radius = 20; // Radio del Arco
      //const startAngle = 0; // Punto inicial del Círculo
      //const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
      //const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

      //ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      //if (i > 1) {
        //ctx.fill();
      //} else {
      //  ctx.stroke();
      //}
    //}
 // }

  // 6) Trazo Curvas Bézier y cuadráticas
  // Ejemplo de curvas cuadráticas
    /* ctx.beginPath();
     ctx.moveTo(75, 25);
     ctx.quadraticCurveTo(25, 25, 25, 62.5);
     ctx.quadraticCurveTo(25, 100, 50, 100);
     ctx.quadraticCurveTo(50, 120, 30, 125);
     ctx.quadraticCurveTo(60, 120, 65, 100);
     ctx.quadraticCurveTo(125, 100, 125, 62.5);
     ctx.quadraticCurveTo(125, 25, 75, 25);
     ctx.stroke()*/

   // 7) Trazo Combinaciones de lineas y figuras
    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  

