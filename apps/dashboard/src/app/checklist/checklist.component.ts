import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistFacade } from '@checklist-app/core-state';


@Component({
  selector: 'checklist-app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  currentChecklist$ = this.checklistFacade.selectedChecklists$


  constructor(
    private checklistFacade: ChecklistFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const checklistId = this.route.snapshot.params.id;
    this.loadChecklist(checklistId);
  }

  loadChecklist(checklistId: string) {
    this.checklistFacade.selectChecklist(checklistId);
    this.checklistFacade.loadChecklist(checklistId);
  }

  navigateBack() {
    this.router.navigate(['/checklists']);
  };

}
