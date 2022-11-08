import Button from "../scenes/Botones/button.js";
import Iza from "./Personajes/Iza.js";
import Enemigos from "./Personajes/Enemigo.js"
import Recolectable from "./Recolectable/Recolectable.js";
import { Interfaz } from "./HUD/Interfaz.js";


var cursors;
var gameOver;
var Fin = false;
var apretarE;
var activado = false;
var colision;
var tiempo = 0;
var izquierda = true;
var derecha = true;
var cooldown = 0;
var cooldownactivado = false;

const Musica = {
  1: "musica1", 2: "musica2", 3: "musica3", 4: "musica4", 5: "musica5", 6: "musica6", 7: "musica7", 8: "musica8", 9: "musica9"
}

export class Juego extends Phaser.Scene {
  Enemigos=[];  //Arreglo: Se puede poner cualquier cosa adentro como colecciones o números. Acá se usa para meter dentro del arreglo todas las abejas y mieles que hay en tilemaps
  Recolectables=[]; 
  UI;
  Mundo;
  Soloizquierda = true;
  Soloderecha = true;

  
  constructor() {

    super("Juego");
  }

    init (data) {
    this.score = data.score; 
    this.nivel=data.nivel
    this.vida=3
    
  }

    create() {
      activado = false
      izquierda = true
      derecha = true
      cooldown = 0
      cooldownactivado = false


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

      this.Mundo = Phaser.Math.CeilTo(this.nivel/3)  //Ceilto redondea para arriba. Teniendo en cuenta que cada mundo tiene 3 niveles, se hace una división para definir a que mundo pertenece cada nivel
      console.log(this.Mundo)
      
      Fin = false;
      

      
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
          this.iza.setCollideWorldBounds(false)
          break; 

        case "miel": 
          this.Recolectables.push(new Recolectable(this, 10, x, y));
          break;

      }
    });
    

    
    this.cameras.main.setBounds(0, 0, 640, map.heightInPixels);
    apretarE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)

    this.UI = new Interfaz(this.scene, this.score, this.Mundo);  //se inicializa la interfaz y el score en 0. Al avanzar de nivel, se crea nueva interfaz con score que se va acumulando

    this.cameras.main.startFollow(this.iza, true, 0.25, 0.25);
    this.cameras.main.setZoom(1);

    this.physics.add.overlap(this.iza, this.Recolectables, this.collectMiel, null, this);
    colision = this.physics.add.overlap(this.iza, this.Enemigos, this.hitiza, null, this); 

    this.pixelbruh = this.physics.add.sprite(0,2144,"ndeah").setScale(1,4288).setVisible(false);
    this.pixelbruh.setImmovable(true);
    this.physics.add.collider(this.iza, this.pixelbruh, this.funcion1, null, this);
    this.pixelbruh2 = this.physics.add.sprite(640,2144,"ndeah").setScale(1,4288).setVisible(false);
    this.pixelbruh2.setImmovable(true);
    this.physics.add.collider(this.iza, this.pixelbruh2, this.funcion2, null, this);
    this.suelo = this.physics.add.sprite(450,map.heightInPixels - 13,"invisible").setScale(6.0,1).setVisible(false);
    this.suelo.setImmovable(true);
    this.physics.add.collider(this.iza, this.suelo, this.meta, null, this);
    this.final=map.heightInPixels - 80
    
  }

 funcion1(){
  izquierda = false
 }

 funcion2(){
  derecha = false
}




update(time,delta){
  if(Fin == true){
    return;
  }

  if (!colision.active){
    tiempo += delta    //al tiempo se le suma los milisegundos de cada frame 
    if (tiempo >= 1500){
      colision.active = true
      tiempo = 0
    }
  }

  if (cooldownactivado){
    cooldown += delta    //al tiempo se le suma los milisegundos de cada frame 
    if (cooldown >= 3500){
      cooldownactivado = false
      this.UI.cooldown('alaon' + this.Mundo)
      cooldown = 0
    }
  }

  if(this.Mundo==2){
    if(apretarE.isDown && !activado && !cooldownactivado){
      activado=true
      cooldownactivado=true
      this.iza.anims.play("shield", true)  //escudo
      this.iza.setSize(133,123)
      setTimeout(() => {
        this.UI.cooldown('alaoff' + this.Mundo)
         }, 300);
    }
    if(this.iza.anims.currentFrame.index == 30 && activado ){
      activado = false
      this.iza.anims.play("caer" + this.Mundo, true);
      this.iza.setSize(86,65)
    }
  }


  if(this.Mundo==3){
    if(apretarE.isDown && !activado && !cooldownactivado){
      activado=true
      colision.active=true
      cooldownactivado=true
      this.iza.anims.play("spin", true)  //tornado
      this.iza.setSize(66,95)
      setTimeout(() => {
       this.UI.cooldown('alaoff' + this.Mundo)
        }, 300);
     }
     if(this.iza.anims.currentFrame.index == 26 && activado ){
       activado = false
       this.iza.anims.play("caer" + this.Mundo, true);
       this.iza.setSize(86,65)
     }
  }

  
  
  if (cursors.left.isDown && izquierda && this.Soloizquierda) {
    if(!activado){
      this.iza.anims.play("left" + this.Mundo, true);
    }
    this.iza.setVelocityX(-160);
    derecha = true;
    this.Soloderecha = false;

  } else if (cursors.right.isDown && derecha && this.Soloderecha) {
    this.iza.setVelocityX(160);
    izquierda = true;
    this.Soloizquierda = false;
    if(!activado){
    this.iza.anims.play("right" + this.Mundo, true);}
  } else {
    this.Soloderecha = true;
    this.Soloizquierda = true;
    if(!activado){
    this.iza.anims.play("caer" + this.Mundo, true);}
    this.iza.setVelocityX(0);

  }
  if (cursors.up.isDown && this.iza.body.blocked.down) {
    this.iza.setVelocityY(-330);
  }

}
  collectMiel(player,miel){
    this.UI.collectStar(0)
    miel.destroy();
  }
  hitiza(player,enemigo){
    if (activado){
      if(this.Mundo==2){
        return
      }
      this.poofavispa = this.add.sprite(enemigo.body.position.x, enemigo.body.position.y,"mala2").setOrigin(0)
      this.poofavispa.anims.play("pof", true)
      this.sonidogota = this.scene.scene.sound.add("soundpoof");
      this.sonidogota.play()
      enemigo.destroy();
      this.UI.collectStar(800)
      return
    }
    this.UI.hitAvispa(this.Mundo)
    player.golpe();
    colision.active = false
    {player.setTint(0xff0000);this.time.delayedCall(200, () => player.clearTint())};
    if (this.UI.vida=== 0 ){
      this.physics.pause();
     
      player.setTint(0xff0000);
      Fin=true;
      player.anims.play("golpe" + this.Mundo);
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
      this.iza.anims.play ("quieto"+ this.Mundo, true);
      this.iza.setSize(47,70)
      this.iza.setY(this.final)
    if (iza.body.blocked.down) {
    this.time.delayedCall(1800, () => {
      this.game.sound.stopAll();
     
    if (this.nivel == 3){
      //this.scene.start("Win", {score:this.UI.score} );
    }
    else {
      this.scene.start("Inter1", {score:this.UI.score, nivel:this.nivel+1 }); //se pasan los puntos al inter siguiente y al nivel siguiente
    }
      })

}}}


