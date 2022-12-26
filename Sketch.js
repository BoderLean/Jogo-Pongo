//  VARIAVEIS DA BOLINHA
let xCircle = 300;
let yCircle = 200;
let sizeCircle = 22;
let raio = sizeCircle /2;

let velocityxCircle = 5;
let velocityyCircle = 5;

// VARIAVEIS DA MINHA RAQUETE
let xRect = 5;
let yRect = 150;
let widthRect = 8;
let heightRect = 90;

//VARIAVEIS DA RAQUETE DO INIMIGO
let xRectEnemy = 585;
let yRectEnemy = 150;
let widthRectEnemy = 8;
let heightRectEnemy = 90;
let velocityYEnemy;
let chanceDeErrar = 0;

// PLACAR DO JOGO
let myPoints = 0;
let pointsEnemy = 0;

// SONS DO JOGO
let raquetada;
let trilha;
let ponto;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  showCircle ();
  moveCircle ();
  verifyCollisionBorder();
  showMyRect(); 
  moveMyRect();
  verifyCollisionRect();
  showRectEnemy(); 
  moveRectEnemy();
  verifyCollisionRectEnemy();
  showPlacar();
  score();

}

// FUNÇÕES DO DRAW
function showCircle(){
  circle(xCircle, yCircle, sizeCircle);
}
function moveCircle(){
  xCircle += velocityxCircle;
  yCircle += velocityyCircle;
}
function verifyCollisionBorder(){
    if (xCircle + raio > width || xCircle - raio < 0){
    velocityxCircle *= -1;
   }
  if (yCircle + raio > height || yCircle - raio < 0){
    velocityyCircle *= -1;
  }
}
function showMyRect (){
  rect(xRect, yRect,widthRect, heightRect);
}
function moveMyRect (){
  if (keyIsDown(UP_ARROW)){
    yRect -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRect += 10;
  }
}
function verifyCollisionRect(){
  if (xCircle - raio < xRect + widthRect && yCircle - raio < yRect + heightRect && yCircle + raio > yRect){
    velocityxCircle *= -1;
    raquetada.play();
  }
}
function showRectEnemy(){
  rect(xRectEnemy, yRectEnemy, widthRectEnemy, heightRectEnemy);
}
function moveRectEnemy(){
  velocityYEnemy = yCircle - yRectEnemy - widthRect / 2 - 30;
  yRectEnemy += velocityYEnemy + chanceDeErrarchanceDeErrar
  calculaChanceDeErrar();
}
function verifyCollisionRectEnemy(){
  if (xCircle + raio > xRectEnemy && yCircle + raio > yRectEnemy && yCircle - raio < yRectEnemy + heightRectEnemy ){
    velocityxCircle *= -1;
    raquetada.play();
  }
}
function showPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color (255,140,0));
  rect(180,10,40,20);
  fill(255);
  text(myPoints,200,26);
  fill(color (255,140,0));
  rect(380,10,40,20);
  fill(255);
  text(pointsEnemy,400,26);
}
function score(){
  if (xCircle > 586){
    myPoints += 1;
    ponto.play();
  }
  if (xCircle < 13){
    pointsEnemy += 1;
    ponto.play();
  }
}
function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
