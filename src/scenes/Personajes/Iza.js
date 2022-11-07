import Phaser from 'phaser'
const VelozY = {
	1:90, 2:100, 3:120, 4:350, 5:400, 6:400, 7:90, 8:100, 9:120
  }
export default class Iza extends  Phaser.Physics.Arcade.Sprite
{
	constructor(vida, scene, x, y, velocidadY)
	{ 
		super(scene, x, y, 'cayendo1', 0)
		scene.add.existing(this);
		scene.physics.add.existing(this);
		this.vida=vida;
		this.scene=scene
		this.setVelocityY(VelozY[velocidadY])
		this.anims.play("caer1")

		
	}
	golpe(){
		this.vida-=1;
		{this.setTint(0xff0000);this.scene.time.delayedCall(200, () => this.clearTint())};
	}
}