Matriz m =  new Matriz(4,2, 40,40,70);
Matriz m2 =  new Matriz(2,4, 500,40,70);
Matriz mSoma;
void setup()
{
  size(1000,600);
  background(125);
  fill(255);
  //noLoop();
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);
  textFont("monospace",26);
  //println(PFont.list())
  m.desenharMatriz();
  m2.desenharMatriz();
  mSoma = m.soma(m2);
  mSoma.desenharMatriz();
  //m.colorirProximoHorizontal(color(204, 153, 0));
  //m.colorirProximoHorizontal(color(204, 153, 0));
  //m.colorirProximoHorizontal(color(204, 153, 0));
  //m.colorirProximoHorizontal(color(204, 153, 0));
  //m.colorirProximoHorizontal(color(204, 153, 0));
  //m.colorirProximoHorizontal(color(204, 153, 0));
  //m.colorirProximoHorizontal(color(204, 153, 0));
  
  frameRate(1);
}

void draw(){  
  text("Hello Web!",20,20);
  color c = color(random(0,255), random(0,255), random(0,255));
  m.colorirProximoHorizontal(c);
  m2.colorirProximoHorizontal(c);
  //m2.colorirProximoVertical(c);
  mSoma.colorirProximoHorizontal(c);
}

//Definição de uma classe matriz com algumas operações não inrentes a esta classe como desenharMatriz, desenharMatrizColorida
class Matriz {
	
	int[][] matriz = new int[10][10];
 int[][] colorido = new int[10][10];
 Cordenada[][] mposicao = new Cordenada[10][10];
	int col, lin;
	int colColor, linColor; //Armazena os indices da linha e da coluna colorida
 int x, y;
 int distancia;
	Matriz(int col, int lin, int x, int y, int distancia) {
		for(int i = 0; i < lin; i++){
			for(int j = 0; j < col; j++){
				matriz[i][j] = int(random(-50,50));
				mposicao[i][j] = new Cordenada((j+1)*distancia+x, (i+1)*distancia+y);
				//println(matriz[i][j]);
			}
		}
		
		this.distancia = distancia;
		this.y = y;
		this.x = x;
		this.col = col;
		this.lin = lin;
		this.colColor = 0;
		this.linColor = 0;

	}
	
	void desenharMatriz(){
  //ellipseMode(CENTER);
		//noFill();
		for(int i = 0; i < lin; i++){
			   for(int j = 0; j < col; j++){
			     //ellipse(mposicao[i][j].getX(),mposicao[i][j].getY(), 60,60);
				    text(int(matriz[i][j]), mposicao[i][j].getX(),mposicao[i][j].getY());
				    //rect(mposicao[i][j].getX(),mposicao[i][j].getY(),4,4);
				    //println(int(matriz[i][j]));
			   }
		  }
	 }
	 
	 void desenharMatrizColorida(int x, int y){
  		  for(int i = 0; i < lin; i++){
		  	   for(int j = 0; j < col; j++){
				      text(int(matriz[i][j]), (i+1)*40, (j+1)*40);
		  		    //println(int(matriz[i][j]));
			     }
		    }
	 }

	 void colorirProximoHorizontal(color c){
		if((colColor >= col) && (linColor >= lin))
			return;
  if(colColor >= col){
      colColor = 0;
      linColor = linColor+1;
   }
	   noFill();
	   stroke(c);
	   strokeWeight(8);
	   //Modificando o parametro x com +15  e y com -5, para deixar o texto bem no centro da circuferência
	   ellipse(mposicao[linColor][colColor].getX()+15,mposicao[linColor][colColor].getY()-5, 60,60);
	   
		  colColor = colColor+1;
	 }
	 
	 void colorirProximoVertical(color c){
		if((colColor >= col) && (linColor >= lin))
			return;
		if(linColor >= lin){
			linColor = 0;
			colColor = colColor+1;
		}

	   noFill();
	   stroke(c);
	   strokeWeight(8);
	   //Modificando o parametro x com +15  e y com -5, para deixar o texto bem no centro da circuferência
	   ellipse(mposicao[linColor][colColor].getX()+15,mposicao[linColor][colColor].getY()-5, 60,60);

		  linColor = linColor+1;
	 }
	 
	 Matriz soma(Matriz matriz2){
	   Matriz mResult = new Matriz(matriz2.getNlin(), matriz2.getNcol(), 350, 400,matriz2.getDist());
	   for(int i = 0; i < lin; i++){
		  	   for(int j = 0; j < col; j++){
				      mResult.matriz[i][j] = this.matriz[i][j] + matriz2.matriz[i][j];
		  		    //println(int(matriz[i][j]));
			     }
		    }
	   return mResult;
	 }
	 
	 int getDist(){
	   return this.distancia;
	 }
	 
	 int getNlin(){
	   return this.lin;
	 }
  
  int getNcol(){
	   return this.col;
	 }	 
	 
	 int getX(){
    return x;
  }
  void setX(int x){
    this.x = x;
  }
  
  int getY(){
    return y;
  }
  void setY(int y){
    this.y = y;
  }
}

class Cordenada{
  private int x, y;
  Cordenada(int x, int y){
    this.x = x;
    this.y = y;
  }
 
  int getX(){
    return x;
  }
  void setX(int x){
    this.x = x;
  }
  
  int getY(){
    return y;
  }
  void setY(int y){
    this.y = y;
  }
}










