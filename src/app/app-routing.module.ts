import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game-menu',
    pathMatch: 'full',
  },
  { path: 'game-menu', loadChildren: () => import('./game-menu/game-menu.module').then(m => m.GameMenuModule) },
  { path: 'card-game', loadChildren: () => import('./card-game/card-game.module').then(m => m.CardGameModule) }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
