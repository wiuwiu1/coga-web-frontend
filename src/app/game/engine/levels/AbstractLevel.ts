import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, Scene } from "three";

export abstract class AbstractLevel{

  constructor(public scene: Scene, public camera: Camera){
  }

  abstract doTick()

}
