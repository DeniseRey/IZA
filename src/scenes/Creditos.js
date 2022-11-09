import Button from "../scenes/Botones/button.js";
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";

export class Creditos extends Phaser.Scene {
    // Se extiende de Phaser.Scene porque es una escena
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Creditos");
    }

    preload()
	{
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}
      create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
        this.add.image(this.cameras.main.centerX, 260, 'ventanasola').setScale(0.65,0.75);
        this.add.image(535, 475, 'help').setScale(0.65,0.75);
  
        const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'botonnuevo').setInteractive({cursor: "pointer"})
        boton1.on('pointerover', function(){boton1.setTexture('botonnuevo2')})
        boton1.on('pointerout', function(){boton1.setTexture('botonnuevo')})
        boton1.on('pointerdown', () => {this.scene.start("MainMenu")})
  

        this.add.text(this.cameras.main.centerX, 120, getPhrase('MÚSICA'), {
          fontFamily: 'Lilita One',
          fontSize: '28px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 160,'"Fairy Forest" by DEREK FIECHTER', {
          fontFamily: 'Lilita One',
          fontSize: '20px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 180, '"Fairy Magic" by DEREK FIECHTER', {
          fontFamily: 'Lilita One',
          fontSize: '20px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 200, '"Night Fairies" by BRANDON FIETCHTER', {
          fontFamily: 'Lilita One',
          fontSize: '20px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 220, '"Fairy Forest" by ADRIAN von ZIEGLER', {
          fontFamily: 'Lilita One',
          fontSize: '20px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 240, '"Magical Forest" by the FIETCHTERS', {
          fontFamily: 'Lilita One',
          fontSize: '20px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 260, '"Lost Rainforest" by the FIETCHTERS', {
          fontFamily: 'Lilita One',
          fontSize: '20px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 300, getPhrase('A MIS AMIGOS QUE'), {
          fontFamily: 'Lilita One',
          fontSize: '25px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
        this.add.text(this.cameras.main.centerX, 330, getPhrase('ME EXPLICARON EL CÓDIGO'), {
          fontFamily: 'Lilita One',
          fontSize: '25px',
          color: '#F8E71C',
          stroke: '#853106',
          strokeThickness: 5,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
     
        this.add.text(this.cameras.main.centerX, 390, getPhrase('...Y A MI  :)  DENISE REY'), {
          fontFamily: 'Lilita One',
          fontSize: '30px',
          color: '#F8E71C',
			    stroke: '#CC2B7B',
          strokeThickness: 7,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)



        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, getPhrase('ATRÁS'), {
          fontFamily: 'Lilita One',
          fontSize: '28px',
          color: '#FFE648',
          stroke: '#9C3B17',
          strokeThickness: 7,
          shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
          resolution: 2
        }).setOrigin(0.5)
    }
  
  }
  