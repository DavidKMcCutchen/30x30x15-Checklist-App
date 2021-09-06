import { Checklist } from "@checklist-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ChecklistActions from './checklists.actions';

export const CHECKLIST_FEATURE_KEY = 'checklists';

export interface ChecklistState extends EntityState<Checklist> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface ChecklistPartialState {
    readonly [CHECKLIST_FEATURE_KEY]: ChecklistState
};

export const checklistAdapter: EntityAdapter<Checklist> = createEntityAdapter<Checklist>();

export const initialChecklistState: ChecklistState = checklistAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): ChecklistState => ({ ...state, error});

const onDispatch = (state, action): ChecklistState => ({
    ...state,
    loaded: false,
    error: null
});

const _checklistReducer = createReducer(
    initialChecklistState,
    on(
        ChecklistActions.loadChecklistFailed,
        ChecklistActions.loadChecklistsFailed,
        ChecklistActions.createChecklistFailed,
        ChecklistActions.updateChecklistFailed,
        ChecklistActions.deleteChecklistFailed,
        onFailed
    ),
    on(
        ChecklistActions.loadChecklist,
        ChecklistActions.loadChecklists,
        ChecklistActions.createChecklist,
        ChecklistActions.updateChecklist,
        ChecklistActions.deleteChecklist,
        onDispatch
    ),
    on(
        ChecklistActions.loadChecklistSuccess, (state, { checklist }) =>
        checklistAdapter.upsertOne(checklist, {...state, loaded: true})
    ),
    on(
        ChecklistActions.selectChecklist, (state, { checklistId }) => ({
            ...state,
            selectedId: checklistId
        })
    ),
    on(
        ChecklistActions.loadChecklistsSuccess, (state, { checklists }) =>
        checklistAdapter.setAll(checklists, {...state, loaded: true})
    ),
    on(
        ChecklistActions.deleteChecklistSuccess, (state, { checklist }) =>
        checklistAdapter.removeOne(checklist.id, {...state, loaded: true})
    ),
    on(
        ChecklistActions.updateChecklistSuccess, (state, { checklist }) =>
        checklistAdapter.updateOne(
            {id: checklist.id, changes: checklist},
            {...state, loaded: true}
        )
    ),
    on(
        ChecklistActions.createChecklistSuccess, (state, {checklist }) =>
        checklistAdapter.addOne(checklist, {...state, loaded: true})
    ),
)

export function checklistReducer(
    state: ChecklistState | undefined,
    action: Action
) {
    return _checklistReducer(state, action)
}