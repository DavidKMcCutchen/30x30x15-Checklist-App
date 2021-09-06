import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHECKLIST_ENVIRONMENT } from './checklists.token';
import { ChecklistEnvironment } from "./checklists.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: ChecklistEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CHECKLIST_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
