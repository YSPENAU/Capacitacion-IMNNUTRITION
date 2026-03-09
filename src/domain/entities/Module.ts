export type ModuleStatus = 'LOCKED' | 'ACTIVE' | 'COMPLETED';

export interface Module {
  id: number;
  title: string;
  description: string;
  image: string;
  status: ModuleStatus;
}
