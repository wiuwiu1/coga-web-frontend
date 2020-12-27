import { Injectable } from '@angular/core';
import { OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { AbstractLevel } from './levels/AbstractLevel';
import { CafeLevel } from './levels/cafeLevel/CafeLevel';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  private currentLevel: AbstractLevel
  private renderer = new WebGLRenderer()

  constructor() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
  }

  addCafeLevel(): void {
    var aspect = window.innerWidth / window.innerHeight
    var frustumLevel = 5

    var scene = new Scene
    //todo render distance should be smaller
    var camera = new OrthographicCamera( - frustumLevel * aspect, frustumLevel * aspect, frustumLevel, - frustumLevel, 1, 1000 )

    camera.position.set( 20, 20, 20 )
    camera.lookAt( scene.position )

    this.currentLevel = new CafeLevel(scene, camera)
  }

  public runCurrentLevel = () => {
    requestAnimationFrame(this.runCurrentLevel)

    this.currentLevel.doTick()

    this.renderer.render(this.currentLevel.scene, this.currentLevel.camera)
  }

}
