import Phaser from 'phaser'

export default class Recolectable extends Phaser.GameObjects.Sprite
{
	constructor(scene, puntos, x, y)
	{  
		super(scene, x, y, 'miel', 0)
		scene.add.existing(this);
		scene.physics.add.existing(this);
		this.puntos=puntos;
		this.scene=scene
	}
}