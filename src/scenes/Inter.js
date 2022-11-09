import Button from "../scenes/Botones/button.js";


export class Inter extends Phaser.Scene {

  constructor() {

    super("Inter1");
  }

  init (data) {
    this.score = data.score; 
    this.nivel=data.nivel;
  }

    create() {

      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'inter' + this.nivel).setScale(0.83,1);
      

      const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'flechabutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('flechabutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('flechabutton')})
    boton1.on('pointerdown', () => {this.scene.start("Juego", {nivel:this.nivel, score:this.score})})
  }

}
