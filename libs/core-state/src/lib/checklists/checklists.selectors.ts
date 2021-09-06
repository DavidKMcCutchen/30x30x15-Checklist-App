import { emptyChecklist } from "@checklist-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { checklistAdapter, ChecklistState, CHECKLIST_FEATURE_KEY } from "./checklists.reducer";

export const getChecklistState = createFeatureSelector<ChecklistState>(CHECKLIST_FEATURE_KEY);

const { selectAll, selectEntities } = checklistAdapter.getSelectors();

export const getChecklistsLoaded = createSelector(
    getChecklistState,
    (state: ChecklistState) => state.loaded
);

export const getChecklistError = createSelector(
    getChecklistState,
    (state: ChecklistState) => state.error
);

export const getAllChecklists = createSelector(
    getChecklistState,
    (state: ChecklistState) => selectAll(state)
);

export const getChecklistEntities = createSelector(
    getChecklistState,
    (state: ChecklistState) => selectEntities(state)
);

export const getSelectedChecklistId = createSelector(
    getChecklistState,
    (state: ChecklistState) => state.selectedId
);

export const getSelectedChecklist = createSelector(
    getChecklistEntities,
    getSelectedChecklistId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyChecklist
);