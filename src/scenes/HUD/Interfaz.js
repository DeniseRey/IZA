import Phaser from 'phaser'

export class Interfaz {
	 scene;
     score = 0;
    constructor(scene, score){
        this.scene=scene;
        this.score = score;
        this.vida = 3;
        this.scoreText = this.scene.scene.add.text(58, 52, `Miel: ${
            this.score}`, {fontFamily: "arial",fontSize: "17px",
          });
          this.scoreText.scrollFactorX=0
          this.scoreText.scrollFactorY=0
          this.vidaText = this.scene.scene.add.text(90, 25, `Vidas: ${this.vida}`, {fontFamily: "arial", fontSize: "17px",
          });
          this.vidaText.scrollFactorX=0
          this.vidaText.scrollFactorY=0
    }

    collectStar() {
        //gota.play()
        this.score += 10;
        this.scoreText.setText(`Miel: ${this.score}`)
    }
    hitAvispa(){
        this.vida -= 1;
        this.vidaText.setText(`Vidas: ${this.vida}`)
    }
}