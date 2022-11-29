import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";
import { getPageCount, getPageInfo } from './Servicios/enciclopedia';

export class Extras extends Phaser.Scene {
  PageCount=0
  currentPage=1
  boton2
  boton3
  descriptionText
  nameText
  constructor() {
    super("Extras");
  }

  preload()
	{
    this.PageCount=getPageCount()
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}

  nextPage(){
    if (this.currentPage == this.PageCount-1){
      this.boton2.visible=false
    }
    this.currentPage += 1
    if (this.currentPage != 1 ){
      this.boton3.visible=true
    }
    this.renderInfo()
  }

  previousPage(){
    if (this.currentPage == 2){
      this.boton3.visible=false
    }
    this.currentPage -= 1
    if (this.currentPage != this.PageCount ){
      this.boton2.visible=true
    }
    this.renderInfo()
  }

  renderInfo(){
    const data=getPageInfo(this.currentPage)
    const name=data.name
    const description=data.description
    this.nameText.text = name
    this.descriptionText.text = description
  }

  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 305, 'ventanasola').setScale(0.65,0.90);
    this.boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'botonnuevo').setInteractive({cursor: "pointer"})
    this.boton1.on('pointerover', () =>{this.boton1.setTexture('botonnuevo2')})
    this.boton1.on('pointerout',  () =>{this.boton1.setTexture('botonnuevo')})
    this.boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

    this.boton2 = this.add.sprite(590, 220 + this.cameras.main.centerY/3, 'flechabutton').setInteractive({cursor: "pointer"})
    this.boton2.on('pointerover', () => {this.boton2.setTexture('flechabutton1')})
    this.boton2.on('pointerout', () =>{this.boton2.setTexture('flechabutton')})
    this.boton2.on('pointerdown',() => this.nextPage())
    this.boton3 = this.add.sprite(50, 220 + this.cameras.main.centerY/3, 'flechabutton').setInteractive({cursor: "pointer"})
    this.boton3.flipX=true
    this.boton3.visible=false
    this.boton3.on('pointerover', () =>{this.boton3.setTexture('flechabutton1')})
    this.boton3.on('pointerout', () =>{this.boton3.setTexture('flechabutton')})
    this.boton3.on('pointerdown', () => this.previousPage())

    this.nameText = this.add.text(this.cameras.main.centerX, 145, "", {
      fontFamily: 'Lilita One',
      fontSize: '23px',
      color: '#FFEB67',
      stroke: '#650220',
      strokeThickness: 6,
      resolution: 2,
      wordWrap: {
        width: 400
      },
      align: "center"
  }).setOrigin(0.5)

    this.descriptionText = this.add.text(this.cameras.main.centerX, 300, "", {
      fontFamily: 'Lilita One',
      fontSize: '18px',
      color: '#FFEB67',
      stroke: '#853106',
      strokeThickness: 5,
      resolution: 2,
      wordWrap: {
        width: 400
      },
  }).setOrigin(0.5)

    this.renderInfo()



    this.add.text(this.cameras.main.centerX, 55, getPhrase('EXTRAS'), {
        fontFamily: 'Lilita One',
        fontSize: '50px',
        color: '#FFEB67',
        stroke: '#CC2B7B',
        strokeThickness: 10,
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