function setup() {
  createCanvas(400, 400);
  background(255);

  // Línea mínima
  line(0, 0, 10, 10);

  // Color de trazo (RGB)
  stroke(255, 0, 0);
  line(0, 0, 10, 10);

  stroke(0, 255, 0);
  strokeWeight(10);
  line(200, 100, 150, 300);
  line(200, 100, 250, 300);
  line(170, 220, 230, 220);
}