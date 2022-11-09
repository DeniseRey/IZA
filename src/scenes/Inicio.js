import Button from "../scenes/Botones/button.js";

export class Black extends Phaser.Scene {

    constructor() {

      super("Black");
    }
      create() {
        this.add.image(this.cameras.main.centerX, 455, 'black').setScale(0.65,0.65);
        this.add.image(this.cameras.main.centerX, 190, 'click').setScale(0.65,0.65);
  
        const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'primero').setInteractive({cursor: "pointer"});
        boton1.on('pointerdown', () => {this.scene.start("MainMenu")})
  
    }
  
  }
  