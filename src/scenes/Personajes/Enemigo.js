import Phaser from 'phaser'

export default class Enemigos extends Phaser.GameObjects.Sprite
{
	constructor(scene, x, y)
	{  
		super(scene, x, y, 'avispa2', 0)
		scene.add.existing(this);
		scene.physics.add.existing(this);
		this.scene=scene
		this.anims.play("mala2")

        
	}

	
}
