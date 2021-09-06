import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { ChecklistsComponent } from './checklists/checklists.component';
import { LoginComponent, WildComponent } from "@checklist-app/ui-login";
import { ChecklistComponent } from './checklist/checklist.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'checklists', component: ChecklistsComponent},
  {path: 'checklists/:id', component: ChecklistComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }