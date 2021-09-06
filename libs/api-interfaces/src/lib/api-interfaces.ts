export interface Checklist {
  id: string;
  name: string;
  taskStart: string;
  taskFinish: string;
  taskBudget: string;
  completed: boolean;
};

export const emptyChecklist = {
  id: '',
  name: '',
  taskStart: '',
  taskFinish: '',
  taskBudget: '',
  completed: false
};