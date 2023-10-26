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
		c.fillRect(this.position.x, this.position.y, 100, 100)
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

class carre {
	constructor({pose, vitesse}) {
		this.pose = pose
		this.vitesse = vitesse
	}

	draw() {
		c.fillStyle = 'blue'
		c.fillRect(this.pose.x, this.pose.y, 100, 100)
	} 

	update() {
		this.draw()
		this.pose.x += this.vitesse.x 
		this.pose.y += this.vitesse.y 
	}
}
const joueur = new carre ({
	pose: {
		x: 1108,
		y: 0
	},
	vitesse: {
		x: 0,
		y: 0
	}
})

console.log(joueur)

function animate() {
	window.requestAnimationFrame(animate)
	console.log('go')
	player.update()
	joueur.update()
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

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'm':
			joueur.vitesse.x = 5
			break 
		case 'k':
			joueur.vitesse.x = -5
			break
		case 'o':
			joueur.vitesse.y = -5
			break
		case 'l':
			joueur.vitesse.y = 5
			break
	}
	console.log(event.key)
})   

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'm':
			joueur.vitesse.x = 0
			break
		case 'k':
			joueur.vitesse.x = 0
			break
		case 'o':
			joueur.vitesse.y = 0
			break
		case 'l':
			joueur.vitesse.y = 0
			break
	}
	console.log(event.key)
})