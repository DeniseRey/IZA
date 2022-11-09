var score;
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
export class Lost extends Phaser.Scene {
  constructor() {

    super("Lost");
  }


  init(data) {

    score = data.score;
    this.pastscore = data.pastscore;
    this.nivel=data.nivel;
  }

  preload()
	{
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}

  create() {

    this.music = this.sound.add("lose");
    var musicConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }

    this.music.play(musicConfig);
    
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'lost').setScale(0.65,0.65);
    this.add.image(this.cameras.main.centerX, 265, 'izalost').setScale(0.57);
    this.add.image(this.cameras.main.centerX, 485, 'ventanamiel').setScale(0.95,0.95);
    this.add.text(this.cameras.main.centerX, 493,
      ` ${score}`, {fontFamily: "arial",fontSize: "22px",
      }).setOrigin(0.5);
   
      console.log(this.pastscore)

    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'botonnuevo').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('botonnuevo2')})
    boton1.on('pointerout', function(){boton1.setTexture('botonnuevo')})
    boton1.on('pointerdown', () => {this.scene.start("Juego", {nivel:this.nivel, score:this.pastscore})})

    const boton2 = this.add.sprite(50,  550, 'back1').setInteractive({cursor: "pointer"})
    boton2.on('pointerover', function(){boton2.setTexture('back2')})
    boton2.on('pointerout', function(){boton2.setTexture('back1')})
    boton2.on('pointerdown', () => {this.scene.start("MainMenu", {nivel:this.nivel, score:this.pastscore})})

    this.add.text(this.cameras.main.centerX, 45, '...OH NO', {
      fontFamily: 'Lilita One',
      fontSize: '38px',
      color: '#FFE648',
      stroke: '#9C3B17',
      strokeThickness: 7,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)
    this.add.text(this.cameras.main.centerX, 85, 'PERDISTE', {
      fontFamily: 'Lilita One',
      fontSize: '38px',
      color: '#FFE648',
      stroke: '#9C3B17',
      strokeThickness: 7,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)

    this.add.text(this.cameras.main.centerX, 428, 'MIEL RECOLECTADA:', {
			fontFamily: 'Lilita One',
			fontSize: '38px',
			color: '#FFDFAF',
			stroke: '#CD2A7C',
			strokeThickness: 7
		}).setOrigin(0.5)


    this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'OTRA VEZ', {
      fontFamily: 'Lilita One',
      fontSize: '25px',
      color: '#FFE648',
      stroke: '#9C3B17',
      strokeThickness: 7,
      shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
      resolution: 2
    }).setOrigin(0.5)
   
  }
}
