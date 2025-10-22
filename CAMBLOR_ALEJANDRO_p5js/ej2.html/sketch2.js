function setup() {
  createCanvas(400, 400);        // Crea un lienzo de 400x400 píxeles  
  background(200);         // Fondo gris
  
  // Rectángulo amarillo opaco con borde negro
  stroke(0,0,0);        // Línea de color negro
  strokeWeight(4,5);       // Grosor de línea 4,5   
  fill(239, 269, 19,);        // amarillo      
  rect(40, 110, 310, 290);       // rectángulo de la pared de la casa 
   
  // Rectángulo azul claro opaco con borde marrón
  stroke(120,60,3);        // Línea de color marrón 
  strokeWeight(5);         // Grosor de línea 5    
  fill(144,213,255);       // azul claro
  rect(70, 200, 100, 60);        // rectángulo de la ventana
   
  // Rectángulo azul claro opaco con borde marrón
  stroke(120,60,3);        // Línea de color marrón 
  strokeWeight(5);         // Grosor de línea 5    
  fill(144,213,255);       // azul claro           
  rect(220, 200, 100, 60);       // rectángulo de la ventana
  
  // Rectángulo marrón opaco con borde marrón oscuro
  stroke(86,43,5);         // Línea de color marrón oscuro
  strokeWeight(6);         // Grosor de línea 6    
  fill(139, 69, 19);       // marrón
  rect(155, 290, 80, 120);       // rectángulo de la puerta
 
  // Triángulo morado trasparente con borde negro
  stroke(0,0,0);        // Línea de color negro
  strokeWeight(4);         // Grosor de línea 4    
  fill(100,0,255,30);         // morado claro
  triangle(40,110,350,110,190,10,180);       // triángulo del tejado
   
  // círculo dorado opaco con borde marrón oscuro
  stroke(86,43,5);         // Línea de color marrón oscuro
  strokeWeight(4);         // Grosor de línea 4  
  fill(255, 215, 0);       // dorado
  ellipse(220, 350, 10, 10);        // círculo de la manilla
     
  
  
  

 
  

 
  
}