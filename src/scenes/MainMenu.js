import Button from "../scenes/Botones/button.js";
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";

var escena = 0;
 export class MainMenu extends Phaser.Scene {
  constructor() {

    super("MainMenu");
  }

  preload()
	{
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}

create(){ 
  
  
  
  this.music1 = this.sound.add("mainmusic");
    var musicConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }
 
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 150, 'iza_logo').setScale(0.90);
   
    
      const x = this.scale.width * 0.5
      const y = this.scale.height * 0.5
 

  

    const boton3 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/12, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton3.on('pointerover', function(){boton3.setTexture('botonnuevo2')})
    boton3.on('pointerout', function(){boton3.setTexture('botonnuevo')})
    boton3.on('pointerdown', () => {this.scene.start("Inter1", {nivel:1, score:0}); this.game.sound.stopAll(); escena = 0 } )  
    
      
    
    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('botonnuevo2')})
    boton1.on('pointerout', function(){boton1.setTexture('botonnuevo')})
    boton1.on('pointerdown', () => {
      escena = 1 ; 
      this.scene.start("Tuto")})
  
    const boton2 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.7, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton2.on('pointerover', function(){boton2.setTexture('botonnuevo2')})
    boton2.on('pointerout', function(){boton2.setTexture('botonnuevo')})
    boton2.on('pointerdown', () => {
      escena = 1 ; 
      console.log(escena); 
      this.scene.start("Creditos")})

      const boton4 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.2, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton4.on('pointerover', function(){boton4.setTexture('botonnuevo2')})
    boton4.on('pointerout', function(){boton4.setTexture('botonnuevo')})
    boton4.on('pointerdown', () => {
      escena = 1 ; 
      console.log(escena); 
      this.scene.start("idioma")})


    const boton5 = this.add.sprite(560, this.cameras.main.centerY + this.cameras.main.centerY/1.2, 'botoncorazon').setInteractive({cursor: "pointer"})
    boton5.on('pointerover', function(){boton5.setTexture('botoncorazon1')})
    boton5.on('pointerout', function(){boton5.setTexture('botoncorazon')})
    boton5.on('pointerdown', () => {
      escena = 1 ; 
      console.log(escena); 
      this.scene.start("Extras")})

      this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/12, getPhrase('JUGAR') , {
        fontFamily: 'Lilita One',
        fontSize: '30px',
        color: '#FBF889',
        stroke: '#9C3B17',
        strokeThickness: 9,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)

      this.add.text( this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3,getPhrase('GUÍA'), {
        fontFamily: 'Lilita One',
        fontSize: '28px',
        color: '#FFE648',
        stroke: '#9C3B17',
        strokeThickness: 7,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)

      this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.7, getPhrase('CRÉDITOS'), {
        fontFamily: 'Lilita One',
        fontSize: '25px',
        color: '#FFE648',
        stroke: '#9C3B17',
        strokeThickness: 7,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)

      this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.2, getPhrase('IDIOMA'), {
        fontFamily: 'Lilita One',
        fontSize: '25px',
        color: '#FFE648',
        stroke: '#9C3B17',
        strokeThickness: 7,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)

    if(
      escena === 0 
      
    ){this.music1.play(musicConfig);
    }  
  }
}
