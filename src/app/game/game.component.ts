import { Component, OnInit } from '@angular/core';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { EngineService } from './engine/engine.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  constructor(private engineService: EngineService) {
    engineService.addCafeLevel()
    engineService.runCurrentLevel()
   }


  ngOnInit(): void {
  }

}
