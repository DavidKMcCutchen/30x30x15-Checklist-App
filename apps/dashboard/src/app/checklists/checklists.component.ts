import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Checklist, emptyChecklist } from '@checklist-app/api-interfaces';
import { ChecklistFacade } from '@checklist-app/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'checklist-app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.scss']
})
export class ChecklistsComponent implements OnInit {
  allChecklists$: Observable<Checklist[]> = this.checklistFacade.allChecklists$;
  selectedChecklist$: Observable<Checklist> = this.checklistFacade.selectedChecklists$;

  form: FormGroup;

  constructor(
    private checklistFacade: ChecklistFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.checklistFacade.mutations$.subscribe((_) => this.resetChecklist());
  }

  ngOnInit() {
    this.initForm();
    this.checklistFacade.loadChecklists();
    this.resetChecklist()

    const checklistRouteId = this.route.snapshot.params['id'];

    if (checklistRouteId) {
      this.loadChecklist((checklistRouteId))
    }
  }

  viewChecklist(checklistId: string) {
    this.router.navigate(["checklists", checklistId])
  }

  loadChecklist(checklistId: string) {
    this.checklistFacade.selectChecklist(checklistId);
    this.checklistFacade.loadChecklist(checklistId);
  }

  selectChecklist(checklist: Checklist) {
    this.checklistFacade.selectChecklist(checklist.id)
    this.form.patchValue(checklist);
  }

  saveChecklist(checklist: Checklist) {
    this.checklistFacade.saveChecklist(checklist);
  }

  deleteChecklist(checklist: Checklist) {
    this.checklistFacade.deleteChecklist(checklist);
  }

  resetChecklist() {
    this.form.reset();
    this.selectChecklist(emptyChecklist)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      taskStart: [''],
      taskFinish: [''],
      taskBudget: [''],
      completed: ['']
    })
  }
}
