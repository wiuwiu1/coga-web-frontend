import { BoxBufferGeometry, BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three";

export const tileSize = 1

export class BottomTile{

  private geometry = new BoxBufferGeometry(tileSize, tileSize, tileSize)
  private material = new MeshBasicMaterial({color: 0x00ff00})
  public tile = new Mesh(this.geometry, this.material)

  constructor(private positionVector: Vector3){
    this.tile.position.set(positionVector.x, positionVector.y, positionVector.z)
  }
}
