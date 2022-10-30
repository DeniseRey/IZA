import Button from "../scenes/Botones/button.js";
import Iza from "./Personajes/Iza.js";
import Enemigos from "./Personajes/Enemigo.js"
import Recolectable from "./Recolectable/Recolectable.js";
import { Interfaz } from "./HUD/Interfaz.js";

var cursors;
var gameOver;
var Fin = false;

const Musica = {
  1: "musica1", 2: "musica2", 3: "musica3"
}

export class Juego extends Phaser.Scene {
  Enemigos=[];
  Recolectables=[];
  UI;
  constructor() {

    super("Juego");
  }

    init (data) {
    this.score = data.score; 
    this.nivel=data.nivel
    this.vida=3
    
  }

    create() {
      this.music = this.sound.add(Musica [this.nivel]);
      var musicConfig = {
        mute: false,
        volume: 0.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0,
      }
      this.music.play(musicConfig);


      Fin = false;
      this.cameras.main.setBounds(0, 0, 640, 4288);
      
      const map = this.make.tilemap({ key: "map" + this.nivel });


      const tilesetBelow = map.addTilesetImage("fondo"+ this.nivel, "tilesBelow" + this.nivel);
    const tilesetPlatform = map.addTilesetImage(
      "plataforma" + this.nivel,
      "tilesPlatform" + this.nivel
    );

    const belowLayer = map.createLayer("fondo" + this.nivel, tilesetBelow, 0, 0);
    const worldLayer = map.createLayer("plataforma" + this.nivel, tilesetPlatform, 0, 0);
    const objectsLayer = map.getObjectLayer("Objetos"); 

    if ((cursors = !undefined)) {
      cursors = this.input.keyboard.createCursorKeys();
    }


    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {

        case "abeja": 
          this.Enemigos.push(new Enemigos(this, x, y)) ;
          break;
        
        case "IZA": 
          this.iza= new Iza(this.vida, this, x, y, this.nivel);
          break; 

        case "miel": 
          this.Recolectables.push(new Recolectable(this, 10, x, y));
          break;

      }
    });
    
    this.UI = new Interfaz(this.scene, this.score);  //se inicializa la interfaz y el score en 0. Al avanzar de nivel, se crea nueva interfaz con score que se va acumulando

    this.cameras.main.startFollow(this.iza, true, 0.25, 0.25);
    this.cameras.main.setZoom(1);

    this.physics.add.overlap(this.iza, this.Recolectables, this.collectMiel, null, this);
    this.physics.add.overlap(this.iza, this.Enemigos, this.hitiza, null, this);


    this.suelo = this.physics.add.sprite(450,4275,"invisible").setScale(6.0,1).setVisible(false);
    this.suelo.setImmovable(true);
    this.physics.add.collider(this.iza, this.suelo, this.meta, null, this);
    
  }

update(){
  if(Fin == true){
    return;
  }
  if (cursors.left.isDown) {
    this.iza.setVelocityX(-160);
    this.iza.anims.play("left", true);
  } else if (cursors.right.isDown) {
    this.iza.setVelocityX(160);

    this.iza.anims.play("right", true);
  } else {
    this.iza.anims.play("caer", true);
    this.iza.setVelocityX(0);

  }
  if (cursors.up.isDown && this.iza.body.blocked.down) {
    this.iza.setVelocityY(-330);
  }

}
  collectMiel(player,miel){
    this.UI.collectStar()
    miel.destroy();
  }
  hitiza(player,enemigo){
    this.UI.hitAvispa()
    player.golpe();
    enemigo.destroy();
    {player.setTint(0xff0000);this.time.delayedCall(200, () => player.clearTint())};
    if (this.UI.vida=== 0 ){
      this.physics.pause();
     
      player.setTint(0xff0000);
      Fin=true;
      player.anims.play("golpe");
      gameOver = true;
      this.game.sound.stopAll();
       //fail.play()
      setTimeout(() => {
      this.scene.start("Lost",{ score:this.UI.score, nivel:this.nivel, pastscore:this.score });
      }, 2500); 
    }
  }

  meta(iza,suelo) { 
      Fin = true;
      this.iza.setVelocityX(0);
      this.iza.anims.play ("quieto", true);
    if (iza.body.blocked.down) {
    this.time.delayedCall(1800, () => {
      this.game.sound.stopAll();
     
    if (this.nivel == 3){
      this.scene.start("Win", {score:this.UI.score} );
    }
    else {
      this.scene.start("Inter1", {score:this.UI.score, nivel:this.nivel+1 }); //se pasan los puntos al inter siguiente y al nivel siguiente
    }
      })

}}}


