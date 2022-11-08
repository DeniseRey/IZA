import Button from "../scenes/Botones/button.js";
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'

export class guiaprimero extends Phaser.Scene {

  constructor() {

    super("guiauno");
  }

  init (data) {
    this.score = data.score; 
    this.nivel=data.nivel;
  }

    preload()
    {
      const fonts = new WebFontFile(this.load, 'Lilita One')
      this.load.addFile(fonts)
    }


    create() {
      //agregar if this.nivel para saber que imágen mostrar

      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondotuto').setScale(0.83,1);
      this.add.image(this.cameras.main.centerX, 260, 'tutorial').setScale(0.65,0.75);

      this.add.text(this.cameras.main.centerX, 100, '¡IZA DESBLOQUEÓ UNA NUEVA FORMA PARA SU CAPA!', {
        fontFamily: 'Lilita One',
        fontSize: '21px',
        color: '#F8E71C',
        stroke: '#853106',
        strokeThickness: 6,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)

      this.add.text(this.cameras.main.centerX, 180, 'AHORA IZA PUEDE INVOCAR UN ESCUDO', {
        fontFamily: 'Lilita One',
        fontSize: '18px',
        color: '#F8E71C',
        stroke: '#853106',
        strokeThickness: 5,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)
      this.add.text(this.cameras.main.centerX, 240, 'PARA SORTEAR A LAS MOLESTAS AVISPAS', {
        fontFamily: 'Lilita One',
        fontSize: '18px',
        color: '#F8E71C',
        stroke: '#853106',
        strokeThickness: 5,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)
      this.add.text(this.cameras.main.centerX, 290, 'USA LA TECLA E PARA ACTIVAR EL ESCUDO Y ASÍ VOLVERTE INMUNE', {
        fontFamily: 'Lilita One',
        fontSize: '18px',
        color: '#F8E71C',
        stroke: '#853106',
        strokeThickness: 5,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)
      this.add.text(this.cameras.main.centerX, 350, 'LA HABILIDAD TIENE UN TIEMPO DE ENFRIAMIENTO', {
        fontFamily: 'Lilita One',
        fontSize: '18px',
        color: '#F8E71C',
        stroke: '#853106',
        strokeThickness: 5,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)
      this.add.text(this.cameras.main.centerX, 450, '¡ÚSALA SABIAMENTE!', {
        fontFamily: 'Lilita One',
        fontSize: '25px',
        color: '#F8E71C',
        stroke: '#853106',
        strokeThickness: 6,
        shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
        resolution: 2
      }).setOrigin(0.5)

      const boton1 = this.add.sprite(this.cameras.main.centerX, 520, 'flechabutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('flechabutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('flechabutton')})
    boton1.on('pointerdown', () => {this.scene.start("Juego", {nivel:this.nivel, score:this.score})})
  }

}
