import Button from "../scenes/Botones/button.js";
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";

export class Extras extends Phaser.Scene {
  constructor() {

    super("Extras");
  }

  preload()
	{
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}

  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);


    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('botonnuevo2')})
    boton1.on('pointerout', function(){boton1.setTexture('botonnuevo')})
    boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

    this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, getPhrase('ATRÁS'), {
      fontFamily: 'Lilita One',
      fontSize: '28px',
      color: '#FFE648',
      stroke: '#9C3B17',
      strokeThickness: 7,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)
  }}