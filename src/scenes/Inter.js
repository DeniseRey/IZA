import Button from "../scenes/Botones/button.js";


var score;

export class Inter extends Phaser.Scene {

  constructor() {

    super("Inter");
  }

  init (data) {
    score = data.score; 
  }

    create() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'inter1').setScale(0.83,1);


      const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'flechabutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('flechabutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('flechabutton')})
    boton1.on('pointerdown', () => {this.scene.start("Play1")})
  }

}
