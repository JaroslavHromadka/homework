import { DocumentationComponent } from './documentation/documentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'add/:id', component: UserComponent },
  { path: 'edit/:id', component: UserComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
