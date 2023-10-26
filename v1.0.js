const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1208
canvas.height = 570

c.fillRect(0,0,canvas.width ,canvas.height)

const gravity = 0.2

class Sprite {
	constructor({position, velocity}) {
		this.position = position
		this.velocity = velocity
		this.height = 50
		this.width = 50
	}

	draw() {
		c.fillStyle = 'red'
		c.fillRect(this.position.x, this.position.y, 50, 50)
	} 

	update() {
		this.draw()
		
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y

		if (this.position.y + this.height + this.velocity.y >= canvas.height) 
		{this.velocity.y = 0}
			else this.velocity.y += gravity
	}
}
const player = new Sprite ({
	position: {
		x: 0,
		y: 0
	},
	velocity: {
		x: 0,
		y: 0
	}
})

class Enemy {
	constructor({position, velocity}) {
		this.position = position
		this.velocity = velocity
		this.height = 50
		this.width = 50
	}

	draw() {
		c.fillStyle = 'blue'
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	} 

	update() {
		this.draw()
		
		this.position.x += this.velocity.x 
		this.position.y += this.velocity.y 

		if (this.position.y + this.height + this.velocity.y >= canvas.height) {
			this.velocity.y = 0}
		else this.velocity.y += gravity
	}
}
const enemy = new Enemy ({
	position: {
		x: 1158,
		y: 0
	},
	velocity: {
		x: 0,
		y: 0
	}
})

console.log(player)

function animate() {
	window.requestAnimationFrame(animate)
	c.fillStyle = 'black'
	c.fillRect(0, 0, canvas.width, canvas.height)
	player.update()
	enemy.update()
}

animate()

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'd':
			player.velocity.x = 10
			break
		case 'q':
			player.velocity.x = -10
			break
		case 'z':
			player.velocity.y = -10
			break
		case 'm':
			enemy.velocity.x = 10
			break
		case 'k':
			enemy.velocity.x = -10
			break
		case 'o':
			enemy.velocity.y = -10
			break
		case 's':
			player.velocity.y = 10
			break
		case 'l':
			enemy.velocity.y = 10
			break
	}
	console.log(event.key)
})

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'd':
			player.velocity.x = 0
			break
		case 'q':
			player.velocity.x = 0
			break
		case 'z':
			player.velocity.y = 0
			break
		case 'm':
			enemy.velocity.x = 0
			break
		case 'k':
			enemy.velocity.x = 0
			break
		case 'o':
			enemy.velocity.y = 0
			break
		case 's':
			player.velocity.y = 0
			break
		case 'l':
			enemy.velocity.y = 0
			break
	}
	console.log(event.key)
})

