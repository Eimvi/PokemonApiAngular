import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'home/:pag', component: BodyComponent},
  {path: 'card-info/:pokemon', component: CardInfoComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
