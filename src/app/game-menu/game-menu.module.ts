import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameMenuRoutingModule } from './game-menu-routing.module';
import { GameMenuComponent } from './game-menu.component';


@NgModule({
  declarations: [
    GameMenuComponent
  ],
  imports: [
    CommonModule,
    GameMenuRoutingModule
  ]
})
export class GameMenuModule { }
