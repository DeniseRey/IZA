import Button from "../scenes/Botones/button.js";
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
export class Tuto extends Phaser.Scene {
  constructor() {

    super("Tuto");
  }

  preload()
	{
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}

  create() {
     
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
      this.add.image(this.cameras.main.centerX, 260, 'tutorial').setScale(0.65,0.75);

    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('botonnuevo2')})
    boton1.on('pointerout', function(){boton1.setTexture('botonnuevo')})
    boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

    this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'ATRÁS', {
      fontFamily: 'Lilita One',
      fontSize: '28px',
      color: '#FFE648',
      stroke: '#9C3B17',
      strokeThickness: 7,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 100, 'MUEVE A IZA USANDO LAS FLECHAS DEL TECLADO', {
      fontFamily: 'Lilita One',
      fontSize: '20px',
      color: '#F8E71C',
      stroke: '##853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 200, 'RECOLECTA TODA LA MIEL POSIBLE', {
      fontFamily: 'Lilita One',
      fontSize: '20px',
      color: '#F8E71C',
      stroke: '##853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

}

}