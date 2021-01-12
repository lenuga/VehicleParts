import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePartComponent } from './create-part/create-part.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { PartListComponent } from './part-list/part-list.component';
import { UpdatePartComponent } from './update-part/update-part.component';

const routes: Routes = [
  { path: '', component: CreatePartComponent },
  { path: 'create-part',component: CreatePartComponent},
  { path: 'part-details', component:  PartDetailsComponent},
  { path: 'part-list', component:  PartListComponent},
  { path: 'update-part', component: UpdatePartComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
