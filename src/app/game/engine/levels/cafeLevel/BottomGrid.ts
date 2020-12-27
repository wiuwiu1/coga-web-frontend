import { Vector2, Vector3 } from "three";
import { BottomTile, tileSize } from "./BottomTile";

export class BottomGrid {

  public gridMap: Map<Vector2, BottomTile> = new Map

  constructor(private baseVektor: Vector3, tileCount: number){
    for(let x = 0; x < tileCount; x++){
      for(let z = 0; z < tileCount; z++){
        let tileVector = new Vector2(x, z)
        this.gridMap.set(tileVector, new BottomTile(new Vector3(x * tileSize + baseVektor.x,
          baseVektor.y,
          z * tileSize + baseVektor.z)))
      }
    }
  }
}
