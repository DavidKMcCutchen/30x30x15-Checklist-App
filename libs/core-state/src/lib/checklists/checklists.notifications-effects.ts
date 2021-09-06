import { Injectable } from '@angular/core';
import { NotificationsService } from '@checklist-app/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as ChecklistsActions from './checklists.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChecklistsActions.createChecklistSuccess),
        tap(() => this.notificationService.notify('Create Checklist Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChecklistsActions.updateChecklistSuccess),
        tap(() => this.notificationService.notify('Update Checklist Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChecklistsActions.deleteChecklistSuccess),
        tap(() => this.notificationService.notify('Delete Checklist Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
