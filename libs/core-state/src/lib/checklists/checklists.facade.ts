import { Injectable } from "@angular/core";
import { Checklist } from "@checklist-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as ChecklistActions from './checklists.actions';
import * as ChecklistSelectors from './checklists.selectors';
import * as fromChecklists from './checklists.reducer';


@Injectable({
    providedIn: 'root'
})

export class ChecklistFacade {
    allChecklists$ = this.store.pipe(
        map((state) => ChecklistSelectors.getAllChecklists(state)),
    )
    selectedChecklists$ = this.store.pipe(select(ChecklistSelectors.getSelectedChecklist));
    loaded$ = this.store.pipe(select(ChecklistSelectors.getChecklistsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === ChecklistActions.createChecklist({} as any) .type ||
        action.type === ChecklistActions.updateChecklist({} as any) .type ||
        action.type === ChecklistActions.deleteChecklist({} as any) .type 
        ))

        selectChecklist(checklistId: string) {
            this.dispatch(ChecklistActions.selectChecklist({ checklistId }));
        };

        loadChecklists() {
            this.dispatch(ChecklistActions.loadChecklists())
        };

        loadChecklist(checklistId: string) {
            this.dispatch(ChecklistActions.loadChecklist({ checklistId }))
        };

        saveChecklist(checklist: Checklist) {
            checklist.id ? this.updateChecklist(checklist) : this.createChecklist(checklist)
        };

        createChecklist(checklist: Checklist) {
            this.dispatch(ChecklistActions.createChecklist({ checklist }))
        };

        updateChecklist(checklist: Checklist) {
            this.dispatch(ChecklistActions.updateChecklist({ checklist }))
        };

        deleteChecklist(checklist: Checklist) {
            this.dispatch(ChecklistActions.deleteChecklist({ checklist }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromChecklists.ChecklistPartialState>,
            private actions$: ActionsSubject
        ) {}
}