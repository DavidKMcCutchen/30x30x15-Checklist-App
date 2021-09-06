import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Checklist } from "@checklist-app/api-interfaces";
import { ChecklistsService } from "@checklist-app/core-data";
import * as ChecklistActions from './checklists.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class ChecklistEffects{
    loadChecklist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChecklistActions.loadChecklist),
            fetch({
                run: (action) =>
                    this.checklistsService
                        .find(action.checklistId)
                        .pipe(map((checklist: Checklist) => ChecklistActions.loadChecklistSuccess({ checklist }))),
                    onError: (action, error) => ChecklistActions.loadChecklistFailed({ error })    
            })
        ));
    loadChecklists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChecklistActions.loadChecklists),
            fetch({
                run: () =>
                    this.checklistsService
                    .all()
                    .pipe(
                        map((checklists: Checklist[]) => ChecklistActions.loadChecklistsSuccess({ checklists }))
                    ),
                onError: (action, error) => ChecklistActions.loadChecklistsFailed({ error })    
            })
        ));
        createChecklist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChecklistActions.createChecklist),
            pessimisticUpdate({
                run: (action) =>
                    this.checklistsService
                        .create(action.checklist)
                        .pipe(map((checklist: Checklist) => ChecklistActions.createChecklistSuccess({ checklist }))),
                    onError: (action, error) => ChecklistActions.createChecklistFailed({ error })    
            })
    ));

    updateChecklist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChecklistActions.updateChecklist),
            pessimisticUpdate({
                run: (action) =>
                    this.checklistsService
                        .update(action.checklist)
                        .pipe(map((checklist: Checklist) => ChecklistActions.updateChecklistSuccess({ checklist}))),
                    onError: (action, error) => ChecklistActions.updateChecklistFailed({ error })    
            })
    ));

    deleteChecklist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChecklistActions.deleteChecklist),
            pessimisticUpdate({
                run: (action) =>
                    this.checklistsService
                        .delete(action.checklist)
                        .pipe(
                            map(() => ChecklistActions.deleteChecklistSuccess({ checklist: action.checklist }))
                        ),
                    onError: (action, error) => ChecklistActions.deleteChecklistFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private checklistsService: ChecklistsService
    ) {}    
}