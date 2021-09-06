import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChecklistsComponent } from './checklists/checklists.component';
import { ChecklistDetailsComponent } from './checklists/checklist-details/checklist-details.component';
import { ChecklistListComponent } from './checklists/checklist-list/checklist-list.component';
import { MaterialModule } from "@checklist-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@checklist-app/core-data";
import { CoreStateModule } from "@checklist-app/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@checklist-app/environment';
import { UiLoginModule } from '@checklist-app/ui-login';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistInfoComponent } from './checklist/checklist-info/checklist-info.component';

@NgModule({
  declarations: [AppComponent, ChecklistsComponent, ChecklistDetailsComponent, ChecklistListComponent, ChecklistInfoComponent, ChecklistComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}