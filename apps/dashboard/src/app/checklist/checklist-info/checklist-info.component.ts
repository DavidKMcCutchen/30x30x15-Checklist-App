import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChecklistFacade } from '@checklist-app/core-state';
import { Checklist } from "@checklist-app/api-interfaces";

@Component({
  selector: 'checklist-app-checklist-info',
  templateUrl: './checklist-info.component.html',
  styleUrls: ['./checklist-info.component.scss']
})
export class ChecklistInfoComponent {

  @Input() checklist: Checklist | null;


  constructor(
    private checklistFacade: ChecklistFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/checklists']);
  };

}
