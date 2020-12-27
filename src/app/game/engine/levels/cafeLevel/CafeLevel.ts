import { BoxGeometry, Mesh, MeshBasicMaterial, OrthographicCamera, Scene, Vector3 } from "three";
import { AbstractLevel } from "../AbstractLevel";
import { BottomGrid } from "./BottomGrid";
import { BottomTile } from "./BottomTile";

export class CafeLevel extends AbstractLevel{

  private bottomGrid = new BottomGrid(new Vector3(0,0,0), 5)

  constructor(scene: Scene, camera: OrthographicCamera){
    super(scene, camera)

    this.bottomGrid.gridMap.forEach((bottomTile: BottomTile) => {
      scene.add(bottomTile.tile)
    })
  }

  doTick() {
  }
}
