import { Component } from '@angular/core';


@Component({
  selector: 'checklist-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= "Checklists";
  links=[
    {path: '', icon: 'home', title: 'Home'},
    {path: 'checklists', icon: 'view_list', title: 'Checklists'}
  ]
}
