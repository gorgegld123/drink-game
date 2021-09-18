import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardGameRoutingModule } from './card-game-routing.module';
import { CardGameComponent } from './card-game.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from '../shared/component/topbar/topbar.component';


@NgModule({
  declarations: [
    CardGameComponent,
    ModalAddComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    CardGameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CardGameModule { }
