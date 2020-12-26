import { BoxGeometry, Mesh, MeshBasicMaterial, OrthographicCamera, Scene } from "three";
import { AbstractLevel } from "./AbstractLevel";

export class CafeLevel extends AbstractLevel{

  private geometry = new BoxGeometry
  private material = new MeshBasicMaterial({color: 0x00ff00})
  private cube = new Mesh(this.geometry, this.material)

  constructor(scene: Scene, camera: OrthographicCamera){
    super(scene, camera)

    this.scene.add(this.cube)
  }

  doTick() {
  }
}
