const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1208
canvas.height = 570

class Spr {
	constructor({po, ve}) {
		this.po = po
		this.ve = ve
	}

	draw() {
		c.fillStyle = 'red'
		c.fillRect(this.po.x, this.po.y, 150, 150)
	} 

	update() {
		this.draw()
		
		this.po.x += this.ve.x
		this.po.y += this.ve.y

		if (this.po.x <= 1058 ) 
		{this.ve.x = 0}
			else this.po.x = 1058

		if (this.po.x >= 0)
		{this.ve.x = 0}
			else this.po.x = 0
			
		if (this.po.y <= 420) 
		{this.ve.y = 0}	
			else this.po.y = 420

		if (this.po.y >= 0)
		{this.ve.y = 0}
			else this.po.y = 0
	}
}
const plo = new Spr ({
	po: {
		x: 0,
		y: 0
	},
	ve: {
		x: 0,
		y: 0
	}
})

console.log(plo)

function animate() {
	window.requestAnimationFrame(animate)
	c.fillStyle = 'black'
	c.fillRect(0, 0, 1208, 570)
	plo.update()
}
animate()

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'd':
			plo.ve.x = 5
			break 
		case 'q':
			plo.ve.x = -5
			break
		case 'z':
			plo.ve.y = -5
			break
		case 's':
			plo.ve.y = 5
			break
	}
})   

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'd':
			plo.ve.x = 0
		case 'q':
			plo.ve.x = 0
		case 'z':
			plo.ve.y = 0
		case 's':
			plo.ve.y = 0
	}
	console.log(event.key)
})
