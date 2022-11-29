import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";

export class guiasegundo extends Phaser.Scene {

  constructor() {
    super("guiados");
  }

  init (data) {
    this.score = data.score; 
    this.nivel=data.nivel;
  }

  preload()
  {
    const fonts = new WebFontFile(this.load, 'Lilita One')
    this.load.addFile(fonts)
    this.load.tilemapTiledJSON("map7", "assets/tilemaps/mapaideaiza7.JSON");
    this.load.image("tilesBelow7", "assets/tilemaps/fondo7.png");
    this.load.image("tilesPlatform7", "assets/tilemaps/plataforma7.png");
    this.load.tilemapTiledJSON("map8", "assets/tilemaps/mapaideaiza8.json");
    this.load.image("tilesBelow8", "assets/tilemaps/fondo8.png");
    this.load.image("tilesPlatform8", "assets/tilemaps/plataforma8.png");
    this.load.tilemapTiledJSON("map9", "assets/tilemaps/mapaideaiza9.json");
    this.load.image("tilesBelow9", "assets/tilemaps/fondo9.png");
    this.load.image("tilesPlatform9", "assets/tilemaps/plataforma9.png");
    this.load.audio("musica7", "assets/sounds/musicalvl7.mp3");
    this.load.audio("musica8", "assets/sounds/musicalvl8.mp3");
    this.load.audio("musica9", "assets/sounds/musicalvl9.mp3");
    this.load.spritesheet("moverse3", "assets/imagenes/sprite7.png", {
      frameWidth: 86,
      frameHeight: 65,});
    this.load.spritesheet("poof", "assets/imagenes/poof.png", {
      frameWidth: 59,
      frameHeight: 55,});
    this.load.spritesheet("cayendo3", "assets/imagenes/sprite6.png", {
      frameWidth: 87,
      frameHeight: 65,});
    this.load.spritesheet("tornado", "assets/imagenes/sprite8.png", {
      frameWidth: 66,
      frameHeight: 95,});
  }

  create() {
    this.anims.create({
      key: "left3",
      frames: this.anims.generateFrameNumbers("moverse3", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right3",
      frames: this.anims.generateFrameNumbers("moverse3", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "caer3",
      frames: this.anims.generateFrameNumbers("cayendo3", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "pof",
      frames: this.anims.generateFrameNumbers("poof", { start: 0, end: 4 }),
      frameRate: 8,
    });
    this.anims.create({
      key: "spin",
      frames: this.anims.generateFrameNumbers("tornado", { start: 0, end: 26 }),
      frameRate: 14,
    });

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondotuto').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 260, 'tutorial').setScale(0.65,0.75);
    this.add.image(220, 222, 'tornadosolo').setScale(0.60);
    this.add.image(420, 222, 'alaverdetuto').setScale(0.45);
    this.add.image(this.cameras.main.centerX, 390, 'esola').setScale(0.7);

    this.add.text(this.cameras.main.centerX, 100, getPhrase('¡IZA DESBLOQUEÓ UNA NUEVA FORMA PARA SU CAPA!'), {
      fontFamily: 'Lilita One',
      fontSize: '21px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 6,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 130, getPhrase('AHORA IZA PUEDE GIRAR Y GIRAR PARA'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 150, getPhrase('QUITARLE LA MIEL A LAS AVISPAS'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 290, getPhrase('USA LA TECLA "E" PARA ACTIVAR EL'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 310, getPhrase('TORNADO Y ASÍ DESTRUIR A LAS AVISPAS'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 350, getPhrase('LA HABILIDAD TIENE UN TIEMPO DE ENFRIAMIENTO'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 430, getPhrase('¡ÚSALA SABIAMENTE!'), {
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
    boton1.on('pointerdown', () => {this.scene.start("Inter1", {score:this.score, nivel:this.nivel });})
  }
}
