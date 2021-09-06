import { ActionReducerMap } from "@ngrx/store";
import * as fromChecklists from './checklists/checklists.reducer';

export interface AppState {
    [fromChecklists.CHECKLIST_FEATURE_KEY]: fromChecklists.ChecklistState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromChecklists.CHECKLIST_FEATURE_KEY]: fromChecklists.checklistReducer
};