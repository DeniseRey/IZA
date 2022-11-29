import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";

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
    this.load.tilemapTiledJSON("map4", "assets/tilemaps/mapaideaiza4.json");
    this.load.image("tilesBelow4", "assets/tilemaps/fondo4.png");
    this.load.image("tilesPlatform4", "assets/tilemaps/plataforma4.png");
    this.load.tilemapTiledJSON("map5", "assets/tilemaps/mapaideaiza5.json");
    this.load.image("tilesBelow5", "assets/tilemaps/fondo5.png");
    this.load.image("tilesPlatform5", "assets/tilemaps/plataforma5.png");
    this.load.tilemapTiledJSON("map6", "assets/tilemaps/mapaideaiza6.json");
    this.load.image("tilesBelow6", "assets/tilemaps/fondo6.png");
    this.load.image("tilesPlatform6", "assets/tilemaps/plataforma6.png");
    this.load.audio("musica4", "assets/sounds/musicalvl4.mp3");
    this.load.audio("musica5", "assets/sounds/musicalvl5.mp3");
    this.load.audio("musica6", "assets/sounds/musicalvl6.mp3");
    this.load.spritesheet("escudo", "assets/imagenes/sprite5.png", {
      frameWidth: 133,
      frameHeight: 123,});
    this.load.spritesheet("cayendo2", "assets/imagenes/sprite3.png", {
      frameWidth: 87,
      frameHeight: 65,});
    this.load.spritesheet("moverse2", "assets/imagenes/sprite4.png", {
      frameWidth: 87,
      frameHeight: 65,});
  }

  create() {
    
    this.anims.create({
      key: "shield",
      frames: this.anims.generateFrameNumbers("escudo", { start: 0, end: 34 }),
      frameRate: 12,
    });
    this.anims.create({
      key: "caer2",
      frames: this.anims.generateFrameNumbers("cayendo2", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "left2",
      frames: this.anims.generateFrameNumbers("moverse2", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right2",
      frames: this.anims.generateFrameNumbers("moverse2", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondotuto').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 260, 'tutorial').setScale(0.65,0.75);
    this.add.image(220, 226, 'escudosolo').setScale(0.45);
    this.add.image(420, 226, 'alacristaltuto').setScale(0.45);
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

    this.add.text(this.cameras.main.centerX, 130, getPhrase('AHORA IZA PUEDE INVOCAR UN ESCUDO'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 150, getPhrase('PARA SORTEAR A LAS MOLESTAS AVISPAS'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)
    
    this.add.text(this.cameras.main.centerX, 168, getPhrase('(¡CUIDADO! EN ÉSTE LUGAR RESTAN 2 VIDAS)'), {
      fontFamily: 'Lilita One',
      fontSize: '12px',
      color: '#FFFFFF',
      stroke: '#000000',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 290, getPhrase('USA LA TECLA "E" PARA ACTIVAR EL ESCUDO'), {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#F8E71C',
      stroke: '#853106',
      strokeThickness: 5,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 310, getPhrase('Y ASÍ VOLVERTE INMUNE'), {
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
