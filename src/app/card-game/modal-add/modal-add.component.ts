import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MINI_GAME } from 'src/app/shared/constant/minigame.data';
import { commandList } from 'src/app/shared/model/model';
import { LocalDataService } from 'src/app/shared/service/local-data.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  addCommandForm: FormGroup;
  commandList = MINI_GAME;
  localData : any
  constructor(public fb: FormBuilder ,private LocalDataService:LocalDataService) {
    this.addCommandForm = this.fb.group({
      id: '',
      detail: '',
      rate: '',
    })
    this.localData = this.LocalDataService.get();
  }

  ngOnInit(): void {

  }


  onSubmit() {
    let id = Math.floor(Math.random() * 100)
    this.addCommandForm.patchValue({ id: id })
    const formData = this.addCommandForm.value;
    this.commandList.push(formData)  

    this.LocalDataService.set('WhatShouldIdoGame',this.commandList)
    
  }

}
