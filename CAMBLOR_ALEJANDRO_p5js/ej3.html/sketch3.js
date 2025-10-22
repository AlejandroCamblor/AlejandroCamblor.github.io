function setup() {
  createCanvas(400, 400);

  //Fondo blanco
  background(255);

  //Cabeza
  noFill();   // sin relleno
  stroke(0);   //contorno negro
  strokeWeight(3);   //grosor de la línea
  ellipse(200, 200, 200, 200);    //círculo grande: x, y, ancho, alto

  //Ojos 
  fill(144,213,255);   //ojos azules
  noStroke(); // sin borde
  ellipse(170, 180, 15, 15); // ojo izquierdo
  ellipse(230, 180, 15, 15); // ojo derecho
  fill(0);
  ellipse(170, 180, 8, 8);   //pupila izquierda
  ellipse(230, 180, 8, 8);   //pupila derecha
 
  stroke(0);
  noFill(); 
  ellipse(170,180,40,20);   //contorno del ojo izquierdo
  ellipse(230,180,40,20);   //contorno del ojo derecho

  //Boca
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(200, 240, 100, 50, 0, PI); // arco de elipse: x, y, ancho, alto, ángulo inicio, fin

  //Cejas
  stroke(0);
  strokeWeight(4);
  arc(170, 165, 30, 10, PI, 0);   // Ceja izquierda
  arc(230, 165, 30, 10, PI, 0);    // Ceja derecha

  // Mejillas 
  noStroke();
  fill(255, 150, 150, 150);   //rosa semitransparente
  ellipse(130, 220, 20, 10);   // mejilla izquierda
  ellipse(270, 220, 20, 10);   // mejilla derecha
}
     
  
  
  

 
  

 
  
