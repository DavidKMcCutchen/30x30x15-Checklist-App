import { createAction, props } from "@ngrx/store";
import {  Checklist } from "@checklist-app/api-interfaces";

// Select Entity

export const selectChecklist = createAction(
    '[CHECKLIST] Select Checklist',
    props<{ checklistId: string }>()
);

// Load all Entities

export const loadChecklists = createAction(
    '[CHECKLIST] Load Checklists'
);

export const loadChecklistsSuccess = createAction(
    '[CHECKLIST] Load Checklists Success',
    props<{ checklists: Checklist[]}>()
);

export const loadChecklistsFailed = createAction(
    '[CHECKLIST] Load Checklists Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadChecklist = createAction(
    '[CHECKLIST] Load Checklist',
    props<{ checklistId: string}>()
);

export const loadChecklistSuccess = createAction(
    '[CHECKLIST] Load Checklist Success',
    props<{ checklist: Checklist}>()
);

export const loadChecklistFailed = createAction(
    '[CHECKLIST] Load Checklist Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createChecklist = createAction(
    '[CHECKLIST] Create Checklist',
    props<{ checklist: Checklist}>()
);

export const createChecklistSuccess = createAction(
    '[CHECKLIST] Create Checklist Success',
    props<{ checklist: Checklist}>()
);

export const createChecklistFailed = createAction(
    '[CHECKLIST] Create Checklist Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateChecklist = createAction(
    '[CHECKLIST] Update Checklist',
    props<{ checklist: Checklist}>()
);

export const updateChecklistSuccess = createAction(
    '[CHECKLIST] Update Checklist Success',
    props<{ checklist: Checklist}>()
);

export const updateChecklistFailed = createAction(
    '[CHECKLIST] Create Checklist Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteChecklist = createAction(
    '[CHECKLIST] Delete Checklist',
    props<{ checklist: Checklist}>()
);

export const deleteChecklistSuccess = createAction(
    '[CHECKLIST] Delete Checklist Success',
    props<{ checklist: Checklist}>()
);

export const deleteChecklistFailed = createAction(
    '[CHECKLIST] Create Checklist Failed',
    props<{ error: any}>()
);