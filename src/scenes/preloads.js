import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";
export class Preloads extends Phaser.Scene {
  constructor() {
    super("Preloads");
  }

  preload() {
    getTranslations(ES_AR) 
    this.load.image("iza_logo", "assets/imagenes/titulo2.png");
    this.load.image("tutorial", "assets/imagenes/tutorialback.png");
    this.load.image("principal","assets/imagenes/principalIza1.png");
    this.load.image("mariposa","assets/imagenes/Iza.png");
    this.load.image("win","assets/imagenes/victoria.png");
    this.load.image("lost","assets/imagenes/derrota.png");
    this.load.image("izawin","assets/imagenes/izavic.png");
    this.load.image("izalost","assets/imagenes/izalos.png");
    this.load.image("miel","assets/imagenes/miel.png");
    this.load.image("avispa","assets/imagenes/avispa1.png");
    this.load.image("playbutton","assets/imagenes/jugar.png");
    this.load.image("playbutton1","assets/imagenes/jugar2.png");
    this.load.image("guiabutton","assets/imagenes/guia.png");
    this.load.image("guiabutton1","assets/imagenes/guia2.png");
    this.load.image("retrybutton","assets/imagenes/retry.png");
    this.load.image("retrybutton1","assets/imagenes/retry2.png");
    this.load.image("flechabutton","assets/imagenes/flecha.png");
    this.load.image("flechabutton1","assets/imagenes/flechaclaro.png");
    this.load.image("creditosbutton","assets/imagenes/creditos.png");
    this.load.image("creditosbutton1","assets/imagenes/creditos2.png");
    this.load.image("atrasbutton","assets/imagenes/atras.png");
    this.load.image("hit1","assets/imagenes/izahit1.png");
    this.load.image("hit2","assets/imagenes/izahit2.png");
    this.load.image("hit3","assets/imagenes/izahit3.png");
    this.load.image("quiet1","assets/imagenes/izaquieto.png");
    this.load.image("quiet2","assets/imagenes/izaquieto2.png");
    this.load.image("quiet3","assets/imagenes/izaquieto3.png");
    this.load.image("inter1","assets/imagenes/inter1.png");
    this.load.image("inter2","assets/imagenes/inter2.png");
    this.load.image("inter3","assets/imagenes/inter3.png");
    this.load.image("inter4","assets/imagenes/inter4.png");
    this.load.image("inter5","assets/imagenes/inter5.png");
    this.load.image("inter6","assets/imagenes/inter6.png");
    this.load.image("inter7","assets/imagenes/inter7.png");
    this.load.image("inter8","assets/imagenes/inter8.png");
    this.load.image("inter9","assets/imagenes/inter9.png");
    this.load.image("click","assets/imagenes/click.png");
    this.load.image("atrasbutton1","assets/imagenes/atras2.png");
    this.load.image("avispasola","assets/imagenes/avispa1.png");
    this.load.image("black","assets/imagenes/negro.png");
    this.load.image("vidas","assets/imagenes/vidastext.png");
    this.load.image("mielrecolectada","assets/imagenes/mielrecolectada.png")
    this.load.image("ventana","assets/imagenes/ventana.png")
    this.load.image("ventanamiel","assets/imagenes/ventanamiel.png")
    this.load.image("tutorial", "assets/imagenes/EjTuto.png");
    this.load.image("invisible", "assets/tilemaps/invisible.png");
    this.load.image("primero", "assets/imagenes/izaquietoprimero.png");
    this.load.image("tutoalas1", "assets/imagenes/tutoalasescudo.png");
    this.load.image("tutoalas2", "assets/imagenes/tutoalasataque.png");
    this.load.image("pixel", "assets/imagenes/bruh.png");
    this.load.image("alaon1", "assets/imagenes/alanormal.png");
    this.load.image("alaon2", "assets/imagenes/alacristal.png");
    this.load.image("alaon3", "assets/imagenes/alaverde.png");
    this.load.image("alaoff1", "assets/imagenes/alanormaloff.png");
    this.load.image("alaoff2", "assets/imagenes/alacristaloff.png");
    this.load.image("alaoff3", "assets/imagenes/alaverdeoff.png");
    this.load.image("botonnuevo", "assets/imagenes/botonvacio.png")
    this.load.image("botonnuevo2", "assets/imagenes/botonvacio2.png")
    this.load.image("help", "assets/imagenes/aiuda.png")
    this.load.image("ventanasola", "assets/imagenes/fondoventana.png")
    this.load.image("back1", "assets/imagenes/volvermenu1.png")
    this.load.image("back2", "assets/imagenes/volvermenu2.png")
    this.load.image("flechas", "assets/imagenes/flechas.png")
    this.load.image("abejas", "assets/imagenes/abejas.png")
    this.load.image("fondotuto", "assets/imagenes/fondotuto.png")
    this.load.image("escudosolo", "assets/imagenes/escudosolo.png")
    this.load.image("alacristaltuto", "assets/imagenes/alacristaltuto.png")
    this.load.image("alaverdetuto", "assets/imagenes/alaverdetuto.png")
    this.load.image("esola", "assets/imagenes/esola.png")
    this.load.image("tornadosolo", "assets/imagenes/tornadosolo.png")
    this.load.image("banderaarg", "assets/imagenes/arg.png")
    this.load.image("banderaarg1", "assets/imagenes/arg1.png")
    this.load.image("banderaus", "assets/imagenes/us.png")
    this.load.image("banderaus1", "assets/imagenes/us1.png")
    this.load.image("banderabr", "assets/imagenes/br.png")
    this.load.image("banderabr1", "assets/imagenes/br1.png")
    this.load.image("botoncorazon", "assets/imagenes/corazon.png")
    this.load.image("botoncorazon1", "assets/imagenes/corazonclaro.png")
    this.load.audio("gota", "assets/sounds/gota.mp3");
    this.load.audio("hit", "assets/sounds/hit.mp3");
    this.load.audio("musica1", "assets/sounds/musicalvl1.mp3");      
    this.load.audio("musica2", "assets/sounds/musicalvl2.mp3");
    this.load.audio("musica3", "assets/sounds/musicalvl3.mp3");
    this.load.audio("mainmusic", "assets/sounds/mainmenumusic.mp3");
    this.load.audio("victory", "assets/sounds/victoriasound.mp3");
    this.load.audio("soundescudo", "assets/sounds/sonidoescudo.mp3");
    this.load.audio("soundpoof", "assets/sounds/sonidopoof.mp3");
    this.load.audio("soundspin", "assets/sounds/sonidospin.mp3");
    this.load.audio("fail", "assets/sounds/fail.mp3");
    this.load.audio("lose", "assets/sounds/lose.mp3"); 
    this.load.spritesheet("avispa1", "assets/imagenes/spriteavispa.png", {
      frameWidth: 45,
      frameHeight: 45,
    });
    this.load.spritesheet("avispa3", "assets/imagenes/spriteavispa3.png", {
      frameWidth: 57,
      frameHeight: 52,
    });
    this.load.spritesheet("avispa2", "assets/imagenes/spriteavispa2.png", {
      frameWidth: 45,
      frameHeight: 45,
    });
    this.load.spritesheet("cayendo1", "assets/imagenes/sprite1.png", {
      frameWidth: 86,
      frameHeight: 65,
    });
    this.load.spritesheet("moverse1", "assets/imagenes/sprite2.png", {
      frameWidth: 86,
      frameHeight: 65,
    });
    this.load.tilemapTiledJSON("map1", "assets/tilemaps/mapaideaiza.json");
    this.load.image("tilesBelow1", "assets/tilemaps/fondo1.png");
    this.load.image("tilesPlatform1", "assets/tilemaps/plataforma1.png");
    this.load.tilemapTiledJSON("map2", "assets/tilemaps/mapaideaiza2.json");
    this.load.image("tilesBelow2", "assets/tilemaps/fondo2.png");
    this.load.image("tilesPlatform2", "assets/tilemaps/plataforma2.png");
    this.load.tilemapTiledJSON("map3", "assets/tilemaps/mapaideaiza3.json");
    this.load.image("tilesBelow3", "assets/tilemaps/fondo3.png");
    this.load.image("tilesPlatform3", "assets/tilemaps/plataforma3.png");
  }

  create() {
    this.anims.create({
      key: "left1",
      frames: this.anims.generateFrameNumbers("moverse1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "caer1",
      frames: this.anims.generateFrameNumbers("cayendo1", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right1",
      frames: this.anims.generateFrameNumbers("moverse1", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "mala1",
      frames: this.anims.generateFrameNumbers("avispa1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "mala2",
      frames: this.anims.generateFrameNumbers("avispa2", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "mala3",
      frames: this.anims.generateFrameNumbers("avispa3", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });  
    this.anims.create({
      key: "quieto1",
      frames: [{ key: "quiet1", frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "quieto2",
      frames: [{ key: "quiet2", frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "quieto3",
      frames: [{ key: "quiet3", frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "golpe1",
      frames: [{ key: "hit1", frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "golpe2",
      frames: [{ key: "hit2", frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "golpe3",
      frames: [{ key: "hit3", frame: 0 }],
      frameRate: 20,
    });
    this.scene.start("Black");
  }
}