function setup() {
  createCanvas(400, 400); 
  background(255);     

  // Lado superior: 
  stroke(255, 150, 100);      
  strokeWeight(6);        
  line(100, 100, 300, 100);

  // Lado derecho: 
  stroke(10, 255, 0, 170); 
  strokeWeight(13);        
  line(300, 100, 300, 300);

  // Lado inferior:
  stroke(0, 0, 255);      
  strokeWeight(2);        
  line(300, 300, 100, 300);

  // Lado izquierdo:
  stroke(120,234,240,30);         
  strokeWeight(54);        
  line(100, 300, 100, 100);
}