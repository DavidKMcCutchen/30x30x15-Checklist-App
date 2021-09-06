import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Checklist } from '@checklist-app/api-interfaces';


@Component({
  selector: 'checklist-app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent {
  @Input() checklists: Checklist[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() checklistViewed = new EventEmitter();
}
