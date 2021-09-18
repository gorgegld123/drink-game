import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { MINI_GAME } from '../shared/constant/minigame.data';
import { LocalDataService } from '../shared/service/local-data.service';
import { ModalAddComponent } from './modal-add/modal-add.component';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CardGameComponent implements OnInit {

  localData : any
  flipStatus = false;
  commandList = MINI_GAME;

  constructor(private modalService: NgbModal , private LocalDataService:LocalDataService) { 
    this.localData = this.LocalDataService.get();
  }

  ngOnInit(): void {
    this.LocalDataService.set('WhatShouldIdoGame',this.commandList)
  }



  randomGame () {
    this.flipStatus = true
    const result = this.localData.WhatShouldIdoGame[Math.floor(Math.random() * this.localData.WhatShouldIdoGame.length) || 0]
    Swal.fire({
      title: result.detail,
      icon : 'info',
      text: result.rate,
      confirmButtonText: 'ปิด'
    })
  }

  open(content: any) {
    this.modalService.open(content , {
      size : 'lg',
      scrollable: true,
      centered : true
    });
  }
}
