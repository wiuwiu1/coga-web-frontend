import { Component, OnInit } from '@angular/core';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private scene = new Scene()
  private camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  private renderer = new WebGLRenderer()

  private geometry = new BoxGeometry
  private material = new MeshBasicMaterial({color: 0x00ff00})
  private cube = new Mesh(this.geometry, this.material)


  constructor() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)

    this.scene.add(this.cube)

    this.camera.position.z = 5

    this.animate()
   }

  private animate = () => {
    requestAnimationFrame(this.animate)

    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderer.render(this.scene, this.camera)
  }

  ngOnInit(): void {
  }

}
