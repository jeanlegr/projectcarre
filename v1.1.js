const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1208
canvas.height = 570

c.fillRect(0,0,canvas.width ,canvas.height)


class Sprite {
	constructor({position, velocity}) {
		this.position = position
		this.velocity = velocity
	}

	draw() {
		c.fillStyle = 'red'
		c.fillRect(this.position.x, this.position.y, 150, 150)
	} 

	update() {
		this.draw()
		this.position.x += this.velocity.x 
		this.position.y += this.velocity.y 
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

console.log(player)

function animate() {
	window.requestAnimationFrame(animate)
	player.update()
}

animate()

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'd':
			player.velocity.x = 5
			break 
		case 'q':
			player.velocity.x = -5
			break
		case 'z':
			player.velocity.y = -5
			break
		case 's':
			player.velocity.y = 5
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
		case 's':
			player.velocity.y = 0
			break
	}
	console.log(event.key)
})
