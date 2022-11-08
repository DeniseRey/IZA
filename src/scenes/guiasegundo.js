import Button from "../scenes/Botones/button.js";


export class guiasegundo extends Phaser.Scene {

  constructor() {

    super("guiados");
  }

  init (data) {
    this.score = data.score; 
    this.nivel=data.nivel;
  }

  create() {
    //agregar if this.nivel para saber que imágen mostrar

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondotuto').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 260, 'tutorial').setScale(0.65,0.75);

    const boton1 = this.add.sprite(this.cameras.main.centerX, 520, 'flechabutton').setInteractive({cursor: "pointer"})
  boton1.on('pointerover', function(){boton1.setTexture('flechabutton1')})
  boton1.on('pointerout', function(){boton1.setTexture('flechabutton')})
  boton1.on('pointerdown', () => {this.scene.start("Juego", {nivel:this.nivel, score:this.score})})
}

}
