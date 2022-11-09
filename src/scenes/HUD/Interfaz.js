import Phaser from 'phaser'
import { DE_DE, EN_US, ES_AR, PT_BR } from '../Servicios/languajes'
import { getTranslations, getPhrase } from "../Servicios/traducciones";

export class Interfaz {
	 scene;
     score = 0;
    constructor(scene, score, mundo){
        this.scene=scene;
        this.score = score;
        this.vida = 3;          
        this.ventana = this.scene.scene.add.image(80,55,"ventana").setScale(0.6)
        this.ventana.scrollFactorX=0
        this.ventana.scrollFactorY=0
        this.scoreText = this.scene.scene.add.text(40, 55, getPhrase('MIEL') + ": " + 
            this.score, {fontFamily: 'Lilita One',fontSize: "17px",
            color: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 5,
          });
          this.scoreText.scrollFactorX=0
          this.scoreText.scrollFactorY=0
          this.vidaText = this.scene.scene.add.text(40, 30, getPhrase('VIDAS') + ": " + this.vida, {fontFamily: 'Lilita One', fontSize: "17px",
          color: '#FFFFFF',
          stroke: '#000000',
          strokeThickness: 5,
          });
          this.vidaText.scrollFactorX=0
          this.vidaText.scrollFactorY=0

          this.sonidogota = this.scene.scene.sound.add("gota");
          this.alas=this.scene.scene.add.sprite(640,600,"alaon" + mundo).setOrigin(1).setScale(0.36)
          this.alas.scrollFactorX=0
          this.alas.scrollFactorY=0
    }

    collectStar(tiempo) {
        setTimeout(() => {
            this.sonidogota.play()
            }, tiempo);
        
        this.score += 10;
        this.scoreText.setText(getPhrase('MIEL') + ": " + 
        this.score, {fontFamily: 'Lilita One',fontSize: "17px",
        color: '#FFFFFF',
        stroke: '#000000',
        strokeThickness: 5,})
    }
    hitAvispa(mundo){
        if(mundo==2){
            this.vida -= 2;
        }
        else{
            this.vida -= 1;
        }
        
        this.vidaText.setText(getPhrase('VIDAS') + ": " + this.vida, {fontFamily: 'Lilita One', fontSize: "17px",
        color: '#FFFFFF',
        stroke: '#000000',
        strokeThickness: 5,
        });
    }
    cooldown(texto){
        
        this.alas.setTexture(texto)
    }
}