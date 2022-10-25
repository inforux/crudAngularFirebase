import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {path:'', component: ShowComponent},
  {path:'create', component: CreateComponent},
  {path:'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
