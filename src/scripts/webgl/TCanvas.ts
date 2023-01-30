import * as THREE from 'three'
import { gl } from './core/WebGL'

export class TCanvas {
	constructor(private container: HTMLElement) {
		this.init()
		this.createObjects()
		gl.requestAnimationFrame(this.anime)
	}

	private init() {
		gl.setup(this.container)
		gl.camera.position.z = 3
	}

	private createObjects() {
		const geometry = new THREE.BoxGeometry()
		const material = new THREE.MeshNormalMaterial()
		const mesh = new THREE.Mesh(geometry, material)
		mesh.name = 'box'
		gl.scene.add(mesh)
	}

	// ----------------------------------
	// animation
	private anime = () => {
		const box = gl.getMesh('box')
		box.rotation.x += gl.time.delta
		box.rotation.y += gl.time.delta * 0.5

		gl.render()
	}

	// ----------------------------------
	// dispose
	dispose() {
		gl.dispose()
	}
}
