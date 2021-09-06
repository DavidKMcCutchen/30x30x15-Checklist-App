import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Checklist } from "@checklist-app/api-interfaces";
import { ChecklistEnvironment, CHECKLIST_ENVIRONMENT } from "@checklist-app/environment";


@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {
  model = 'checklists';

  constructor(
    private httpClient: HttpClient,
    @Inject(CHECKLIST_ENVIRONMENT) private environment: ChecklistEnvironment
  ) {}

  all() {
    return this.httpClient.get<Checklist[]>(this.getUrl())
  };

  find(checklistId: string) {
    return this.httpClient.get<Checklist>(this.getUrlById(checklistId))
  };

  create(checklists: Checklist) {
    return this.httpClient.post<Checklist>(this.getUrl(), checklists)
  };

  update(checklists: Checklist) {
    return this.httpClient.patch<Checklist>(this.getUrlById(checklists.id), checklists)
  };

  delete({ id }: Checklist) {
    return this.httpClient.delete<Checklist>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}